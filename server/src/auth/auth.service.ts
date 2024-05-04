import * as bcrypt from 'bcrypt';
import mongoose, { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { User } from '../user/entities/user.entity';
import { Role } from '../role/entities/role.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Role.name) private roleModel: Model<Role>,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }

  private async getTokenExp(token: string): Promise<number> {
    const verify = await this.jwtService.verifyAsync(token);
    return verify.exp;
  }

  private async generateToken(idu: mongoose.Schema.Types.ObjectId) {
    const access_token = await this.jwtService.signAsync(
      { idu },
      { expiresIn: process.env.EXP_IN_ACCESS_TOKEN },
    );

    const refresh_token = await this.jwtService.signAsync(
      { idu },
      { expiresIn: process.env.EXP_IN_REFRESH_TOKEN },
    );

    await this.userModel.findByIdAndUpdate(idu, { refresh_token });

    const access_token_exp = await this.getTokenExp(access_token);

    return {
      access_token,
      refresh_token,
      access_token_exp,
    };
  }

  async register(registerAuthDto: RegisterAuthDto): Promise<User> {
    const { email, password } = registerAuthDto;

    const existingEmail = await this.userModel.findOne({ email });
    if (existingEmail) throw new ConflictException('Email đã tồn tại');

    const roles = await this.roleModel.find({ default: true });
    const roles_list = roles.map((role) => role._id);

    // const abilities = await this.abilityModel.find({ default: true });
    // const abilities_list = abilities.map((ability) => ability._id);

    const hashPassword = await this.hashPassword(password);

    const resultRegister = new this.userModel({
      ...registerAuthDto,
      password: hashPassword,
      roles_list,
      // abilities_list,
    });

    resultRegister.save();

    if (!resultRegister) throw new BadRequestException('Đăng ký thất bại');

    return resultRegister;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;

    const user = await this.userModel.findOne({ email });
    if (!user)
      throw new UnauthorizedException(
        'Tài khoản hoặc mật khẩu không chính xác',
      );

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched)
      throw new UnauthorizedException(
        'Tài khoản hoặc mật khẩu không chính xác',
      );

    const { _id } = user;

    const token = await this.generateToken(_id);

    return { _id, token };
  }

  async refreshToken(refresh_token: string) {
    try {
      const verify = await this.jwtService.verifyAsync(refresh_token);

      const checkExistToken = await this.userModel.findOne({
        _id: verify.idu,
        refresh_token,
      });

      if (!checkExistToken) throw new BadRequestException('Token không hợp lệ');

      const newToken = await this.generateToken(checkExistToken._id);

      return newToken;
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new ForbiddenException('Phiên đăng nhập đã hết hạn');
      } else {
        throw new BadRequestException('Token không hợp lệ');
      }
    }
  }
}

import { Model } from 'mongoose';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { User } from '../user/entities/user.entity';
import { IS_PUBLIC } from '../common/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(
      IS_PUBLIC,
      context.getHandler(),
    );

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();

    const access_token = request.headers.authorization?.split(' ')[1];

    if (!access_token) throw new ForbiddenException('Bạn chưa đăng nhập');

    try {
      const decoded = await this.jwtService.verify(access_token);

      const user = await this.userModel
        .findById(decoded.idu)
        .populate('roles_list')
        .select('-password -refresh_token');

      if (!user) return false;

      request.user = user;

      return true;
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new ForbiddenException('Token hết hạn');
      } else {
        throw new BadRequestException('Token không hợp lệ');
      }
    }
  }
}

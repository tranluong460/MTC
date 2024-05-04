import { Request } from 'express';
import { Body, Controller, Post, Req } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { IsPublic } from '../common/public.decorator';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.Auth })
  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return await this.authService.login(loginAuthDto);
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.Auth })
  @Post('register')
  async register(@Body() registerAuthDto: RegisterAuthDto) {
    await this.authService.register(registerAuthDto);

    return {
      message: 'Đăng ký thành công',
      success: 'Created',
      statusCode: 201,
    };
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.Auth })
  @Post('refresh-token')
  refreshToken(@Req() req: Request) {
    const refresh_token = req.headers.authorization?.split(' ')[1];

    return this.authService.refreshToken(refresh_token);
  }
}

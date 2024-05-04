import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './common/public.decorator';
import { CheckAbilities } from './common/casl-ability.decorator';
import { Action, Subjects } from './ability/casl-ability.factory';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.Auth })
  @Get()
  base(): string {
    return this.appService.base();
  }
}

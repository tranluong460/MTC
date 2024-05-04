import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role, RoleSchema } from './entities/role.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}

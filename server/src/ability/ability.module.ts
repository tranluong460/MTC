import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AbilityService } from './ability.service';
import { AbilityController } from './ability.controller';
import { Ability, AbilitySchema } from './entities/ability.entity';
import { CaslAbilityFactory } from './casl-ability.factory';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ability.name, schema: AbilitySchema }]),
  ],
  controllers: [AbilityController],
  providers: [AbilityService, CaslAbilityFactory],
  exports: [CaslAbilityFactory],
})
export class AbilityModule {}

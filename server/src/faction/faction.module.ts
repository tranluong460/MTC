import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FactionService } from './faction.service';
import { FactionController } from './faction.controller';
import { Faction, FactionSchema } from './entities/faction.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Faction.name, schema: FactionSchema }]),
  ],
  controllers: [FactionController],
  providers: [FactionService],
})
export class FactionModule {}

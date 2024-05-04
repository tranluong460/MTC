import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WorldService } from './world.service';
import { WorldController } from './world.controller';
import { World, WorldSchema } from './entities/world.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: World.name, schema: WorldSchema }]),
  ],
  controllers: [WorldController],
  providers: [WorldService],
})
export class WorldModule {}

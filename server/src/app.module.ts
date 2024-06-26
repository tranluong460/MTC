import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AbilityModule } from './ability/ability.module';
import { AuthGuard } from './auth/auth.guard';
import { CaslAbilityGuard } from './ability/casl-ability.guard';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { FactionModule } from './faction/faction.module';
import { WorldModule } from './world/world.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
    }),
    RoleModule,
    UserModule,
    AuthModule,
    AbilityModule,
    AuthorModule,
    CategoryModule,
    FactionModule,
    WorldModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: CaslAbilityGuard },
  ],
})
export class AppModule {}

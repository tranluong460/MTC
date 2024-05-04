import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  });

  app.setGlobalPrefix(process.env.BASE_URL);

  app.useGlobalPipes(new ValidationPipe());

  app.getHttpAdapter().get('/', (req, res) => {
    res.redirect(process.env.BASE_URL);
  });

  await app.listen(process.env.PORT);
}
bootstrap();

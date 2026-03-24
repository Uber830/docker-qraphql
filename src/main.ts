import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const NameApp = process.env.NAME_APP || '';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
    })
  );

  await app.listen(3000, '0.0.0.0');
  
  console.log(`Aplicación ${NameApp} corriendo en puerto: ${3000}`);
}
bootstrap();

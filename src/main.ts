import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder , SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('xboxAH(Jacaré Enterprises)')
  .setDescription('aplicação para gestão do xbox dos guri')
  .setVersion('1.0.0')
  .addTag('status')
  .addTag('jogos')
  .addTag('genero')
  .build();



  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api',app, document)

  await app.listen(3333);
}
bootstrap();
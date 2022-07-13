import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TasksModule } from './tasks/tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('Task todo app')
    .setDescription('A documentation for task')
    .setVersion('1.0')
    .build();
  const apppDocument = SwaggerModule.createDocument(app, options, {
    include: [TasksModule],
  });
  SwaggerModule.setup('api', app, apppDocument);
  await app.listen(3000);
}
bootstrap();

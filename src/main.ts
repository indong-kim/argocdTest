import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('binary CD environment test')
    .setDescription('eks test')
    .setVersion('0.1')
    .addTag('eks')
    .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  console.log('application load');
  console.log('application load2');
  console.log(`env value = ${process.env.TEST}`);
  console.log(`security env value = ${process.env.SECURITY}`);

  await app.listen(3000);
}
bootstrap();

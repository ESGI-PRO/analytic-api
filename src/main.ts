import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './services/config/config.service';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log("portttt", new ConfigService())
  const config = new DocumentBuilder()
  .setTitle('dashboard example')
  .setDescription('The dashboard API description')
  .setVersion('1.0')
  .addTag('dashboard')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(new ConfigService().get('port'));
}
console.log("ConfigService().get('port')", new ConfigService().get('port'))
console.log("mongoDnsDb", new ConfigService().get('mongoDnsDb'))
console.log("process.env.ANALYTIC_SERVICE_PORT", process.env.ANALYTICS_SERVICE_PORT)

bootstrap();

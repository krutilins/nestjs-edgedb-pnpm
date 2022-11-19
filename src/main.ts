import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const bootstrapLogger = new Logger("Bootstrap Logger");
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    bootstrapLogger.log("Listening on port http://localhost:3000");
  });
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 글로벌 파이프 적용
  // 전역으로 적용했기에 @ValidationPipe 컨트롤러에 붙일 필요없음
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의된 속성만 허용
      forbidNonWhitelisted: true, // DTO에 없는 속성 접근 시 오류 반환
      transform: true, // 요청 데이터를 DTO 인스턴스로 변환
    }),
  );

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

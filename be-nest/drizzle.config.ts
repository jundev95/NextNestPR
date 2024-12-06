// drizzle.config.ts
// drizzle kit에서 사용하는 설정 : 마이그레이션 등에 사용

import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
// import path from 'path';
import ENV from 'src/common/util/env';

export default defineConfig({
  out: './drizzle', // 마이그레이션 파일이 생성될 디렉토리
  schema: './src/db/schema/', // 스키마 파일 폴더 지정
  dialect: 'mysql',
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
});

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getPostgresConfig } from './config/getPostgresConfig';
import postgresConfig from './config/postgres.config';
import globalConfig from './config/global.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(getPostgresConfig()),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig, globalConfig],
      ignoreEnvFile: false,
      envFilePath: ['config/.env'],
      cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

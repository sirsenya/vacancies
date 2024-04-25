import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacanciesModule } from './vacancies/vacancies.module';

@Module({
  imports: [VacanciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { HomeAdmController } from './home_adm.controller';
import { HomeAdmService } from './home_adm.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomeAdmController],
  providers: [HomeAdmService],
})
export class HomeAdmModule {}
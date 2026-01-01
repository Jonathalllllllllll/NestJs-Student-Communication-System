import { Module } from '@nestjs/common';
import { HomeEstudanteController } from './home_estudante.controller';
import { HomeEstudanteService } from './home_estudante.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomeEstudanteController],
  providers: [HomeEstudanteService],
})
export class HomeEstudanteModule {}
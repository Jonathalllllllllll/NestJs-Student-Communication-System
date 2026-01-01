import { Module } from '@nestjs/common';
import { HomeAdmCadastroController } from './home_adm_cadastro.controller';
import { HomeAdmCadastroService } from './home_adm_cadastro.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomeAdmCadastroController],
  providers: [HomeAdmCadastroService],
})
export class HomeAdmCadastroModule {}
import { Module } from '@nestjs/common';
import { CadastroEstudanteService } from './cadastro_estudante.service';
import { DatabaseModule } from '../database/database.module';
import { CadastroEstudanteController } from './cadastro_estudante.controller';

@Module({
  imports: [DatabaseModule],
  providers: [CadastroEstudanteService],
  controllers: [CadastroEstudanteController]
})
export class CadastroEstudanteModule {}

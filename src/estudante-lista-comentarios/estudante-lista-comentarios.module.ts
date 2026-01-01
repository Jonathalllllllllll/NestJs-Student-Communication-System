import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EstudanteListaComentariosController } from './estudante-lista-comentarios.controller';
import { EstudanteListaComentariosService } from './estudante-lista-comentarios.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EstudanteListaComentariosController],
  providers: [EstudanteListaComentariosService],
})
export class EstudanteListaComentariosModule {}
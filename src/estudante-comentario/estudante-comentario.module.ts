// estudante-comentario/estudante-comentario.module.ts
import { Module } from '@nestjs/common';
import { EstudanteComentarioController } from './estudante-comentario.controller';
import { EstudanteComentarioService } from './estudante-comentario.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EstudanteComentarioController],
  providers: [EstudanteComentarioService],
})
export class EstudanteComentarioModule {}
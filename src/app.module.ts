import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HomeEstudanteModule } from './home_estudante/home_estudante.module';
import { AuthModule } from './auth/auth.module';
import { CadastroEstudanteModule } from './cadastro_estudante/cadastro_estudante.module';
import { EstudanteComentarioModule } from './estudante-comentario/estudante-comentario.module';
import { EstudanteListaComentariosModule } from './estudante-lista-comentarios/estudante-lista-comentarios.module';
import { HomeAdmModule } from './home_adm/home_adm.module';
import { HomeAdmCadastroModule } from './home_adm_cadastro/home_adm_cadastro.module';
import { EstudanteForumModule } from './estudante_forum/estudante_forum.module';
import { AuthAdmModule } from './auth_adm/auth_adm.module';

@Module({
  imports: [DatabaseModule, HomeEstudanteModule, AuthModule, CadastroEstudanteModule, EstudanteComentarioModule, EstudanteListaComentariosModule, HomeAdmModule, HomeAdmCadastroModule, EstudanteForumModule, AuthAdmModule],
})
export class AppModule {}
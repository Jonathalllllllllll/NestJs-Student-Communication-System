import {
    Controller,
    Get,
    Param,
    Session,
    Render,
    Redirect,
  } from '@nestjs/common';
  import { EstudanteForumService } from './estudante_forum.service';
  
  @Controller('estudante/forum')
  export class EstudanteForumController {
    constructor(private readonly service: EstudanteForumService) {}
  
    // 👉 GET /estudante/forum/front_end/:id_comentario_E
    @Get('front_end/:id_comentario_E')
    @Render('estudante/estudante_conversa_pv')
    async forum(
      @Param('id_comentario_E') idComentario: number,
      @Session() session: any,
    ) {
      if (!session?.loggedin) {
        return { redirect: '/estudante/login/frontend' };
      }
  
      const userId = session.user_id_E;
  
      const estudante = await this.service.buscarDadosEstudante(userId);
      const comentario = await this.service.buscarComentario(
        userId,
        idComentario,
      );
  
      if (!comentario) {
        throw new Error('Comentário não encontrado');
      }
  
      return {
        comentario,
        userName: estudante?.nome_E || 'Estudante',
        userImage: estudante?.foto_E || 'default-avatar.png',
  
        userName_adm: comentario.nome_adm || null,
        userImage_adm: comentario.foto_adm || 'default-avatar.png',
      };
    }
  }
  
  
import {
    Controller,
    Get,
    Render,
    Req,
    Query,
    Res,
  } from '@nestjs/common';
  import { EstudanteListaComentariosService } from './estudante-lista-comentarios.service';
  
  @Controller('estudante')
  export class EstudanteListaComentariosController {
    constructor(
      private readonly service: EstudanteListaComentariosService,
    ) {}
  
    @Get('lista_de_comentarios')
    @Render('estudante/estudante_lista_comentarios')
    async listar(
      @Req() req,
      @Query() query,
      @Res() res,
    ) {
      if (!req.session || !req.session.loggedin) {
        return res.redirect('/estudante/login/frontend');
      }
  
      const userId = req.session.user_id_E;
  
      const comentarios = await this.service.listarComentariosPorEstudante(userId);
  
      const userName =
        comentarios.length > 0 ? comentarios[0].nome_E : 'Estudante';
  
      const userImage =
        comentarios.length > 0
          ? comentarios[0].foto_E || 'default-avatar.png'
          : 'default-avatar.png';
  
      return {
        dadoscomentario: comentarios,
        erro_edicao: query.erro_edicao || null,
        erro_exclusao: query.erro_exclusao || null,
        sucesso_edicao: query.sucesso_edicao || null,
        userName,
        userImage,
      };
    }
  }

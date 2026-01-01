// estudante-comentario/estudante-comentario.controller.ts
import {
    Controller,
    Get,
    Post,
    Req,
    Res,
    Body,
    Render,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { EstudanteComentarioService } from './estudante-comentario.service';
  import { CreateComentarioDto } from './dto/create-comentario.dto';
  
  @Controller('estudante/comentario')
  export class EstudanteComentarioController {
    constructor(private service: EstudanteComentarioService) {}
  
    // GET /estudante/comentario/front_end
    @Get('front_end')
    @Render('estudante/estudante_form_comentario')
    async form(@Req() req) {
      const userId = req.session.user_id_E;
      const user = await this.service.getUserInfo(userId);
  
      return {
        userName: user?.nome_E || 'Estudante',
        userImage: user?.foto_E || 'default-avatar.png',
      };
    }
  
    // POST /estudante/comentario/back_end
    @Post('back_end')
    @UseInterceptors(
      FileInterceptor('foto_comentario_E', {
        storage: diskStorage({
          destination: './public/imagens/estudante/estudante_comentario',
          filename: (req, file, cb) => {
            const unique = Date.now() + extname(file.originalname);
            cb(null, unique);
          },
        }),
      }),
    )
    async criarComentario(
      @Req() req,
      @Body() body: CreateComentarioDto,
      @UploadedFile() file: Express.Multer.File,
      @Res() res,
    ) {
      if (!req.session.loggedin) {
        return res.redirect('/estudante/login/frontend');
      }
  
      await this.service.inserirComentario(
        req.session.user_id_E,
        body.comentario_E,
        body.categoria_comentario_E,
        file?.filename || '',
      );
  
      return res.redirect('/estudante/home_page');
    }
  }
import {
    Controller,
    Get,
    Render,
    Req,
    Post,
    UploadedFile,
    UseInterceptors,
    Body,
    Res,
  } from '@nestjs/common';
  
  import { CadastroEstudanteService } from './cadastro_estudante.service';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { CreateEstudanteDto } from './dto/create-cadastro_estudante.dto';
  
  @Controller('estudante/cadastro')
  export class CadastroEstudanteController {
    constructor(private readonly CadastroEstudanteService: CadastroEstudanteService) {}
  
    // ---------------------------
    // 📌 GET — renderiza o formulário
    // ---------------------------
    @Get('front_end')
    @Render('estudante/estudante_form_cadastro')
    async formCadastro(@Req() req) {
      const userId = req.session?.user_id_E;
      const user = await this.CadastroEstudanteService.findUserById(userId);
  
      return {
        userName: user?.nome_E || 'Estudante',
        userImage: user?.foto_E || 'default-avatar.png',
      };
    }
  
    // ---------------------------
    // 📌 POST — recebe o form e salva no banco
    // ---------------------------
    @Post('back_end')
    @UseInterceptors(
      FileInterceptor('foto_E', {
        storage: diskStorage({
          destination: './public/imagens/estudante/estudante_cadastro',
          filename: (req, file, callback) => {
            const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            callback(null, unique + ext);
          },
        }),
      }),
    )
    async cadastrar(
      @Body() body: CreateEstudanteDto,
      @UploadedFile() file: Express.Multer.File,
      @Res() res,
    ) {
      await this.CadastroEstudanteService.create(body, file.filename);
      return res.redirect('/estudante/login/frontend');
    }
  }
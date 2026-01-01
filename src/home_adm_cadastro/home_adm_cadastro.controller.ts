import {
    Controller,
    Get,
    Post,
    Render,
    Session,
    UploadedFile,
    UseInterceptors,
    Body,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { HomeAdmCadastroService } from './home_adm_cadastro.service';
  import { CreateAdmDto } from './dto/create-adm.dto';
  
  @Controller('adm/cadastro')
  export class HomeAdmCadastroController {
    constructor(private readonly service: HomeAdmCadastroService) {}
  
    // 🔹 FRONT-END
    @Get('front_end')
    @Render('administrador/administrador_form_cadastro')
    front(@Session() session: any) {
      return {
        userName_adm: session?.userName_adm || 'Coordenador',
        userImage_adm: session?.userImage_adm || 'default-avatar.png',
      };
    }
  
    // 🔹 BACK-END
    @Post('back_end')
    @UseInterceptors(
      FileInterceptor('foto_adm', {
        storage: diskStorage({
          destination: './public/imagens/administrador/adm_cadastro',
          filename: (_, file, cb) => {
            const uniqueName =
              Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, uniqueName + extname(file.originalname));
          },
        }),
      }),
    )
    async cadastrar(
      @Body() body: CreateAdmDto,
      @UploadedFile() file: Express.Multer.File,
    ) {
      if (!file) {
        throw new Error('Imagem obrigatória');
      }
  
      await this.service.criarAdm(body, file.filename);
  
      return { redirect: '/adm/login/front_end' };
    }
  }
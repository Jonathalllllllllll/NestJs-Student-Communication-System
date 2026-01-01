import {
    Controller,
    Get,
    Post,
    Body,
    Session,
    Render,
    Res,
    Redirect,
  } from '@nestjs/common';
  import { AuthAdmService } from './auth_adm.service';
  import { LoginAdmDto } from './dto/login-adm.dto';
  import { Response } from 'express';
  
  @Controller('adm')
  export class AuthAdmController {
    constructor(private readonly service: AuthAdmService) {}
  
    // 👉 GET /adm/login/front_end
    @Get('login/front_end')
    @Render('administrador/administrador_form_login')
    loginPage(@Session() session: any) {
      return {
        mensagem: 'Realize o Login',
        userName_adm: session?.userName_adm || 'Coordenador',
        userImage_adm: session?.userImage_adm || 'default-avatar.png',
      };
    }
  
    // 👉 POST /adm/login/backend
    @Post('login/backend')
    async login(
      @Body() body: LoginAdmDto,
      @Session() session: any,
      @Res() res: Response,
    ) {
      const { email_adm, senha_adm } = body;
  
      const admin = await this.service.buscarAdmPorEmail(email_adm);
  
      if (!admin) {
        return res.render('administrador/administrador_form_login', {
          mensagem: 'E-mail não encontrado',
          userName_adm: 'Coordenador',
          userImage_adm: 'default-avatar.png',
        });
      }
  
      const senhaValida = await this.service.validarSenha(
        senha_adm,
        admin.senha_adm,
      );
  
      if (!senhaValida) {
        return res.redirect('/adm/login/front_end?erro=1');
      }
  
      // ✅ sessão
      session.loggedin_adm = true;
      session.tipo = 'admin';
      session.user_id_adm = admin.id_adm;
      session.userName_adm = admin.nome_adm;
      session.userImage_adm = admin.foto_adm || 'default-avatar.png';
  
      return res.redirect('/adm/home_page');
    }
  
    // 👉 GET /adm/logout
    @Get('logout')
    logout(@Session() session: any, @Res() res: Response) {
      session.destroy(err => {
        if (err) {
          return res.status(500).send(
            'Erro ao administrador tentar fazer o logout.',
          );
        }
        return res.redirect('/');
      });
    }
  }
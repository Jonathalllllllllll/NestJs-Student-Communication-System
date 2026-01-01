// auth/auth.controller.ts
import {
    Controller,
    Get,
    Post,
    Render,
    Req,
    Res,
    Body,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { LoginDto } from './dto/login.dto';
  
  @Controller('estudante')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    // GET /estudante/login/frontend
    @Get('login/frontend')
    @Render('estudante/estudante_form_login')
    async loginForm(@Req() req) {
      const userId = req.session?.user_id_E;
      const user = userId
        ? await this.authService.findUserById(userId)
        : null;
  
      return {
        mensagem: 'Realize o Login',
        userName: user?.nome_E || 'Estudante',
        userImage: user?.foto_E || 'default-avatar.png',
      };
    }
  
    // POST /estudante/login/backend
    @Post('login/backend')
    async login(
      @Body() body: LoginDto,
      @Req() req,
      @Res() res,
    ) {
      const user = await this.authService.login(
        body.email_E,
        body.senha_E,
      );
  
      if (!user) {
        return res.redirect('/estudante/login/frontend?erro=1');
      }
  
      req.session.loggedin = true;
      req.session.tipo = 'estudante';
      req.session.user_id_E = user.id_E;
      req.session.userName = user.nome_E;
  
      return res.redirect('/estudante/home_page');
    }
  
    // GET /estudante/logout
    @Get('logout')
    async logout(@Req() req, @Res() res) {
      req.session.destroy((err) => {
        if (err) {
          return res
            .status(500)
            .send('Erro ao estudante tentar fazer o logout.');
        }
        return res.redirect('/');
      });
    }
  }
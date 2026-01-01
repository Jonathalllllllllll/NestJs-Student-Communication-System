import { Controller, Get, Session, Render, Query } from '@nestjs/common';
import { HomeAdmService } from './home_adm.service';

@Controller('home_adm')
export class HomeAdmController {
  constructor(private readonly service: HomeAdmService) {}

  @Get('home_page')
  @Render('administrador/administrador_home_page')
  async homePage(
    @Session() session: any,
    @Query() query: any,
  ) {
    const userIdAdm = session?.user_id_adm;

    let userName_adm = 'Coordenador';
    let userImage_adm = 'default-avatar.png';

    if (userIdAdm) {
      const dados = await this.service.buscarHomeAdm(userIdAdm);
      if (dados) {
        userName_adm = dados.nome;
        userImage_adm = dados.foto || 'default-avatar.png';
      }
    }

    return {
      erro_edicao: query?.erro_edicao ?? null,
      erro_exclusao: query?.erro_exclusao ?? null,
      sucesso_edicao: query?.sucesso_edicao ?? null,
      userName_adm,
      userImage_adm,
    };
  }
}
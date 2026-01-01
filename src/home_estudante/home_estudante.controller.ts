import { Controller, Get, Session, Render } from '@nestjs/common';
import { HomeEstudanteService } from './home_estudante.service';

@Controller('estudante')
export class HomeEstudanteController {
  constructor(private service: HomeEstudanteService) {}

  @Get('home_page')
  @Render('estudante/estudante_home_page')
  async home(@Session() session: any) {
    const userId = session?.user_id_E;

    let userName = 'Estudante';
    let userImage = 'default-avatar.png';

    if (userId) {
      const dados = await this.service.buscarDadosEstudante(userId);
      if (dados) {
        userName = dados.nome_E;
        userImage = dados.foto_E || 'default-avatar.png';
      }
    }

    return {
      userName,
      userImage,
      erro_edicao: null,
      erro_exclusao: null,
      sucesso_edicao: null,
    };
  }
}

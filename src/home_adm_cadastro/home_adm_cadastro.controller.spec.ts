import { Test, TestingModule } from '@nestjs/testing';
import { HomeAdmCadastroController } from './home_adm_cadastro.controller';

describe('HomeAdmCadastroController', () => {
  let controller: HomeAdmCadastroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeAdmCadastroController],
    }).compile();

    controller = module.get<HomeAdmCadastroController>(HomeAdmCadastroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

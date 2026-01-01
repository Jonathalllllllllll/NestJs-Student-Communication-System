import { Test, TestingModule } from '@nestjs/testing';
import { CadastroEstudanteController } from './cadastro_estudante.controller';

describe('CadastroEstudanteController', () => {
  let controller: CadastroEstudanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastroEstudanteController],
    }).compile();

    controller = module.get<CadastroEstudanteController>(CadastroEstudanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

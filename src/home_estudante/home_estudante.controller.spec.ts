import { Test, TestingModule } from '@nestjs/testing';
import { HomeEstudanteController } from './home_estudante.controller';

describe('HomeEstudanteController', () => {
  let controller: HomeEstudanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeEstudanteController],
    }).compile();

    controller = module.get<HomeEstudanteController>(HomeEstudanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

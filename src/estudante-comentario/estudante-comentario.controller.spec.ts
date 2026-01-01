import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteComentarioController } from './estudante-comentario.controller';

describe('EstudanteComentarioController', () => {
  let controller: EstudanteComentarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudanteComentarioController],
    }).compile();

    controller = module.get<EstudanteComentarioController>(EstudanteComentarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

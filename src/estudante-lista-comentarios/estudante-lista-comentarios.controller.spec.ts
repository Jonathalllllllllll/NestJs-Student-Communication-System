import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteListaComentariosController } from './estudante-lista-comentarios.controller';

describe('EstudanteListaComentariosController', () => {
  let controller: EstudanteListaComentariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudanteListaComentariosController],
    }).compile();

    controller = module.get<EstudanteListaComentariosController>(EstudanteListaComentariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

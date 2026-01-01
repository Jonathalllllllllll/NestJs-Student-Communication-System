import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteListaComentariosService } from './estudante-lista-comentarios.service';

describe('EstudanteListaComentariosService', () => {
  let service: EstudanteListaComentariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudanteListaComentariosService],
    }).compile();

    service = module.get<EstudanteListaComentariosService>(EstudanteListaComentariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

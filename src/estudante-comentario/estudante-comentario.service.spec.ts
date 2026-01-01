import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteComentarioService } from './estudante-comentario.service';

describe('EstudanteComentarioService', () => {
  let service: EstudanteComentarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudanteComentarioService],
    }).compile();

    service = module.get<EstudanteComentarioService>(EstudanteComentarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

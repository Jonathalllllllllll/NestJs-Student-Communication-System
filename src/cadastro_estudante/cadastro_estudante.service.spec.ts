import { Test, TestingModule } from '@nestjs/testing';
import { CadastroEstudanteService } from './cadastro_estudante.service';

describe('CadastroEstudanteService', () => {
  let service: CadastroEstudanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastroEstudanteService],
    }).compile();

    service = module.get<CadastroEstudanteService>(CadastroEstudanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

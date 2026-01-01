import { Test, TestingModule } from '@nestjs/testing';
import { HomeAdmCadastroService } from './home_adm_cadastro.service';

describe('HomeAdmCadastroService', () => {
  let service: HomeAdmCadastroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeAdmCadastroService],
    }).compile();

    service = module.get<HomeAdmCadastroService>(HomeAdmCadastroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

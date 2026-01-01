import { Test, TestingModule } from '@nestjs/testing';
import { HomeEstudanteService } from './home_estudante.service';

describe('HomeEstudanteService', () => {
  let service: HomeEstudanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeEstudanteService],
    }).compile();

    service = module.get<HomeEstudanteService>(HomeEstudanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

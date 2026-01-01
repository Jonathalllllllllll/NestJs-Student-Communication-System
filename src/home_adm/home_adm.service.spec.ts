import { Test, TestingModule } from '@nestjs/testing';
import { HomeAdmService } from './home_adm.service';

describe('HomeAdmService', () => {
  let service: HomeAdmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeAdmService],
    }).compile();

    service = module.get<HomeAdmService>(HomeAdmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

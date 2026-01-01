import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteForumService } from './estudante_forum.service';

describe('EstudanteForumService', () => {
  let service: EstudanteForumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudanteForumService],
    }).compile();

    service = module.get<EstudanteForumService>(EstudanteForumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

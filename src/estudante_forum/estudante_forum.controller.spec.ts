import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteForumController } from './estudante_forum.controller';

describe('EstudanteForumController', () => {
  let controller: EstudanteForumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudanteForumController],
    }).compile();

    controller = module.get<EstudanteForumController>(EstudanteForumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

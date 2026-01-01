import { Test, TestingModule } from '@nestjs/testing';
import { HomeAdmController } from './home_adm.controller';

describe('HomeAdmController', () => {
  let controller: HomeAdmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeAdmController],
    }).compile();

    controller = module.get<HomeAdmController>(HomeAdmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

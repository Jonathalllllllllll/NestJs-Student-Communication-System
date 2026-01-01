import { Test, TestingModule } from '@nestjs/testing';
import { AuthAdmController } from './auth_adm.controller';

describe('AuthAdmController', () => {
  let controller: AuthAdmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthAdmController],
    }).compile();

    controller = module.get<AuthAdmController>(AuthAdmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

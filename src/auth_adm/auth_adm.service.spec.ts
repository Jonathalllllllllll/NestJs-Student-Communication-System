import { Test, TestingModule } from '@nestjs/testing';
import { AuthAdmService } from './auth_adm.service';

describe('AuthAdmService', () => {
  let service: AuthAdmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthAdmService],
    }).compile();

    service = module.get<AuthAdmService>(AuthAdmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

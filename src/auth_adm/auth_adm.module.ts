import { Module } from '@nestjs/common';
import { AuthAdmService } from './auth_adm.service';
import { AuthAdmController } from './auth_adm.controller';

@Module({
  providers: [AuthAdmService],
  controllers: [AuthAdmController]
})
export class AuthAdmModule {}

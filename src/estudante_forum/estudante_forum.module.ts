import { Module } from '@nestjs/common';
import { EstudanteForumController } from './estudante_forum.controller';
import { EstudanteForumService } from './estudante_forum.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EstudanteForumController],
  providers: [EstudanteForumService],
})
export class EstudanteForumModule {}
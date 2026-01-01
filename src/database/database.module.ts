import { Module } from '@nestjs/common';
import { createPool } from 'mysql2/promise';
import { DatabaseService } from './database.service';

@Module({
  providers: [
    {
      provide: 'DATABASE_POOL',
      useFactory: async () => {
        return createPool({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'comuniq_ifsul_gravatai',
        });
      },
    },
    DatabaseService, // ✅ agora existe
  ],
  exports: ['DATABASE_POOL', DatabaseService], // ✅ exporta o service
})
export class DatabaseModule {}
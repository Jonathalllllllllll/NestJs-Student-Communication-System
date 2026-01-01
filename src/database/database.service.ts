import { Injectable, Inject } from '@nestjs/common';
import type { Pool } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('DATABASE_POOL') private readonly db: Pool,
  ) {}

  query(sql: string, params?: any[]) {
    return this.db.query(sql, params);
  }
}
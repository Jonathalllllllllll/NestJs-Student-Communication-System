import { Injectable, Inject } from '@nestjs/common';
import type { Pool } from 'mysql2/promise';

@Injectable()
export class HomeEstudanteService {
  constructor(
    @Inject('DATABASE_POOL') private readonly db: Pool
  ) {}

  async buscarDadosEstudante(idEstudante: number) {
    const sql = `SELECT nome_E, foto_E FROM ESTUDANTE_CADASTRO WHERE id_E = ?`;
    const [result] = await this.db.query<any[]>(sql, [idEstudante]);
    return result[0] || null;
  }
}
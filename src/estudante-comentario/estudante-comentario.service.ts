// estudante-comentario/estudante-comentario.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { DateTime } from 'luxon';

@Injectable()
export class EstudanteComentarioService {
  constructor(private db: DatabaseService) {}

  async getUserInfo(id: number) {
    const sql = 'SELECT nome_E, foto_E FROM ESTUDANTE_CADASTRO WHERE id_E = ?';
    const [rows] = await this.db.query(sql, [id]);
    return (rows as any[])[0];
  }

  async getEixoId(categoria: string): Promise<number> {
    const sql = 'SELECT id_eixo FROM eixo WHERE descricao_subeixo = ?';
    const [rows] = await this.db.query(sql, [categoria]);

    if ((rows as any[]).length === 0) {
      throw new Error('Categoria inválida');
    }

    return (rows as any[])[0].id_eixo;
  }

  async inserirComentario(
    id_E: number,
    comentario: string,
    categoria: string,
    foto: string,
  ) {
    const data = DateTime.now()
      .setZone('America/Sao_Paulo')
      .toFormat('yyyy-MM-dd HH:mm:ss');

    const id_eixo_fk = await this.getEixoId(categoria);

    const sql = `
      INSERT INTO ESTUDANTE_COMENTARIO
      (id_E, comentario_E, id_eixo_fk, data_comentario_E, foto_comentario_E)
      VALUES (?, ?, ?, ?, ?)
    `;

    await this.db.query(sql, [
      id_E,
      comentario,
      id_eixo_fk,
      data,
      foto,
    ]);
  }
}
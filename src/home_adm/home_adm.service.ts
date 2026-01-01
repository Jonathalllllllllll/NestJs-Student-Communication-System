import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HomeAdmService {
  constructor(private readonly db: DatabaseService) {}

  async buscarHomeAdm(idAdm: number) {
    const sql = `
      SELECT nome_adm, foto_adm
      FROM ADMINISTRADOR_CADASTRO
      WHERE id_adm = ?
    `;

    const [rows]: any = await this.db.query(sql, [idAdm]);

    if (rows.length > 0) {
      return {
        nome: rows[0].nome_adm,
        foto: rows[0].foto_adm || 'default-avatar.png',
      };
    }

    return {
      nome: 'Coordenador',
      foto: 'default-avatar.png',
    };
  }
}
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ComentarioForum } from './interfaces/comentario-forum.interface';

@Injectable()
export class EstudanteForumService {
  constructor(private readonly db: DatabaseService) {}

  async buscarDadosEstudante(userId: number) {
    const sql = `
      SELECT nome_E, foto_E
      FROM ESTUDANTE_CADASTRO
      WHERE id_E = ?
    `;

    const [rows] = await this.db.query(sql, [userId]);
    return rows?.[0] || null;
  }

  async buscarComentario(
    userId: number,
    idComentario: number,
  ): Promise<ComentarioForum | null> {
    const sql = `
      SELECT
        ec.id_comentario_E,
        ec.comentario_E,
        ec.data_comentario_E,
        ec.status_comentario_E,
        ec.foto_comentario_E,
        ares.resposta_adm,
        ares.data_resposta_adm,
        ares.id_adm,
        ac.nome_adm,
 ac.coordenadoria_adm,
        ac.foto_adm,
        e.descricao_subeixo
      FROM estudante_comentario ec
      LEFT JOIN administrador_resposta ares
        ON ec.id_comentario_E = ares.id_comentario_E
      LEFT JOIN administrador_cadastro ac
        ON ares.id_adm = ac.id_adm
      JOIN eixo e
        ON ec.id_eixo_fk = e.id_eixo
      WHERE ec.id_E = ? AND ec.id_comentario_E = ?
      LIMIT 1
    `;

    const [rows] = await this.db.query(sql, [userId, idComentario]);
    return rows?.[0] || null;
  }
}
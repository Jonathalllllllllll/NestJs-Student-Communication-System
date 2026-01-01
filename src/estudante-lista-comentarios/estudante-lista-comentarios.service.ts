import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ComentarioEstudante } from './interfaces/comentario.interface';

@Injectable()
export class EstudanteListaComentariosService {
  constructor(private readonly db: DatabaseService) {}

  async listarComentariosPorEstudante(userId: number): Promise<ComentarioEstudante[]> {
    const sql = `
      SELECT 
        ec.comentario_E,
        ec.id_comentario_E,
        ec.data_comentario_E,
        ec.status_comentario_E,
        ec.id_eixo_fk,
        e.nome_E,
        e.foto_E
      FROM ESTUDANTE_COMENTARIO ec
      JOIN ESTUDANTE_CADASTRO e ON ec.id_E = e.id_E
      WHERE e.id_E = ?  
      ORDER BY ec.data_comentario_E DESC
    `;

    const [rows] = await this.db.query(sql, [userId]);

    const comentarios = rows as ComentarioEstudante[];

    // ✅ traduz eixo (igual ao Express)
    comentarios.forEach(row => {
      if (row.id_eixo_fk === 1) row.nome_eixo = 'Social';
      else if (row.id_eixo_fk === 2) row.nome_eixo = 'Infraestrutura';
      else if (row.id_eixo_fk === 3) row.nome_eixo = 'Pedagógico';
      else row.nome_eixo = 'Não informado';
    });

    return comentarios;
  }
}
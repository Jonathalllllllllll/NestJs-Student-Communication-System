import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Estudante } from './interfaces/estudante.interface';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CadastroEstudanteService {
  constructor(private db: DatabaseService) {}

  async findUserById(id: number): Promise<Estudante | null> {
    const sql = 'SELECT nome_E, foto_E FROM ESTUDANTE_CADASTRO WHERE id_E = ?';
  
    const [rows] = await this.db.query(sql, [id]) as any[];
  
    const estudantes = rows as Estudante[];
  
    return estudantes.length ? estudantes[0] : null;
  }

  async create(data, fotoFilename: string) {
    const senhaHash = await bcrypt.hash(data.senha_E, 10);

    const sql = `
      INSERT INTO ESTUDANTE_CADASTRO
      (nome_E, turma_E, idade_E, foto_E, email_E, senha_E)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const params = [
      data.nome_E,
      data.turma_E,
      data.idade_E,
      fotoFilename,
      data.email_E,
      senhaHash,
    ];

    return await this.db.query(sql, params);
  }
}
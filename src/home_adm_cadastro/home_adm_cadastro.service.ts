import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HomeAdmCadastroService {
  constructor(private readonly db: DatabaseService) {}

  async criarAdm(
    data: any,
    fotoFilename: string,
  ) {
    const senhaHash = await bcrypt.hash(data.senha_adm, 10);

    const sql = `
      INSERT INTO ADMINISTRADOR_CADASTRO
      (nome_adm, coordenadoria_adm, id_eixo_fk, foto_adm, email_adm, senha_adm)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const params = [
      data.nome_adm,
      data.coordenadoria_adm,
      data.eixo_adm,
      fotoFilename,
      data.email_adm,
      senhaHash,
    ];

    return this.db.query(sql, params);
  }
}
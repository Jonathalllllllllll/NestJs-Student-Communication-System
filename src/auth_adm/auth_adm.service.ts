import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthAdmService {
  constructor(private readonly db: DatabaseService) {}

  async buscarAdmPorEmail(email: string) {
    const sql = `
      SELECT id_adm, nome_adm, email_adm, senha_adm, foto_adm
      FROM ADMINISTRADOR_CADASTRO
      WHERE email_adm = ?
    `;

    const [rows] = await this.db.query(sql, [email]);
    return rows?.[0] || null;
  }

  async validarSenha(
    senhaDigitada: string,
    senhaBanco: string,
  ): Promise<boolean> {
    return bcrypt.compare(senhaDigitada, senhaBanco);
  }
}

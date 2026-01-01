// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { DatabaseService } from '../database/database.service';
import { Auth } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private db: DatabaseService) {}

  async findUserById(id: number) {
    const sql = 'SELECT nome_E, foto_E FROM ESTUDANTE_CADASTRO WHERE id_E = ?';
    const [rows] = await this.db.query(sql, [id]);
    return (rows as any[])[0];
  }

  async findByEmail(email: string): Promise<Auth | null> {
    const sql = 'SELECT * FROM ESTUDANTE_CADASTRO WHERE email_E = ?';
    const [rows] = await this.db.query(sql, [email]);
    const result = rows as Auth[];
    return result.length ? result[0] : null;
  }

  async login(email: string, senha: string): Promise<Auth | null> {
    const user = await this.findByEmail(email);
    if (!user) return null;

    const match = await bcrypt.compare(senha, user.senha_E);
    return match ? user : null;
  }
}
export interface ComentarioEstudante {
    comentario_E: string;
    id_comentario_E: number;
    data_comentario_E: Date;
    status_comentario_E: string;
    id_eixo_fk: number;
    nome_E: string;
    foto_E: string;
    nome_eixo?: string;
  }
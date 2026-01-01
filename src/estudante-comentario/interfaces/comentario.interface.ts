// estudante-comentario/interfaces/comentario.interface.ts
export interface ComentarioEstudante {
    id_E: number;
    comentario_E: string;
    id_eixo_fk: number;
    data_comentario_E: string;
    foto_comentario_E?: string;
  }
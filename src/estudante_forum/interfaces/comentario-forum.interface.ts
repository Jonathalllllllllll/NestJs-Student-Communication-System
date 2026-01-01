export interface ComentarioForum {
    id_comentario_E: number;
    comentario_E: string;
    data_comentario_E: Date;
    status_comentario_E: string;
    foto_comentario_E: string;
  
    resposta_adm?: string;
    data_resposta_adm?: Date;
  
    id_adm?: number;
    nome_adm?: string;
    coordenadoria_adm?: string;
    foto_adm?: string;
  
    descricao_subeixo: string;
  }
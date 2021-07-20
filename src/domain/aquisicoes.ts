import { Aquisicao } from './aquisicao';

export interface Aquisicoes {
  obterPorId(id: number): Promise<Aquisicao>;
  obterTodas(): Promise<Aquisicao[]>;
  inserir(aquisicao: Aquisicao): Promise<void>;
}

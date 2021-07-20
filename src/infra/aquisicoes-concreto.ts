import { Aquisicao } from '../domain/aquisicao';
import { Aquisicoes } from '../domain/aquisicoes';
import { AquisicaoTable, AquisicaoPersistenceModel } from './modelos-de-persistencia/aquisicao-persistence-model';

export class AquisicoesConcreto implements Aquisicoes {

  async obterPorId(id: number): Promise<Aquisicao> {
    const aquisicao = await AquisicaoTable.findByPk(id);

    if (!aquisicao) {
      return new Aquisicao(0, '');
    }

    return new Aquisicao(aquisicao.id, aquisicao.descricao);
  }

  async obterTodas(): Promise<Aquisicao[]> {
    const aquisicoes = await AquisicaoTable.findAll();

    return aquisicoes.map((aquisicao: AquisicaoPersistenceModel) =>
      new Aquisicao(aquisicao.id, aquisicao.descricao));
  }

  async inserir(aquisicao: Aquisicao): Promise<void> {
    await AquisicaoTable.create<AquisicaoPersistenceModel>(aquisicao);
  }
}

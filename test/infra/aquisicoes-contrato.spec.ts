import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { Aquisicao } from '../../src/domain/aquisicao';
import { Aquisicoes } from '../../src/domain/aquisicoes';
import { AquisicoesConcreto } from '../../src/infra/aquisicoes-concreto';
import { AquisicaoTable } from '../../src/infra/modelos-de-persistencia/aquisicao-persistence-model';

describe('Aquisições', () => {
  let aquisicoes: Aquisicoes;

  beforeEach(async () => {
    await AquisicaoTable.destroy({
      truncate: true
    });

    aquisicoes = new AquisicoesConcreto();
  });

  it('deve incluir uma nova aquisição', async () => {
    const id = 10;
    const descricao = 'Descrição';

    await aquisicoes.inserir(new Aquisicao(id, descricao));

    const aquisicaoEncontrada = await aquisicoes.obterPorId(id);
    expect(aquisicaoEncontrada.id).equal(id);
    expect(aquisicaoEncontrada.descricao).equal(descricao);
  });

  it('deve obter todas as aquisições', async () => {
    await aquisicoes.inserir(new Aquisicao(1, 'descricao'));
    await aquisicoes.inserir(new Aquisicao(2, 'descricao'));
    await aquisicoes.inserir(new Aquisicao(3, 'descricao'));

    const aquisicoesEncontradas = await aquisicoes.obterTodas();

    expect(aquisicoesEncontradas.length).equal(3);
  });
});

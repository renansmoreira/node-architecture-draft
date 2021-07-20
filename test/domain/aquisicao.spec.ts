import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Aquisicao } from '../../src/domain/aquisicao';

describe('Aquisição', () => {
  it('deve criar com todos os dados necessários', () => {
    const id = 1;
    const descricao = 'Teste';

    const aquisicao = new Aquisicao(id, descricao);

    expect(aquisicao.id).to.equal(id);
    expect(aquisicao.descricao).to.equal(descricao);
  });
});

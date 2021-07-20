import type { NextApiRequest, NextApiResponse } from 'next';
import { AquisicoesConcreto } from '../../../infra/aquisicoes-concreto';
import { Aquisicao } from '../../../domain/aquisicao';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Aquisicao[]>
) {
  const aquisicoes = new AquisicoesConcreto();

  try {
    if (req.method === 'GET') {
      return res.status(200).json(await aquisicoes.obterTodas());
    }

    if (req.method === 'POST') {
      await aquisicoes.inserir(new Aquisicao(req.body.id, req.body.descricao));
      return res.status(200).end();
    }
  } catch (error) {
    return res.status(500).json(error);
  }

  return res.status(501).end();
}

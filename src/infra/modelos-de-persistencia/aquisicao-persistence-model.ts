import { Sequelize, Model, DataTypes } from 'sequelize';
import { Database } from '../database/database';

const database = new Database('development');

export interface AquisicaoPersistenceModel extends Model {
  id: number;
  descricao: string;
}

export const AquisicaoTable = database.conexao.define<AquisicaoPersistenceModel>('Aquisicao', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'Aquisicao',
  createdAt: false,
  updatedAt: false
});

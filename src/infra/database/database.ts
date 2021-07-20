import { Sequelize } from 'sequelize';
import databaseConfig from '../../../config/database.json';

let conexao: Sequelize;

export class Database {
  ambiente: string;

  constructor(ambiente: string) {
    this.ambiente = ambiente;
  }

  get conexao(): Sequelize {
    if (!conexao) {
      const opcao = databaseConfig[this.ambiente];
      conexao = new Sequelize(opcao);
    }

    return conexao;
  }
}

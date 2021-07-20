'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aquisicao', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      descricao: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('aquisicao');
  }
};

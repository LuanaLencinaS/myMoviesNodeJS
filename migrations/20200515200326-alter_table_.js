module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('movies', 'active', Sequelize.BOOLEAN);
      //cria a coluna indicada
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('movies', 'active');
  }
};

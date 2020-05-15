module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("movies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: { 
        type: Sequelize.STRING, allowNull: false 
      },
      description: { 
        type: Sequelize.STRING, allowNull: false 
      },
      poster: { 
        type: Sequelize.STRING, allowNull: false 
      },
      watched: { 
        type: Sequelize.BOOLEAN, allowNull: false 
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
    //paams: nome  da tabela e atributos das colunas que serao criadas
  },
//tabela criada

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("movies");
  },
};


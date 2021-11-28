module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('notifications', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        to: {
            allowNull: true,
            type: Sequelize.STRING
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      }, {
        engine: 'InnoDB',
        charset: 'utf8',
      })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('notifications');
  }
};

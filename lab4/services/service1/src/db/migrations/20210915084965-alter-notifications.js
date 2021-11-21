'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('notifications', 'created_at', {
      field: 'created_at',
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
      type: Sequelize.DATE
    });
  },

  down: function (queryInterface, _Sequelize) {
    return queryInterface.removeColumn('notifications', 'created_at');
  }
};

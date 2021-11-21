'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('notifications', 'recepient', {
      field: 'recepient',
      allowNull: true,
      type: Sequelize.STRING
    });
  },

  down: function (queryInterface, _Sequelize) {
    return queryInterface.removeColumn('notifications', 'recepient');
  }
};

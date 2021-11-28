const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');

const db = {};
const sequelize = new Sequelize(
  `postgresql://${global.DATABASE_USER}:${global.DATABASE_PASSWORD}@${global.DATABASE_HOST}:${global.DATABASE_PORT}/${global.DATABASE_NAME}`, {
    logging: false
  }
);

fs
  .readdirSync(__dirname)
  .filter(file => file.slice(-9) === '.model.js')
  .forEach(file => {
    const modelName = _.upperFirst(_.camelCase(file.split('.')[0]));

    db[modelName] = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
  if (db[modelName].defineScopes) db[modelName].defineScopes(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

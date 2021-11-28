module.exports = {
  development: {
    username: global.DATABASE_USER,
    password: global.DATABASE_PASSWORD,
    database: global.DATABASE_NAME,
    host: global.DATABASE_HOST,
    port: global.DATABASE_PORT,
    dialect: 'postgresql'
  },
  test: {
    username: global.DATABASE_USER,
    password: global.DATABASE_PASSWORD,
    database: global.DATABASE_NAME,
    host: global.DATABASE_HOST,
    port: global.DATABASE_PORT,
    dialect: 'postgresql'
  },
  production: {
    username: global.DATABASE_USER,
    password: global.DATABASE_PASSWORD,
    database: global.DATABASE_NAME,
    host: global.DATABASE_HOST,
    port: global.DATABASE_PORT,
    dialect: 'postgresql'
  }
};

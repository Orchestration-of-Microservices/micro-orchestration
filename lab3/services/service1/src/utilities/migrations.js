const { exec } = require('child_process');

new Promise((resolve, reject) => {
  const migrate = exec('sequelize db:migrate', { env: process.env }, err => (err ? reject(err): resolve()));

  migrate.stdout.pipe(process.stdout);
  migrate.stderr.pipe(process.stderr);
});

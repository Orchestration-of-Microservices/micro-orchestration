const http = require('http');
const { requestListener } = require('./src/app')

const server = http.createServer(requestListener);
server.listen(3003);
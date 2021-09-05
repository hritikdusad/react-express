const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000;


const server = http.createServer(app);

server.listen(PORT);

/**
 * references for creating node api
 * https://www.youtube.com/watch?v=FV1Ugv1Temg&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=3
 */
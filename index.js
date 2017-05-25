// require('babel-core/register')({
//     presets: ['es2015', 'es2016']
// });
//
// require('./server/app');


const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('okay');
}).listen(8080);
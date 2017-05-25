// import Koa from 'koa';
// const app = new Koa();
//
// app.use(async (ctx, next) => {
//     ctx.body = "hello word";
// });
//
// app.listen(process.env.PORT || 5000);

const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('okay');
}).listen(process.env.PORT || 8080);
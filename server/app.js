import Koa from 'koa';
const app = new Koa();
import path from 'path';

const serve = require('koa-static');

const dir = path.join(__dirname, '..', 'public');

app.use(serve(dir));

// app.use(async (ctx, next) => {
//     ctx.body = "hello word";
// });

app.listen(process.env.PORT || 8080);
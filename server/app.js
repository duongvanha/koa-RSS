import Koa from 'koa';
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = "hello word";
});

app.listen(80);
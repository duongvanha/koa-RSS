import Koa from 'koa';
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = "hello word";
});

app.listen(process.env.PORT || 8080);
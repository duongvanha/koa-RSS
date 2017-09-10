import Koa from 'koa';
import path from 'path';
import bootsTrapper from './bootstrapper';
import routers from './http/router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import nunjuck from 'koa-nunjucks-2';

const app = new Koa();
const dir = path.join(__dirname, 'public');

app.use(nunjuck({
    ext : 'html',
    path: dir
}));

app.use(serve(dir));
app.use(bodyParser());
app.use(routers);

const port = process.env.PORT || 8080;

bootsTrapper(app).then((app) => {
    app.listen(port, () => console.log(`app running port ${port}`));
});

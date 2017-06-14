import Koa from 'koa';
import path from 'path';
import bootsTrapper from './bootstrapper';
import routers from './http/router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

require('dotenv').config();

const serve = require('koa-static');

const dir = path.join(__dirname, '..', 'public');

app.use(bodyParser());
app.use(routers);
app.use(serve(dir));

bootsTrapper(app).then((app) => {
    app.listen(process.env.PORT || 8080, () => console.log('app running port 8080'));
});
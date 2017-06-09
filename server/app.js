import Koa from 'koa';
const app = new Koa();
import path from 'path';
import bootsTrapper from './bootstrapper';
require('dotenv').config();

const serve = require('koa-static');

const dir = path.join(__dirname, '..', 'public');

app.use(serve(dir));

bootsTrapper(app).then(app => {
    app.listen(process.env.PORT || 8080, () => console.log('app running port 8080'));
});
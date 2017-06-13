import Router from 'koa-router';
import Container from 'sphinx-container';
import knex from '../../packages/database';
// let container = Container.instance();
let router = new Router();

router.get('/api', async (ctx) => {
    ctx.body = await knex.select('*').from('movies').limit(10);
});

module.exports = router.routes();
import Router from 'koa-router';
import Container from '../packages/container/Container';
import { getLinkDownloadByUrl } from '../packages/videos/phim-moi';
import ReactDOMServer from 'react-dom/server';
import App from '../../client/components/app';
import routers from '../../client/routers';
import { matchRoutes, renderRoutes } from 'react-router-config';
import * as React from "react";
import { StaticRouter } from "react-router";

let router    = new Router();
let container = Container.instance();

router.get('/api', async (ctx) => {
    let knex  = await container.make('db');
    let page  = ctx.query.page || 0;
    let total = ctx.query.total || 10;
    let query = knex.select('*').from('movies');
    if(ctx.query.search) {
        query = query.where('nameEn', 'like', `%${ctx.query.search}%`).orWhere('nameVi', 'like', `%${ctx.query.search}%`);
    }
    query    = query.limit(total).offset(page * total);
    ctx.body = await query;
});

router.post('/api', async (ctx) => {
    let {url} = ctx.request.body;
    ctx.body  = await getLinkDownloadByUrl(url);
});


router.get('*', async (ctx) => {
    const context = {};
    let body      = ReactDOMServer.renderToString(
        <StaticRouter
            location={ctx.request.url}
            context={context}
        >
            {renderRoutes(routers)}
        </StaticRouter>
    );
    await ctx.render('layout', {container: body});
});

module.exports = router.routes();

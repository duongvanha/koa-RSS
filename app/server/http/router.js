import React from "react";
import Router from 'koa-router';
import Container from '../packages/container/Container';
import { getLinkDownloadByUrl } from '../packages/videos/phim-moi';
import ReactDOMServer from 'react-dom/server';
import routers from '../../client/routers';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from "react-router";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from '../../client/reducers';
import { createStore } from "redux";
import { Provider } from "react-redux";

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

    const muiTheme = getMuiTheme({}, {userAgent: ctx.request.headers['user-agent']});

    const preloadedState = {datas: {text: 'init state by server'}};

    const store = createStore(reducers, preloadedState);

    let body = ReactDOMServer.renderToString(
        <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <StaticRouter
                    location={ctx.request.url}
                    context={context}
                >
                    {renderRoutes(routers)}
                </StaticRouter>
            </MuiThemeProvider>
        </Provider>
    );
    await ctx.render('layout', {container: body, state: JSON.stringify(preloadedState).replace(/</g, '\\u003c')});
});

module.exports = router.routes();

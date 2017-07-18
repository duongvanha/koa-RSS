import knex from './packages/database/index';
import Container from './packages/container/Container';
let container = Container.instance();

async function bootsTrapper(app) {
    app.context.db = knex;
    container.singleton('db', async()=>knex);
    return app;
}

export default bootsTrapper;

import knex from '../packages/database';
import Container from 'sphinx-container';
let container = Container.instance();

async function bootsTrapper(app) {
    app.context.db = knex;
    container.singleton('db', async () => {
        return await knex;
    });
    return app;
}

export default bootsTrapper;
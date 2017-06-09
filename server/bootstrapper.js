import knex from '../packages/database';
async function bootsTrapper(app) {
    app.context.db = knex;
    return app;
}

export default bootsTrapper;
require('dotenv').config();
import Sequelize from 'sequelize';
export default require('knex')({
    client    : 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
});
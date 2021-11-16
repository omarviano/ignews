import { Client } from "faunadb";

export const fauna = new Client({
    domain: 'db.us.fauna.com',
    secret: process.env.FAUNA_DB_KEY
});
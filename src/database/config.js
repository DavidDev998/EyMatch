const pg = require('pg');

module.exports = {
    async DBconnect (database)
    {
        var client = await new pg.Client({
            host:'localhost',
            database:database,
            user:'postgres',
            password:'root',
            max:200,
            idleTimeoutMillis:30000,
            connectionTimeoutMillis:2000
        });
        await client.connect();

        return client;
    }
}

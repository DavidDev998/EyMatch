const pg = require('pg');

module.exports = {
    async DBconnect (database)
    {
        const connectionString = `postgres://postgres:root@localhost/${database}`

        var client = await new pg.Client(connectionString);
        await client.connect();

        return client;
    }
}

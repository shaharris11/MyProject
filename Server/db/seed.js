const client = require('./client');

const {characters} = require('./seedData')

const dropTables = async () => {
    try {
        await client.query(`
        DROP TABLE IF EXIST characters;
        `)
    }catch (error) {
        console.log("error dropping tables");
        throw error
    }
}

const rebuildDB = async () => {
    try {
        client.connect()
        await dropTables()
    } catch (error) {
        console.log(error);
    } finally {
        client.end()
    }
}

rebuildDB()
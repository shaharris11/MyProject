const client = require("../client");


async function getMonsters() {
    try {
        const {
            rows 
        } = await client.query(`
       SELECT * FROM  monsters;
        `)
        return rows
    } catch (error) {
        console.error(error);
    }
}

const getMonstersById = async (monsterId) => {
    try {
        const {
            rows: [monster]
        } = await client.query(
            `
                SELECT *
                FROM monster
                WHERE "monsterId" =${monsterId};
            `
        )
        return monster;
    } catch (error) {
        throw error
    }
}


module.exports = {getMonsters, getMonstersById}

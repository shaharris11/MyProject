const client = require("../client")
const util = require('../util');

const getAllCharacters = async () => {
    try {
        const { rows } = await client.query(`
        SELECT * FROM characters;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const getCharactersById = async (characterId) => {
    try {
        const {
            rows: [character]
        } = await client.query(
            `
                SELECT *
                FROM character
                WHERE "characterId" =${characterId};
            `
        )
        return character;
    } catch (error) {
        throw error
    }
}



module.exports = { getAllCharacters, getCharactersById,  }
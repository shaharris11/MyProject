const client = require("../client")
const util = require('../util');

const createCharacters = async ({name, title, age, monsterId, placeId, description, imgUrl }) => {
    try {
        const {
            rows: [character],
        } = await client.query (`
            INSERT INTO characters(name, title, age, "monsterId", "placeId", description, "imgUrl")
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
        `, [name, title, age, monsterId, placeId, description, imgUrl])
        return character
    } catch (error) {
        throw error
    }
}

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
                FROM characters
                WHERE "characterId" =${characterId};
            `
        )
        return character;
    } catch (error) {
        throw error
    }
}



module.exports = { getAllCharacters, getCharactersById, createCharacters }
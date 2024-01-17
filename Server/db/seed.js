const client = require('./client');

const {characters, places, monsters} = require('./seedData')
const { getAllCharacters, getCharactersById } = require('./sqHelperFunctions/characters')
const { getMonsters, getMonstersById } = require('./sqHelperFunctions/monster');
const { getPlaces, getPlacesId } = require('./sqHelperFunctions/places');

const dropTables = async () => {
    try {
        console.log("starting to drop tables...");
        await client.query(`
        DROP TABLE IF EXISTS characters;
        DROP TABLE IF EXISTS places;
        DROP TABLE IF EXISTS monsters
        `)
        console.log("tables dropped");
    } catch (error) {
        console.log("error dropping tables");
        throw error
    }
}

const createTables = async () => {
    try {
        console.log("creating tables");
        await client.query(`

    CREATE TABLE monsters (
        "monsterId" SERIAL PRIMARY KEY,
        name VARCHAR(200) UNIQUE NOT NULL
        );

    CREATE TABLE places (
        "placeId" SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        owner VARCHAR (100) NOT NULL,
        "characterId" VARCHAR(100) UNIQUE 
    );

    CREATE TABLE characters (
        "characterId" SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        title VARCHAR(100) UNIQUE NOT NULL,
        age INTEGER NOT NULL,
        "monsterId" VARCHAR(200) NOT NULL,
        "placeId" VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        "imgUrl" TEXT 
       
    )
    `);
        console.log("created tables");
    } catch (error) {
        console.error(error);
    }
}

const createInitialCharacters = async () => {
    try {
        for (const character of characters) {
            await getAllCharacters(character)
        }
        console.log("created characters");
    } catch (error) {
        throw error
    }
}

const createInitialMonster = async () => {
    try {
        for (const monster of monsters) {
            await getMonsters(monster)
        }
        console.log("creacted monster");
    } catch (error) {
        console.error(error);
    }
}
const createInitialPlace = async () => {
    try {
        for (const place of places) {
            await getPlaces(place)
        }
        console.log("created places");
    }catch (error) {
        console.error(error);
    }
}
    
  


const rebuildDB = async () => {
    try {
        client.connect()
        await dropTables()
        await createTables()

        console.log("starting to seed");
        await createInitialPlace()
        await createInitialMonster()
        await createInitialCharacters()
    } catch (error) {
        console.log(error);
    } finally {
        client.end()
    }
}

rebuildDB()
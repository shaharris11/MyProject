const client = require("../client")


const getPlaces = async () => {
    try {
        const {
            rows
        } = await client.query (`
            SELECT * FROM places;

        `, )
        return rows
    } catch (error) {
        console.error(error);
    }
}

const getPlacesId = async (placeId) => {
    try {
        const {
            rows: [place]
        } = await client.query (
            `
            SELECT * FROM place
            WHERE "placeId" = ${placeId};
            `
        )
        return place
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getPlaces, getPlacesId }
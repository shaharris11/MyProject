const client = require("../client")
const util = require('util');

async function getAllComments() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM comments;
        `);
        return rows;
    } catch (err) {
        throw err;
    }
}

async function getCommentId(id) {
    try {
        const { rows: [comment] } = await client.query(`
            SELECT * FROM comments
            WHERE id = $1;
        `, [id]);
        return comment;
    } catch (error) {
        throw error;
    }
}

async function postComments({name, description}) {
    try {
        const { rows: [comment] } = await client.query(`

            INSERT INTO comments(name, description)
            VALUES($1, $2)
            RETURNING *;
        `, [name, description]);
        return comment;
    } catch (error) {
        throw error;
    }
}

async function putUpdateComment(id, fields = {}) {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(', ');
    if (setString.length === 0) {
        return;
    }
    try {
        const { rows: [comment] } = await client.query(`
            UPDATE comments
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
        `, Object.values(fields));
        return comment;
    } catch (error) {
        throw error;
    }
}

async function deleteComment(id) {
    try {
        const { rows: [comment] } = await client.query(`
            DELETE FROM comments
            WHERE id=$1
            RETURNING *;
        `, [id]);
        return comment;
    } catch (error) {
        throw error;
    }
}

module.exports = { getAllComments, getCommentId, postComments, putUpdateComment, deleteComment }

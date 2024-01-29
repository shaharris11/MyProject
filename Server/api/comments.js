const express = require('express');
const router = express.Router();
const util = require('../db/util');

const {getAllComments, getCommentId, createComments, putUpdateComment, deleteComment} = require('../db/sqHelperFunctions/comments')

// Get - /api/comments
router.get('/:characterId', async (req, res, next) => {
    try{
        const comments = await getAllComments(req.params.characterId);
        res.send(comments);
    } catch (error) {
        next(error);
    }
});

// GET - /api/comments/:id
router.get('/:id', async (req, res, next) => {
    try {
        const comment = await getCommentId(req.params.id);
        res.send(comment);
    } catch (error) {
        next(error);
    }
});

// POST create comments- api/comments
router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const comment = await createComments(req.body);
        res.send(comment)
    } catch (error) {
        next(error)
    }
});

// PUT - api/comments/:id
router.put('/:id', async (req, res, next) => {
    try {
        const comment = await putUpdateComment(req.params.id, req.body);
        res.send(comment)
    } catch (error) {
        next(error)
    }
});

// DELETE - api/comments/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const comment = await deleteComment(req.params.id);
        res.send(comment)
    } catch (error) {
        next(error)
    }
});

module.exports = router
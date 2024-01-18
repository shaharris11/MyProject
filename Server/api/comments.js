const express = require('express');
const router = express.Router();

const {getAllComments, getCommentId, postComments, putUpdateComment, deleteComment} = require('../db/sqHelperFunctions/comments')

router.get('/', async (req, res, next) => {
    try{
        const comments = await getAllComments();
        res.send(comments);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const comment = await getCommentId(req.params.id);
        res.send(comment);
    } catch (error) {
        next(error);
    }
});

router.post('/:id', async (req, res, next) => {
    try {
        const comment = await postComments(req.body);
        res.send(comment)
    } catch (error) {
        next(error)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const comment = await putUpdateComment(req.params.id, req.body);
        res.send(comment)
    } catch (error) {
        next(error)
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const comment = await deleteComment(req.params.id);
        res.send(comment)
    } catch (error) {
        next(error)
    }
});

module.exports = router
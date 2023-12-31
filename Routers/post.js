const express = require('express');
const cont = require('../Controllers/post');
const { uploadImg, parseText } = require('../middlewares/general');
const { authUser } = require('../middlewares/userAuth');

const router = express.Router();

router.post('/addPost', uploadImg.single("file"), authUser, cont.addPost);
router.post('/addComment', parseText.none(), authUser, cont.addComment);
router.post('/deleteComment', parseText.none(), authUser, cont.deleteComment);
router.post('/getComments', parseText.none(), authUser, cont.getComments);
router.post('/like', parseText.none(), authUser, cont.likePost);
router.post('/getAll', parseText.none(), authUser, cont.getAll);
router.post('/getByTag', parseText.none(), authUser, cont.getByTag);
router.post('/delete', parseText.none(), authUser, cont.deletePost);

module.exports = router;
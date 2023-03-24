const router = require('express').Router()
const commentsCtrl = require('../controllers/comments.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, commentsCtrl.index)
router.get('/review/:reviewId', checkAuth, commentsCtrl.findReviewComments)
router.post('/review/:reviewId/profile/:profileId', checkAuth, commentsCtrl.create)
router.patch('/comment/:commentId', checkAuth, commentsCtrl.update)
router.delete('/comment/:commentId', checkAuth, commentsCtrl.deleteComment)


module.exports = router
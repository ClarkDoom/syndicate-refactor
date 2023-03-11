const router = require('express').Router()
const reviewsCtrl = require('../controllers/reviews.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/show/:showId/profile/:profileId', checkAuth, reviewsCtrl.create)
router.patch('/review/:reviewId', checkAuth, reviewsCtrl.update)


module.exports = router
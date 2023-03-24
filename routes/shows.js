const router = require('express').Router()
const showsCtrl = require('../controllers/shows.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, showsCtrl.index)
router.post('/profile/:profileId', checkAuth, showsCtrl.create)
router.patch('/show/:showId', checkAuth, showsCtrl.update)
router.delete('/show/:showId', checkAuth, showsCtrl.deleteShow)
router.get('/profile/:profileId', checkAuth, showsCtrl.getProfileShows)


module.exports = router
const router = require('express').Router()
const searchCtrl = require('../controllers/search.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/shows/:searchQuery', searchCtrl.searchShows)
router.get('/shows/show/:showId', searchCtrl.findShow)
router.get('/show/:showId/season/:seasonNumber', checkAuth, searchCtrl.searchSeason)
router.get('/shows/show/:showId/season/:seasonNumber/episode/:episodeNumber', searchCtrl.findCast)



module.exports = router
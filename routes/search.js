const router = require('express').Router()
const searchCtrl = require('../controllers/search.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:searchQuery', searchCtrl.searchShows)



module.exports = router
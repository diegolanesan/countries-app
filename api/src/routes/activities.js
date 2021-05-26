const {Router} = require('express')
const {createActivity, getActivities} = require('../controllers/activities')

const router = Router()



router.post('/create', createActivity)
router.get('/', getActivities)


module.exports = router
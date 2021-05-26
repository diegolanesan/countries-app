const {Router} = require('express')
const {getCountries, getCountryById, getCountryByName, getContinents} = require('../controllers/countries')


const router = Router()

router.get('/', getCountries)
router.get('/search/', getCountryByName)
router.get('/continents', getContinents)
router.get('/:id', getCountryById)



module.exports = router
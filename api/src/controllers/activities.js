const {Activity} = require('../db')


async function createActivity (req, res, next) {
    try {
        const {name, difficulty, duration, season, countries} = req.body 
         
        const newActivity = await Activity.create({
                name,
                difficulty,
                duration,
                season: season.charAt(0).toUpperCase() + season.slice(1),
        })
        await newActivity.setCountries(countries)

    res.send("Actividad creada")
    }
    catch(error){
        console.error(error);
      }
}

async function getActivities (req, res, next) {
    try {
        const activities = await Activity.findAll()

        res.send(activities)
    }
    
    catch(error){
        console.error(error);
      }
}

module.exports = {
    createActivity,
    getActivities
}
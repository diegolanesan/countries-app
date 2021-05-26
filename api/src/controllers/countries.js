const {Country, Activity} = require('../db')
const axios = require('axios')
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

async function getCountries (req, res, next) {
    const countries = await Country.findAll({
        include:[{
            model: Activity, 
            attributes: ['id', 'name'],
          }]
    })
    res.send(countries)
}

async function getCountryById (req, res, next) {
    try {
        const {id} = req.params
        const country = await Country.findOne({  
            where: {
                id: id.toUpperCase()
            }, 
            include:[{
                model: Activity, 
                attributes: ['id', 'name'],
            }],     
        })
    
        res.send(country)}

    catch(error){
        console.error(error);
      }
}

async function getCountryByName (req, res, next) {
    try {
        let name = req.query.name
        name = name.charAt(0).toUpperCase() + name.slice(1)
        const countries = await Country.findAll({
            where: {
                name: {
                [Op.like]: '%' + name + '%'
                }
            }
        
        }) 
        if(countries.length === 0) return res.send("No se encontró ningún país.")
        console.log(name)
        res.send(countries)
    }

    catch(error){
        console.error(error);
      }
}


async function getContinents (req, res, next) {
    try {
        const data = await Country.findAll()
        const continents = data.map(country => country.continent)
        const unique = continents.filter((v, i, a) => a.indexOf(v) === i)
        const uniqueContinents = unique.filter(item => item) 
        res.send(uniqueContinents)
    }
    catch(error){
        console.error(error);
      }
}


module.exports = {
    getCountries,
    getCountryById,
    getCountryByName,
    getContinents
}
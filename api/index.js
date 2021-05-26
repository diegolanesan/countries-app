//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios')
const {Country, Activity} = require('./src/db')


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
  
     const response = await axios.get('https://restcountries.eu/rest/v2/all')
     const countries = response.data
    
     countries.forEach(country => Country.create({
         id: country.alpha3Code,
         name: country.name,
         flag: country.flag,
         continent: country.region,
         capital: country.capital,
         subregion: country.subregion,
         area: country.area,
         population: country.population,
     }))
     
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

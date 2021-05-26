const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
  
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });

      it('area should be a number', (done) => {
        Country.create({
          id: "ARG",
          name: 'Argentina',
          flag: 'url',
          continent: 'Americas',
          capital: 'Buenos Aires',
          subregion: "South America",
          area: "2,78 millions",
          populaton: 43590400
        })
        .then(() => done())
        .catch(() => done('Should no accept a string'));
      }); 

      it('Population should be an integer', () => {
        Country.create({})
          .then(()=> done(new Error('Should only accept an integer')))
          .catch(() => done())
      })

    
    });   
  });

  
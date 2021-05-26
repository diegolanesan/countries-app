/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: 'ARG',
  name: 'Argentina',
  flag: "url",
  continent: "Americas",
  capital: "Buenos Aires"
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });


  describe('GET /countries/{idPais}', () => {
    it('should return an object', () =>
      agent.get('/countries/:id')
      .expect(200)
      .expect(function(res) {
        expect(res.body).to.deep.equal({});
      })
    );
  });
});

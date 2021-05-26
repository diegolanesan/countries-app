const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err)
    }))

    
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
  
    it('Name should throw an error if it is null', (done) => {
      Activity.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });

    it('Difficulty should only accept values between 1 and 5', (done) => {
      Activity.create({})
        .then(() => done(new Error('Accept only numbers from 1 to 5')))
        .catch(() => done());
    });
  })
  })
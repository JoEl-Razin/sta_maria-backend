import '../../common.js'
import chance from '../../helpers/chance.js';
import supertest from 'supertest';
import { expect } from 'chai';

describe('Create Resident', async function () {
  describe('WHEN required input values are provided', async function () {
    it('SHOULD create an resident successfully', async function () {
      const input = {
        name: {
          firstName: chance.first(),
          lastName: chance.last(),
          middleInitial: chance.word().slice(0, 1).toUpperCase()
        },
        sex: chance.gender(),
        civilStatus: 'Single',
        address: {
          householdNo: chance.areacode(),
          streetName: chance.street()
        },
        precintNumber: chance.cf(),
        birthday: chance.birthday({string: true}),
        birthplace: chance.address(),
        profession: chance.profession(),
        nationality: 'Filipino',
        residentType: ['Voter'],
        living: true,
        blacklist: chance.bool(),
      }

      const server = supertest(this.server);

      await server
        .post('/resident')
        .send(input)
        .set('Accept', 'application/json')
        .expect(201)
        .expect(({ body }) => {
          expect(body).to.have.nested.property('name.firstName').to.equal(input.name.firstName);
          expect(body).to.have.nested.property('name.lastName').to.equal(input.name.lastName);
          expect(body).to.have.nested.property('name.middleInitial').to.equal(input.name.middleInitial);
          
          expect(body).to.have.nested.property('address.householdNo').to.equal(input.address.householdNo);
          expect(body).to.have.nested.property('address.streetName').to.equal(input.address.streetName);
        })
    });
  });
})
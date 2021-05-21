import '../../common.js'
import chance from '../../helpers/chance.js';
import supertest from 'supertest';
import { expect } from 'chai';

describe('Create Household', async function () {
  describe('WHEN required input values are provided', async function () {
    it('SHOULD create a household successfully', async function () {
      const input = {
        householdNo: chance.integer({ min: 1, max: 50}),
        streetName: chance.street(),
        householdType: 'Permanent',
        householdHead: chance.name(),
        householdMembers: [
          chance.name(), 
          chance.name()
        ],
      }
      const server = supertest(this.server);

      await server
        .post('/household')
        .send(input)
        .set('Accept', 'application/json')
        .expect(201)
        .expect(({ body }) => {

        })
    });
  });
})
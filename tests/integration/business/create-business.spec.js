import '../../common.js'
import chance from '../../helpers/chance.js';
import supertest from 'supertest';
import { expect } from 'chai';

describe('Create Business', async function () {
  describe('WHEN required input values are provided', async function () {
    it('SHOULD create a business successfully', async function () {
      const input = {
        businessName: chance.company(),
        businessAddress: chance.address(),
        businessType: 'Pharmacy',
        businessPermit: chance.cf(),
        owner: {
          name: chance.name(),
          contactNo: chance.phone(),
          address: chance.address()
        },
      }

      const server = supertest(this.server);

      await server
        .post('/business')
        .send(input)
        .set('Accept', 'application/json')
        .expect(201)
        .expect(({ body }) => {
          expect(body).to.have.nested.property('owner.name').to.equal(input.owner.name);
          expect(body).to.have.nested.property('owner.contactNo').to.equal(input.owner.contactNo);
          expect(body).to.have.nested.property('owner.address').to.equal(input.owner.address);
        })
    });
  });
})
import '../../common.js'
import chance from '../../helpers/chance.js';
import supertest from 'supertest';
import { expect } from 'chai';

describe('Create Certificate', async function () {
  describe('WHEN required input values are provided', async function () {
    it('SHOULD create a certificate successfully', async function () {
      const input = {
        controlNo: chance.prime(),
        certificateType: 'Barangay Clearance',
        name: chance.name(),
        address: chance.address(),
        certificatePurpose: 'Employment',
        sex: chance.gender()
      }

      const server = supertest(this.server);

      await server
        .post('/certificate')
        .send(input)
        .set('Accept', 'application/json')
        .expect(201)
        .expect(({ body }) => {

        })
    });
  });
})
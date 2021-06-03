import '../../common.js'
import chance from '../../helpers/chance.js';
import supertest from 'supertest';
import { expect } from 'chai';
import UserModel from '../../../models/user.js';

describe.only('Login User', async function () {
  describe('WHEN required input values are provided', async function () {
    const input = {
      username: chance.email(),
      password: chance.string(),
    }
    
    beforeEach(async function () {
      await UserModel.create(input);
    });

    it('SHOULD create an user successfully', async function () {
      const server = supertest(this.server);

      await server
        .post('/login')
        .send(input)
        .set('Accept', 'application/json')
        .expect(200)
        .expect(({ body }) => {
          expect(body).to.have.nested.property('token');
        })
    });
  });
})
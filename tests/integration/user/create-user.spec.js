import '../../common.js'
import chance from '../../helpers/chance.js';
import supertest from 'supertest';
import { expect } from 'chai';

describe('Create User', async function () {
  describe('WHEN required input values are provided', async function () {
    it('SHOULD create an user successfully', async function () {
      const input = {
        username: "elrazinmjo@gmail.com",//chance.email(),
        password: "elrazinmjo@gmail.com",//chance.string({ length: 8 }),
        name: {
          firstName: "El-Razin", //chance.first(),
          lastName: "Jo", //chance.last(),
          middleInitial: "M", //chance.word().slice(0, 1).toUpperCase(),
        },
        roles: ['Admin'],
      };

      const server = supertest(this.server);

      await server
        .post('/user')
        .send(input)
        .set('Accept', 'application/json')
        .expect(201)
        .expect(({ body }) => {
          expect(body).to.have.nested.property('username').to.equal(input.username);
          expect(body).to.have.nested.property('name.firstName').to.equal(input.name.firstName);
          expect(body).to.have.nested.property('name.lastName').to.equal(input.name.lastName);
          expect(body).to.have.nested.property('name.middleInitial').to.equal(input.name.middleInitial);
        })
    });
  });
})
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('acronyms feed endpoint', function () {
  it('responds with a 206 http status code and queryset', async function () {
    chai
      .request(app)
      .get('/acronym')
      .then((res) => {
        expect(res).to.have.status(206);
        expect(res.body).to.be.a('array');
        if (error) done(error);
        done();
      });
  });
});

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('World Texting Foundation', () => {
  it('api is operational', () => {
    expect(app).to.be.a('function');
    if (error) done(error);
    done();
  });

  it('responds with a 200 http status code', (done) => {
    chai
      .request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        if (error) done(error);
        done();
      });
  });
});

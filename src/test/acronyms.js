/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { Token } from '../core/utils';

chai.use(chaiHttp);

let acronymId;

const token = Token.createToken('randomText');

const acronym = {
  acronym: 'API',
  definition: 'Application Programming Interface',
};

const updateAcronym = {
  acronym: 'DOM',
  definition: 'Document Object Model',
};

describe('acronyms list endpoint', function () {
  it('endpoint should respond with a 206 http status code and queryset', async function () {
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

describe('acronym creation endpoint', function () {
  it('endpoint should create a new acronym', async function () {
    chai
      .request(app)
      .post('/acronym')
      .set('Authorization', `Bearer ${token}`)
      .send(acronym)
      .then((res) => {
        acronymId = res.body.id;
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('array');
        expect(res.body.acronym).to.be.equal(`${acronym.acronym}`);
        expect(res.body.definition).to.be.equal(`${acronym.definition}`);
        if (error) done(error);
        done();
      });
  });
});

describe('acronym update endpoint', function () {
  it('endpoint should update a specified acronym', async function () {
    chai
      .request(app)
      .post(`/acronym/${acronymId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(acronym)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('array');
        expect(res.body.acronym).to.be.equal(`${updateAcronym.acronym}`);
        expect(res.body.definition).to.be.equal(`${updateAcronym.definition}`);
        if (error) done(error);
        done();
      });
  });
});

describe('acronym deletion endpoint', function () {
  it('endpoint should delete a specified acronym', async function () {
    chai
      .request(app)
      .post(`/acronym/${acronymId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(acronym)
      .then((res) => {
        expect(res).to.have.status(200);
        if (error) done(error);
        done();
      });
  });
});

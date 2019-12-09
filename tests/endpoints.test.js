const chai = require('chai');
const request = require('supertest');
const { app, server } = require('../server/index.js');

const expect = chai.expect;

describe('GET /about/:ticker endpoint tests', () => {
  it('should return status code 200', done => {
    request(app)
      .get('/about/RSTU')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('should return a JSON object', done => {
    request(app)
      .get('/about/RSTU')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('should return information about the stock', done => {
    request(app)
      .get('/about/RSTU')
      .end((err, res) => {
        expect(res.body.about).to.be.an('string');
        expect(res.body.employees).to.be.an('number');
        expect(res.body.CEO).to.be.an('string');
        expect(res.body.headquarters).to.be.an('string');
        done();
      });
  });
});

server.close();

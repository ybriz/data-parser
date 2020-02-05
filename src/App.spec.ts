import * as chai from 'chai';
import * as supertest from 'supertest'
import app from './App'

const request = supertest(app);
const expect = chai.expect;
const should = chai.should();

describe('POST /api/v1', function() {
    const mockResponse = {
      statusCode: 200,
      data: {
          firstName: "JOHN0000",
          lastName: "MICHAEL000",
          clientId: "9994567"
      }
    }
    it('responds with json', function(done) {
      request
        .post('/api/v1')
        .send({
          data: "JOHN0000MICHAEL0009994567"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

    it('responds with the right format', function(done) {
      request
        .post('/api/v1')
        .send({
          data: "JOHN0000MICHAEL0009994567"
        })
        .expect(200, mockResponse, done);
    });
});

describe('POST /api/v2', function() {
  const mockResponse = {
    statusCode: 200,
    data: {
        firstName: "JOHN",
        lastName: "MICHAEL",
        clientId: "999-4567"
    }
  }
  
  it('responds with json', function(done) {
    request
      .post('/api/v2')
      .send({
        data: "JOHN0000MICHAEL0009994567"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('responds with the right format', function(done) {
    request
      .post('/api/v2')
      .send({
        data: "JOHN0000MICHAEL0009994567"
      })
      .expect(200, mockResponse, done);
  });
});

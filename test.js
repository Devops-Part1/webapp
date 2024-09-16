// const { describe } = require('./models/assignmentModel');
// const app = require('./server');

// const { response } = require('./server');
// const {expect} = require('chai')
// chai.use(chaiHttp)

// describe('Health Check Endpoint', () => {
//     it('should return a 200 status code on successful health check', async () => {
//       const res = await chai.request(app).get('/healthz');
//       expect(res).to.have.status(200);
//     })})
// console.log(describe)

const supertest = require('supertest');
const {app} = require('./server');

var assert = require('assert');


describe('Testing our Application', function () {
    it('Simple assert test', function () {
        assert.equal(1, 1);
    });

    it('GET /healthz end point of the application', (done) => {
        supertest(app)
            .get('/healthz')
            .expect(200)
            .end((err, response) => {
                if (err) return done(err)
                return done()
            })
    })
    
});
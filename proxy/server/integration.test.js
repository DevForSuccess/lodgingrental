const request = require('supertest')('http://localhost:5003');

describe('GET /users', function () {
  it('responds with json', function (done) {
    return request
      .get('/api/hostedBy/1')
      .expect(res => {
        expect(res.body.hostId).toBe(46);
        done();
      })
      .catch(err => done(err))
  });
});
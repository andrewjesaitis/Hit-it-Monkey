var mongoose = require('mongoose'),
 request = require('supertest'),
 app = require('../app'),
 Trade = mongoose.model('Trade'),
 agent = request(app);

/**
 * Trades Api Tests
 */

describe('Trades', function () {
  var trade_mock = {
    "probability_of_profit": 0.5,
    "legs": [
      {
        "type": "stock",
        "symbol": "FB",
        "qty": 100,
        "openAmount": -2456.30,
        "closeAmount": null,
        "openedAt": "2013-06-02T10:47:12",
        "closedAt": "2013-06-02T10:47:12"
      }
    ]
  };

  beforeEach(function() {
    Trade.find().remove();
  });


  describe('GET /api/trades', function () {
    it('should respond with Content-Type application/json and status 200', function (done) {
      agent
      .get('/api/trades')
      .end( function (err, res) {
        if (err) return done(err);
        expect(res.header['content-type']).toBe('application/json');
        expect(res.statusCode).toBe(200);
        done();
      });

    });
  });

  describe('GET /api/trades', function () {
    it('should not contain trades', function (done) {
      agent
      .get('/api/trades')
      .end( function (err, res) {
        if (err) return done(err);
        expect(res.body.objects).toEqual([]);
        expect(res.body.meta.count).toBe(0);
        done();
      });

    });
  });

  describe('POST /api/trades', function (){
    it('should add a trade to the database', function (done) {
      agent
        .post('/api/trades/')
        .send(trade_mock)
        .end(function(err, res){
          if (err) return done(err);
          expect(res.header.location).toMatch(/^\/api\/trades\/\w*\/$/);
          expect(res.statusCode).toBe(201);
          done();
        });
    });
  });

  describe('After POSTing a trade', function(){
    it('should be GETable by id', function(done) {
      // I feel like there must be a better way
      agent.post('/api/trades/').send(trade_mock)
        .end(function(err, res) {
          if (err) return done(err);
          agent
            .get(res.headers.location)
            .end( function (err, res) {
              if (err) return done(err);
              expect(res.header['content-type']).toBe('application/json');
              expect(res.statusCode).toBe(200);
              console.log(res.body)
              expect(res.body.legs[0].symbol).toBe('FB');
              done();
            });
        });
    });
    it('should be in the collection', function(done) {
      agent.post('/api/trades/').send(trade_mock)
        .end(function(err, res) {
          if (err) return done(err);
          location = res.header.location;
        });
      agent
      .get('/api/trades/')
      .end( function (err, res) {
        if (err) return done(err);
        console.log(res.body.objects)
        expect(res.body.objects[0].legs[0].symbol).toBe('FB');
        expect(res.body.meta.count).toBe(1);
        done();
      });
    });
  });
});

var mongoose = require('mongoose'),
	Trade = mongoose.model('Trade');

exports.getAll = function(req, res){
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
  var perPage = 30;
  var options = {
    perPage: perPage,
    page: page
  };

  Trade.list(options, function(err, trades) {
    Trade.count().exec(function (err, count) {
      res.json({
        title: 'Trades',
        trades: trades,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    });
  });
};

exports.getOne = function(req, res){
	Trade.load(req.params.id, function(err, trade){
		res.json({
	    trade: trade
	  });
	});
};

exports.create = function (req, res) {
  var trade = new Trade(req.body);
  trade.save(function(err, trade){
  	res.json({
      trade: trade
  	});
  });
};

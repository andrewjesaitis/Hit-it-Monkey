var mongoose = require('mongoose');

var TradeSchema = new mongoose.Schema({
 probabilityOfProfit: String,
 legs: [LegSchema]
});

var LegSchema = new mongoose.Schema({
  "type": String,
  "symbol": String,
  "qty": Number,
  "strike": Number,
  "openAmount": Number,
  "closeAmount": Number,
  "openedAt": Date,
  "closedAt": Date
 });

TradeSchema.statics = {

  /**
   * Find trade by id
   *
   * @param {ObjectId} id
   * @param {Function} cb
   * @api private
   */

  load: function (id, cb) {
    this.findOne({ _id : id })
      .exec(cb)
  },

  /**
   * List trades
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  list: function (options, cb) {
    var criteria = options.criteria || {}

    this.find(criteria)
      .sort({'createdAt': -1}) // sort by date
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      .exec(cb)
  }

}

mongoose.model( 'Trade', TradeSchema );

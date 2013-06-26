var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/**
 * App Configuration
 */

/**** all environments ****/
app.set('port', process.env.PORT || 3000);

//views are views that are rendered server-side
app.set('views', __dirname + '/views');
// remap html extension to the ejs engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'static')));
app.use(app.router);
app.use(express.errorHandler());


/**
 * Routes
 */
app.get('/', routes.index);
app.get('/api/trades', api.trades);
app.get('/api/trade/:id', api.trade);
// app.get('*', routes.index);


/**
 * All incoming requests to this port will be directed to the `app`. `app` is a function that when executed
 * calls the first middleware in use and works it's way down the stack.
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

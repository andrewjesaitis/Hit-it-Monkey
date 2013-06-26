/*
 * Router for server side "rendered" home.
 * All angular templates are served as static files.
 *
 */

exports.index = function(req, res){
  res.render('index');
};


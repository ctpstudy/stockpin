
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '支点启航工作室' });
};
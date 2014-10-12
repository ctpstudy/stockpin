
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '深圳市支点启航软件研发工作室' });
};
exports.nr = function(req, res){
    res.render('nr', { title: '深圳市支点启航软件研发工作室' });
};
exports.contact = function(req, res){
    res.render('contact', { title: '深圳市支点启航软件研发工作室' });
};
exports.aboutus = function(req, res){
    res.render('aboutus', { title: '深圳市支点启航软件研发工作室' });
};
exports.msgBoard = function(req, res){
    res.render('msgBoard', { title: '深圳市支点启航软件研发工作室' });
};

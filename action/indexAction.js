module.exports = async (req, res, next) => {
	var json = {title: 'Expressccc'};
  	//res.render('index', { title: 'Expressccc'; name: 'lixueyao'});
  	res.render('index', json);
}

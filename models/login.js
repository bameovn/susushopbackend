var db = require('./manageDB');

exports.login = function (value, callback) {
	var query = "select id, firstname, email, password, role, lastname, phone, address from taikhoan Where email = ? and password = ?";
	console.log(value.email);
	console.log(value.password);
	db.executeParamsQuery(query, [value.email, value.password], function(err, data){
		callback(err, data);
	});
}
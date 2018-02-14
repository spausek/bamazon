const mysql = require('mysql');
TABLE ='Products';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kylekyle',
  database: 'bamazon_db'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  connection.query(`select id, product_name, department_name, price, stock FROM ${TABLE}`, function(error, data){
		if (error) {
			console.error(error);
		}
		console.log(data);
	})
});


const mysql = require('mysql');
const inquirer = require('inquirer');
TABLE ='Products';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kylekyle',
  database: 'bamazon_db'
});

function start(){
	connection.query(`SELECT * FROM ${TABLE}`, (error, data) => {
		if (error) {
			console.error(error);
		}
		console.log(data);
		console.log('Welcome to Bamazon\'s Adventure Emporium serving all your RPG needs!')
	})
     



inquirer
.prompt([
		{
			name: 'item',
       		type: 'number',
        	message:'Please select the ID of the item you would like to purchase'
		},

		{
			name:'amountToPurchase',
			type: 'number',
			message:'Please select the quantity you would like to purchase'
		},
]) 

.then((answer) =>{
	var selection = answer.item;
	var amount = Number(answer.amountToPurchase);

	if (data[selection].stock >= amount){
		connection.query('UPDATE PRODUCTS SET ? WHERE', [
			{stock: (data[selection].stock - amount)},
			{id: answer.item}], function (err, result){
				if (err) throw err,
				console.log('Order placed succesfully! Your items will be shipped to you in 2-3 days!');
			})
	}

})

}

start();







		



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

.then(function(answer){
	var purchase = answer.item;
	var amount = answer.amountToPurchase;
	var total = parseFloat(((data[purchase].price)*amount).toFixed(2));

	if(data[purchase].stock >= amount){
		connection.query('UPDATE Products SET ? WHERE ?',[
		{stock: (data[purchase].stock - amount)},
		{id:answer.item}
		], function (err, result){
			if(err) throw err;
			console.log('Purchase Made! Your total is $' + total.toFixed(2) + '. Your items(s) will be shipped to a location of your choice in a few days!')
		});
	   }

	   else{
	   	console.log('Sorry we don\'t have enough in our inventory =(');
	   }
})

});

}

start();







		



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
		console.log('Welcome to Bamazon\'s Adventure Emporium serving all your RPG needs!')

		for (var i = 0; i < data.length; i++) {
			console.log(' ID ' + data[i].id + ' Item ' + data[i].product_name + ' Department ' + data[i].department_name + ' Price ' + data[i].price + ' Stock ' + data[i].stock);
			
		}
	
		//console.log(data);
		
     
inquirer.prompt([
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
	var purchase = (answer.item)-1;
	var amount = answer.amountToPurchase;
	var total = parseFloat(((data[purchase].price)*amount).toFixed(2));

	if(data[purchase].stock >= amount){
		connection.query('UPDATE Products SET ? WHERE ?',[
		{stock: (data[purchase].stock - amount)},
		{id:answer.item}
		], function (err, result){
			if(err) throw err;
			
		});
		console.log('Purchase Made! Your total is $' + total.toFixed(2) + '. Your items(s) will be shipped to a location of your choice in a few days!')
	   }

	   else{
	   	console.log('Sorry we don\'t have enough in our inventory =(');
	   }

	   restart();

})

});

}

function restart(){
	inquirer.prompt(
	{
		name: 'buyMore',
		type: 'confirm',
		message: 'Would you like to make another purchase?'

	})
	.then(function(answer){
		if(answer.buymore){
			start();
		}

		else{
			console.log('Keep grinding and see us again when you level up!');
		}
	});

}

start();







		



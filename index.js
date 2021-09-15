// Activity:

const express = require('express');

const app = express()

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/home', (req, res) => {
	res.send("Welcome to the homepage.")
})

let users = [
	{
		"name": "Paulo",
		"username": "ptfer",
		"email": "ptfer@mail.com"
	},
	{
		"name": "Melea",
		"username": "mswan",
		"email": "mswan@mail.com"
	},
	{
		"name": "Aaron",
		"username": "atfer",
		"email": "atfern@mail.com"
	},
];

app.get('/users', (req, res) => {
	res.send(users)
})

app.delete('/delete-user', (req, res) => {
	console.log(req.body)

	found = false;

	console.log("initial found: " + found)


	console.log("users.length: " + users.length)
	for(let i=0; i<users.length; i++){
		console.log("***: " + users[i].username)
	}
	for(let i=0; i<users.length; i++){
		console.log("i: " + i)
		console.log("found: " + found)

		console.log("users[i].username: " + users[i].username)
		if(req.body.username == users[i].username){
			users.splice(i,1)
			found = true;
			res.status(404).send(`User ${req.body.username} successfully deleted.`)
		} 
	}

	console.log("AFTER LOOP FOUND: " + found)

	if (!found) {
		console.log("!found")
		res.send("user not found.")
	}
	
})


app.listen(port, () => console.log(`Server is running at port ${port}`))
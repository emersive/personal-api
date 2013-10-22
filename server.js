var express = require('express');
// var person = require('./person');

var person =	{
				"name":"Britton Stanfill",
				"location":"Provo, UT",
				"hobbies": [
							'soccer', 'design', 'coding'],
				"occupations": [
								"Frontend Developer and Designer", 
								"Lead UX Designer",
								"Multimedia Intern", 
								"Designer and Webmaster", 
								"Lead Videographer",
								"QA Tester", 
								"Associate Producer and Designer" 
								],
				"mentions": [	],
				"friends":[],
				"skills": [
				{
					"id":4,
					"name": 'JavaScript',
					"experience": 'Intermediate'
				}
				]

				};


var app = express();
var port = 3000;

app.configure(function(){
	app.use(express.bodyParser());
	app.use(function(response, request, next){
		response.header('Access-Control-Allow-Origin', '*');
		response.header('Access-Control-Allow-Methods','Options');
		response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
});

	// GET Requests 

	app.get('/person',function(request,response){
		response.send(person.name);
		console.log(person.name);
	});

	app.get('/location',function(request,response){
		response.send(person.location);
		console.log(person.location);
	});

	app.get('/hobbies',function(request,response){
		var order = request.query.order;
		var sortedHobbies = person.hobbies.sort();
		if(order=='desc') {
			sortedHobbies = sortedHobbies.reverse();
		}
		else if(order == 'asc'){
			sortedHobbies = sortedHobbies.sort();
		}
		response.send(sortedHobbies);
	});

	app.get('/occupations',function(request,response){
		response.send(person.occupations);
		console.log(person.occupations);
	});

	app.get('/mentions',function(request,response){
		response.send(person.mentions);
		console.log(person.mentions);
	});

	app.get('/friends',function(request,response){
		response.send(person.friends);
		console.log(person.friends);
	});

	app.get('/skills',function(request,response){
		response.send(person.skills);
		console.log(person.skills);
	});

	//get by id

	app.get('/skills/:id', function(request, response){
        var skill = request.params.id;
        for(var i = 0; i < person.skills.length; i++){
                if(person.skills[i].id == skill){
                        response.send(person.skills[i]);
                }
        }
        response.end();
        console.log('skills served');

});

	// app.get('/person/:first/:second/:third',function(request,response){
	// console.log('param vars');
	// cosnole.log(req.params);
	// });

	// Post Requests

	app.post('/mentions',function(request,response){
		response.send('test');
		person.mentions.push(request.body.mentions); // I added mentions, because without it I learned that it would just create new arrays within mentions.
		console.log("test");

		app.get('/mentions',function(request,response){
		response.send(person.mentions);
		console.log(person.mentions);
		});
	});

	app.post('/friends',function(request,response){
		response.send('test');
		person.friends.push(request.body.friends); // I added mentions, because without it I learned that it would just create new arrays within mentions.
		console.log("test");

		app.get('/friends',function(request,response){
		response.send(person.friends);
		console.log(person.friends);
		});
	});

	app.post('/skills',function(request,response){
		response.send('test');
		person.skills.push(request.body.skills); // I added mentions, because without it I learned that it would just create new arrays within mentions.
		console.log("test");

		app.get('/skills',function(request,response){
		response.send(person.skills);
		console.log(person.skills);
		});
	});






app.listen(port);
console.log('Server running at ' + port);


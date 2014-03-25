module.exports = function(server) {

  // Create an API namespace, so that the root does not 
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		// Return fixture data for '/api/profile/:id'
		server.get('/profiles/:id', function(req, res) {
			var profile = {
				"profile": {
					"id": 			1,
					"name": 		"Jim Hall",
					"skills": 		["1", "2"],
					"jobs": 	["1", "2"]
				},
			
				"skills": [{
					"id": "1",
					"title": "Javascript",
					"duration": 3
				},{
					"id": "2",
					"title": "Design Patterns",
					"duration": 3
				},{
					"id": "3",
					"title": "Handlebars",
					"duration": 2.5
				},{
					"id": "4",
					"title": "Ember JS",
					"duration": 1
				},{
					"id": "5",
					"title": "Ember Data",
					"duration": 1
				},{
					"id": "6",
					"title": "Node JS",
					"duration": 1
				},{
					"id": "7",
					"title": "Express JS",
					"duration": 1
				},{
					"id": "10",
					"title": "Sails JS",
					"duration": 0.5
				},{
					"id": "9",
					"title": "Require JS",
					"duration": 1
				},{
					"id": "8",
					"title": "Grunt",
					"duration": 1
				},{
					"id": "9",
					"title": "Git",
					"duration": 2
				}],

				"jobs": [{
					"id": "1",
					"position": "Javascript Developer",
					"company": "Qualified (part of Kaplan)",
					"startDate": "August, 2013",
					"endDate": "March, 2014",
					"description": "This group inside of Kaplan was building an application using <strong>Ember</strong> JS with <strong>Ember Data</strong> on top of a <strong>Node</strong> top tier server.  I used these technologies and more to build a powerful application.  We practiced the <strong>Scrum</strong> methodology and I served as our team's <strong>Scrum Master</strong>.  ",
					"skills": ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

				},{
					"id": "2",
					"position": "Front End Developer",
					"company": "Tribune Inc.",
					"startDate": "January, 2013",
					"endDate": "August, 2013",
					"description": "This is a job description",

				},{
					"id": "3",
					"position": "Front End Developer",
					"company": "Sears Holdings",
					"startDate": "August, 2012",
					"endDate": "January, 2013",
					"description": "This is a job description",

				},{
					"id": "4",
					"position": "Web Developer",
					"company": "C|Change Inc.",
					"startDate": "July, 2011",
					"endDate": "August, 2012",
					"description": "This is a job description",

				},{
					"id": "5",
					"position": "Graphic Designer",
					"company": "AlphaMetrix LLC",
					"startDate": "December, 2009",
					"endDate": "July, 2011",
					"description": "This is a job description",

				}]
			}

			res.send(profile);
		});

		server.get('/sections/', function(req, res) {
			var sections = {
				"sections": [{
					"id": "1",
					"title": "Javascript",
					"description": "<p class=\"colum-content\">My focus this last year has been <strong>Ember application development</strong>.  This <strong>MVVM framework</strong> is <a href=\"https://www.youtube.com/watch?v=VI__nGPT9kk\" target=\"_blank\">arguably the best</a> for team based application development.</p><p class=\"colum-content\">I've also worked with <strong>Node, <a href=\"https://github.com/jimbol/ember-template-middleware\" target=\"_blank\">Express</a>, Grunt, and Ember App Kit</strong>.  These powerful serverside tools are baked into my preferred build processes.</p>",
					"skills": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					"jobs": ["1", "2"]

				},{
					"id": "2",
					"title": "UI",
					"description": "<p class=\"colum-content\">My focus this last year has been <strong>Ember application development</strong>.  This <strong>MVVM framework</strong> is <a href=\"https://www.youtube.com/watch?v=VI__nGPT9kk\" target=\"_blank\">arguably the best</a> for team based application development.</p><p class=\"colum-content\">I've also worked with <strong>Node, <a href=\"https://github.com/jimbol/ember-template-middleware\" target=\"_blank\">Express</a>, Grunt, and Ember App Kit</strong>.  These powerful serverside tools are baked into my preferred build processes.</p>",
					"skills": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					"jobs": ["1", "2"]

				}]
			}

			res.send(sections);
		});

	});

};
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
					"duration": 3.5
				},{
					"id": "2",
					"title": "Frameworks",
					"duration": 3
				},{
					"id": "3",
					"title": "Ember",
					"duration": 2.5
				},{
					"id": "4",
					"title": "Ember Data",
					"duration": 1
				},{
					"id": "5",
					"title": "MVVM",
					"duration": 1
				},{
					"id": "6",
					"title": "jQuery",
					"duration": 3.5
				},{
					"id": "7",
					"title": "Design Patterns",
					"duration": 2
				},{
					"id": "10",
					"title": "Application Architecture",
					"duration": 0.5
				},{
					"id": "9",
					"title": "Web Audio API",
					"duration": 1
				},{
					"id": "8",
					"title": "History API",
					"duration": 1
				},{
					"id": "9",
					"title": "Local Storage API",
					"duration": 2
				},{
					"id": "10",
					"title": "Geolocation API",
					"duration": 2
				},{
					"id": "11",
					"title": "JSON",
					"duration": 2
				},{
					"id": "12",
					"title": "CSS3 / CSS",
					"duration": 4.5
				},{
					"id": "13",
					"title": "HTML5 / HTML",
					"duration": 4.5
				},{
					"id": "14",
					"title": "Stylus",
					"duration": 2
				},{
					"id": "15",
					"title": "SASS",
					"duration": 2
				},{
					"id": "16",
					"title": "Handlebars / Mustache",
					"duration": 2
				},{
					"id": "17",
					"title": "JSTL",
					"duration": 2
				},{
					"id": "18",
					"title": "PHP",
					"duration": 2
				},{
					"id": "19",
					"title": "JSP",
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
					"title": "Front End Development",
					"subSections": ["1", "2"]
				},{
					"id": "2",
					"title": "Server Side Development",
					"subSections": ["3", "4"]
				}],

				"subSections": [{
					"id": "1",
					"title": "Javascript",
					"description": "<p class=\"colum-content\">My focus this last year has been <strong>Ember application development</strong>.  This <strong>MVVM framework</strong> is <a href=\"https://www.youtube.com/watch?v=VI__nGPT9kk\" target=\"_blank\">arguably the best</a> for team based application development.</p><p class=\"colum-content\">I also enjoy low level work and have built many small tools in plain JS.  This has given me a strong understanding of the underlying tools and <strong>APIs</strong> in Javascript.</p>",
					"skills": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					"jobs": ["1", "2"]

				},{
					"id": "2",
					"title": "HTML5 / CSS3",
					"description": "<p class=\"colum-content\">Having good clean markup and styles is imperative for a smooth operating application.  My approach is to build simple reusable structures, starting at a basic level and getting more granular as needed so as not to repeat work.</p><p class=\"colum-content\">For styles, I prefer using tools like Stylus or SASS which compile to CSS3, because they are more readable and structured.  Similarly, using Handlebars, JSTL, or other templating libraries which render to HTML5 can dramatically reduce a code base and make it more maintainable.</p><p class=\"colum-content\">My favorite part about CSS3 is the ability to add animation without touching Javascript.  Animations make for better interface by giving context to the user. </p>",
					"skills": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					"jobs": ["1", "2"]

				},{
					"id": "3",
					"title": "Node.js",
					"description": "<p class=\"colum-content\">With the growing popularity of a Node based back end, I have been given access to a powerful set of API and build process tools like Express, Grunt and Ember App Kit.  This breaks the barrier between front and back end and has allowed me to jump back and forth seamlessly.</p><p class=\"colum-content\">I have built template precompiler middleware that ensures the developer always has the latest code, without having to do a whole build.  I’ve used Grunt to take this to the next level, automatically updating the DOM with each saved change.  This site was built using Ember App Kit and the styles and Javascript has been minified into production ready code using Grunt.</p><p class=\"colum-content\"></p>",
					"skills": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					"jobs": ["1", "2"]

				},{
					"id": "4",
					"title": "Other",
					"description": "<p class=\"colum-content\">I have also used PHP and JSP to help build APIs and standard thin-client MCV websites.  I do not have extensive experience with either but I am a quick study and have made myself a valuable asset by learning what it needed to get the job done</p>",
					"skills": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					"jobs": ["1", "2"]

				}]
			}

			res.send(sections);
		});

	});

};
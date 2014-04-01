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
					"skills": 		[
						"5336f1ceab99aeec3d1c2914",
						"5336f1f3ab99aeec3d1c2915",
						"5339bb417f9222e437ac9535",
						"5339bb7a7f9222e437ac9537",
						"5339bb8a7f9222e437ac9538",
						"5339bb9a7f9222e437ac9539",
						"5339bbaa7f9222e437ac953a",
						"5339bbce7f9222e437ac953b",
						"5339bbdd7f9222e437ac953c",
						"5339bbec7f9222e437ac953d",
						"5339bbfe7f9222e437ac953e",
						"5339bc417f9222e437ac953f",
						"5339bc527f9222e437ac9540",
						"5339bc687f9222e437ac9541",
						"5339bc707f9222e437ac9542",
						"5339bc837f9222e437ac9543",
						"5339bc987f9222e437ac9544",
						"5339bca27f9222e437ac9545",
						"5339bcb17f9222e437ac9546",
						"5339bcbc7f9222e437ac9547",
						"5339bcc67f9222e437ac9548",
						"5339bcd37f9222e437ac9549",
						"5339bcde7f9222e437ac954a",
						"5339bced7f9222e437ac954b",
						"5339bcfc7f9222e437ac954c",
						"5339bd137f9222e437ac954d"
					],
					"jobs": 	[
						"5339c303e552f07738c99842",
						"5339c31de552f07738c99843",
						"5339c329e552f07738c99844",
						"5339c33ce552f07738c99845",
						"5339c352e552f07738c99846",
						"5339c361e552f07738c99847"
					],
					"sections": ["5339c6c307bcbf8c382f7ec6", "5339c6d907bcbf8c382f7ec7", "5339c70107bcbf8c382f7ec8", "5339c71807bcbf8c382f7ec9"],
					"subSections": ["5339c61b07bcbf8c382f7ec2", "5339c64107bcbf8c382f7ec3", "5339c65a07bcbf8c382f7ec4", "5339c67407bcbf8c382f7ec5"]
				},
			
				"skills": [{ 
					"id": "1",
					"title": "Javascript",
					"duration": 3.5
				},{
					"id": "2",
					"title": "Frameworks",
					"duration": 1
				},{
					"id": "3",
					"title": "Ember",
					"duration": 1
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
					"id": "8",
					"title": "Application Architecture",
					"duration": 1
				},{
					"id": "9",
					"title": "APIs",
					"duration": 1
				},{
					"id": "10",
					"title": "HTML5 APIs",
					"duration": 1
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
					"duration": 1
				},{
					"id": "15",
					"title": "SASS",
					"duration": 1
				},{
					"id": "16",
					"title": "Handlebars / Mustache",
					"duration": 2.5
				},{
					"id": "17",
					"title": "JSTL",
					"duration": 1
				},{
					"id": "18",
					"title": "PHP",
					"duration": 1
				},{
					"id": "19",
					"title": "JSP",
					"duration": 1
				},{
					"id": "20",
					"title": "Express",
					"duration": 1
				},{
					"id": "21",
					"title": "Grunt",
					"duration": 1
				},{
					"id": "22",
					"title": "Middleware",
					"duration": 1
				},{
					"id": "23",
					"title": "Ember App Kit",
					"duration": 1
				},{
					"id": "24",
					"title": "Objective C / Cocoa",
					"duration": 1
				},{
					"id": "25",
					"title": "Adobe Creative Suite",
					"duration": 10
				},{
					"id": "26",
					"title": "ActionScript 3",
					"duration": 3
				}],

"jobs": [{
	"position": "Javascript Developer",
	"company": "Qualified (part of Kaplan)",
	"startDate": "August, 2013",
	"endDate": "March, 2014",
	"description": "This group inside of Kaplan was building an application using <strong>Ember</strong> JS with <strong>Ember Data</strong> on top of a <strong>Node</strong> top tier server.  I used these technologies and more to build a powerful application.  We practiced the <strong>Scrum</strong> methodology and I served as our team's <strong>Scrum Master</strong>.",
	"skills": ["5336f1ceab99aeec3d1c2914",
			"5336f1f3ab99aeec3d1c2915",
			"5339bb417f9222e437ac9535",
			"5339bb7a7f9222e437ac9537",
			"5339bb8a7f9222e437ac9538",
			"5339bb9a7f9222e437ac9539",
			"5339bbaa7f9222e437ac953a",
			"5339bbce7f9222e437ac953b",
			"5339bbdd7f9222e437ac953c", 
			"5339bbfe7f9222e437ac953e",
			"5339bc417f9222e437ac953f",
			"5339bc527f9222e437ac9540",
			"5339bc687f9222e437ac9541",
			"5339bc707f9222e437ac9542",
			"5339bc837f9222e437ac9543", 
			"5339bcbc7f9222e437ac9547",
			"5339bcc67f9222e437ac9548",
			"5339bcd37f9222e437ac9549",
			"5339bcde7f9222e437ac954a"]

},{
	"position": "Front End Developer",
	"company": "Tribune Co.",
	"startDate": "January, 2013",
	"endDate": "July, 2013",
	"description": "Built useful small <strong>JavaScript libraries</strong> used by our team.  Created <strong>jQuery modules</strong> used throughout site.  Lead small team of front end developers.  Performed code reviews and helped other developers solve problems.  Created templates using JSTL and JSP.",
	"skills": ["5336f1ceab99aeec3d1c2914", 
		"5339bb9a7f9222e437ac9539",
		"5339bbaa7f9222e437ac953a",
		"5339bbce7f9222e437ac953b",
		"5339bbdd7f9222e437ac953c",
		"5339bbec7f9222e437ac953d",
		"5339bbfe7f9222e437ac953e",
		"5339bc417f9222e437ac953f",
		"5339bc527f9222e437ac9540", 
		"5339bc987f9222e437ac9544", 
		"5339bcb17f9222e437ac9546"]

},{
	"position": "Front End Developer",
	"company": "Sears Holdings",
	"startDate": "August, 2012",
	"endDate": "January, 2013",
	"description": "Worked on a large team pinpointing, debugging and fixing javascript and css issues and creating promotional pages. Rebuilt the JavaScript module loader used by the team to render the home page on my own initiative.  Spent time learning the ins and outs of Javascript.",
	"skills": ["5336f1ceab99aeec3d1c2914", 
		"5339bb9a7f9222e437ac9539", 
		"5339bbaa7f9222e437ac953a", 
		"5339bbfe7f9222e437ac953e",
		"5339bc417f9222e437ac953f",
		"5339bc527f9222e437ac9540", 
		"5339bc837f9222e437ac9543", 
		"5339bcfc7f9222e437ac954c"]

},{
	"position": "Co-founder and Developer",
	"company": "Pander Commander",
	"startDate": "March, 2012",
	"endDate": "February, 2013",
	"description": "Brought together a small group of talented developers to create a social startup.  Build parts of our javascript library and plugins. Built PHP models with MySQL queries for our CRUD system.  Began work on an iOS version of our application.",
	"skills": ["5336f1ceab99aeec3d1c2914", 
		"5339bb9a7f9222e437ac9539",
		"5339bbaa7f9222e437ac953a",
		"5339bbce7f9222e437ac953b",
		"5339bbdd7f9222e437ac953c", 
		"5339bbfe7f9222e437ac953e",
		"5339bc417f9222e437ac953f",
		"5339bc527f9222e437ac9540", 
		"5339bca27f9222e437ac9545", 
		"5339bced7f9222e437ac954b", 
		"5339bcfc7f9222e437ac954c"]

},{
	"position": "Web Developer",
	"company": "C|Change Inc.",
	"startDate": "July, 2011",
	"endDate": "July, 2012",
	"description": "Sole developer for 14 person marketing company. Built client and experimental websites.  Taught myself Objective C and developed two iPhone apps.   Designed print media, interfaces, and motion graphics.",
	"skills": ["5336f1ceab99aeec3d1c2914", 
		"5339bb9a7f9222e437ac9539", 
		"5339bbaa7f9222e437ac953a", 
		"5339bc417f9222e437ac953f", 
		"5339bc527f9222e437ac9540", 
		"5339bca27f9222e437ac9545", 
		"5339bced7f9222e437ac954b", 
		"5339bcfc7f9222e437ac954c"]

},{
	"position": "Graphic Designer",
	"company": "AlphaMetrix LLC",
	"startDate": "December, 2009",
	"endDate": "July, 2011",
	"description": "Worked on a small team doing interface, logo, and print design.  Did web and flash development, filming, production, and motion graphics.  Worked in Wordpress and a web content editor.",
	"skills": ["5339bc417f9222e437ac953f", 
	"5339bc527f9222e437ac9540", 
	"5339bcfc7f9222e437ac954c", 
	"5339bd137f9222e437ac954d"]
}]
			}

			res.send(profile);
		});

		server.get('/sections/', function(req, res) {
			var sections = {
				"sections": [{
					"id": "1",
					"slug": "front-end",
					"type": "inverted",
					"title": "Front End Development",
					"subSections": ["5339c61b07bcbf8c382f7ec2", "5339c64107bcbf8c382f7ec3"]
				},{
					"id": "2",
					"slug": "server-side",
					"title": "Server Side Development",
					"subSections": ["5339c65a07bcbf8c382f7ec4", "5339c67407bcbf8c382f7ec5"]
				},{
					"id": "3",
					"slug": "mentorship",
					"type": "inverted",
					"title": "Mentorship",
					"subSections": [],
					"description": "<p class=\"colum-content\">I believe there is nothing more important than <strong>sharing knowledge</strong>, especially when working with a team.  It improves the performance of individuals and, as a result, a team as a whole.  Whether it comes in the form of <strong>code reviews, structured training, or helping a developer</strong> with concepts that are new to them, I will always provide help (and I expect the same from my team mates).</p>"
				},{
					"id": "4",
					"slug": "contact",
					"title": "Contact",
					"subSections": [],
					"description": "<p class=\"colum-content\"><strong>I am currently looking for new work.</strong>  To get in touch, shoot me an email at <a href=\"mailto:jim.hall.dev@gmail.com\">jim.hall.dev@gmail.com</a> or find me on <a href=\"http://www.linkedin.com/pub/jim-hall/23/57/aa8/\" target=\"_blank\" class=\"icon linkedin\">LinkedIn</a> or <a href=\"https://github.com/jimbol\" target=\"_blank\" class=\"icon github\">GitHub</a>.</p><p class=\"colum-content\">Photo by <a href=\"http://elisalynnephotography.com\" target=\"_blank\">Elisa Lynne Photography</a></p>"
				}],

				"subSections": [{
					"id": "1",
					"title": "Javascript",
					"description": "<p class=\"colum-content\">My focus this last year has been <strong>Ember application development</strong>.  This <strong>MVVM framework</strong> is <a href=\"https://www.youtube.com/watch?v=VI__nGPT9kk\" target=\"_blank\">arguably the best</a> for team based application development.</p><p class=\"colum-content\">I also enjoy low level work and have built many small tools in plain JS.  This has given me a strong understanding of the underlying tools and <strong>APIs</strong> in Javascript.</p>",
					"skills": ["5336f1ceab99aeec3d1c2914", 
						"5336f1f3ab99aeec3d1c2915", 
						"5339bb417f9222e437ac9535",
						"5339bb7a7f9222e437ac9537",
						"5339bb8a7f9222e437ac9538",
						"5339bb9a7f9222e437ac9539",
						"5339bbaa7f9222e437ac953a",
						"5339bbce7f9222e437ac953b",
						"5339bbdd7f9222e437ac953c",
						"5339bbec7f9222e437ac953d",
						"5339bbfe7f9222e437ac953e"],
					"jobs": [
						"5339c303e552f07738c99842",
						"5339c31de552f07738c99843",
						"5339c329e552f07738c99844",
						"5339c33ce552f07738c99845",
						"5339c352e552f07738c99846"
					],
					"section": "1"

				},{
					"id": "2",
					"title": "HTML5 / CSS3",
					"description": "<p class=\"colum-content\">Having good clean markup and styles is imperative for a smooth operating application.  My approach is to build <strong>simple reusable structures</strong>, starting at a basic level and getting more granular as needed so as not to repeat work.</p><p class=\"colum-content\">For styles, I prefer using tools like <strong>Stylus</strong> or <strong>SASS</strong> which compile to CSS3, because they are more readable and structured.  Similarly, using <strong>Handlebars</strong>, JSTL, or other templating libraries which render to HTML5 can dramatically reduce a code base and make it more maintainable.</p><p class=\"colum-content\">My favorite part about CSS3 is the ability to add animation without touching Javascript.  Animations make for better interface by giving context to the user. </p>",
					"skills": [
						"5339bc417f9222e437ac953f",
						"5339bc527f9222e437ac9540",
						"5339bc687f9222e437ac9541",
						"5339bc707f9222e437ac9542",
						"5339bc837f9222e437ac9543",
						"5339bc987f9222e437ac9544"
					],
					"jobs": [
						"5339c303e552f07738c99842",
						"5339c31de552f07738c99843",
						"5339c329e552f07738c99844",
						"5339c33ce552f07738c99845",
						"5339c352e552f07738c99846",
						"5339c361e552f07738c99847"
					],
					"section": "1"

				},{
					"id": "3",
					"title": "Node.js",
					"description": "<p class=\"colum-content\">With the growing popularity of a Node based back end, I have been given access to a powerful set of API and build process tools like <strong>Express</strong>, <strong>Grunt</strong> and <strong>Ember App Kit</strong>.  This breaks the barrier between front and back end and has allowed me to jump back and forth seamlessly.</p><p class=\"colum-content\">I have built <a href=\"https://github.com/jimbol/ember-template-middleware\" target=\"_blank\">template precompiler middleware</a> that ensures the developer always has the latest code, without having to do a whole build.  I’ve used Grunt to take this to the next level, automatically updating the DOM with each saved change.  This site was built using Ember App Kit and the styles and Javascript has been minified into production ready code using Grunt.</p><p class=\"colum-content\"></p>",
					"skills": [
						"5339bcbc7f9222e437ac9547",
						"5339bcc67f9222e437ac9548",
						"5339bcd37f9222e437ac9549",
						"5339bcde7f9222e437ac954a"
					],
					"jobs": ["5339c303e552f07738c99842"],
					"section": "2"

				},{
					"id": "4",
					"title": "Other",
					"description": "<p class=\"colum-content\">I have also used PHP and JSP to help build APIs and standard thin-client MCV websites.  I do not have extensive experience with either but I am a quick study and have made myself a valuable asset by learning what it needed to get the job done</p>",
					"skills": [
						"5339bca27f9222e437ac9545",
						"5339bcb17f9222e437ac9546"
					],
					"jobs": ["5339c31de552f07738c99843", "5339c33ce552f07738c99845"],
					"section": "2"

				}]
			}

			res.send(sections);
		});

	});

};
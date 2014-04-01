// Job
var attr = DS.attr,
	hasMany = DS.hasMany;

var Job = DS.Model.extend({
	position: 		attr(),
	company: 		attr(),
	description: 	attr(),
	startDate: 		attr(),
	endDate: 		attr(),
	skills: 		hasMany('skill', {async: true})
});

Job.FIXTURES = [{
	"id": 1,
	"position": "Javascript Developer",
	"company": "Qualified (part of Kaplan)",
	"startDate": "August, 2013",
	"endDate": "March, 2014",
	"description": "This group inside of Kaplan was building an application using <strong>Ember</strong> JS with <strong>Ember Data</strong> on top of a <strong>Node</strong> top tier server.  I used these technologies and more to build a powerful application.  We practiced the <strong>Scrum</strong> methodology and I served as our team's <strong>Scrum Master</strong>.",
	"skills": ["1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9", 
			"11",
			"12",
			"13",
			"14",
			"15",
			"16", 
			"20",
			"21",
			"22",
			"23"]

},{
	"id": 2,
	"position": "Front End Developer",
	"company": "Tribune Co.",
	"startDate": "January, 2013",
	"endDate": "July, 2013",
	"description": "Built useful small <strong>JavaScript libraries</strong> used by our team.  Created <strong>jQuery modules</strong> used throughout site.  Lead small team of front end developers.  Performed code reviews and helped other developers solve problems.  Created templates using JSTL and JSP.",
	"skills": ["1", 
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13", 
		"17", 
		"19"]

},{
	"id": 3,
	"position": "Front End Developer",
	"company": "Sears Holdings",
	"startDate": "August, 2012",
	"endDate": "January, 2013",
	"description": "Worked on a large team pinpointing, debugging and fixing javascript and css issues and creating promotional pages. Rebuilt the JavaScript module loader used by the team to render the home page on my own initiative.  Spent time learning the ins and outs of Javascript.",
	"skills": ["1", 
		"6", 
		"7", 
		"11",
		"12",
		"13", 
		"16", 
		"25"]

},{
	"id": 4,
	"position": "Co-founder and Developer",
	"company": "Pander Commander",
	"startDate": "March, 2012",
	"endDate": "February, 2013",
	"description": "Brought together a small group of talented developers to create a social startup.  Build parts of our javascript library and plugins. Built PHP models with MySQL queries for our CRUD system.  Began work on an iOS version of our application.",
	"skills": ["1", 
		"6",
		"7",
		"8",
		"9", 
		"11",
		"12",
		"13", 
		"18", 
		"24", 
		"25"]

},{
	"id": 5,
	"position": "Web Developer",
	"company": "C|Change Inc.",
	"startDate": "July, 2011",
	"endDate": "July, 2012",
	"description": "Sole developer for 14 person marketing company. Built client and experimental websites.  Taught myself Objective C and developed two iPhone apps.   Designed print media, interfaces, and motion graphics.",
	"skills": ["1", 
		"6", 
		"7", 
		"12", 
		"13", 
		"18", 
		"24", 
		"25"]

},{
	"id": 6,
	"position": "Graphic Designer",
	"company": "AlphaMetrix LLC",
	"startDate": "December, 2009",
	"endDate": "July, 2011",
	"description": "Worked on a small team doing interface, logo, and print design.  Did web and flash development, filming, production, and motion graphics.  Worked in Wordpress and a web content editor.",
	"skills": ["12", 
	"13", 
	"25", 
	"26"]
}];

export default Job;
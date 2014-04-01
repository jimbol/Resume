// Skill
var attr = DS.attr

var Skill = DS.Model.extend({
	title: 		attr(),
	duration: 	attr()
});

Skill.FIXTURES = [{ 
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
}];

export default Skill;
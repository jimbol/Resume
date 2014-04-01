// Section
var attr 		= DS.attr,
	hasMany 	= DS.hasMany;

var Section = DS.Model.extend({
	title: 			attr(),
	slug: 			attr(),
	type: 			attr(),
	description: 	attr(),
	subSections: 	hasMany('subSection', {async: true})
});

Section.FIXTURES = [{
	"id": 1,
	"slug": "front-end",
	"type": "inverted",
	"title": "Front End Development",
	"subSections": ["1", "2"]
},{
	"id": 2,
	"slug": "server-side",
	"title": "Server Side Development",
	"subSections": ["3", "4"]
},{
	"id": 3,
	"slug": "mentorship",
	"type": "inverted",
	"title": "Mentorship",
	"subSections": [],
	"description": "<p class=\"colum-content\">I believe there is nothing more important than <strong>sharing knowledge</strong>, especially when working with a team.  It improves the performance of individuals and, as a result, a team as a whole.  Whether it comes in the form of <strong>code reviews, structured training, or helping a developer</strong> with concepts that are new to them, I will always provide help (and I expect the same from my team mates).</p>"
},{
	"id": 4,
	"slug": "contact",
	"title": "Contact",
	"subSections": [],
	"description": "<p class=\"colum-content\"><strong>I am currently looking for new work.</strong>  To get in touch, shoot me an email at <a href=\"mailto:jim.hall.dev@gmail.com\">jim.hall.dev@gmail.com</a> or find me on <a href=\"http://www.linkedin.com/pub/jim-hall/23/57/aa8/\" target=\"_blank\" class=\"icon linkedin\">LinkedIn</a> or <a href=\"https://github.com/jimbol\" target=\"_blank\" class=\"icon github\">GitHub</a>.</p><p class=\"colum-content\">Photo by <a href=\"http://elisalynnephotography.com\" target=\"_blank\">Elisa Lynne Photography</a></p>"
}];

export default Section;
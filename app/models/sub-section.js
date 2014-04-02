// Section
var attr 		= DS.attr,
	hasMany 	= DS.hasMany,
	belongsTo 	= DS.belongsTo;

var SubSection = DS.Model.extend({
	title: 			attr(),
	description: 	attr(),
	skills: 		hasMany('skill', {async: true}),
	jobs: 			hasMany('job', {async: true}),
	section: 		belongsTo('section')
});

SubSection.FIXTURES = [{
	"id": 1,
	"title": "Javascript",
	"description": "<p class=\"colum-content\">My focus this last year has been <strong>Ember application development</strong>.  This <strong>MVVM framework</strong> is <a href=\"https://www.youtube.com/watch?v=VI__nGPT9kk\" target=\"_blank\">arguably the best</a> for team based application development.</p><p class=\"colum-content\">I also enjoy low level work and have built many small tools in plain JS.  This has given me a strong understanding of the underlying tools and <strong>APIs</strong> in Javascript.</p>",
	"skills": ["1", 
		"2", 
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11"],
	"jobs": [
		"1",
		"2",
		"3",
		"4",
		"5"
	],
	"section": "1"

},{
	"id": 2,
	"title": "HTML5 / CSS3",
	"description": "<p class=\"colum-content\">Having good clean markup and styles is imperative for a smooth operating application.  My approach is to build <strong>simple reusable structures</strong>, starting at a basic level and getting more granular as needed so as not to repeat work.</p><p class=\"colum-content\">For styles, I prefer using tools like <strong>Stylus</strong> or <strong>SASS</strong> which compile to CSS3, because they are more readable and structured.  Similarly, using <strong>Handlebars</strong>, JSTL, or other templating libraries which render to HTML5 can dramatically reduce a code base and make it more maintainable.</p><p class=\"colum-content\">My favorite part about CSS3 is the ability to add animation without touching Javascript.  Animations make for better interface by giving context to the user. </p>",
	"skills": [
		"12",
		"13",
		"14",
		"15",
		"16",
		"17"
	],
	"jobs": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6"
	],
	"section": "1"

},{
	"id": 3,
	"title": "Node.js",
	"description": "<p class=\"colum-content\">With the growing popularity of a Node based back end, I have been given access to a powerful set of API and build process tools like <strong>Express</strong>, <strong>Grunt</strong> and <strong>Ember App Kit</strong>.  This breaks the barrier between front and back end and has allowed me to jump back and forth seamlessly.</p><p class=\"colum-content\">I have built <a href=\"https://github.com/jimbol/ember-template-middleware\" target=\"_blank\">template precompiler middleware</a> that ensures the developer always has the latest code, without having to do a whole build.  I’ve used Grunt to take this to the next level, automatically updating the DOM with each saved change.  This site was built using Ember App Kit and the styles and Javascript has been minified into production ready code using Grunt.</p><p class=\"colum-content\"></p>",
	"skills": [
		"20",
		"21",
		"22",
		"23"
	],
	"jobs": ["1"],
	"section": "2"

},{
	"id": 4,
	"title": "Other",
	"description": "<p class=\"colum-content\">I have also used PHP and JSP to help build APIs and standard thin-client MCV websites.  I do not have extensive experience with either but I am a quick study and have made myself a valuable asset by learning what it needed to get the job done</p>",
	"skills": [
		"18",
		"19",
		"24"
	],
	"jobs": ["2", "4", "5"],
	"section": "2"

}];

export default SubSection;
// Section
var attr 		= DS.attr,
	hasMany 	= DS.hasMany;

var SubSection = DS.Model.extend({
	title: 			attr(),
	description: 	attr(),
	skills: 		hasMany('skill'),
	jobs: 			hasMany('job')
});

export default SubSection;
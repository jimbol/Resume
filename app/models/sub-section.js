// Section
var attr 		= DS.attr,
	hasMany 	= DS.hasMany,
	belongsTo 	= DS.belongsTo;

var SubSection = DS.Model.extend({
	title: 			attr(),
	description: 	attr(),
	skills: 		hasMany('skill'),
	jobs: 			hasMany('job'),
	section: 		belongsTo('section')
});

export default SubSection;
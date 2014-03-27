// Section
var attr 		= DS.attr,
	hasMany 	= DS.hasMany;

var Section = DS.Model.extend({
	title: 			attr(),
	description: 	attr(),
	subSections: 	hasMany('subSection')
});

export default Section;
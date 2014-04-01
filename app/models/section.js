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

export default Section;
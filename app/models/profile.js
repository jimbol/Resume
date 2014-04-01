// profile
var attr 		= DS.attr,
	hasMany 	= DS.hasMany,
	belongsTo 	= DS.belongsTo;

var Profile = DS.Model.extend({
	name: 			attr(),
	skills: 		hasMany('skill', {async: true}),
	jobs: 			hasMany('job', {async: true}),
	sections: 		hasMany('section', {async: true}),
	subSections: 	hasMany('subSection', {async: true})
});

export default Profile;
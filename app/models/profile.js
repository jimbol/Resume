// profile
var attr 		= DS.attr,
	hasMany 	= DS.hasMany,
	belongsTo 	= DS.belongsTo;

var Profile = DS.Model.extend({
	name: 		attr(),
	skills: 	hasMany('skill'),
	jobs: 		hasMany('job')
});

export default Profile;
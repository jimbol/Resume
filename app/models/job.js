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

export default Job;
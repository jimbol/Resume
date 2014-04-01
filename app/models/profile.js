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

Profile.FIXTURES = [{
	"id": 			1,
	"name": 		"Jim Hall",
	"skills": 		[
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26"
	],
	"jobs": 	[
		"1",
		"2",
		"3",
		"4",
		"5",
		"6"
	],
	"sections": ["1", "2", "3", "4"],
	"subSections": ["1", "2", "3", "4"]
}];

export default Profile;
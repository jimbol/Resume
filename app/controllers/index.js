export default Ember.Controller.extend({

	profile: function(){
		return this.get('model');
	}.property('model.id'),

	jobs: function(){
		return this.get('profile.jobs');
	}.property('profile.jobs.@each.isLoaded')
});
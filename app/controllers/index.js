export default Ember.Controller.extend({

	profile: function(){
		window.bam = this.get('model');
		return this.get('model');
	}.property('model.id'),

	sections: function(){
		return this.store.find('section');
	}.property(),

	jobs: function(){
		return this.get('profile.jobs');
	}.property('profile.jobs.@each.isLoaded')
});
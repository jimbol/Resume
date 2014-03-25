export default Ember.Route.extend({
	model: function() {
		return this.store.find('profile', 1)
	},

	setupController: function(controller, model) {
		this.controllerFor('index').set('model', model);
	},

	actions: {
		tack: function(targ){
			console.log(targ + '');
		},

		openModal: function(modalName, model) {
			this.controllerFor(modalName).set('model', model);
			this.controllerFor('application').set('isModalVisible', true);
			return this.render(modalName, {
				into: 'application',
				outlet: 'modal'
			});
		},

		closeModal: function(modalName, model) {
			this.controllerFor('application').set('isModalVisible', false);
			return this.disconnectOutlet({
				outlet: 'modal',
				parentView: 'application'
			});
		}
	}
});

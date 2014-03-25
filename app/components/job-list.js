export default Ember.Component.extend({
	classNames: ['job-list', 'colum-content'],
	attributeBindings: ['dataJobDetail:data-focused'],
	tagName: ['div'],

	// ATTRIBUTES
	isFocused: 		false,
	focusedJob: 	null,

	dataJobDetail: function(){
		return (this.get('isFocused')) ? 'focused' : '';
	}.property('isFocused'),

	// EVENTS
	actions: {
		actionFocus: function(job){
			this.setProperties({
				isFocused: true,
				focusedJob: job
			});
		},

		actionClose: function(){
			var _this = this;
			this.set('isFocused', false);

			setTimeout(function(){
				_this.set('focusedJob', null);
			}, 200);
		}
	}
});

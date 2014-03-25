export default Ember.Component.extend({
	classNames: ['skill-list'],
	tagName: ['ul'],

	// ATTRIBUTES
	isFocused: 		false,
	focusedSkill: 	null,

	// EVENTS
	actions: {
		actionFocus: function(skill){
			console.log(skill)
			this.setProperties({
				isFocused: true,
				focusedSkill: skill
			});
		},
		actionClose: function(){
			this.setProperties({
				isFocused: false,
				focusedSkill: null
			});
		}
	}
});

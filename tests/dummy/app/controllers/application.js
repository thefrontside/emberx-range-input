import Ember from 'ember';

export default Ember.ObjectController.extend({
  number: 5,
  actions: {
    updateValue(component, value) {
      this.set("number", value);
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  number: 5,
  actions: {
    updateValue(component, value) {
      this.set("number", value);
    }
  }
});

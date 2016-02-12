import Ember from 'ember';

export default Ember.Controller.extend({
  number: 5,
  actions: {
    updateValue(value) {
      this.set("number", value);
    }
  }
});

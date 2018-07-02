import Controller from '@ember/controller';

export default Controller.extend({
  number: 5,
  actions: {
    updateValue(value) {
      this.set("number", value);
    }
  }
});

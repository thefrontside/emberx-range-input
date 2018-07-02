import { render } from '@ember/test-helpers';
import { expect } from 'chai';
import { setupRenderingTest } from 'ember-mocha';
import { describe, it, beforeEach } from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration: XRangeInputComponent', function() {
  setupRenderingTest();

  it('renders',async function() {
    await render(hbs`{{x-range-input min=0 max=100 step=1 value=number}}`);
    expect(this.$()).to.have.length(1);
  });

  describe("setting an intial value", function () {
    beforeEach(async function() {
      this.set('number', 5);
      await render(hbs`{{x-range-input min=0 max=100 step=1 value=number}}`);
    });

    it("sets the intial value", function() {
      expect(this.$('.x-range-input').val()).to.equal('5');
    });

    describe("setting the dom value", function () {
      beforeEach(async function() {
        this.set('number', 10);
      });

      it("updates the value", function() {
        expect(this.$('.x-range-input').val()).to.equal('10');
      });
    });
  });

  describe("setting bound attributes", function () {
    beforeEach(async function() {
      this.setProperties({
        min: "5",
        max: "20",
        step: "5",
        value: "10",
        name: "my-slider",
        list: "my-list"
      });
      await render(hbs`{{x-range-input min=min max=max step=step name=name value=value list=list}}`);
    });

    it("binds the min attribute properly", function() {
      expect(this.$('.x-range-input').prop('min')).to.equal('5');
    });

    it("binds the max attribute properly", function() {
      expect(this.$('.x-range-input').prop('max')).to.equal('20');
    });

    it("binds the value attribute properly", function() {
      expect(this.$('.x-range-input').prop('value')).to.equal('10');
    });

    it("binds the name attribute properly", function() {
      expect(this.$('.x-range-input').prop('name')).to.equal('my-slider');
    });

    it("binds the list attribute properly", function() {
      expect(this.$('.x-range-input').attr('list')).to.equal('my-list');
    });

  });

  describe("moving the slider without an action", function() {
    beforeEach(async function() {
      this.set('value', 50);
      await render(hbs`{{x-range-input value=value}}`);
      this.$('input').val(60).trigger('input');
    });

    it("shouldn't update the value", function() {
      expect(this.get('value')).to.equal(50);
    });
  });

});

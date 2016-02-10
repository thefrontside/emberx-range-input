/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import Ember from 'ember';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: XRangeInput', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe("from the root path", function() {
    beforeEach(function() {
      visit("/");
    });

    it("inserts the component", function() {
      expect(Ember.$(".x-range-input").length).to.equal(1);
    });

    it("displays the number", function() {
      expect(Ember.$(".spec-number").text().trim()).to.equal("5");
    });

    describe("changing the input value", function() {
      beforeEach(function() {
        Ember.$(".x-range-input").val("25");
        Ember.$(".x-range-input").trigger('input');
      });

      it("changes the number", function() {
        expect(Ember.$(".spec-number").text().trim()).to.equal("25");
      });
    });
  });

});

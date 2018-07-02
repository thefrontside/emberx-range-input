import {
  describe,
  it,
  beforeEach
} from 'mocha';
import { expect } from 'chai';
import { setupApplicationTest } from 'ember-mocha';
import { visit } from '@ember/test-helpers';
import $ from 'jquery';

describe('Acceptance: XRangeInput', function() {
  setupApplicationTest();

  describe("from the root path", function() {
    beforeEach(async function() {
      await visit("/");
    });

    it("inserts the component", function() {
      expect($(".x-range-input").length).to.equal(1);
    });

    it("displays the number", function() {
      expect($(".spec-number").text().trim()).to.equal("5");
    });

    describe("changing the input value", function() {
      beforeEach(function() {
        $(".x-range-input").val("25");
        $(".x-range-input").trigger('input');
      });

      it("changes the number", function() {
        expect($(".spec-number").text().trim()).to.equal("25");
      });
    });
  });

});

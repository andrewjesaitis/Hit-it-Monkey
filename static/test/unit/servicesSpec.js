'use strict';

/* jasmine specs for services go here */

xdescribe('service', function() {
  beforeEach(module('tradeLog.services'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

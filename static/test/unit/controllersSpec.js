'use strict';

/* jasmine specs for controllers go here */

describe('tradeLog.controllers', function(){
  beforeEach(module('tradeLog.controllers'));
  beforeEach(module('ui.bootstrap'));

  beforeEach(module(function($provide) {
    var TradeCollection = jasmine.createSpyObj('TradeCollection', ['query', 'save']);
    TradeCollection.query.andCallFake(function(){
      TradeCollection.trades = tradeFixture;
    });
    $provide.factory('TradeCollection', function(){
      return TradeCollection;
    });
  }));

  describe('TradeLogCtrl', function(){
    var scope, ctrl, $resource;

    beforeEach(inject(function(TradeCollection, $dialog, $rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller("TradeLogCtrl", {$scope: scope, $dialog: $dialog, TradeCollection: TradeCollection});
    }));

    it('should create a trades model with 3 trades fetched from a resource', inject(function() {
      expect(scope.TradeCollection.trades.length).toBe(3);
    }));

  });

  // it('should ....', inject(function() {
  //   //spec body
  // }));
});

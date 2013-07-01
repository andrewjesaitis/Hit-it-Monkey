'use strict';

/* Controllers */

angular.module('tradeLog.controllers', []).
  controller('TradeLogCtrl', ['$scope', '$dialog', 'TradeCollection', function($scope, $dialog, TradeCollection) {
    $scope.TradeCollection = TradeCollection;
    $scope.TradeCollection.query();
    $scope.orderBy = "openedOn";

    $scope.openAddTradeDialog = function(){
        var d = $dialog.dialog({
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            templateUrl:  'partials/addtrade.html',
            controller: 'TradeCtrl'
        });
        d.open();
    };
  }])
  .controller('TradeCtrl', ['$scope', 'dialog', 'TradeCollection', function($scope, dialog, TradeCollection) {
    $scope.securities = ['stock', 'future', 'call', 'put']

    $scope.trade = {
        "id": null,
        "probabilityOfProfit": null,
        "legs": []
    };

    $scope.addLeg = function(trade){
        trade.legs.push({
                "type": "call",
                "symbol": null,
                "qty": 1,
                "strike": null,
                "openAmount": null,
                "closeAmount": null,
                "openedAt": null,
                "closedAt": null
            });
    };

    $scope.update = function(trade) {
        TradeCollection.save(trade);
        dialog.close();
    };

  }]);

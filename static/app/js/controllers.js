'use strict';

/* Controllers */

angular.module('tradeLog.controllers', []).
  controller('TradeLogCtrl', ['$scope', '$dialog', 'Trade', function($scope, $dialog, Trade) {
    $scope.trades = Trade.query();
    $scope.orderBy = "openedOn";

    $scope.openAddTradeDialog = function(){
        var d = $dialog.dialog({
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            templateUrl:  'partials/addtrade.html', // OR: templateUrl: 'path/to/view.html',
            controller: 'TradeCtrl'
        });

        d.open().then(function(result){
          if(result)
          {
            alert('dialog closed with result: ' + result);
          }
        });
    };
  }])
  .controller('TradeCtrl', ['$scope', function($scope) {
    $scope.securities = ['stock', 'future', 'call', 'put']

    $scope.trade = {
        "id": null,
        "pop": null,
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

  }]);

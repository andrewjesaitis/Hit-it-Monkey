'use strict';


// Declare app level module which depends on filters, and services
angular.module('tradeLog', ['tradeLog.filters', 'tradeLog.services', 'tradeLog.directives', 'tradeLog.controllers', 'ui.bootstrap', 'ui.date']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/tradelog', {templateUrl: 'partials/tradelog.html', controller: 'TradeLogCtrl'});
    $routeProvider.when('/addtrade', {templateUrl: 'partials/addtrade.html', controller: 'TradeCtrl'});
    $routeProvider.otherwise({redirectTo: '/tradelog'});
  }]);

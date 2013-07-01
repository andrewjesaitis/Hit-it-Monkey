'use strict';

/* Services */

angular.module('tradeLog.services', ['ngResource'])
	.service('TradeCollection', ['$resource', function($resource) {
		var that = this;
		this.data = [];
		var tradeResource = $resource('/api/trades/:id');
		this.query = function(){
			tradeResource.query(function(result){
				that.data = result;
			});
		};
		this.save = function(newItem){
			var t = new tradeResource(newItem);
			t.$save();
			this.data.push(newItem);
		};
	}]);

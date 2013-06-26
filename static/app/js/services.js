'use strict';

/* Services */

angular.module('tradeLog.services', ['ngResource'])
	.factory('Trade', function($resource){
		return $resource('trades/:tradeId.json', {}, {
			query: {method: 'GET', params:{tradeId:'trades'}, isArray:true}
		});
	});

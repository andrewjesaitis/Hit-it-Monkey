'use strict';

/* Services */

angular.module('tradeLog.services', ['ngResource'])
	.factory('Trade', function($resource){
		return $resource('/api/trades/:id');
	});

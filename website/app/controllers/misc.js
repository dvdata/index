'use strict';

/* Controllers */

v3AppControllers.controller('MiscCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	function init()
	{
		console.log('Misc controller running');
	}
	$scope.$on('$viewContentLoaded', init);

}]);
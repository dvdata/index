'use strict';

/* Controllers */

v3AppControllers.controller('404Ctrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	function init()
	{
		console.log('404 controller running');
	}
	$scope.$on('$viewContentLoaded', init);

}]);
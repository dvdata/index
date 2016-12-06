'use strict';

/* Controllers */

v3AppControllers.controller('ShopCtrl', ['$scope', '$stateParams', '$http', '$timeout', 'productSorting', function($scope, $stateParams, $http, $timeout, productSorting) {
	function init()
	{
		$scope.sortBy = productSorting.getSortMethod();

		if($stateParams.productId)
			$scope.renderProduct();
		else
			$scope.renderProducts();

	}
	$scope.$on('$viewContentLoaded', init);

	$scope.sortProducts = function(evt)
	{
		if(evt.target.dataset.sortBy)
		{
			productSorting.setSortMethod(evt.target.dataset.sortBy);
			$scope.sortBy = productSorting.getSortMethod();
		}
	}
	$scope.renderProduct = function()
	{
		$scope.viewAll = false;
		$scope.viewIndividual = true;
		$scope.baseSort = productSorting.getSortMethod();
		$scope.forms = {};
		
		$scope.product = {} // this will be pulled with JSON
		$timeout(function() {
			$scope.product.quantity = $scope.forms.productOptionsForm.productQuantity || 1;
			$scope.forms.productOptionsForm.productQuantity = $scope.product.quantity;
		}, 0);

		console.log(productSorting.getSortMethod());
	}

	$scope.renderProducts = function()
	{
		$scope.viewIndividual = false;
		$scope.viewAll = true;
	}
	$scope.alterQty = function(amount)
	{
		$scope.forms.productOptionsForm.productQuantity = Math.max($scope.forms.productOptionsForm.productQuantity + amount, 1);
	}
	$scope.qtyChanged = function()
	{
		$scope.forms.productOptionsForm.productQuantity = Math.max($scope.forms.productOptionsForm.productQuantity, 1);
	}
}]);
'use strict';

/* Controllers */

v3AppControllers.controller('AboutUsCtrl', ['$scope', '$rootScope', '$state', '$http', '$timeout', 'partnerService', 'animationTracker', function($scope, $rootScope, $state, $http, $timeout, partnerService, animationTracker) {
	
	var aboutPageSwiper;
    
    $scope.$on("page_preloaded", function(){
        // bottom of page slideshow
        aboutPageSwiper = new Swiper('.swiper-container', {
            pagination: '#about_us_gallery > p',
            loop: false,
            grabCursor: true,
            paginationClickable: true,
            slidesPerView: 'auto'
        })        
    });    
    $scope.hasSocial = false;

	function init()
	{

		// Bring the fuild holder into view
		// $rootScope.showFluid = true;
		// actiavte fluid on next digest
		$timeout(function(){
			// window.FluidEffect.init();
		}, 0);
	}
	function destroy()
	{
		// hide the fluid
		// $rootScope.showFluid = false;

		// stop the fluid animation because overhead
		// window.FluidEffect.stop();
	}
	$scope.$on("animationUpdate", animationUpdated);
	function animationUpdated()
	{
		if(animationTracker.getAnimationStatus().action == "at_rest")
		{
			// start fluid
			// window.FluidEffect.start();
		}
		
	}
	$scope.$on("$destroy", destroy);
	$scope.$on('$viewContentLoaded', init);

	$scope.prevSlide = function(evt)
	{
		aboutPageSwiper.swipePrev();
	}
	$scope.nextSlide = function(evt)
	{
		aboutPageSwiper.swipeNext();
	}
    

}]);
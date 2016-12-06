'use strict';

/* Controllers */

v3AppControllers.controller('HomeCtrl', ['$scope', '$routeParams', '$rootScope', '$timeout', function($scope, $routeParams, $rootScope, $timeout) {
	console.log("there's some main init stuff");
	function init()
	{
		// Bring the fuild holder into view for Chrome desktop only
		if ($rootScope.desktop == true){
			
			$rootScope.showFluid = true;
			// actiavte fluid on next digest
			$timeout(function(){
                window.FluidEffect.init();
                window.FluidEffect.start();
			}, 20);
		 }
	}

	$scope.showReelContainer = function()
	{
		$scope.showHighlightReel = true;
		Howler.mute();
		$timeout(function(){
			$rootScope.soundOn = false;
		}, 1);
	}

	function destroy()
	{
		if ($rootScope.desktop == true){
			// hide the fluid
			$rootScope.showFluid = false;
			// stop the fluid animation because overhead
			window.FluidEffect.stop();
		}


		if($rootScope.userSoundChoice == "unmute")
		{
			Howler.unmute();
			$timeout(function(){
				$rootScope.soundOn = true;
			}, 1);
		}

	}
	
	$scope.$on('$viewContentLoaded', init);
	$scope.$on("$destroy", destroy);
}]);

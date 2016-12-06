'use strict';

/* Controllers */

v3AppControllers.controller('GridironCtrl', ['$scope', '$rootScope','$routeParams', '$timeout', function($scope, $rootScope, $routeParams, $timeout) {

	var gallerySwiper;
	var teamNums;
	var hoursNums;
	var awardsNums;
	
	$scope.$on("page_preloaded", function(){
		gallerySwiper = new Swiper('.swiper-container', {
			pagination: '.gallery-swiper > p',
			loop: false,
			grabCursor: true,
			paginationClickable: true,
			slidesPerView: 'auto'
		})	        
	});

	var _body
	function body()
	{
		if(!_body)
			_body=document.querySelector("body");
		return _body;
	}
	
	var hotSpotEle = document.getElementById("hot_spot");
	// var btn = document.getElementById("diamond");
	// var aButton = new DiamondButton(btn);
	var hotSpot = new UnfoldingHotspot(hotSpotEle);

	// btn.addEventListener("mouseenter", function()
	// {
	// 	console.log("mouseenter");
	// 	aButton.over();
	// });
	// btn.addEventListener("mouseleave", function()
	// {
	// 	console.log("mouseleave");
	// 	aButton.out();
	// });
	// btn.addEventListener("click", function(evt)
	// {
	// 	evt.preventDefault();
	// 	console.log("click");
	// 	hotSpot.click(evt);
	// 	aButton.click();
	// });


	function init()
	{

        function vidPlay() {
            var video = document.getElementById('bgvid');
            video.play();
        }
		// tool for adding top parallax
	  if ( $rootScope.desktop == true ){
		var scroller = skrollr.init({
			forceHeight: false, // don't give us a giant ass container
			smoothScrolling: true,
			smoothScrollingDuration: 200,
			constants: {
				introsize: function() {
					return window.innerHeight; // whenever window is resized, update the top offset
				}
			} 
		});
		$timeout(scroller.refresh, 0);
	}
		
		
		// using countUp.js //
		teamNums = new countUp(document.getElementById('team'), 0, 14, 0, 5);
		hoursNums = new countUp(document.getElementById('hours'), 0, 3605, 0, 4);
		awardsNums = new countUp(document.getElementById('awards'), 0, 10, 0, 5);
		
		// triggers number animations when results pane is offset by 100px top //
		$(window).scroll(function() {
			$('.results').each(function() {
				var divPos = $(this).offset().top;
				
				var topOfWindow = $(window).scrollTop();
				if (divPos < topOfWindow+100) {
					teamNums.start();
					hoursNums.start();
					awardsNums.start();
				}
			})

            // triggering gallery bg video
            $('#capturing-oregon').each(function() {
                var divPos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+400) {
                    vidPlay();
                }
            })
		})
		
		$('.box').on('click', function() {
			// remove active class
			$('.box').removeClass('active');
			// add class to active one
			$(this).addClass('active')
		})
  
	};

	$scope.$on('$viewContentLoaded', init);

    $scope.removeVideo = function()
    {
        $scope.hideVideo = true;
    }
	$scope.playVideo = function() 
	{
		$scope.showVideo = true;
	}

    $scope.prevSlide = function(evt) {
        gallerySwiper.swipePrev();
    }
    $scope.nextSlide = function(evt) {
        gallerySwiper.swipeNext();
    }

}]);

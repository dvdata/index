'use strict';

/* Controllers */

v3AppControllers.controller('UbisoftCtrl', ['$scope', '$rootScope', '$routeParams', '$timeout', function($scope, $rootScope, $routeParams, $timeout) {

	var ubisoftSwiper;
    var gallerySwiper;
    
    var monthNums;
    var impressionNums;
    var engageNums;

    $scope.$on("page_preloaded", function(){
        ubisoftSwiper = new Swiper('#toolkit-swiper-container',{
			pagination: '#toolkit-gallery > p',
		    loop:true,
		    grabCursor: true,
		    paginationClickable: true
		})
        
        gallerySwiper = new Swiper('.gallery-swiper-container', {
            pagination: '.gallery-swiper > p',
            loop: false,
            grabCursor: true,
            paginationClickable: true,
            slidesPerView: 'auto'
        });
    });
	function init()
    {   
        function vidPlay() {
            var video = document.getElementById('bgvid');
            video.play();
        }
        
        // using countUp.js //
        monthNums = new countUp(document.getElementById('months'), 0, 3, 0, 2);
        impressionNums = new countUp(document.getElementById('impressions'), 0, 47, 0, 3);
        engageNums = new countUp(document.getElementById('engagements'), 0, 1.1, 0, 2);
        
        // triggers number animations when results pane is offset by 100px top //
        $(window).scroll(function() {
            $('.results').each(function() {
                var divPos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+200) {
                    monthNums.start();
                    impressionNums.start();
                    engageNums.start();
                }
            })
            // triggering gallery bg video
            $('#toolkit-gallery').each(function() {
                var divPos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+400) {
                    vidPlay();
                }
            })            
        })

        
        $scope.removeVideo = function() 
        {
            $scope.hideVideo = true;
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
	}
	$scope.$on('$viewContentLoaded', init);

	$scope.prevSlide = function(evt)
	{
		console.log('previous slide');
		ubisoftSwiper.swipePrev();
	}
	$scope.nextSlide = function(evt)
	{
		console.log('next slide');
		ubisoftSwiper.swipeNext();
	}

}]);

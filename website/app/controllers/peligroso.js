'use strict';

/* Peligroso Controller */

v3AppControllers.controller('PeliCtrl', ['$scope', '$rootScope','$routeParams', '$timeout', function($scope, $rootScope, $routeParams, $timeout) {
    
    var gallerySwiper;
    var togetherSwiper;
    var contentSwiper;
    
    var sales;
    var impressions;
    var engagements;
    
    $scope.$on("page_preloaded", function(){
        gallerySwiper = new Swiper('.swiper-container', {
            pagination: '.gallery > p',
            loop: true,
            grabCursor: true,
            paginationClickable: true
        })
        togetherSwiper = new Swiper('.together-swiper-container', {
            pagination: '.gallery-swiper > p',
            loop: false,
            grabCursor: true,
            paginationClickable: true,
            slidesPerView: 'auto'
        })
        contentSwiper = new Swiper('.content-swiper-container', {
            pagination: '.content-gallery-swiper > p',
            loop: false,
            grabCursor: true,
            paginationClickable: true,
            slidesPerView: 'auto'
        })
    });
    
    function init()
    {
        console.log('peligroso ctrl running');
        
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
        // sales = new countUp(document.getElementById('sales'), 0, 44, 0, 5);
        // impressions = new countUp(document.getElementById('impressions'), 0, 22, 0, 4);
        // engagements = new countUp(document.getElementById('engagements'), 0, 2, 0, 2);
        
        // trigger number animations //
        $(window).scroll(function() {
            // $('.results').each(function() {
            //     var divPos = $(this).offset().top;
                
            //     var bottomOfWindow = $(window).scrollTop() + $(window).innerHeight();
            //     if (divPos < bottomOfWindow-500) {
            //         sales.start();
            //         impressions.start();
            //         engagements.start();
            //     }
            // })
            // triggering gallery bg video
            $('#content-gallery').each(function() {
                var divPos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+400) {
                    vidPlay();
                }
            })
            $('#together').each(function() {
                var divPos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+400) {
                    vidPlay();
                }
            })
        })
    }
    
    $scope.removeVideo = function()
    {
        $scope.hideVideo = true;
    }
    $scope.removePosterVid = function() {
        $scope.hidePosters = true;
    }

    $scope.$on('$viewContentLoaded', init);
    
    $scope.nextSlide = function() {
        gallerySwiper.swipeNext();
    };
    $scope.prevSlide = function() {
        gallerySwiper.swipePrev();
    }
    
    $scope.launchB2B = function() {
        TweenLite.to(document.getElementById('b2b-overlay'), 0.75, {opacity: 0, display: 'none'});
    }
    $scope.launchRTS = function() {
        TweenLite.to(document.getElementById('rts-overlay'), 0.75, {opacity:0, display:'none'});
    }
}]);

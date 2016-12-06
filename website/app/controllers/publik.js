'use strict';

/* Controllers */

v3AppControllers.controller('PublikCtrl', ['$scope', '$routeParams', '$timeout', '$rootScope', function($scope, $routeParams, $timeout, $rootScope) {

	var publikSwiper;
    
    var teamNums;
    var hoursNums;
    var awardsNums;
    
    $scope.$on("page_preloaded", function(){
		// image gallery
		publikSwiper = new Swiper('.swiper-container',{
			pagination: '#messaging-gallery > p',
			loop:true,
			grabCursor: true,
			paginationClickable: true
		});        
    });    

	function init()
	{
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
        
        // teamNums = new countUp(document.getElementById('team'), 0, 14, 0, 4);
        // hoursNums = new countUp(document.getElementById('hours'), 0, 3500, 0, 5);
        // awardsNums = new countUp(document.getElementById('awards'), 0, 10, 0, 4);
        
        // triggers number animations when results pane is offset by 100px top //
        $(window).scroll(function() {
            // $('.results').each(function() {
            //     var divPos = $(this).offset().top;
                
            //     var topOfWindow = $(window).scrollTop();
            //     if (divPos < topOfWindow+100) {
            //         teamNums.start();
            //         hoursNums.start();
            //         awardsNums.start();
            //     }
            // })
        })
	}
	$scope.prevSlide = function(evt)
	{
		publikSwiper.swipePrev();
	}
	$scope.nextSlide = function(evt)
	{
		publikSwiper.swipeNext();
	}
    
    var coffeeCarousel = {
        item: $('.slider li'),
        list: $('.slider ul')
    };
    coffeeCarousel.item.on('click', function() {
        var el = $(this);
        coffeeCarousel.list.css({
            "left":"-"+(el.index()*100)+"%"
        });
        coffeeCarousel.item.removeClass();
        el.addClass('active');
        el.prev().addClass("p");
        el.next().addClass('n')
    });
    

	$scope.$on('$viewContentLoaded', init);
}]);
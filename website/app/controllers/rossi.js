v3AppControllers.controller('RossiCtrl', ['$scope', '$rootScope', '$routeParams', '$timeout', function($scope, $rootScope, $routeParams, $timeout) {
    
    var executionSwiper;
    var yearsNums;
    var boardsNums;
    var salesNums;
    var triggerBoards = true;
    
    $scope.$on("page_preloaded", function(){
        executionSwiper = new Swiper('.swiper-container', {
            pagination: '.gallery-swiper > p',
            loop: false,
            grabCursor: true,
            paginationClickable: true,
            slidesPerView: 'auto'
        })        
    });    
    
    function init() 
    {    
        function vidPlay() {
            var video = document.getElementById('bgvid');
            video.play();
        }
        // countUp.js //
        yearsNums = new countUp(document.getElementById('years'), 0, 7, 0, 3);
        boardsNums = new countUp(document.getElementById('boards'), 0, 130, 0, 4);
        salesNums = new countUp(document.getElementById('sales'), 0, 30, 0, 3);
        
        // trigger number animations //
        $(window).scroll(function() {
            $('.results').each(function() {
                var divPos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+1) {
                    yearsNums.start();
                    boardsNums.start();
                    salesNums.start();
                }
            })
            
            // triggering gallery bg video
            $('#rossi-execution').each(function() {
                var divPos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+400) {
                    vidPlay();
                }
            })

            
            function boardAnimation() {
                if (triggerBoards) {
                    var tl = new TimelineLite();
                    tl.to(document.getElementById('board1'), 0.5, {transform: 'translateY(0px)', opacity:1})
                    .to(document.getElementById('board2'), 0.5, {transform: 'translateY(0px)', opacity:1})
                    .to(document.getElementById('board3'), 0.5, {transform: 'translateY(0px)', opacity:1})  
                    triggerBoards = false;
                }               
            }
            
            $('#triggerCopy').each(function() {
                var divPos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                if (divPos < topOfWindow+900) {
                    boardAnimation();
                }
            })
        })
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
    
    $scope.removeVideo = function() {
        $scope.hideVideo = true;
    }
    $scope.$on('$viewContentLoaded', init);
    
    
}])

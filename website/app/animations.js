"use strict"

angular.module('v3App').animation('.sts_transition', ['$timeout', '$rootScope', 'animationTracker', pageTransitions]);

function pageTransitions($timeout, $rootScope, animationTracker) {
	return {
		enter: function(element, done)
		{
			element[0].style.position = "fixed"; // "Freeze" the content
			disableNav = true;
			// tell the global tracker to cue up worm animation
			animationTracker.setAnimationAction("run_worm");
			// tell the global tracker to run the worm animation
			animationTracker.broadcastStatus();
			var enterAnimationUpdate = $rootScope.$on("animationUpdate", animationUpdated);

			function animationUpdated(){
				if(animationTracker.getAnimationStatus().action == "worm_squirmed")
				{
					// hide footer
					$timeout(function(){
						$rootScope.showFooter = false;
					}, 0);
					// fade in the page from 0 opacity to 1 after a certain percent of the worm has run
					TweenLite.fromTo(element, 1.8, { opacity: 0}, { opacity: 1, onComplete: function() {

						window.scrollTo(0,0); // bring browser to top coincide with making header at top
						element[0].style.position = "static"; // "Unfreeze" the content
						element[0].style.zIndex = 1; // set on top of outro
						disableNav = false; // let people click again
						animationTracker.setAnimationAction("at_rest"); // clear cue
						animationTracker.broadcastStatus(); // broadcast cue
						done(); // tell angular we're done

					}});
					enterAnimationUpdate(); // remove root scope listener
				}
			}
		},
		leave: function(element, done)
		{
			disableNav = true;
			function animationEnded()
			{
				done();
			}
			var exitAnimationUpdate = $rootScope.$on("animationUpdate", animationUpdated);
			function animationUpdated()
			{
				if(animationTracker.getAnimationStatus().action == "at_rest")
				{
					// $scope.$apply(function(){
					// 	$rootScope.showFooter = true;
					// });
					$timeout(function(){
						$rootScope.showFooter = true;
					}, 0);
					// remove the old view once the new one is fully visible. No animation needed
					animationEnded();
					exitAnimationUpdate(); // remove root scope listener

					// show footer
					
				}
				
			}
		}
	}
}


angular.module('v3App').animation('.work-panels-view', ['$timeout', '$rootScope', 'animationTracker', animateTiles]);

function animateTiles($timeout, $rootScope, animationTracker) {
	return {
		enter: function(element, done)
		{
			// console.log('Entering Panel: ' + element);
			done();
		},
		leave: function(element, done)
		{
			// console.log('Exiting Panel: ' + element);
			done();
		}
	}
}

// angular.module('v3App').animation('.repeat-animation',
//   ['$timeout', function($timeout) {
 
//   var queue = { enter : [], leave : [] };
//   function queueAllAnimations(event, element, done, onComplete) {
//     var index = queue[event].length;
//     queue[event].push({
//       element : element,
//       done : done
//     });
//     queue[event].timer && $timeout.cancel(queue[event].timer);
//     queue[event].timer = $timeout(function() {
//       var elms = [], doneFns = [];
//       angular.forEach(queue[event], function(item) {
//         item && elms.push(item.element);
//         doneFns.push(item.done);
//       });
//       var onDone = function() {
//         angular.forEach(doneFns, function(fn) {
//           fn();
//         });
//       };
//       onComplete(elms, onDone);
//       queue[event] = [];
//     }, 10, false);

//     return function() {
//       queue[event] = [];
//     }
//   };

//   return {
//     enter : function(element, done) {
//       element.css('opacity', 0)
//       var cancel = queueAllAnimations('enter',
//         element, done, function(elements, done) {
      
//         TweenMax.allTo(elements, 1, { opacity : 1 }, 0.2, done);
//       });
//       return function onClose(cancelled) {
//         cancelled && cancel();
//       };
//     },
//     leave : function(element, done) {
//       var cancel = queueAllAnimations('leave',
//         element, done, function(elements, done) {

//         TweenMax.allTo(elements, 1, { opacity : 0 }, 0.2, done);
//       });
//       return function onClose(cancelled) {
//         cancelled && cancel();
//       };
//     }
//   }
// }]);
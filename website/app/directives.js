'use strict';

// var ass = document.getElementById("ass");
// var scrollEvent = document.createEvent('Event');

// // Define that the event name is 'build'.
// scrollEvent.initEvent('winScrolled', true, true);

// function coolScope(e) {
//     console.log('titty nips');
//     console.log(e, this);
// }

// // Listen for the event.
// document.addEventListener('winScrolled', coolScope.apply(ass, []));

// function emitScroll() {
//     console.log("neat");
//     document.dispatchEvent(scrollEvent);
// }

// document.body.addEventListener("click", emitScroll);

// coolScope.apply(ass, ['balls', 'sack', 'all', 'night']);

/***************
 *
 * Directive audioControl
 * Author: Pete Rugh
 * Function: Handles global audio volume control
 * 3/26/2015
 *
 ***************/

v3AppDirectives.directive('audioControl', ['$timeout', '$rootScope', function($timeout, $rootScope) {
	var link = function($scope, $element, $attr) {
		var sp = new MakeSpectrum('toggle_audio', 20, 25, 3, 1);
		var vol = 0;

		function fadeInEq() {
		    vol += 1;
		    sp.setVolume(vol);
		    if (vol < 1) setTimeout(fadeInEq, 60);
		}
		function fadeOutEq() {
		    vol -= 0.05;
		    sp.setVolume(vol);
		    if (vol > 0) setTimeout(fadeOutEq, 60);
		}

		$rootScope.userSoundChoice = "unmute";
		$rootScope.soundOn = true;
		$scope.sounds = {};
		Howler.iOSAutoEnable = false;

		$scope.initSound = function()
		{
			$scope.sounds.ambientBg = new Howl({
				urls: ['/sounds/website_homepage_track_v2.mp3'],
				autoplay: true,
				loop: true,
				volume: 0.20
			});
			fadeInEq();
		}
		$scope.toggleAudio = function()
		{
			if($rootScope.soundOn == true)
			{
				$rootScope.userSoundChoice = "mute";
				Howler.mute();
				$rootScope.soundOn = false;
				fadeOutEq();
			}
			else
			{
				$rootScope.userSoundChoice = "unmute";
				Howler.unmute();
				$rootScope.soundOn = true;
				fadeInEq();
			}
		}
		if($rootScope.desktop)
		{
			$scope.initSound();
		}
	}

	return {
		link: link,
		scope: true
	}
}]);



/***************
 *
 * Directive backArrow
 * Author: Pete Rugh
 * Function: plays swoosh on crossout
 * 3/26/2015
 *
 ***************/

v3AppDirectives.directive('backArrow', ['$timeout', '$rootScope', function($timeout, $rootScope) {
	var link = function($scope, $element, $attr) {

		function crossOut()
		{
			$scope.$apply(function(){
				$scope.playSound('crossOutOver');
			})
		}
		// custom listener
		$element[0][addListenerMethod]("mouseenter", crossOut);

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove custom listener
			$element[0][removeListenerMethod]("mouseenter", crossOut);
		}
	}

	return {
		link: link,
		scope: true,
		restrict: "AEC"
	}
}]);


/***************
 *
 * Directive backgroundVideo
 * Author: Pete Rugh
 * Function: Sizes and positions background video correctly
 * 3/26/2015
 *
 ***************/

v3AppDirectives.directive('backgroundVideo', ['$timeout', function($timeout) {
	var link = function($scope, $element, $attr) {

		$scope.bgVideo = $element[0];

		$scope.bgVideo.onloadedmetadata = function() {
			$scope.vidWidth = $element[0].videoWidth;
			$scope.vidHeight = $element[0].videoHeight;
			$scope.vidAspectRatio = $scope.vidHeight / $scope.vidWidth;

			// size the background video
			$scope.sizeVideo();
		};
		$scope.sizeVideo = function()
		{
			$scope.winHeight = window.innerHeight;
			$scope.winWidth = window.innerWidth;
			$scope.winAspectRatio = $scope.winHeight / $scope.winWidth;

			if($scope.vidAspectRatio > $scope.winAspectRatio)
			{
				// empty horizontal space
				$scope.bgVideo.style.width = $scope.winWidth + "px";
				$scope.bgVideo.style.height = "auto";
				$scope.transX = 0;
				$scope.transY = Math.max(0, ($scope.vidHeight - $scope.winHeight) / 2);
			}
			else
			{
				// empty vertical space
				$scope.bgVideo.style.width = "auto";
				$scope.bgVideo.style.height = $scope.winHeight + "px";
				$scope.transX = Math.max(0, ($scope.vidWidth - $scope.winWidth) / 2);
				$scope.transY = 0;
			}

			// $scope.bgVideo.style.transform = "translateY(-" + $scope.transY + "px) translateX(-" + $scope.transX + "px)";
			// translateY causing gap at bottom on laptop CK
		}

		// listen for a window resize
		window[addListenerMethod]('resize', $scope.sizeVideo);

		// listen for all media on page loaded. Start video playing
		$scope.$on("page_preloaded", function(){
			$scope.bgVideo.play();
		});

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove the rezize listener when it's no longer needed
			window[removeListenerMethod]('resize', $scope.sizeVideo);
		}
	}
	
	return {
		link: link,
		scope: true
	}
}]);

/***************
 *
 * Directive capabilitiesNav
 * Author: Pete Rugh
 * Function: Handles navigating the capabilities page
 * 4/3/2015
 *
 ***************/

v3AppDirectives.directive('capabilitiesNav', ['$timeout', function($timeout) {
	var link = function($scope, $element, $attr) {
		window.scrollOffset = -250;
		var docHeight = document.body.scrollHeight;
		var windowHeight = window.innerHeight;

		// where to scroll the window to. I attempted a dynamic version of this but wasn't successful due to translateY changes when the screen moves
		$scope.manualSectionOffsets = {
			strategy: 1718, 
			advertising: 2565,
			design: 3392,
			interactive: 4232,
			studios: 5065
		}
		// slide page to section
		$scope.gotoSection = function(slug) 
		{
			TweenLite.to(window, 1, {scrollTo:{y:$scope.manualSectionOffsets[slug]}, ease:Cubic.easeOut});
		}
	}
	
	return {
		link: link,
		scope: true
	}
}]);

/***************
 *
 * Directive chasingImage
 * Author: Pete Rugh
 * Function: Animates image within a container to "catch up" to 
 * the rest of the container's contents. A parallax style effect.
 * 3/26/2015
 *
 ***************/

v3AppDirectives.directive('chasingImage', [function() {
	var link = function($scope, $element, $attr) {

		// store $attributes
		$scope.travelAmount = parseFloat($attr.travelDistance);
		$scope.startMove = parseFloat($attr.startAt) || 0;
		$scope.endMove = parseFloat($attr.endAt) || 0; // not used currently
		$scope.minRatio = $attr.endAt ? 0 : -1; // if they passed in an ed at value, obey it, otherwise animate off of screen
		$scope.minRatio = 0;
		$scope.direction = $attr.direction || "down";

		$scope.chaser = {
			ele: $element[0].firstElementChild // the image
		}
		$scope.container = {
			ele: $element[0]
		}

		// when the image has loaded, we begin performing operations that include image sizing
		$scope.chaser.ele.onload = function()
		{
			// store information about the image
			$scope.chaser.width = this.naturalWidth;
			$scope.chaser.height = this.naturalHeight;
			$scope.chaser.aspectRatio = this.naturalWidth / this.naturalHeight;

			// set default styles for the element to make it stick to the top and left of the container
			$scope.chaser.ele.style.position = "absolute";
			$scope.chaser.ele.style.bottom = "auto";
			$scope.chaser.ele.style.right = "auto";
			$scope.chaser.ele.style.top = "0px";
			$scope.chaser.ele.style.left = "0px";

			// run stuff (see functions for comments)
			$scope.calculateMeasurements();
			$scope.setInitialPosition();
			$scope.pageScrolled();		
		}
		$scope.calculateMeasurements = function()
		{

			// store information about the container
			$scope.container.width = $scope.container.ele.offsetWidth;
			$scope.container.height = $scope.container.ele.offsetHeight;
			$scope.container.aspectRatio = $scope.container.ele.offsetWidth / $scope.container.ele.offsetHeight;
			$scope.container.aspect = $scope.container.ele.offsetWidth / $scope.container.ele.offsetHeight > 1 ? "landscape" : "portrait";
			if($scope.container.aspectRatio > $scope.chaser.aspectRatio)
			{
				// container is wider in ratio to image
				$scope.chaser.ele.style.minHeight = (($scope.container.height + $scope.travelAmount) * 1.1) + "px"; //make sure image is never shorter than it needs to be

				$scope.chaser.ele.style.minWidth = (($scope.container.height + $scope.travelAmount) * $scope.chaser.aspectRatio) + "px"; //make sure image is never thinner than it needs to be, also maintain aspect ratio
				$scope.chaser.ele.style.width = $scope.container.width * 1.1 + "px"; // make it a bit wider
				$scope.chaser.ele.style.height = "auto"; // height will be fine
				$scope.chaser.width = $scope.chaser.ele.scrollWidth; // width after rezizing
				$scope.chaser.height =  $scope.chaser.ele.scrollHeight; // height after rezizing
				$scope.chaser.verticalExcess = Math.max($attr.travelDistance, Math.abs($scope.chaser.height - $scope.container.height) / 2); // how much we have to play with vertically (will always be enough to compensate for animation size)
				$scope.chaser.verticalOffset = parseFloat($scope.chaser.verticalExcess) - $scope.travelAmount; // how far to push it down for now to vertically center the animation
				$scope.chaser.horizontalExcess = Math.abs(($scope.container.width - $scope.chaser.width) / 2); // horizontal centering math
			}
			else
			{
				// container is taller in ratio to image
				$scope.chaser.ele.style.minHeight = $scope.container.height + $scope.travelAmount + "px"; //make sure image is never shorter than it needs to be
				$scope.chaser.ele.style.minWidth = (($scope.container.height + $scope.travelAmount) * $scope.chaser.aspectRatio) + "px"; //make sure image is never thinner than it needs to be, also maintain aspect ratio
				$scope.chaser.ele.style.width = "auto"; // make it as wide as needed
				$scope.chaser.ele.style.height = $scope.container.height * 1.1 + "px";// make it a bit taller
				$scope.chaser.width = $scope.chaser.ele.scrollWidth; // width after rezizing
				$scope.chaser.height =  $scope.chaser.ele.scrollHeight; // height after rezizing
				$scope.chaser.verticalExcess = Math.min($attr.travelDistance, $scope.chaser.height - $scope.container.height); // how much we have to play with vertically (will always be enough to compensate for animation size)
				$scope.chaser.verticalOffset = $scope.chaser.verticalExcess - $attr.travelDistance; // how far to push it down for now to vertically center the animation
				$scope.chaser.horizontalExcess = Math.abs(($scope.container.width - $scope.chaser.width) / 2); // horizontal centering math
			}
		}
		$scope.setInitialPosition = function()
		{
			TweenLite.set($scope.chaser.ele, { x: $scope.chaser.horizontalExcess * -1, y: $scope.chaser.verticalOffset * -1, force3D: true });
		}
		$scope.pageScrolled = function()
		{
			// how far through the animtion has the element progressed (from 0-1, CAN have values outside of those bounds to compensate for image reaching top of window and stopping its animation)
			// $scope.elementProgress = Math.max($scope.minRatio, ($scope.container.ele.getBoundingClientRect().top - (window.innerHeight * $scope.endMove)) / (window.innerHeight));
			$scope.elementProgress = ($scope.container.ele.getBoundingClientRect().top - (window.innerHeight * $scope.endMove)) / (window.innerHeight);

			if($scope.direction == "down")
			{
				// in order to make the element catch up from the top we need to flip the ratio. Ex: 0.25 would now equal 0.75
				$scope.elementProgress = Math.abs(1 - $scope.elementProgress);
			}

			// where vertically should the element be positioned relative to progress through animation
			$scope.newOffset = $scope.chaser.verticalExcess - (($scope.elementProgress) * $scope.travelAmount);
			
			// set translateY and translateX based on new values with an ever so slight transition
			// TweenLite.set($scope.chaser.ele, { y: $scope.newOffset * -1, force3D: true });
			TweenLite.set($scope.chaser.ele, { y: $scope.newOffset * -1, force3D: true });
		}
		$scope.windowResized = function()
		{
			$scope.calculateMeasurements();
			$scope.setInitialPosition();
			$scope.pageScrolled();
		}


		var scrollHandler = _.throttle($scope.pageScrolled, 12)
		window[addListenerMethod]("scroll", scrollHandler); // scroll event listener
		window[addListenerMethod]("resize", $scope.windowResized); // window resize event listener

		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove listeners when it's no longer needed
			window[removeListenerMethod]("scroll", scrollHandler);
			window[removeListenerMethod]("resize", $scope.windowResized);

		}
	}
	
	return {
		link: link,
		scope: true
	}
}]);

/***************
 *
 * Directive fadeIn
 * Author: AK Andrews / Pete Rugh
 * Function: for fading in elements, most likely images for case studies. 
 * animates element to fade in at specified distance. 
 * 3/2/2015
 *
 ***************/
v3AppDirectives.directive('fadeIn', function() {
	var link = function($scope, $element, $attr) {
		
		$scope.fadeTl = new TimelineLite({paused:true, callback: $scope.fadedIn});
		$scope.fadeTl.to($element, $attr.time, { y:0, opacity: 1, delay: $attr.delay});

		$scope.winScrolled = function()
		{
			$scope.visibleAmount = (window.innerHeight - $element[0].getBoundingClientRect().top)
			
			if($scope.visibleAmount > $attr.distance) {
				$scope.fadeTl.play();
			}
		}

		$scope.fadedIn = function()
		{
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}

		$scope.winScrolled();

		// listen for scroll activity
		window[addListenerMethod]("scroll", $scope.winScrolled);

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove custom listener
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}
	}
	return {
		scope: true,
		link: link
	}
})

/***************
 *
 * Directive fadeSlideIn
 * Author: AK Andrews / Pete Rugh
 * Function: for fading and vertically animating in elements, most likely images for case studies. 
 * distance attr is set in element. 
 * animates element to fade in at specified distance. 
 * 3/2/2015
 *
 ***************/
v3AppDirectives.directive('fadeSlideIn', function() {
	var link = function($scope, $element, $attr) {
		
		$scope.fadeTl = new TimelineLite({paused:true, callback: $scope.fadedIn});
		$scope.fadeTl.to($element, $attr.time, { y:0, opacity: 1, delay: $attr.delay});

		$scope.winScrolled = function()
		{
			$scope.visibleAmount = (window.innerHeight - $element[0].getBoundingClientRect().top)
			
			if($scope.visibleAmount > $attr.distance) {
				$scope.fadeTl.play();
			}
		}

		$scope.fadedIn = function()
		{
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}

		$scope.winScrolled();

		// listen for scroll activity
		window[addListenerMethod]("scroll", $scope.winScrolled);

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove custom listener
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}
	}
	return {
		scope: true,
		link: link
	}
})


/***************
 *
 * Directive fadeText
 * Author: AK Andrews
 * Function: animates blocks of copy to fade in when scroll reaches them
 * 2/27/2015
 *
 ***************/
v3AppDirectives.directive('fadeText', function() {
	var animation = function($scope, $element, $attrs) {

		$scope.fadingEles = $element[0].querySelectorAll("h1, h2, .border, .blockquote, .copy");
		$scope.fadeTl = new TimelineLite({paused:true, callback: $scope.fadedIn});
		$scope.fadeTl.staggerTo($scope.fadingEles, 0.5, { y:0, opacity: 1}, 0.1);

		$scope.winScrolled = function()
		{
			$scope.visibleAmount = (window.innerHeight - $element[0].getBoundingClientRect().top)
			
			if($scope.visibleAmount > 200) {
				$scope.fadeTl.play();
			}
		}

		$scope.fadedIn = function()
		{
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}

		$scope.winScrolled();

		// listen for scroll activity
		window[addListenerMethod]("scroll", $scope.winScrolled);


		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove custom listener
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}
	};
	
	return {
		scope: true,
		link: animation
	}
})




/***************
 *
 * Directive forwardArrow
 * Author: Pete Rugh
 * Function: plays swoosh on crossout
 * 3/26/2015
 *
 ***************/

v3AppDirectives.directive('forwardArrow', ['$timeout', '$rootScope', function($timeout, $rootScope) {
	var link = function($scope, $element, $attr) {

		function crossOut()
		{
			$scope.$apply(function(){
				$scope.playSound('crossOutOver');
			})
		}
		// custom listener
		$element[0][addListenerMethod]("mouseenter", crossOut);

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove custom listener
			$element[0][removeListenerMethod]("mouseenter", crossOut);
		}
	}

	return {
		link: link,
		scope: true,
		restrict: "AEC"
	}
}]);

/***************
 *
 * Directive fullClouds
 * Author: Pete Rugh
 * Function: Grows and shrinks the cloud background for the publik case study page.
 * 2/25/2015
 *
 ***************/
v3AppDirectives.directive('fullClouds', function($window) {
	function link($scope, $element, $attrs)
	{
		function resizeCloudBg()
		{
			// Pull window height and width after resize
			// $scope.winWidth = window.innerWidth;
			// $scope.winHeight = window.innerHeight;

			// // set the background size to the window size
			// // because it's clouds and faint and a bg, we don't care about skewing the clouds
			// $element[0].style.backgroundSize = $scope.winWidth + 'px ' + $scope.winHeight + 'px';
		}

		// listen for a window resize
		//window[addListenerMethod]('resize', resizeCloudBg);

		// resize the clouds
		resizeCloudBg();

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove the resize listener when it's no longer needed
			window[removeListenerMethod]('resize', resizeCloudBg);
		}
	}
	return {
		restrict: 'A',
		link: link,
		scope: true
	}
});
/***************
 *
 * Directive fullScreen
 * Author: Pete Rugh
 * Function: Make an element the width and height of the browser window regardless of display type;
 * 4/5/2015
 *
 ***************/
v3AppDirectives.directive('fullScreen', function() {
	function link($scope, $element, $attrs)
	{
		function resizeElement()
		{
			// make the element the exact window size
			$element[0].style.width = window.innerWidth + "px";
			$element[0].style.height = window.innerHeight + "px";
		}
		
		// if we want to resize on window resize
		if($attrs.obeyRezize == "true")
		{
			// add a resize listener
			window[addListenerMethod]("resize", resizeElement);
		}

		resizeElement();

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove the resize listener when it's no longer needed
			window[removeListenerMethod]('resize', resizeElement);
		}
	}
	return {
		restrict: 'A',
		link: link
	}
});

/***************
 *
 * Directive goldOutliner
 * Author: Pete Rugh
 * Function: appends DOM elements to an outliner element so we're not copying and pasting a million times
 * 3/11/2015
 *
 ***************/
v3AppDirectives.directive('goldOutliner', function() {
	function link($scope, $element, $attrs)
	{
		$scope.elements = [{
			domEle: document.createElement("span"),
			classNames: "border-top-right",
		},
		{
			domEle: document.createElement("span"),
			classNames: "border-right",
		},
		{
			domEle: document.createElement("span"),
			classNames: "border-bottom",
		},
		{
			domEle: document.createElement("span"),
			classNames: "border-left",
		},
		{
			domEle: document.createElement("span"),
			classNames: "border-top-left",
		}];

		function swoosh()
		{
			$scope.$apply(function(){
				$scope.playSound('goldOutline');
			});
		}
		// custom listener
		// $element[0][addListenerMethod]("mouseenter", swoosh);

		// attach lines as DOM elements to directive element
		function compileAndAttach()
		{
			for(var i=0, numEles = $scope.elements.length; i < numEles; i++)
			{
				$scope.elements[i].domEle.className = "borders " + $scope.elements[i].classNames;
				$element[0].appendChild($scope.elements[i].domEle);
			}
		}
		compileAndAttach();
	}
	return {
		restrict: 'C',
		link: link
	}
});

/***************
 *
 * Directive heroSection
 * Author: Pete Rugh
 * Function: Size a section to properly fit the height and width of the window
 * 2/25/2015
 *
 ***************/
v3AppDirectives.directive('heroSection', function($rootScope) {
	function link($scope, $element, $attrs)
	{
		function sizeHero()
		{
			// set element height to window height
			$element[0].style.height = window.innerHeight + 'px';
		}

		// listen for a window resize
		 if ($rootScope.desktop == true) {
			window[addListenerMethod]('resize', sizeHero);
				// size the hero section
	   }
	   sizeHero();

	

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove the rezize listener when it's no longer needed
			window[removeListenerMethod]('resize', sizeHero);
		}
	}
	return {
		restrict: 'A',
		link: link
	}
});

/***************
 *
 * Directive homePageIntroduction
 * Author: Pete Rugh
 * Function: animates introduction for home page
 * 2/25/2015
 *
 ***************/
v3AppDirectives.directive('homePageIntroduction', function($window, $rootScope, animationTracker, $timeout) {
	function link($scope,  $element, $attrs)	{

		var LINE_BY_LINE_OFFSET = 0.15;
		var INTRO_HEIGHT = 300;
		var interv;

		$scope.scrollLock = true;
		$scope.titleTextHolder = $element[0].querySelector("h1");
		$scope.pluses = $element[0].querySelectorAll("b");
		$scope.scrollInstructions = $element[0].querySelector("#scroll_instructions");
		$scope.reelBtn = $element[0].querySelector("h2 a");
		$scope.mobileReelBtn = $element[0].querySelector("#mobile_title_sprite");
		$scope.titleCard = $element[0].querySelector("#title_sprite");
		$scope.mobileTitleCard = $element[0].querySelector("#mobile_title_sprite");
		$scope.titleCardTl = new TimelineLite({ paused: true, onComplete: releaseScrollLock });
		$scope.homeTimeline = new TimelineLite({ paused: true, onComplete: homeTimeLineRan });
		$scope.homeOutroTl = new TimelineLite({ paused: true, onComplete: runTitleCard });


		$scope.titleText = {
			lineOne: {
				ele: $element[0].querySelector("h1 p")
			},
			lineTwo: {
				ele: $element[0].querySelector("h1 p + p")
			},
			lineThree: {
				ele: $element[0].querySelector("h1 p + p + p")
			}
		}
		function buildTitleCard()
		{
			$scope.titleCardTl.to($scope.reelBtn, 0.75, { autoAlpha: 1, y: 0}, 0.75);
			$scope.mobileTitleCard.style.opacity = "0";

		}

		function buildIntroText()
		{
			var loopIterator = 0;
			for(var key in $scope.titleText)
			{
				$scope.titleText[key].split = new SplitText($scope.titleText[key].ele, {type:"chars",position:"absolute"});
				var offset = Math.floor($scope.titleText[key].split.chars.length / 2);
				$scope.titleText[key].parts = {
					first: {
						chars: null
					},
					second: {
						chars: null
					}
				};
				$scope.titleText[key].parts.first.chars = $scope.titleText[key].split.chars.slice(0,offset);
				$scope.titleText[key].parts.second.chars = $scope.titleText[key].split.chars.slice(offset,$scope.titleText[key].split.chars.length);
				$scope.titleText[key].parts.first.chars.reverse();

				for(var jKey in $scope.titleText[key].parts)
				{
					$scope.homeTimeline.staggerTo($scope.titleText[key].parts[jKey].chars, 1.3, { y:-15, ease:Cubic.easeInOut}, 0.0333, LINE_BY_LINE_OFFSET * loopIterator);
					$scope.homeTimeline.staggerTo($scope.titleText[key].parts[jKey].chars, 0.833, {opacity:1, ease:Linear.easeNone}, 0.0333, LINE_BY_LINE_OFFSET * loopIterator + 0.666);
				}
				loopIterator++;
			}
		}
		function buildOutroText()
		{
			var sizeTarget = 0.8;
			var fadeSpeed = 0.7;

			$scope.homeOutroTl.to($scope.titleText.lineOne.ele, fadeSpeed, { scaleX: sizeTarget, scaleY: sizeTarget, ease: Cubic.easeOut}, 0.2);
			$scope.homeOutroTl.to($scope.titleText.lineTwo.ele, fadeSpeed, { scaleX: sizeTarget, scaleY: sizeTarget, ease: Cubic.easeOut}, 0);
			$scope.homeOutroTl.to($scope.titleText.lineThree.ele, fadeSpeed, { scaleX: sizeTarget, scaleY: sizeTarget, ease: Cubic.easeOut}, 0.2);
			$scope.homeOutroTl.to($scope.scrollInstructions, fadeSpeed, { autoAlpha: 0, y: -20, ease: Cubic.easeOut}, 0.1);
			$scope.homeOutroTl.to($scope.pluses, fadeSpeed, { autoAlpha: 0, ease: Cubic.easeOut}, 0.1);
			$scope.homeOutroTl.to($scope.titleTextHolder, fadeSpeed, { autoAlpha: 0, ease: Cubic.easeOut}, 0);
		}
		

		buildTitleCard();
		buildIntroText();
		buildOutroText();
		// add scroll instructions and '+'s to tl
		$scope.homeTimeline.to($scope.scrollInstructions, 1.25, { y: 0, opacity:1 }, 1.5);
		$scope.homeTimeline.staggerTo($scope.pluses, 0.75, { y: 0, opacity:1 }, 0.25, 1.1);

		$scope.pageScrolled = function(evt)
		{
			if($scope.scrollLock)
			{
				evt.preventDefault();
			}
			$scope.scrollSpeed = evt.wheelDeltaY;

			// Touch events CK
			$scope.delta = evt.pageY;

			if($scope.canTrigger) //ck added ||
			{
				removeIntroText();
				$scope.canTrigger = false;
			}
			// hyyyyuuyuyyhnbghyjnbgtvhyr64rbv hgthnfrtgvbhjnm // Added by Royal Rugh 4/5/15
		}
		function releaseScrollIntro(evt)
		{
			$scope.canTrigger = true;
			$scope.scrollLock = false;
		}
		function removeIntroText()
		{
			$scope.homeOutroTl.play();

		}
		function runTitleCard()
		{
			$timeout(function(){
				releaseScrollLock();
			}, 200)

			if ($rootScope.desktop == true)
			{
				$scope.titleCardTl.play();
				var uaString = navigator.userAgent;
				// check to make sure it's not safari
				if(uaString.indexOf('Safari') != -1 && uaString.indexOf('Chrome') == -1)
				{
					console.log('safari');
					SierraMist($element[0].querySelector("img"), 10, 63, false, 45, 812, 223);
				}
				else
				{
					SierraMist($element[0].querySelector("img"), 10, 63, false, 45, 812, 223);
				}
				$scope.reelBtn.style.display = "block";
			}
			else
			{
				$scope.mobileTitleCard.style.opacity = "1";
				$scope.mobileTitleCard.style.display = "block";
			}
			
		}
		function homeTimeLineRan()
		{
			$scope.canTrigger = true;
		}
		function releaseScrollLock()
		{
			document[removeListenerMethod]("mousewheel", $scope.pageScrolled);
			document[removeListenerMethod]("touchmove", $scope.pageScrolled);
			window[removeListenerMethod]("scroll", $scope.pageScrolled);
		}
		
		document[addListenerMethod]("mousewheel", $scope.pageScrolled);
		document[addListenerMethod]("touchmove", $scope.pageScrolled);
		window[addListenerMethod]("scroll", $scope.pageScrolled);

		$scope.$on("animationUpdate", animationUpdated);
		function animationUpdated()
		{
			if(animationTracker.getAnimationStatus().action == "worm_squirmed")
			{
				console.log('home heard animation update', animationTracker.getAnimationStatus().action);
				$scope.homeTimeline.play();
			}
		}
		function SierraMist(ele, cols, frames, loop, fps, frameW, frameH)
		{
			cols = parseInt(cols);
			frames = parseInt(frames);
			var prog = 1;
			var col = 1;
			interv = setInterval(function(){

				var row = Math.floor(prog/cols) + 1;
				if(prog == frames)
				{
					clearInterval(interv);
				}
				if(col == cols)
				{
					col = 0;
				}
				prog++;
				col++;
				TweenLite.set(ele, { x: (col - 1) * frameW * -1, y: (row - 1) * frameH * -1, force3D: true });
			}, 22)
		}
		$scope.showReel = function()
		{
			console.log("directive fired");
			// $scope.reel = document.getElementById("hi_reel");
			$scope.player = $f(document.getElementById("player1"));
			$scope.player.api('play');
			$scope.reelShowing = true;
			// $scope.mobileTitleCard.style.opacity = "0"; 

		}

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// clear title card interval
			clearInterval(interv);
			releaseScrollLock();
		}
	}
	return {
		restrict: 'A',
		link: link,
		scope: true
	}
});

/***************
 *
 * Directive lockTheTaskbar
 * Author: Pete Rugh
 * Function: Locks the work archive page filters to the top of the screen when the browser
 * top meets it. Also accurately locks menu trigger to bar as it approaches top of screen.
 * 3/26/2015
 *
 * SHAREEF DON’T LIKE IT!
 *
 *
 ***************/

v3AppDirectives.directive('lockTheTaskbar', ['$timeout','$rootScope', function($timeout, $rootScope) {
	var link = function($scope, $element, $attr) {

		// filters bar
		$scope.filters = $element[0];
		// work panels area (need for top offset)
		$scope.workSection = document.getElementById("work");
		// global nav trigger
		$scope.globalNav = document.getElementById("nav_trigger");

		// reset position of filters (if directive has run before);
		$scope.filters.style.position = "absolute";

		$scope.scrolled = function(evt) 
		{
			// get distance of work panels area from top of window as INT
			$scope.distFromTop = $scope.workSection.getBoundingClientRect().top;

			if($scope.distFromTop < 1)
			{
				// if the top of the work panels area is above screen viewport, stick the filters to the top
				// this will set the filter’s top distance to 0, hence why we use the top of panels area as trigger
				$scope.filters.style.position = "fixed";
			}
			else
			{
				// if top dist matches height of filters, unstick filters
				$scope.filters.style.position = "absolute";
			}

			// is the distance from the top in range [0,25]?
			if($scope.distFromTop < 0)
			{
				// less than range, menu trigger is locked to filters bar
				if ($rootScope.desktop == true){
					$scope.transY = 25;
				} else if ($rootScope.desktop != true){
					$scope.transY = 10;
				}
			}
			else if($scope.distFromTop > 26)
			{
				// more than range, menu trigger is unlocked from filters bar
				$scope.transY = 0;
			}
			else
			{
				// in range, menu trigger travels with filters bar as they both lock to top of window
				if ($rootScope.desktop == true){
					$scope.transY = Math.abs(25 - $scope.distFromTop);
				} else if ($rootScope.desktop != true){
					$scope.transY = Math.abs(10 - $scope.distFromTop);
				}
			}
			// set the menu trigger position, this is a fail safe if the scroll event isn’t fired at endpoints of range
			new TweenLite.set($scope.globalNav, { y: (-1* $scope.transY), force3D: true})
		}

		// listen for window scroll
		window[addListenerMethod]("scroll", $scope.scrolled);

		$scope.scrolled();

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove listener
			window[removeListenerMethod]("scroll", $scope.scrolled);
			// animate global menu trigger into correct position
			new TweenLite.to($scope.globalNav, 0.25, { y: 0 });
		}
	}
	
	return {
		link: link,
		scope: true
	}
}]);



/***************
 *
 * Directive CLIENT FLIPPER
 * Author: Pete Rugh
 * Function: Reveals client list in a flipping fashion
 * 3/26/2015
 *
 * SHAREEF DON'T LIKE IT!
 *
 ***************/

v3AppDirectives.directive('clientList', ['$timeout', function($timeout) {
	var link = function($scope, $element, $attr) {

		$scope.flipperBuilt = false;

		$scope.buildFlipper = function()
		{
			$scope.theList = document.getElementById("client_names_list");
			$scope.clientsColOne = document.querySelectorAll("#clients_list li:nth-child(3n - 2)");
			$scope.clientsColTwo = document.querySelectorAll("#clients_list li:nth-child(3n - 1)");
			$scope.clientsColThree = document.querySelectorAll("#clients_list li:nth-child(3n)");
			new TweenLite.set([$scope.clientsColOne[0], $scope.clientsColTwo[0], $scope.clientsColThree[0]], { className: "+=col_top"});
			$scope.open = false;
			$scope.arrow = document.getElementById("client_notch");
			$scope.clientListTl = new TimelineLite({ paused: true });
			$scope.clientListTl.staggerTo($scope.clientsColOne, 0.00000001, { className: '+=showing'}, 0.12, 0);
			$scope.clientListTl.staggerTo($scope.clientsColTwo, 0.00000001, { className: '+=showing'}, 0.12, 0.12);
			$scope.clientListTl.staggerTo($scope.clientsColThree, 0.00000001, { className: '+=showing'}, 0.12, 0.24);
			$scope.flipperBuilt = true;
		}
		$scope.toggleClients = function(evt)
		{
			if($scope.open == false)
			{
				$scope.theList.style.overflow = "visible";
				$scope.clientListTl.play();
				$scope.open = true;
			}
			else
			{
				$scope.closeClients();
			}
		}
		$scope.closeClients = function()
		{
			new TweenLite.set([$scope.clientsColOne, $scope.clientsColTwo, $scope.clientsColThree], {className: "-=showing"});
			$scope.clientListTl.pause(0);
			$scope.open = false;
			$timeout(function() { $scope.theList.style.overflow = "hidden"; }, 200);
		}

		$scope.$on("client_list_appended", function(){
			if(!$scope.flipperBuilt)
			{
				$scope.buildFlipper();
			}
		});
		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective() {
			$scope.closeClients()
		}
	}
	
	return {
		link: link,
		scope: true
	}
}]);

/***************
 *
 * Directive navScroll
 * Author: AK Andrews / Pete Rugh
 * Function: Adds a class to a link when the section id is the same as the href it reaches
 * Smooth scrolls a page to an anchor point
 * 3/2/2015
 *
 ***************/

v3AppDirectives.directive('navScroll', function() {
	var link = function($scope, $element, $attr) {

		$scope.winScrolled = function() {
			$scope.y = $(this).scrollTop();
			
			$('.link').each(function (event) {
				if ($scope.y >= $($(this).attr('href')).offset().top - 150) {
					$('.link').not(this).removeClass('active');
					$(this).addClass('active');
				}
			})
		};
		
		$('.link').on('click', function() {
			var $this = $(this),
				href = $this.attr('href'),
				topY = $(window).height() + $this.data('x-target');
			
			TweenLite.to($(window), 1, {
				scrollTo:{
					y: topY,
					autoKill:true
				},
				ease:Cubic.easeOut
			});
			return false;
		})

		$scope.winScrolled();
		window[addListenerMethod]("scroll", $scope.winScrolled);

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove custom listener
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}
	}
	
	return {
		link: link
	}
});

/***************
 *
 * Directive pageLoader
 * Author: Pete Rugh
 * Function: load a page's assets
 * 2/25/2015
 *
 ***************/
v3AppDirectives.directive('pageLoader', ['$timeout', 'loadingTracker', '$rootScope', function($timeout, loadingTracker, $rootScope) {
	function link($scope, $element, $attrs)
	{
		// listen for loading events
		$scope.$on("loadingTrackerEvent", function(){
			// the animation directive has told us to begin
			if(loadingTracker.getAction() == "loadNextPage")
			{
				// tell the tracker to chill, otherwise we get an infinte loop
				loadingTracker.setAction("atRest");
				// preload the page
				$scope.loadPageAssets();
			}
		});
		$scope.$on("reloadPage", function(){
			$scope.loadPageAssets();
		})
		// fetch the assets that we want to preload

		$scope.assetEles = document.querySelectorAll("[data-preloader=image]");


		$scope.numAssets = $scope.assetEles.length; // number of assets to load
		$scope.numLoaded = 0; // assets loaded so far
		$scope.pctPerAsset = 100 / $scope.numAssets;

		$scope.vidProgressed = function()
		{
			// how much has video loaded as [0, 1.3)
			// cheat and say video is loaded at about 75%
			var loadingProgress = this.buffered.end(0) / this.duration * 1.3;
			
			if(loadingProgress >= 1)
			{
				// video loaded
				$scope.videoReady(this);

				// destroy the listener now that video has loaded
				this[removeListenerMethod]("progress", $scope.vidProgressed);
			}
			else
			{
				// pass in the progress of the element plus num loaded on update
				// this prevents loading bar from pausing in one spot for a long time
				loadingTracker.setProgress(($scope.numLoaded + loadingProgress) / $scope.numAssets);
				loadingTracker.broadcastStatus();
			}
		}
		$scope.loadPageAssets = function()
		{
			console.log("Number of assets found for preloading: " + $scope.numAssets);
			// if we found things to load, do it, otherwise play the animation as normal
			if($scope.numAssets > 0)
			{
				angular.forEach($scope.assetEles, function(asset, key){
					asset.onerror = function()
					{
						// the media borked out. We don't know why, but we don't want the whole page to stop sooo, let's just say it loaded ok?
						$scope.assetIncrement();
					}
					if(asset.dataset.preloader == "image")
					{
						var img = new Image(); // new empty image
						img.src= asset.dataset.src; // load preload src
						img.onload = function()
						{
							// attach to DOM and increment
							$scope.attachImg(asset);
						}
					}
					else if(asset.dataset.preloader == "vid")
					{
						asset[addListenerMethod]("progress", $scope.vidProgressed);
					}
				});
			}
			else
			{
				// play animation because there is nothing to load
				loadingTracker.setAction("playWorm");
				loadingTracker.broadcastStatus();
			}
		}
		$scope.attachImg = function(mediaAsset)
		{
			if(mediaAsset.dataset.attachMethod == "bg")
			{
				// attach as background
				mediaAsset.style.backgroundImage = "url(" + mediaAsset.dataset.src + ")";
			}
			else if(mediaAsset.dataset.attachMethod == "src")
			{
				// attach as src
				mediaAsset.src = mediaAsset.dataset.src;
			}
			// make sure it isn't loaded again
			mediaAsset.dataset.preloader = "loaded";

			// increase progress
			$scope.assetIncrement();
		}
		$scope.videoReady =  function(mediaAsset)
		{
			// make sure it isn't loaded again
			mediaAsset.dataset.preloader = "loaded";

			$scope.assetIncrement();
		}
		$scope.assetIncrement = function()
		{
			// an asset has been loaded and is ready to be added to completed count

			$scope.numLoaded++; // increase loaded count
			
			// update loading service with progression
			loadingTracker.setProgress($scope.numLoaded / $scope.numAssets);
			// broadcast it
			loadingTracker.broadcastStatus();
			
			// if all assets are loaded, tell EVERYONE
			if($scope.numLoaded == $scope.numAssets)
			{
				$rootScope.$broadcast("page_preloaded");
			}
		}
		
	}
	return {
		scope: true,
		restrict: 'A',
		link: link
	}
}]);

/***************
 *
 * Directive partnerViewer
 * Author: Pete Rugh/ AK Andrews
 * Function: Handles partner section animation and data tracking
 * 3/24/2015
 *
 ***************/

v3AppDirectives.directive('partnerViewer', ['partnerService', function(partnerService) {
	var link = function($scope, $element, $attr) {

		// get list of partners
		$scope.partners = partnerService.returnPartners();

		// Dom selection
		$scope.detailArea = document.getElementById("bio_holder");
		$scope.partnerPhoto = document.getElementById("partner_photo");
		$scope.chunkOne = document.querySelectorAll("#name, #title");
		$scope.chunkTwo = document.querySelectorAll("#bio, #bio + hr, #bio-text");
		$scope.chunkThree = document.querySelectorAll("#social, #social + hr, #links");
		
		$scope.updateNav = function()
		{
			// this sets the correct side nav  active state
			$scope.activePartner = $scope.partner.name;
		}

		$scope.select = function(partner) {
			// called on partner nav click

			// sety global partner
			$scope.partner = partner;

			// cancel some events when carl is selected DO NOT DELETE!
			($scope.partner.name == "Carl" ? carl() : false);

			// update nav first
			$scope.updateNav();

			// fade out container
			$scope.exitTl = new TimelineLite();
			$scope.exitTl.to($scope.detailArea, 0.25, { opacity: 0, onComplete: $scope.containerVisible }, 0.15);
			$scope.exitTl.to($scope.partnerPhoto, 0.25, { opacity: 0 }, 0.15);

		}
		$scope.containerVisible = function()
		{
			// update partner data to chosen partner
			$scope.$apply($scope.selected = $scope.partner);
			
			$scope.infoEntry = new TimelineLite();

			$scope.infoEntry.from($scope.chunkOne, 0.5, {transform:"translateY(60px)", opacity: 0, ease:Cubic.easeOut});
			$scope.infoEntry.from($scope.chunkTwo, 0.5, {transform:"translateY(60px)", opacity: 0, ease:Cubic.easeOut}, "-=0.4");
			$scope.infoEntry.from($scope.chunkThree, 0.5, {transform:"translateY(60px)", opacity: 0, ease:Cubic.easeOut}, "-=0.4");
			new TweenLite.set($scope.detailArea, { opacity: 1});
		}
		$scope.isActive = function(partner) {
			return $scope.selected === partner;
		}
		$scope.showPartnerPhoto = function()
		{
			new TweenLite.to($scope.partnerPhoto, 0.25, { opacity: 1 });
		}

		// only fade partner image in if the image is loaded. This will fire on every partner change
		$scope.partnerPhoto[addListenerMethod]("load", $scope.showPartnerPhoto);

		
	}
	
	return {
		link: link
	}
}]);

/***************
 *
 * Directive shadowProduct
 * Author: Pete Rugh
 * Function: add a product sized drop shadow on store products
 * 2/25/2015
 *
 ***************/
v3AppDirectives.directive('shadowProduct', function($timeout) {
	function link($scope, $element, $attrs)
	{
		// drop shadow image
		$scope.thisImg = $element[0].querySelector('a img');

		$scope.sizeShadow = function()
		{
			$scope.targetImgDimensions = this.getBoundingClientRect(); // get the product image dimensions
			$scope.shadowWidth = $scope.targetImgDimensions.width * 1.2; // make the shadow a little bigger than image
			$scope.leftMargin = 0 - $scope.targetImgDimensions.width * 1.2 / 2; // base showdow height on shadow width
			$scope.thisImg[removeListenerMethod]('load', $scope.sizeShadow); // remove listener
		}
		$scope.thisImg[addListenerMethod]('load', $scope.sizeShadow); // listen for the product image to be ready (need dimensions)
	}
	return {
		scope: true,
		restrict: 'A',
		link: link
	}
});

/***************
 *
 * Directive siteHeader
 * Author: Pete Rugh
 * Function: hide and show menu
 * 2/25/2015
 *
 ***************/

v3AppDirectives.directive('siteHeader', ['$rootScope', '$window', '$timeout', function($rootScope, $window, $timeout) {
	function link($scope, $element, $attrs)
	{
		var letters,
			btn,
			status,
			hamburger,
			crossout,
			box,
			boxTight,
			numNavs,
			suppressClick = false,
			navItems = [],
			menuTls = [],
			tls = {},
			menuAnimIn = new TimelineLite();

		function clickSuppress(action)
		{
			if(action == "off")
			{
				suppressClick = false;
			}
			else
			{
				suppressClick = true;
			}
		}
		function buildDomReferences()
		{
			letters = {
				super1: document.getElementById("letter_s1"),
				super2: document.getElementById("letter_u1"),
				super3: document.getElementById("letter_p1"),
				super4: document.getElementById("letter_e1"),
				super5: document.getElementById("letter_r1"),
				top1: document.getElementById("letter_t2"),
				top2: document.getElementById("letter_o2"),
				top3: document.getElementById("letter_p2"),
				secret1: document.getElementById("letter_s3"),
				secret2: document.getElementById("letter_e3_1"),
				secret3: document.getElementById("letter_c3"),
				secret4: document.getElementById("letter_r3"),
				secret5: document.getElementById("letter_e3_2"),
				secret6: document.getElementById("letter_t3")
			}
			btn = document.getElementById("hamburger_menu");
			status = "inactive";

			hamburger = {
				upper: {
					ele: document.getElementById("ham_top"),
					inactive: {
						scaleX: 1.82,
						yPos: -5
					},
					inactiveHover: {
						scaleX: 1,
						yPos: 0
					},
					defaultPos: {

					}
				},
				mid: {
					ele: document.getElementById("ham_mid"),
					inactive: {
						scaleX: 1.82,
						yPos: 0
					},
					inactiveHover: {
						scaleX: 1,
						yPos: 0
					}
				},
				lower: {
					ele: document.getElementById("ham_bottom"),
					inactive: {
						scaleX: 1.82,
						yPos: 5
					},
					inactiveHover: {
						scaleX: 1,
						yPos: 0
					}
				}
			}
			crossout = {
				upper: document.getElementById("crossout_top"),
				mid: document.getElementById("crossout_mid"),
				lower: document.getElementById("crossout_bottom")
			}
			box = {
				topRight: document.querySelector("#box .border_top_right"),
				right: document.querySelector("#box .border_right"),
				bottom: document.querySelector("#box .border_bottom"),
				left: document.querySelector("#box .border_left"),
				topLeft: document.querySelector("#box .border_top_left")
			}
			boxTight = {
				topRight: document.querySelector("#box_tight .border_top_right"),
				right: document.querySelector("#box_tight .border_right"),
				bottom: document.querySelector("#box_tight .border_bottom"),
				left: document.querySelector("#box_tight .border_left"),
				topLeft: document.querySelector("#box_tight .border_top_left")
			}
		}

		/****************************************/
		/****************************************/

		//			Set Initial looks			//

		/****************************************/
		/****************************************/

		function setDefaults() 
		{
			// das burger
			TweenLite.set(hamburger.upper.ele, { opacity: 0, y: hamburger.upper.inactive.yPos + 25, scaleX: hamburger.upper.inactive.scaleX * 1.26 });
			TweenLite.set(hamburger.mid.ele, { opacity: 0, y: hamburger.mid.inactive.yPos + 25, scaleX: hamburger.mid.inactive.scaleX * 1.26 });
			TweenLite.set(hamburger.lower.ele, { opacity: 0, y: hamburger.lower.inactive.yPos + 25, scaleX: hamburger.lower.inactive.scaleX * 1.26 });
			TweenLite.set([letters.super1, letters.top1, letters.secret1], {opacity: 0, y: 30});
			TweenLite.set([crossout.upper, crossout.mid, crossout.lower], { opacity: 1, scaleX: 0 });

			// wider box
			TweenLite.set([box.topRight, box.topLeft, box.bottom], { opacity: 1, scaleX: 0});
			TweenLite.set([box.right, box.left], { opacity: 1, scaleY: 0});

			// smaller box
			TweenLite.set([boxTight.topRight, boxTight.topLeft, boxTight.bottom], { opacity: 1, scaleX: 0});
			TweenLite.set([boxTight.right, boxTight.left], { opacity: 1, scaleY: 0});
		}
		function fixPositions(atRestState)
		{
			switch (atRestState) {
				case "closed" :
					console.log("nav closed")
					resetMenu();
					tls.hamIntroUpperTl.set(hamburger.upper.ele, {
						y: hamburger.upper.inactive.yPos,
						rotation:0,
						scaleX: hamburger.upper.inactive.scaleX
					});
					tls.hamIntroMidTl.set(hamburger.mid.ele, {
						y: hamburger.mid.inactive.yPos,
						rotation:0,
						scaleX: hamburger.mid.inactive.scaleX
					});
					tls.hamIntroLowerTl.set(hamburger.lower.ele, {
						y: hamburger.lower.inactive.yPos,
						rotation:0,
						scaleX: hamburger.lower.inactive.scaleX
					});
					tls.introTl.seek(tls.introTl.duration());
					return;
				case "open" :
					return;
				case "closedHover" :
					tls.hamInactiveHoverUpperTl.set(hamburger.upper.ele, { y: hamburger.upper.inactiveHover.yPos, scaleX: hamburger.upper.inactiveHover.scaleX });
					tls.hamInactiveHoverMidTl.set(hamburger.mid.ele, { y: hamburger.mid.inactiveHover.yPos, scaleX: hamburger.mid.inactiveHover.scaleX });
					tls.hamInactiveHoverLowerTl.set(hamburger.lower.ele, { y: hamburger.lower.inactiveHover.yPos, scaleX: hamburger.lower.inactiveHover.scaleX });
					return;
				case "openHover" :
					return;
			}
		}
		function resetMenu()
		{
			TweenLite.set(hamburger.upper.ele, { transformOrigin: "50% 50%" });
			TweenLite.set(hamburger.mid.ele, { transformOrigin: "50% 50%" });
			TweenLite.set(hamburger.lower.ele, { transformOrigin: "50% 50%" });
		}
		/****************************************/
		/****************************************/

		//			Initiate timelines			//

		/****************************************/
		/****************************************/

		function createTimelines()
		{
			/* timeline holder */
			tls.introTl = new TimelineLite({ paused: true });
			
			/* intro animatino timelines for letters */
			tls.acronymTl = new TimelineLite();
			tls.uperTl = new TimelineLite();
			tls.opTl = new TimelineLite();
			tls.ecretTl = new TimelineLite();
			
			/* intro animatino timelines for hamburger */
			tls.hamIntroUpperTl = new TimelineLite();
			tls.hamIntroMidTl = new TimelineLite();
			tls.hamIntroLowerTl = new TimelineLite();

			/* inactive hover hamburger hover */
			tls.hamInactiveHoverUpperTl = new TimelineLite({ paused: true});
			tls.hamInactiveHoverMidTl = new TimelineLite({ paused: true});
			tls.hamInactiveHoverLowerTl = new TimelineLite({ paused: true});

			/* box timelines */
			tls.boxTl = new TimelineLite({ paused: true});
			tls.boxTlTweener = new TimelineLite({ paused: true });

			/* box tight timelines */
			tls.boxTightTl = new TimelineLite({ paused: true});
			tls.boxTightTlTweener = new TimelineLite({ paused: true });

			/* hamburger active state */
			tls.hamActiveUpperTl = new TimelineLite({ paused: true});
			tls.hamActiveMidTl = new TimelineLite({ paused: true});
			tls.hamActiveLowerTl = new TimelineLite({ paused: true});

			/* hamburger active state hover */
			tls.hamActiveUpperHoverTl = new TimelineLite({ paused: true});
			tls.hamActiveLowerHoverTl = new TimelineLite({ paused: true});

			/* transition to at rest from close hover */
			tls.hamActiveUpperCloseTl = new TimelineLite({ paused: true});
			tls.hamActiveMidCloseTl = new TimelineLite({ paused: true});
			tls.hamActiveLowerCloseTl = new TimelineLite({ paused: true });

			/* crossout */
			tls.crossoutTl = new TimelineLite({ paused: true});
		}



		/****************************************/
		/****************************************/

		//			Build timelines				//

		/****************************************/
		/****************************************/

		function constructTimelines()
		{
			// intro
			tls.acronymTl.staggerTo([letters.super1, letters.top1, letters.secret1], 0.4, {opacity:1,y:0, ease: Cubic.easeOut}, 0.08);
			tls.uperTl.staggerTo([letters.super2, letters.super3, letters.super4, letters.super5], 0.26, {opacity:1, ease: Cubic.easeOut}, 0.06);
			tls.opTl.staggerTo([letters.top2, letters.top3], 0.26, {opacity:1, ease: Cubic.easeOut}, 0.06);
			tls.ecretTl.staggerTo([letters.secret2, letters.secret3, letters.secret4, letters.secret5, letters.secret6], 0.26, {opacity:1, ease: Cubic.easeOut}, 0.06);

			tls.hamIntroUpperTl.to(hamburger.upper.ele, 0.25, { 
				opacity:1, 
				y: hamburger.upper.inactive.yPos,
				scaleX: hamburger.upper.inactive.scaleX,
				ease:Cubic.easeOut
			});
			tls.hamIntroMidTl.to(hamburger.mid.ele, 0.25, { 
				opacity:1, 
				y: hamburger.mid.inactive.yPos,
				scaleX: hamburger.mid.inactive.scaleX,
				ease:Cubic.easeOut
			});
			tls.hamIntroLowerTl.to(hamburger.lower.ele, 0.25, { 
				opacity:1, 
				y: hamburger.lower.inactive.yPos,
				scaleX: hamburger.lower.inactive.scaleX,
				ease:Cubic.easeOut
			});

			tls.introTl.add(tls.acronymTl, 0);
			tls.introTl.add(tls.uperTl, 0.2);
			tls.introTl.add(tls.opTl, 0.3);
			tls.introTl.add(tls.hamIntroUpperTl, 0.35);
			tls.introTl.add(tls.hamIntroMidTl, 0.41);
			tls.introTl.add(tls.hamIntroLowerTl, 0.47);
			tls.introTl.add(tls.ecretTl, 0.4);

			// hamburger hovers
			tls.hamInactiveHoverUpperTl.to(hamburger.upper.ele, 0.15, { y: hamburger.upper.inactiveHover.yPos, scaleX: hamburger.upper.inactiveHover.scaleX });
			tls.hamInactiveHoverMidTl.to(hamburger.mid.ele, 0.15, { y: hamburger.mid.inactiveHover.yPos, scaleX: hamburger.mid.inactiveHover.scaleX });
			tls.hamInactiveHoverLowerTl.to(hamburger.lower.ele, 0.15, { y: hamburger.lower.inactiveHover.yPos, scaleX: hamburger.lower.inactiveHover.scaleX, onComplete: function(){ fixPositions("closedHover")} });

			tls.hamActiveUpperTl.to(hamburger.upper.ele, 0.2, { scaleX: 1.33, rotation:45, x: 4, y: -10, ease: Linear.easeNone, transformOrigin: "0% 0%" });
			tls.hamActiveMidTl.to(hamburger.mid.ele, 0.2, { scaleX: 0, ease: Linear.easeNone, transformOrigin: "0% 0%" });
			tls.hamActiveLowerTl.to(hamburger.lower.ele, 0.2, { scaleX: 1.33, rotation:-45, x: 0, y: 12, ease: Linear.easeNone, transformOrigin: "0% 0%", onComplete: function() {clickSuppress("off"); }});

			tls.hamActiveUpperHoverTl.to(hamburger.upper.ele, 0.2, { scaleX: 0.79, scaleY: 0.55, rotation:45, x: 17, y: 5, ease: Linear.easeNone });
			tls.hamActiveLowerHoverTl.to(hamburger.lower.ele, 0.2, { scaleX: 0.79, scaleY: 0.55, rotation:-45, x: 15, y: -2, ease: Linear.easeNone });

			tls.hamActiveUpperCloseTl.to(hamburger.upper.ele, 0.2, { scaleX: 1.82, scaleY: 1, transformOrigin: "50% 50%", rotation:0, x: 0, y: -5, ease: Linear.easeNone }, 0.3);
			tls.hamActiveMidCloseTl.to(hamburger.mid.ele, 0.2, { opacity: 1, scaleX: 1.82, transformOrigin: "50% 50%", x: 0, ease: Linear.easeNone }, 0.3);
			tls.hamActiveLowerCloseTl.to(hamburger.lower.ele, 0.2, { scaleX: 1.82, scaleY: 1, transformOrigin: "50% 50%", rotation:0, x: 0, y: 5, ease: Linear.easeNone, onComplete: function(){ fixPositions("closed"); clickSuppress("off"); } }, 0.3);

			// wider box
			tls.boxTl.to(box.topRight, 1, { scaleX: 1, ease: Linear.easeNone });
			tls.boxTl.to(box.right, 2, { scaleY: 1, ease: Linear.easeNone });
			tls.boxTl.to(box.bottom, 2, { scaleX: 1, ease: Linear.easeNone });
			tls.boxTl.to(box.left, 2, { scaleY: 1, ease: Linear.easeNone });
			tls.boxTl.to(box.topLeft, 1, { scaleX: 1, ease: Linear.easeNone });

			tls.boxTlTweener.fromTo(tls.boxTl, 0.35, { progress: 0 }, { progress: 1, ease:Cubic.easeOut});

			// smaller box
			tls.boxTightTl.to(boxTight.topRight, 1, { scaleX: 1, ease: Linear.easeNone });
			tls.boxTightTl.to(boxTight.right, 2, { scaleY: 1, ease: Linear.easeNone });
			tls.boxTightTl.to(boxTight.bottom, 2, { scaleX: 1, ease: Linear.easeNone });
			tls.boxTightTl.to(boxTight.left, 2, { scaleY: 1, ease: Linear.easeNone });
			tls.boxTightTl.to(boxTight.topLeft, 1, { scaleX: 1, ease: Linear.easeNone });

			tls.boxTightTlTweener.fromTo(tls.boxTightTl, 0.35, { progress: 0 }, { progress: 1, ease:Cubic.easeOut});

			// crossouts
			tls.crossoutTl.to([crossout.upper, crossout.mid, crossout.lower], 0.15, { scaleX: 1, ease:Linear.easeNone});
		}
		
		function init()
		{
			tls.introTl.play();
		}

		buildDomReferences();
		setDefaults();
		createTimelines();
		constructTimelines();
		init();

		$scope.isNavLink = function(element)
		{
			// helper function to determine if the target clicked on it a navigation item

			// check that the target ele has attributes
			for(var i = 0, numAttributes = element.attributes.length; i < numAttributes; i++)
			{
				// check if one of the attributes is a ui-sref (unique to nav item in header)
				if(element.attributes[i].name == 'ui-sref')
				{
					// end function as true
					return true;
				}
			}
			// no ui-sref found, return false
			return false;
		}
		$scope.manageMenu = function(evt)
		{
			// handler for header getting clicked

			clickSuppress();

			if($scope.navVisibile)
			{
				// it's not a nav link, close the menu if it's visible
				tls.boxTightTlTweener.reverse(1);
				tls.hamActiveUpperCloseTl.play(0);
				tls.hamActiveMidCloseTl.play(0);
				tls.hamActiveLowerCloseTl.play(0);
				
				$scope.navVisibile = false;
				$rootScope.scrollLock = false;
			}
			else
			{
				// the menu was requested to be opened
				tls.hamActiveUpperTl.play(0);
				tls.hamActiveMidTl.play(0);
				tls.hamActiveLowerTl.play(0);
				tls.boxTlTweener.reverse(1);
				tls.crossoutTl.reverse(1);

				$scope.navVisibile = true;
				$rootScope.scrollLock = 'scroll-locked';
			}
		}
		$scope.navOver = function()
		{
			$timeout(function(){
				$scope.playSound('crossOutOver');
			})
			if($scope.navVisibile)
			{
				tls.hamActiveUpperHoverTl.play();
				tls.hamActiveLowerHoverTl.play();
				tls.boxTightTlTweener.play();
			}
			else
			{
				console.log(tls.hamInactiveHoverUpperTl.time());
				tls.hamInactiveHoverUpperTl.play(0);
				tls.hamInactiveHoverMidTl.play(0);
				tls.hamInactiveHoverLowerTl.play(0);
				tls.boxTlTweener.play();
				tls.crossoutTl.play();
			}
		}
		$scope.navOut = function()
		{
			if($scope.navVisibile)
			{
				tls.hamActiveUpperHoverTl.reverse();
				tls.hamActiveLowerHoverTl.reverse();
				tls.boxTightTlTweener.reverse();
			}
			else
			{
				tls.hamInactiveHoverUpperTl.reverse();
				tls.hamInactiveHoverMidTl.reverse();
				tls.hamInactiveHoverLowerTl.reverse();
				tls.boxTlTweener.reverse();
				tls.crossoutTl.reverse();
			}
		}
		$scope.buildMenuAniamtion = function()
		{
			var navDoms = document.querySelectorAll("body > div > header nav li");
			numNavs = navDoms.length;
			for(var i = 0; i < numNavs; i++)
			{
				navItems.push({
					no: navDoms[i].querySelector("span.no"),
					number: navDoms[i].querySelector("em.num"),
					link: navDoms[i].querySelector("a p"),
					arrow: navDoms[i].querySelector("a span"),
				});
			}

			for(var i = 0; i < numNavs; i++)
			{
				var itemTl = new TimelineLite({ paused: true });
				itemTl.to(navItems[i].no, 1, { y: 0, opacity: 1}, 0);
				itemTl.to(navItems[i].number, 0.9, { y: 0, opacity: 1}, 0.1);
				itemTl.to(navItems[i].link, 0.7, { y: 0, opacity: 1}, 0.3);
				itemTl.to(navItems[i].arrow, 1, { y: 0, opacity: 1}, 0);
				menuTls.push(itemTl);
			}


		}
		$scope.navIntro = function()
		{
			$timeout(function(){
				$scope.playSound("navIn");
			}, 0)
			menuAnimIn.staggerFromTo(menuTls, 1, { progress: 0}, { progress: 1 }, 0.08);
		}
		$scope.hideNav = function()
		{
			$timeout(function(){

				for(var i = 0; i < numNavs; i++)
				{
					TweenLite.set(navItems[i].no, { y: 40, opacity: 0});
					TweenLite.set(navItems[i].number, { y: 40, opacity: 0});
					TweenLite.set(navItems[i].link, { y: 40, opacity: 0});
					TweenLite.set(navItems[i].arrow, { y: 40, opacity: 0});
				}
			}, 1000)
		}
		// $scope.navVisibile = true;
		$scope.buildMenuAniamtion();
		$scope.$watch('navVisibile', function() {
			if($scope.navVisibile)
			{
				$scope.navIntro();
			}
			else
			{
				$scope.hideNav();
			}
		});

	}
	return {
		restrict: 'A',
		link: link
	}
}]);


/***************
 *
 * Directive slittySlants
 * Author: Pete Rugh
 * Function: Slanted panels on capabilities page
 * 4/3/2015
 *
 ***************/

v3AppDirectives.directive('slittySlants', ['$timeout', '$rootScope', function($timeout, $rootScope) {
	var link = function($scope, $element, $attr) {

		$scope.slantEle = $element[0];
		$scope.slantAngleRatio = 1.09; // slant angle
		$scope.BASELINE = 1024; // smallest screen size to calculate (responsive breakpoint for smaller)
		$scope.MAX_MONITOR = 3840 // 4K Monitor		
		$scope.TOPLINE = 1536; // difference between narrowest and widest screen sizes
		$scope.winWidth = window.innerWidth;
		$scope.winHeight = window.innerHeight;
		$scope.slideRange = 300;
		$scope.slantsCoverStrength = 0.3;

		$scope.resize = function()
		{
			// this will resize our content to a good baseline. Offsets are handled with translateY in the scroll function


			// distance from top of screen
			$scope.topPos = $scope.capEle.offsetTop;
			$scope.winWidth = window.innerWidth;
			$scope.winHeight = window.innerHeight;
			$scope.ratio = (Math.max(0, $scope.winWidth - $scope.BASELINE) / $scope.TOPLINE); // this should fall in range [0, ≈1]
			$scope.expoRatio = Math.pow($scope.ratio, (10/9)) // Gives us an exponential ratio, Thanks Joe
			$scope.ratioAsValue = $scope.slantsCoverStrength * $scope.expoRatio + 1; // converts our ratio to a value in range [1, ≈(1 + $scope.slantsCoverStrength)]
			$scope.verticalOffset = $scope.winWidth / $scope.ratioAsValue - $scope.BASELINE; // gives us a pixel vertical offset to achieve effect

			// offset the vertical position of the curtains as calculated previously			
			$element[0].style.height = $scope.winWidth * $scope.slantAngleRatio + "px";
			$element[0].style.top = $scope.topPos - $scope.verticalOffset + "px";
		}

		$scope.winScrolled = function()
		{
			$scope.rect = $scope.capEle.getBoundingClientRect();

			if($scope.rect.top < $scope.winHeight && $scope.rect.bottom > 0 && $rootScope.desktop == true)
			{
				// in view
				if($scope.$root.activeSection != $scope.capEle.dataset.capabilitySlug)
				{
					$scope.$apply(function(){ $scope.$root.activeSection = $scope.capEle.dataset.capabilitySlug });
				}
				// How far through the view process is the block, with regards to top of content block
				$scope.progress = ($scope.rect.top) / ($scope.winHeight);

				// makes the "center point" offset from the actual center point. Converts range to [-n, n]
				$scope.inOutProgress = -0.75 + ($scope.progress * 2);

				// vertical offset based on amount to travel
				$scope.offset = $scope.inOutProgress * ($scope.slideRange / 2);

				// an exaggerated progress variable so that the opacity scales up and down faster (entering value)
				$scope.opacityProgress = (1 - $scope.progress) * 2;

				// the exiting part of the opacity ratio, will need to be set at 0 because the calculated value will commonly be < 0
				$scope.opacityRelapse = 1 - (Math.max(0, ($scope.opacityProgress - 2) / (3/2)));

				// Amount to fade. 
				// If the element is entering the page it uses opacityProgress, 
				// if it's nearing the top it uses opacityRelapse
				// if it's not near either edge it is 1
				$scope.opacityVal = Math.min(1, Math.min($scope.opacityProgress, $scope.opacityRelapse))

				// set opacity and position with Tweenlite.set for browser consistency
				TweenLite.set($scope.capEle, { y: $scope.offset, force3D: true });
				TweenLite.set($scope.capEleChildren, { opacity: $scope.opacityVal, force3D: true });
				// for( var i = 0; i < $scope.numCapEleChildren; i++)
				// {
				// 	TweenLite.set($scope.capEleChildren[i], { opacity: $scope.opacityVal, ((i+2)/(i+1))) });
				// }

			}
		}

		$scope.setVarsRunCalculations = function()
		{
			// the capabilities section we need to get proper measurements
			$scope.capEle = document.getElementById($attr.slantCompanion);

			// there are 2 slants per capability but we only need to calculate it once per pair. 
			// Using the left slant is pure preference and was chosen because that's the DOM order
			if($attr.slantSide == "left")
			{
				// get children of capabilities section (for staggered fading)
				$scope.capEleChildren = $scope.capEle.querySelectorAll(".text > h1, .text > hr, .text > p, .text > h3, .text > ul");

				// for looping purposes
				$scope.numCapEleChildren = $scope.capEleChildren.length;

				// listen for a window scroll
				window[addListenerMethod]('scroll', $scope.winScrolled);

				// run content function
				$scope.winScrolled();
			}
			// run curtain positioning function
			$scope.resize();
		}

			
		// listen for a window resize
		window[addListenerMethod]('resize', $scope.resize);

		// set everything up after a teeny tiny bit
		$timeout($scope.setVarsRunCalculations, 100);
		

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove listeners when they're no longer needed
			window[removeListenerMethod]('resize', $scope.resize);
			window[removeListenerMethod]('scroll', $scope.winScrolled);
		}
	}
	
	return {
		link: link,
		scope: true
	}

}]);

/***************
 *
 * Directive snapGallery
 * Author: AK Andrews / Pete Rugh
 * Function: Handles events related to previewing an reveling a photo gallery
 * 3/2/2015
 *
 ***************/
v3AppDirectives.directive('snapGallery', function($rootScope) {
	var link = function($scope, $element, $attr) {
		
		$scope.introBlock = $element[0];

		// children of trigger block
		$scope.introEles = $element[0].querySelectorAll(".inner-wrapper > *");
		$scope.summaryBlockTl = new TimelineLite({ paused: true });
		$scope.summaryBlockTl.to($element[0], $attr.time, {left:'20%', ease:Cubic.easeOut})

		//CK added width to the css instead so I can overwrite for mobile
		if ($rootScope.desktop == true)
		{
			$scope.summaryBlockTl.to($element[0], $attr.time / 2, { width:500, ease:Cubic.easeOut}, "-=" + $attr.time / 2);
		}


		$scope.summaryBlockTl.staggerTo($scope.introEles, 0.4, {y: 0, opacity: 1}, 0.05)
		
		$scope.winScrolled = function()
		{
			$scope.visibleAmount = (window.innerHeight - $element[0].getBoundingClientRect().top)
			
			if($scope.visibleAmount > $attr.distance) {
				$scope.summaryBlockTl.play();
			}
		}

		$scope.revealGallery = function()
		{
			TweenLite.to($element[0].querySelector(".inner-wrapper"), 0.5, { y: -25, opacity: 0, ease:Cubic.easeOut});
			TweenLite.to($element[0], 0.45, { height: 0, ease:Quint.easeOut });
		}

		window[addListenerMethod]("scroll", $scope.winScrolled);

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove custom listener
			window[removeListenerMethod]("scroll", $scope.winScrolled);
		}
	}
	return {
		scope: true,
		link: link
	}
})

/***************
 *
 * Directive theWorm
 * Author: Pete Rugh
 * Function: makes a line follow the outline of the page as a faux loading bar
 * 2/25/2015
 *
 ***************/
v3AppDirectives.directive('theWorm', ['$window', 'animationTracker', 'loadingTracker', function($window, animationTracker, loadingTracker) {

	var TOTAL_TIME = 1; // in seconds
	var wormExists = false; // track if the elements have been written to the DOM

	function link($scope, $element, $attrs)
	{
		$scope.makeSegments = function()
		{
			var windowWidth = window.innerWidth;
			var windowHeight = window.innerHeight;
			// Create an object with several important properties for each segment
			var circumference = $window.innerWidth * 2 + $window.innerHeight * 2;

			$scope.segments.wormTopRight = {
				node: document.createElement('div'), // the DOM ele
				cssProperties: {
					width: windowWidth / 2 -10 // the ending size declaration
				},
				animationTime: $window.innerWidth / 2 / circumference * TOTAL_TIME // this is a function of how much of the size of the worm this segment makes up and then assigning it a timer based on total time
			}
			$scope.segments.wormRight = {
				node: document.createElement('div'),
				cssProperties: {
					height: windowHeight - 20
				},
				animationTime: window.innerHeight / circumference * TOTAL_TIME
			}
			$scope.segments.wormBottom = {
				node: document.createElement('div'),
				cssProperties: {
					'width': windowWidth - 20
				},
				animationTime: $window.innerWidth / circumference * TOTAL_TIME
			}
			$scope.segments.wormLeft = {
				node: document.createElement('div'),
				cssProperties: {
					'height': windowHeight - 20
				},
				animationTime: window.innerHeight / circumference * TOTAL_TIME
			}
			$scope.segments.wormTopLeft = {
				node: document.createElement('div'),
				cssProperties: {
					'width': windowWidth / 2
				},
				animationTime: $window.innerWidth / 2 / circumference * TOTAL_TIME
			}

			// Assign IDs to the DOM elements in tandem with the CSS file
			$scope.segments.wormTopRight.node.id = "worm-top-right";
			$scope.segments.wormRight.node.id = "worm-right";
			$scope.segments.wormBottom.node.id = "worm-bottom";
			$scope.segments.wormLeft.node.id = "worm-left";
			$scope.segments.wormTopLeft.node.id = "worm-top-left";
		}
		$scope.appendSegments = function()
		{
			// add line segments to the DOM
			angular.forEach($scope.segments, function(segment, segmentName) {
				$element[0].appendChild(segment.node);
			});
		}
		$scope.createTimeline = function()
		{
			// Build the Green Sock Timeline based on the object built above
			angular.forEach($scope.segments, function(segment, segmentName) {
				$scope.timeWorm.to(segment.node, segment.animationTime, {css: segment.cssProperties, ease: Linear.easeNone});
			});
		}
		$scope.wormGone = function()
		{
			// worm is invisible
			// set worm progress to 0 and pause
			$scope.resetWorm();

		}
		$scope.wormGrown = function()
		{
			// the worm has gone around the screen but is not yet faded out.
			// let the site know about this status
			animationTracker.setAnimationAction("worm_squirmed");
			animationTracker.broadcastStatus();
			animationTracker.setAnimationAction("null");

			// fade out worm then call the remove function
			TweenLite.to($element[0], 2, {alpha:0, onComplete: $scope.wormGone});
		}
		$scope.runAnimation = function()
		{
			// Timeline for worm squirming
			$scope.wormSquirm = new TimelineLite({ paused:true });

			// add the worm squirming
			$scope.wormSquirm.insert(TweenLite.fromTo($scope.timeWorm, TOTAL_TIME, {progress:0}, {progress:1, ease:Cubic.easeIn, onComplete: $scope.wormGrown}));
			
			// timeline is built, cue up loading tracking service
			loadingTracker.setAction("loadNextPage");
			// set loading progress to a little bit so people know WTF is happening
			loadingTracker.setProgress(0.05);
			// tell the loading directive to do its thing
			loadingTracker.broadcastStatus();
		}
		$scope.$on("loadingTrackerEvent", function(){

			// Loading directive is saying something
			if(loadingTracker.getAction() == "playWorm")
			{
				// if it didn't detect anything to preload, just run the timeline
				$scope.wormSquirm.play();
			}
			else
			{
				// tween the progress of the loading worm to amount loaded
				new TweenLite.to($scope.wormSquirm, 0.8, {progress: loadingTracker.getProgress(), ease:Cubic.easeOut});;
			}

		});
		$scope.resetWorm = function()
		{
			// set worm progress to 0 and pause
			$scope.wormSquirm.pause();
			$scope.wormSquirm.progress(0);
			// it is now 0 pixels of progress so bring its visbility back up
			$element[0].style.opacity = "1";
		}
		$scope.$on("animationUpdate", function(){
			if(animationTracker.getAnimationStatus().action == "run_worm")
			{
				// listen for the animation tracker to tell the worm to run
				$scope.runAnimation();
			}
		});

		if(!wormExists)
		{
			// build variables for use when this is the first time through this directive
			$scope.segments = {}; // worm parts (attributes and elements)
			$scope.timeWorm = new TimelineLite({ paused: true }); //worm timeline
			$scope.makeSegments(); // Create object
			$scope.appendSegments(); // create DOM eles
			$scope.createTimeline(); // combine timelines
			wormExists = true; // set this so this conditional doesn't run again
		}
	}
	return {
		scope: true,
		restrict: 'A',
		link: link
	}
}]);

/***************
 *
 * Directive titleCardVtwo
 * Author: Pete Rugh
 * Function: runs a sprite animation for the titles of sections
 * 2/25/2015
 *
 ***************/
v3AppDirectives.directive('titleCardVtwo', function($window, $timeout, $rootScope, animationTracker) {
	function link($scope, $element, $attrs)
	{
		var interv;
		// set a timeout for running the animation. Either specify the time in an attribute or 0
		$scope.timeToDelay = $attrs.timeDelay || 0;
		// hide container and create sprite animation
		// $element[0].style.opacity = "0";

		// SierraMist($element[0].querySelector("img"), $attrs.numColumns, $attrs.numFrames, false, 45, 509, 345);
		
		function SierraMist(ele, cols, frames, loop, fps, frameW, frameH)
		{
			// console.log(ele, cols, frames, loop, fps, frameW, frameH);
			cols = parseInt(cols);
			frames = parseInt(frames);
			var prog = 1;
			var col = 1;
			interv = setInterval(function(){
				var row = Math.floor(prog/cols) + 1;
				if(prog == frames)
				{
					clearInterval(interv);
				}
				if(col == cols)
				{
					col = 0;
				}
				prog++;
				col++;
				TweenLite.set(ele, { x: (col - 1) * frameW * -1, y: (row - 1) * frameH * -1, force3D: true })
			}, Math.floor(1000/fps))
		}

		// listen for the animation updater to broadcast an "at_rest" state
		$scope.$on("animationUpdate", animationUpdated);
		function animationUpdated()
		{
			if(animationTracker.getAnimationStatus().action == "at_rest")
			{
				// transition finished
				// now wait as long as specified in the attribute before running the animation.
				// We can have stuttering issues otherwise
				$scope.runTitleCard();
				
			}
		}
		$scope.runTitleCard = function()
		{
			var uaString = navigator.userAgent;
			// check to make sure it's not safari
			if($rootScope.desktop == true && uaString.indexOf('Safari') != -1 && uaString.indexOf('Chrome') == -1)
			{
				var safariTitle = document.getElementById("safari_title");
				if(safariTitle)
				{
					TweenLite.to(safariTitle, 3, { autoAlpha: 1});
				}
			}
			else
			{
				// run animation
				$timeout(function() {
					$element[0].style.opacity = "1";
					console.log('hey');
					// $scope.titleAnimation.play();
					SierraMist($element[0].querySelector("img"), $attrs.numColumns, $attrs.numFrames, false, 45, $attrs.frameWidth, $attrs.frameHeight);
				}, $scope.timeToDelay);
			}
		}
		function winScrolled(evt)
		{
			var winHeight = window.innerHeight; // window heigt
			var scrollPos = window.pageYOffset || document.documentElement.scrollTop; //distance scrolled
			// Calculate the progress from 25% scrolled, this keeps the title from immediately moving on scroll
			var scrollProg = Math.max(0, scrollPos - winHeight / 4) / winHeight;
			var verticalOffset = winHeight * 0.35 * scrollProg; // Element range [0, 35%] of windowHeight
			TweenLite.set($element[0], { y: verticalOffset, force3D: true }); // actually move it

		}
		// window[addListenerMethod]("scroll", winScrolled); // scroll event listener
		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// window[removeListenerMethod]("scroll", winScrolled); // remove listener
			clearInterval(interv); // clear title card interval 
		}
	}
	return {
		restrict: 'A',
		link: link,
		scope: true
	}
});

/***************
 *
 * Directive workArchive
 * Author: Pete Rugh
 * Function: Generic DOM manipulation of work archive panels area
 * 4/3/2015
 *
 ***************/

v3AppDirectives.directive('workArchive', ['$timeout', function($timeout) {
	var link = function($scope, $element, $attr) {


		// make min-height of work area the same as the window height to prevent jumping of content
		$scope.windowResized = function(evt) 
		{
			$element[0].style.minHeight = window.innerHeight + "px";
		}

		// listen for window resize
		window[addListenerMethod]("resize", $scope.windowResized);

		// fire resize method to set iniial min-height
		$scope.windowResized();

		// listen for directive destruction
		$scope.$on("$destroy", destroyDirective);

		function destroyDirective()
		{
			// remove listener
			window[removeListenerMethod]("resize", $scope.windowResized);
		}
	}
	
	return {
		link: link,
		scope: true
	}
}]);

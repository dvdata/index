'use strict';

/* Controllers */

v3AppControllers.controller('CapabilitiesCtrl', ['$scope', '$rootScope', '$routeParams', '$timeout', '$sce', function($scope, $rootScope, $routeParams, $timeout, $sce) {

	$scope.capabilities = [{
		copy: $sce.trustAsHtml("We don’t do anything without first laying down a solid strategic framework based on real, relevant research. If you’re looking for smart work based on powerful insights culminating in one of a kind work, you’ve come to the right place. "),
		processes: $sce.trustAsHtml("Data Analysis // Large-Sample Surveys // Focus Groups<br>One-On-One Interviews // Trend Research // Cultural Observation"),
		pull: "right",
		slug: "strategy",
		svg: $sce.trustAsHtml('<svg version="1.1" class="svg-strategy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42.16 54.21" style="enable-background:new 0 0 42.16 54.21;" xml:space="preserve"><g></g><path class="st1" d="M8.44,43.2h26.94c0.91,0,1.66,0.74,1.66,1.66v0.78c0,0.91-0.74,1.66-1.66,5.55H8.44c-0.91-3.89-1.66-4.64-1.66-5.55v-0.78C6.78,43.94,7.52,43.2,8.44,43.2z"/><g><path class="st1" d="M31.77,40.01c0.5-3.05,0.56-5.92-0.95-8.7c-1.67-3.07-5.71-5.64-8.19-8.07c-0.35-0.35-0.78-0.62-1.07-1.08c1.97,0.79,3.75,0.19,5.52-0.39c1.36-0.45,2.44-0.09,3.28,0.97c1.1,1.39,2.48,1.64,4.08,1.15c0.34-0.1,0.71-0.14,1.04-0.28c0.27-0.11,0.53-0.3,0.74-0.51c0.98-0.95,1.5-2.04,0.91-3.41c-0.02-0.04-0.02-0.1,0-0.14c0.5-1.15-0.31-1.66-1.05-2.28c-1.64-1.36-3.24-2.77-4.79-4.22c-0.62-0.58-1.05-1.36-1.62-2.02c-0.27-0.32-0.6-0.64-0.96-0.81c-0.81-0.37-1.65-0.7-2.5-0.96c-0.75-0.23-0.84-0.67-0.65-1.31c0.06-0.2,0.11-0.41,0.19-0.71c-0.52-0.09-0.98-0.19-1.46-0.25c-0.91-0.12-1.06-0.24-1.08-1.18c-0.02-0.68,0.05-1.35,0.08-2.04c0.01-0.3,0-0.6,0-1.1c-1.32,1.02-2.19,2.15-2.89,3.42c-0.13,0.23-0.39,0.49-0.64,0.55c-5.19,1.38-8.25,4.88-9.77,9.87c-1.3,4.24-0.67,8.41,0.65,12.53c0.76,2.37,1.5,4.75,2.15,7.14c0.34,1.26-0.27,2.55-0.75,3.84"/></g><path class="st2" d="M10.62,39.69H33.2c0.91,0,1.66,0.74,1.66,1.66v0.19c0,0.91-0.74,1.66-1.66,1.66H10.62c-0.91,0-1.66-0.74-1.66-1.66v-0.19C8.96,40.44,9.71,39.69,10.62,39.69z"/><g><polygon class="st3" points="28.57,11.52 26.75,12.5 24.93,11.52 25.93,13.33 24.93,15.14 26.75,14.16 28.57,15.14 27.57,13.33"/></g></svg>'),
		title: "Strategy",
		zIndex: 25,
		meta: [
			{
				cta: "Contact Us",
				title: "Learn Our Process",
				url: "/connect"
			}
		],
	},
	{
		copy: $sce.trustAsHtml("We triple majored in traditional, digital, and social with a minor in mind control, and know just what it takes to engage consumers across every medium. Our talented team of writers and art directors regularly pump out highly relevant and effective creative work for our brand partners. "),
		processes: $sce.trustAsHtml("Integrated Campaign Creation // Concepting // Brand Content Creation // Social Media Content Creation and Management // Creative Executions in All Digital and Traditional Mediums"),
		pull: "left",
		slug: "advertising",
		svg: $sce.trustAsHtml('<svg version="1.1" class="svg-advertising" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.75 48.75" style="enable-background:new 0 0 43.75 48.75;" xml:space="preserve"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0.31" y="0.18" width="42.87" height="48.47"><feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB" result="source"/><feFlood  style="flood-color:white;flood-opacity:1" result="back"/><feBlend  in="source" in2="back" mode="normal"/></filter></defs><mask maskUnits="userSpaceOnUse" x="0.31" y="0.18" width="42.87" height="48.47" id="SVGID_1_"><g class="st0"><path class="st1" d="M21.69,33.61c-7.74,0-13.66-9.11-13.66-9.11s6.92-9.34,13.79-9.34s13.78,9.24,13.78,9.24S30.06,33.61,21.69,33.61z"/></g></mask><path class="st4" d="M8.03,24.44c0,0,6.04,5.9,13.86,5.9s13.72-6,13.72-6"/><path class="st4" d="M35.61,24.4c0,0-6.04-5.9-13.86-5.9s-13.72,6-13.72,6"/><g><path class="st6" d="M4.4,26.2c-1,0-1.81,0.81-1.81,1.81s0.81,1.81,1.81,1.81c1,0,1.81-0.81,1.81-1.81S5.4,26.2,4.4,26.2L4.4,26.2z"/></g><g><path class="st6" d="M38.94,36.38c-1,0-1.81,0.81-1.81,1.81s0.81,1.81,1.81,1.81c1,0,1.81-0.81,1.81-1.81S39.94,36.38,38.94,36.38L38.94,36.38z"/></g><path class="st4" d="M21.69,33.61c-7.74,0-13.66-9.11-13.66-9.11s6.92-9.34,13.79-9.34s13.78,9.24,13.78,9.24S30.06,33.61,21.69,33.61z"/><circle class="st5" cx="21.75" cy="24.41" r="5.44"/><g><path class="st6" d="M21.82,22.44c-1.13,0-2.05,0.92-2.05,2.05s0.92,2.05,2.05,2.05s2.05-0.92,2.05-2.05S22.95,22.44,21.82,22.44L21.82,22.44z"/></g><g><path class="st6" d="M17.13,3.58c-1,0-1.81,0.81-1.81,1.81c0,1,0.81,1.81,1.81,1.81c1,0,1.81-0.81,1.81-1.81C18.94,4.39,18.13,3.58,17.13,3.58L17.13,3.58z"/></g><g class="st2"><path class="st3" d="M13.91,30.45c0.92,10.04,4.08,17.45,7.84,17.45c3.74,0,6.9-7.34,7.83-17.32"/><path class="st3" d="M29.63,18.79C28.76,8.54,25.56,0.93,21.75,0.93c-3.84,0-7.05,7.7-7.9,18.05"/><g><path class="st3" d="M21.71,15.17C12.09,10.4,3.48,9.14,1.5,12.52c-1.52,2.58,1.21,7.22,6.53,11.98"/><path class="st3" d="M21.69,33.61c9.66,4.81,18.32,6.09,20.31,2.7c1.51-2.56-1.18-7.15-6.42-11.86"/></g><path class="st3" d="M8.19,24.17c-5.43,4.79-8.24,9.48-6.71,12.1c1.99,3.4,10.65,2.13,20.32-2.66c-0.04,0-0.07,0.01-0.11,0.01"/><path class="st3" d="M35.6,24.39c5.23-4.7,7.92-9.27,6.42-11.83c-1.98-3.39-10.58-2.15-20.2,2.6"/></g></svg>'),
		title: "Advertising",
		zIndex: 20,
		meta: [{
				cta: "Launch",
				title: "View Peligroso Tequila Case Study",
				url: "/case-studies/peligroso"
			},
			{
				cta: "Launch",
				title: "View Advertising Work",
				url: "/work/2/advertising"
			}
		],
	},
	{
		copy: $sce.trustAsHtml("Next level design is the blazing magma core of everything we do. It transcends all mediums. From forging new brand identities to revamping and energizing old ones, to dreaming up stellar packaging and product design including entire lines of snowboards for action sports giants—we’re the first ones storming the visual beach in the war of what’s cool. "),
		processes: $sce.trustAsHtml("Brand Identity //Visual Systems Creation //  Product Design //  Packaging"),
		pull: "right",
		slug: "design",
		svg: $sce.trustAsHtml('<svg version="1.1" class="svg-design" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.14 44.89" style="enable-background:new 0 0 57.14 44.89;" xml:space="preserve"><polygon class="st0" points="46.69,23.04 29.89,30.27 13.1,23.04 5.31,31.54 29.89,42.64 54.48,31.54 "/><polygon class="st1" points="37.71,13.18 29.89,16.09 22.07,13.18 15.32,20.56 29.89,26.82 44.47,20.56 "/><polygon class="st1" points="29.89,4.54 24.01,10.97 29.89,13.15 35.78,10.97 "/><line class="st1" x1="29.89" y1="5.17" x2="29.89" y2="12.68"/><line class="st1" x1="29.89" y1="16.7" x2="29.89" y2="26.31"/><line class="st0" x1="29.89" y1="30.27" x2="29.89" y2="41.94"/></svg>'),
		title: "Design",
		zIndex: 15,
		meta: [{
				cta: "Launch",
				title: "View Publik Case Study",
				url: "/case-studies/publik"
			},
			{
				cta: "Launch",
				title: "View Design Work",
				url: "/work/3/design"
			}
		],
	},
	{
		copy: $sce.trustAsHtml("Inside every impossible is a possible trying to get out. With this in mind we sic our resident team of web designers, UX experts, and developer wizards on the Internet to relentlessly bully and push the limits with emerging technology. We’re well accustomed to creating, coding, designing, and deploying sites and apps for some of the biggest brands around.  "),
		processes: $sce.trustAsHtml("Experiential Digital Experiences &amp; Installations // Responsive &amp; Dedicated Websites // Digital Strategy, User Research &amp; Site Architecture // Custom Content Management System (CMS) // Custom Built E-Commerce Solutions // Native &amp; Hybrid Mobile Applications"),
		pull: "left",
		slug: "interactive",
		svg: $sce.trustAsHtml('<svg version="1.1" class="svg-interactive" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.96 50.55" style="enable-background:new 0 0 31.96 50.55;" xml:space="preserve"><path class="st1" d="M9.33,20.01c0-4.09-0.03-4.61,0.01-8.71c0.02-2,0.65-2.83,1.99-2.86c1.43-0.04,2.11,0.9,2.16,3c0.01,0.48,0,0.95,0,1.43c0,4.76,0,5.95,0,10.7c0,0.76,0.01,1.52,0.09,2.28c0.02,0.19,0.33,0.47,0.52,0.48c0.16,0.01,0.48-0.31,0.49-0.49c0.06-1.42,0.02-2.85,0.09-4.28c0.09-1.62,0.87-2.48,2.12-2.5c1.28-0.02,1.98,0.75,2.16,2.48c0.07,0.66,0.03,1.33,0.04,2c0.01,0.86-0.02,1.72,0.04,2.57c0.02,0.33,0.26,0.65,0.4,0.97c0.23-0.35,0.63-0.69,0.65-1.06c0.09-1.23,0.01-2.47,0.08-3.71c0.07-1.29,0.65-2.2,2.12-2.13c1.37,0.07,2.05,0.84,2.06,2.21c0.02,1.62,0.02,3.23,0.07,4.85c0.01,0.23,0.24,0.45,0.36,0.67c0.22-0.24,0.6-0.46,0.63-0.71c0.1-0.94,0.07-1.9,0.09-2.85c0.04-1.42,0.85-2.08,2.19-2.04c1.26,0.03,1.89,0.79,1.93,2.02c0.04,1.24,0.04,2.47,0.04,3.71c0,4.28,0.01,8.56-0.04,12.85c-0.01,1.23-0.06,2.5-0.38,3.67c-0.91,3.38-1.41,3.69-4.9,3.69c-2.64,0-5.27-0.02-7.91-0.01c-2.52,0.01-5.13,0.52-7.1-1.41c-1.46-1.44-2.14-3.44-3.45-5c-1.78-2.11-2.35-4.46-3.09-7.05c-0.68-2.38-1.21-4.26,0.24-6.54c0.65-1.01,0.79-2.34,1.32-3.44c0.29-0.6,0.89-1.43,1.39-1.46c0.61-0.04,1.49,0.52,1.83,1.08c0.41,0.67,0.54,1.62,0.47,2.43c-0.1,1.22-0.6,2.41-0.71,3.63c-0.09,1,0.05,2.06,0.3,3.04c0.1,0.38,0.78,0.6,1.19,0.9c0.16-0.42,0.45-0.83,0.45-1.25C9.33,28.77,9.31,24.39,9.33,20.01z"/><g><path class="st0" d="M3.17,11.61c0.71,2.63,2.69,4.74,5.24,5.63"/><path class="st0" d="M14.26,17.09c2.22-0.91,3.96-2.77,4.71-5.07c0.04-0.13,0.06-0.27,0.1-0.41"/><path class="st0" d="M19.08,7.3c-0.95-3.51-4.15-6.09-7.96-6.09S4.12,3.79,3.17,7.3"/></g></svg>'),
		title: "Interactive",
		zIndex: 10,
		meta: [{
				cta: "Launch",
				title: "View Oregon Gridiron Case Study",
				url: "/case-studies/oregon"
			},
			{
				cta: "Launch",
				title: "View Interactive Work",
				url: "/work/1/interactive"
			}
		],
	},
	{
		copy: $sce.trustAsHtml("Led by a team of hand-picked and seasoned industry linchpins, STS Studios is our in-house, full-service film and production crew. With our creative chops and stacks of experience, we're some of the best at producing high-quality content on every platform, and on-location anywhere in the world. We tackle all phases of the process and know what it takes to engage an audience and tell a compelling story."),
		processes: $sce.trustAsHtml("FULL SCALE PRODUCTION // FILMING // EDITING // AERIAL CINEMATOGRAPHY // MOTION GRAPHICS // LIVE ACTION // ANIMATION // ORIGINAL MUSIC // LOCATION SCOUTING // TALENT ACQUISITION // EVENTS"),
		pull: "right",
		slug: "studios",
		svg: $sce.trustAsHtml('<svg version="1.1" class="svg-studios" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50.26 41.2" style="enable-background:new 0 0 50.26 41.2;" xml:space="preserve"><circle class="st0" cx="14.78" cy="14.9" r="13.9"/><polygon class="st0" points="12.28,19.24 9.78,14.9 12.28,10.57 17.28,10.57 19.78,14.9 17.28,19.24 "/><line class="st1" x1="17.85" y1="11.09" x2="12.07" y2="1.27"/><line class="st1" x1="18.05" y1="18.36" x2="25.25" y2="5.76"/><line class="st1" x1="15.32" y1="19.47" x2="28.11" y2="19.47"/><line class="st1" x1="11.77" y1="18.81" x2="17.49" y2="28.54"/><line class="st1" x1="10.15" y1="13.79" x2="4.12" y2="23.83"/><line class="st1" x1="13.99" y1="10.34" x2="1.65" y2="10.34"/></svg>'),
		title: "STS Studios",
		zIndex: 5,
		meta: [{
				cta: "Launch",
				title: "View Live Action Reel",
				url: "#view-reel"
			},
			{
				cta: "Launch",
				title: "View Studios Work",
				url: "/work/4/film"
			}
		],
	}];
	$scope.showReel = function(evt)
	{
		// if there is a hash, then it's the launch reel button
		if(this.hash)
		{
			// capture event
			evt.preventDefault();

			// lock scrolling
			$rootScope.scrollLock = 'scroll-locked';

			// find vimeo player
			$scope.player = $f(document.getElementById("player2"));

			$scope.player.api('play');

			$scope.$apply(function(){
				// tell all listeners that the box should show
				$scope.showBox = true;

				$timeout(function(){
					$rootScope.soundOn = false;
				}, 1);
			});

			Howler.mute();

		}
	}
	$scope.hideMe = function()
	{
		if($scope.showBox == true)
		{

			if($rootScope.userSoundChoice == "unmute")
			{
				Howler.unmute();
				$timeout(function(){
					$rootScope.soundOn = true;
				}, 1);
			}
			$scope.player.api('pause');
			$rootScope.scrollLock = '';
			$scope.showBox = false;
		}
	}
	function buildVivus()
	{	
		for(var i = 0, numSections = $scope.capabilities.length; i < numSections; i++)
		{
			new Vivus(document.querySelector("#abilities .svg-" + $scope.capabilities[i].slug), {type: 'oneByOne', duration: 150, animTimingFunction: Vivus.EASE_OUT});
		}		
	}
	$timeout(buildVivus, 1);
	function init(){}
	function attachCustomHandlers()
	{
		// to support looping we need to attach a custom click handler for the video launcher
		document.querySelector("#container-studios ul a")[addListenerMethod]("click", $scope.showReel);
	}
	$timeout(attachCustomHandlers, 1);
	$scope.$on('$viewContentLoaded', init);
	$scope.showBox = false;

}]);

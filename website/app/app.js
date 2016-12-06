'use strict';

// Make sure console.log doesn't cause problems in shitty browsers
if(!window.console)
{
	console = { 
		log: function(){}, 
		dir: function(){}
	};
}
var MOBILE_MAX_WIDTH = 767;
var TABLET_MAX_WIDTH = 1023;

// create a universal listener method to account for browser inconsistencies
var addListenerMethod = STS.browserAppropriateAddEventListener();
var removeListenerMethod = STS.browserAppropriateRemoveEventListener();



/* this global variable is set to true once an outro animation starts
then it's set to false again. This prevents angular from
loading 2 partials at once. */
var disableNav = false;

angular.module('v3App', ['angularytics'])
.config(function(AngularyticsProvider) {
	
}).run(function(Angularytics) {
	Angularytics.init();
});


// app
angular.module('v3App', [
	'ngRoute',
	'ngAnimate',
	'v3AppServices',
	'v3AppControllers',
	'v3AppDirectives',
	'v3AppFilters',
	'ui.router',
	'angularytics'
])
.config(['$locationProvider', '$sceDelegateProvider', 'AngularyticsProvider', appCongifuration])
.config(uiRoutes)
.run(['$rootScope','$route','$timeout', 'Angularytics', appRun]);

function appCongifuration($locationProvider, $sceDelegateProvider, AngularyticsProvider)
{
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $locationProvider.hashPrefix('!');
    // AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
    AngularyticsProvider.setEventHandlers(['GoogleUniversal']);
	$sceDelegateProvider.resourceUrlWhitelist([
		// Allow same origin resource loads.
		'self',
		// Allow loading from our assets domain.  Notice the difference between * and **.
		'http://*.vimeo.com/**',
		'https://*.vimeo.com/**',
		'http://vimeo.com/**',
		'https://vimeo.com/**',
		'http://www.youtube-nocookie.com/**',
		'https://www.youtube-nocookie.com/**',
		'http://www.youtube.com/**',
		'https://www.youtube.com/**'
	]);
}



var v3AppServices = angular.module('v3AppServices', []);
var v3AppControllers = angular.module('v3AppControllers', []);
var v3AppDirectives = angular.module('v3AppDirectives', []);
var v3AppFilters = angular.module('v3AppFilters', []);


// ui-router configuration by AK

function uiRoutes($stateProvider, $urlRouterProvider) 
{
	// for any unmatched url, show 404 page
	$urlRouterProvider.otherwise('404Page');
	
	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: '/app/partials/home/index.html',
			controller: 'HomeCtrl'
		})
		.state('case-studies', {
			url: '/case-studies',
			templateUrl: '/app/partials/case_studies/index.html',
			controller: 'CaseStudiesCtrl'
		})
			.state('oregon', {
				url: '/case-studies/oregon',
				templateUrl: '/app/partials/case_studies/oregon.html',
				controller: 'GridironCtrl'
			})
			.state('ubisoft', {
				url: '/case-studies/ubisoft',
				templateUrl: '/app/partials/case_studies/ubisoft.html',
				controller: 'UbisoftCtrl'
			})
			.state('rossi', {
				url: '/case-studies/rossi',
				templateUrl: '/app/partials/case_studies/rossi.html',
				controller: 'RossiCtrl'
			})
			.state('publik', {
				url: '/case-studies/publik',
				templateUrl: '/app/partials/case_studies/publik.html',
				controller: 'PublikCtrl'
			})    
			.state('peligroso', {
				url: '/case-studies/peligroso',
				templateUrl: '/app/partials/case_studies/peligroso.html',
				controller: 'PeliCtrl'
			})
		.state('work', {
			url: '/work',
			templateUrl: '/app/partials/work/index.html',
			controller: 'WorkCtrl'
		})
			.state('work.filter', {
				url: '/:id/:filter',
				templateUrl: '/app/partials/work/index.filter.html',
				controller: 'WorkFilteredCtrl'
			})
		.state('project', {
			url: '/project/:id/:client/:slug',
			templateUrl: '/app/partials/work/project.html',
			controller: 'ProjectCtrl'
		})
		.state('about-us', {
			url: '/about-us',
			templateUrl: '/app/partials/about_us/index.html',
			controller: 'AboutUsCtrl'
		})
		.state('capabilities', {
			url: '/capabilities',
			templateUrl: '/app/partials/capabilities/index.html',
			controller: 'CapabilitiesCtrl'
		})
		.state('connect', {
			url: '/connect',
			templateUrl: '/app/partials/connect/index.html',
			controller: 'ConnectCtrl'
		})
		.state('shop', {
			url: '/shop',
			templateUrl: '/app/partials/shop/index.html',
			controller: 'ShopCtrl'
		})
		.state('product', {
			url: '/shop/product/:productId',
			templateUrl: '/app/partials/shop/index.html',
			controller: 'ShopCtrl'
		})
		.state('404Page', {
			url: '*path',
			templateUrl: '/app/partials/404/index.html',
			controller: '404Ctrl'
		})
}
function appRun($rootScope, $route, $timeout, Angularytics)
{	
	$rootScope.pageTitle = "Super Top Secret";
	$rootScope.pageDescription = "Super Top Secret is an independent creative agency located in Salt Lake City, UT. We make brands relevant by making things that make a difference.";
	
	$rootScope.$on("$locationChangeStart", locationStart);
	function locationStart(evt, next, current)
	{
		// if the page is transitioning don't let ANYTHING change route
		if(disableNav)
		{
			evt.preventDefault();
		}
	}
	Angularytics.init();
	console.log('app run');
	// check for smaller screen size and denote a mobile site root variable
	window[addListenerMethod]('resize',checkForMobile);
	function checkForMobile()
	{
		$rootScope.mobileDevice = false;
		$rootScope.tabletDevice = false;
		$rootScope.desktop = false;

		if(window.innerWidth <= MOBILE_MAX_WIDTH)
		{
			$rootScope.mobileDevice = true;
		}
		else if(window.innerWidth <= TABLET_MAX_WIDTH)
		{
			$rootScope.tabletDevice = true;
		}
		else
		{
			$rootScope.desktop = true;
		}
		// console.log('mobileDevice / tabletDevice / desktop');
		// console.log($rootScope.mobileDevice, $rootScope.tabletDevice, $rootScope.desktop);
	}
	checkForMobile();
}
var carl = function() {
	console.log("Woof woof woof");
	ga('send', 'event', 'partners', 'click', "Woof Woof Woof");
}
v3AppControllers.controller('GlobalCtrl', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {

	$scope.sounds = {
	 	btnClick: new Howl({
			urls: ['/sounds/little_click-pattern.mp3'],
			volume: 0.35
		}),
	 	crossOutOver: new Howl({
			urls: ['/sounds/strikethrough.mp3'],
			volume: 0.3
		}),
	 	goldOutline: new Howl({
			// urls: ['/sounds/gold_image_outline.mp3'],
			urls: ['/sounds/outliner.mp3'],
			volume: 0.3
		}),
	 	navIn: new Howl({
			// urls: ['/sounds/gold_image_outline.mp3'],
			urls: ['/sounds/nav_entry.mp3'],
			volume: 1
		})// 	crossOutOff: new Howl({
		// 	urls: ['/sounds/link_hover_off.mp3'],
		// 	volume: 0.3
		// }),
	}

	$scope.playSound = function(soundToPlay)
	{
		$scope.sounds[soundToPlay].play();
	}
}]);










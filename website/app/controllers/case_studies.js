'use strict';

/* Controllers */

v3AppControllers.controller('CaseStudiesCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	function init()
	{    
		$scope.caseStudies = [
			{
				client: "University of Oregon",
				img: "/images/case-studies/oregon-panel-bg.jpg",
				path: "oregon",
				slug: "oregon",
				teaser: "Welcoming recruits to the future of football",
				title: "Experiential Interactive"
			},
			{
				client: "Assassin's Creed",
				img: "/images/case-studies/ubisoft-panel-bg.jpg",
				path: "ubisoft",
				slug: "ubisoft",
				teaser: "Socially launching a video game",
				title: "Social Media System"
			},
			{
				client: "Rossignol Snowboards",
				img: "/images/case-studies/rossi/rossignol-hero.jpg",
				path: "rossi",
				teaser: "Showing a ski brand how to snowboard",
				title: "Brand Evolution"
			},
			{
				client: "Publik Coffee",
				img: "/images/case-studies/publik-panel-bg.jpg",
				path: "publik",
				slug: "publik",
				teaser: "Creating a Brand from Scratch",
				title: "Brand Development"
			},
			{
				client: "Peligroso Tequila",
				img: "/images/case-studies/peligroso-panel-bg.jpg",
				path: "peligroso",
				slug: "peli",
				teaser: "Taking a Tequila Brand to the National Stage",
				title: "Integrated Campaign"
			}
		];
	}
	$scope.$on('$viewContentLoaded', init);

}]);

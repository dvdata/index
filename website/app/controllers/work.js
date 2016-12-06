'use strict';

var DISCIPLINES = ['interactive', 'advertising', 'design', 'film'];

var layoutHelp = [{
	standardFit: "two_quarters row_start",
	fillFit: "four_quarters row_start row_end"
},
{
	standardFit: "one_quarter",
	fillFit: "two_quarters row_end"
},
{
	standardFit: "one_quarter row_end",
	fillFit: "one_quarter row_end"
},
{
	standardFit: "three_quarters row_start",
	fillFit: "four_quarters row_start row_end"
},
{
	standardFit: "one_quarter row_end",
	fillFit: "one_quarter row_end"
},
{
	standardFit: "four_quarters row_start row_end",
	fillFit: "four_quarters row_start row_end"
},
{
	standardFit: "one_quarter row_start",
	fillFit: "four_quarters row_start row_end"
},
{
	standardFit: "one_quarter",
	fillFit: "three_quarters row_end"
},
{
	standardFit: "one_quarter",
	fillFit: "two_quarters row_end"
},
{
	standardFit: "one_quarter row_end",
	fillFit: "one_quarter row_end"
},
{
	standardFit: "two_quarters row_start",
	fillFit: "four_quarters row_start row_end"
},
{
	standardFit: "two_quarters row_end",
	fillFit: "two_quarters row_end"
}
];

/* Controllers */
v3AppControllers.controller('WorkFilteredCtrl', ['$timeout', '$scope', '$stateParams', '$http', '$location', 'workFactory', 'pageMeta', function($timeout, $scope, $stateParams, $http, $location, workFactory, pageMeta) {

	$scope.currentFilter = $stateParams.id;

	if(DISCIPLINES.indexOf($stateParams.filter) > -1)
	{
		workFactory.getData('http://admin.wearetopsecret.com/feed/projects/filter/' + $stateParams.id + '?callback=jsonpCallback').then(prepareResponse);
	}
	else
	{
		workFactory.getData('http://admin.wearetopsecret.com/feed/projects/clients/' + $stateParams.id + '?callback=jsonpCallback').then(prepareResponse);
	}
	pageMeta.setMetaData('Work / ' + $stateParams.filter + ' :: Super Top Secret');
	pageMeta.updateMetaData();
	
	var layoutHelpIndex = 0;
	var layoutHelpSize = layoutHelp.length;
	function prepareResponse(response)
	{
		$scope.projects = [];
		for(var i = 0, numProjects = response.data.length; i < numProjects; i++)
		{
			if(!response.data[i].hero_image)
			{
				response.data[i].hero_image = "/images/fake-hero.jpg";
			}
			$scope.projects.push(response.data[i]);
		}
		for(var i = 0, numProjects = $scope.projects.length; i < numProjects; i++)
		{
			if(i == numProjects-1)
			{
				$scope.projects[i].boxType = layoutHelp[layoutHelpIndex].fillFit;
			}
			else
			{
				$scope.projects[i].boxType = layoutHelp[layoutHelpIndex].standardFit;
			}
			layoutHelpIndex++;
			if(layoutHelpIndex == layoutHelpSize)
			{
				layoutHelpIndex = 0;
			}
			
			$scope.projects[i].slug = slugify($scope.projects[i].title);
			$scope.projects[i].client_slug = slugify($scope.projects[i].client_name);
		}
	}
	function slugify(projectTitle)
	{
		return projectTitle.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
	}
}]);

v3AppControllers.controller('WorkCtrl', ['$rootScope', '$timeout', '$scope', '$stateParams', '$http', '$location', '$state', 'workFactory', 'pageMeta', function($rootScope, $timeout, $scope, $stateParams, $http, $location, $state, workFactory, pageMeta) {

	function init()
	{

		if(!$scope.clientList)
		{
			workFactory.getData('http://admin.wearetopsecret.com/feed/projects/clients?callback=jsonpCallback').then(prepareClientNames);
		}

		if(!$stateParams.id)
		{
			workFactory.getData('http://admin.wearetopsecret.com/feed/projects?callback=jsonpCallback').then(prepareResponse);
		}
		workFactory.getData('http://admin.wearetopsecret.com/feed/projects/disciplines').then(populateCategories);
		pageMeta.setMetaData('Work :: Super Top Secret');
		pageMeta.updateMetaData();

		var PIECE_LAYOUT_TYPES = ['Image', 'Internal Link', 'External Link', 'Youtube Clip', 'Vimeo Clip'];
		var LAYOUT_TYPES = ['Full', 'Full Video', '50/50 Images', '50/50 Image / Text'];

		var layoutHelpIndex = 0;
		var layoutHelpSize = layoutHelp.length;
		function prepareResponse(response)
		{
			$scope.projects = [];
			for(var i = 0, numProjects = response.data.length; i < numProjects; i++)
			{
				if(!response.data[i].hero_image)
				{
					response.data[i].hero_image = "/images/fake-hero.jpg";
				}
			}
			$scope.projects = response.data;
			for(var i = 0, numProjects = $scope.projects.length; i < numProjects; i++)
			{
				if(i == numProjects-1)
				{
					$scope.projects[i].boxType = layoutHelp[layoutHelpIndex].fillFit;
				}
				else
				{
					$scope.projects[i].boxType = layoutHelp[layoutHelpIndex].standardFit;
				}
				layoutHelpIndex++;
				if(layoutHelpIndex == layoutHelpSize)
				{
					layoutHelpIndex = 0;
				}
				
				$scope.projects[i].slug = slugify($scope.projects[i].title);
				$scope.projects[i].client_slug = slugify($scope.projects[i].client_name);
			}
		}
		function prepareClientNames(response)
		{
			$scope.clientList = [];
			for(var i = 0, numClients = response.data.length; i < numClients; i++)
			{
				$scope.clientList.push({
					id: response.data[i].id,
					name: response.data[i].name,
					slug: slugify(response.data[i].name)
				});
			}
			$timeout(function() {
				$rootScope.$broadcast("client_list_appended");
			}, 1);
		}
		function slugify(projectTitle)
		{
			return projectTitle.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
		}
		function populateCategories(response)
		{
			$scope.disciplines = response.data;
		}
		$scope.updateDiscipline = function(discId, discSlug)
		{
			$scope.projects = [];
			$location.url('/work/' + discId + '/' + discSlug);
		}
		$scope.updateClient = function()
		{

		}
		$scope.goToLanding = function(discId, discSlug)
		{
			$state.go('work');
		}
		$scope.isCurrentDiscipline = function(discId)
		{
			if($state.params.id)
			{
				if(discId == $state.params.id)
				{
					return true;
				}
				else
				{
					return false;
				}
			}
			else if(discId == 0)
			{
				return true;
			}
		}
		$scope.toggleClients = function()
		{

		}
	}
	$rootScope.$on('$stateChangeSuccess', function(){
		init();
	});
	init();

}]);

v3AppControllers.controller('ProjectCtrl', ['$scope', '$rootScope', '$stateParams', '$http', '$sce', 'workFactory', 'pageMeta', function($scope, $rootScope, $stateParams, $http, $sce, workFactory, pageMeta) {
	$scope.project = [];
	// $scope.jsonpURL = "http://admin.wearetopsecret.com/feed/projects.json?format=json-p&callback=JSON_CALLBACK";
	function init()
	{

		workFactory.getData('http://admin.wearetopsecret.com/feed/projects/' + $stateParams.id).then(prepareResponse)

		function prepareResponse(response)
		{
			$scope.project = response.data;
			$scope.project.opening_paragraph = $sce.trustAsHtml(nl2br($scope.project.opening_paragraph));
			if($scope.project.live_url)
			{
				console.log("live asset url there");
				// make a nice title for the links
				$scope.project.live_url_title = $scope.project.live_url.replace("http://", "").replace("https://").replace("www.", "");
			}
			console.log($scope.project);
			angular.forEach($scope.project.asset, function(assetArr, assetKey) {
				// console.log(assetArr);
				if(assetArr.layout_type == "full_video")
				{
					if(assetArr.piece_link_type_1 == "youtube")
					{
						assetArr.videoEmbedCode = $sce.trustAsHtml('<iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/' + assetArr.piece_link_1 + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
					}
					if(assetArr.piece_link_type_1 == "vimeo")
					{
						assetArr.videoEmbedCode = $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/' + assetArr.piece_link_1 + '" width="853" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
					}
				}
				assetArr.videoClass = "video_hiding";

				// prepare copy for display by converting line breaks to <br> and trusting the html
				assetArr.piece_desc_1 = $sce.trustAsHtml(nl2br(assetArr.piece_desc_1));
				assetArr.piece_desc_2 = $sce.trustAsHtml(nl2br(assetArr.piece_desc_2));

			});
			// console.log($scope.project);

			pageMeta.setMetaData($scope.project.client_name + ' / ' + $scope.project.title + ' :: Super Top Secret - Work', $scope.project.opening_paragraph);
			pageMeta.updateMetaData();
		}
	}
	function nl2br(copyWithLineBreaks)
	{
		return copyWithLineBreaks.replace(/(?:\r\n|\r|\n)/g, '<br>');
	}
	$scope.trustMarkup = function(markupToTrust)
	{
		return $sce.trustAsHtml(markupToTrust);
	}
	$scope.buildLink = function(linkHref, linkType, linkImg)
	{
		var contentPiece = '<img src="' + linkImg + '"/>';
		var markupReturn = "";
		switch (linkType) {
			case 'image':
				// console.log('Link Type: image');
				markupReturn += '<a href="' + linkHref + '">';
				markupReturn += contentPiece;
				markupReturn += '</a>';
				break;
			case 'internal_link':
				// console.log('Link Type: internal_link');
				markupReturn += '<a href="' + linkHref + '">';
				markupReturn += contentPiece;
				markupReturn += '</a>';
				break;
			case 'external_link':
				// console.log('Link Type: external_link');
				markupReturn += '<a href="' + linkHref + '" target="_blank">';
				markupReturn += contentPiece;
				markupReturn += '</a>';
				break;
			case 'youtube':
				// console.log('Link Type: youtube');
				markupReturn += contentPiece;
				break;
			case 'vimeo':
				// console.log('Link Type: vimeo');
				markupReturn += contentPiece;
				break;
			default:
				// console.log('no link type specified')
				markupReturn += contentPiece;
				break
		}
		return $sce.trustAsHtml(markupReturn);
	}

	$scope.playVideo = function(asset)
	{
		asset.videoClass = "video_showing";
	}
	$scope.$on('$viewContentLoaded', init);

}]);
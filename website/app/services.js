/* services */

v3AppServices.service('pageMeta', ['$rootScope', pageMetaData]);

function pageMetaData($rootScope)
{
	this.metaData = {
		title: "Super Top Secret",
		description: "Super Top Secret Is A Creative Shop Hell Bent On Making The World A Better Place One Brand At A Time. Think Seal Team 6 In Chucks &amp; Dunk Lows Armed To The Teeth With Macs."
	}
	this.updateMetaData = function()
	{
		$rootScope.pageTitle = this.metaData.title;
		$rootScope.pageDescription = this.metaData.description;
	}
	this.setMetaData = function(title, desc)
	{
		this.metaData.title = title || "Super Top Secret";
		this.metaData.description = desc || "Super Top Secret Is A Creative Shop Hell Bent On Making The World A Better Place One Brand At A Time. Think Seal Team 6 In Chucks &amp; Dunk Lows Armed To The Teeth With Macs.";
	}
}
v3AppServices.service('productSorting', productSortingTracker);

function productSortingTracker()
{
	this.sortMethod = "latest";

	this.getSortMethod = function()
	{
		return this.sortMethod;
	}
	this.setSortMethod = function(desiredMethod)
	{
		this.sortMethod = desiredMethod;
	}
}

v3AppServices.service('animationTracker', ['$rootScope', trackAnimations]);

function trackAnimations($rootScope)
{
	this.animationStatus = "still";
	this.animationAction = "";
	this.mostRecentStatus = "";

	this.setAnimationStatus = function(status)
	{
		this.mostRecentStatus = this.animationStatus;
		this.animationStatus = status;
	}
	this.setAnimationAction = function(action)
	{
		this.animationAction = action;
	}
	this.broadcastStatus = function()
	{
		$rootScope.$broadcast("animationUpdate");
	}
	this.getAnimationStatus = function()
	{
		return {
			action: this.animationAction,
			status: this.animationStatus,
			recent: this.mostRecentStatus
		};
	}
}
v3AppServices.service('loadingTracker', ['$rootScope', trackLoading]);

function trackLoading($rootScope)
{
	this.progress = 0;
	this.action = false;

	this.setProgress = function(loadProgress)
	{
		this.progress = loadProgress;
	}
	this.getProgress = function(loadProgress)
	{
		return this.progress;
	}
	this.setAction = function(desiredAction)
	{
		this.action = desiredAction;
	}
	this.getAction = function(desiredAction)
	{
		return this.action;
	}
	this.broadcastStatus = function()
	{
		$rootScope.$broadcast("loadingTrackerEvent");
	}
}
v3AppServices.service('partnerService', getPartners);

function getPartners()
{
	var partners = [
		{
			name: 'Jared Strain',
			title: 'Partner / Design Director',
			bio: "A designer by trade, Jared’s a seasoned vet whose misguided youth of skateboarding and hair metal inspired him to pursue a creative career. With over a decade in the design game, Jared’s worn out Wacoms for blue chip brands like Coke, Microsoft, Nike, MTV, Rossignol, and K2. While Jared loves getting busy on the big stage, his true passion lies in conjuring brands out of thin air—amassing a formidable collection of design awards for the identities he’s built. ",
			photo: '/images/about/partners/jared.jpg'
		},
		{
			name: 'Rheda Fouad',
			title: 'Partner / CFO / Consigliere',
			bio: "Rheda is our business mastermind. Armed with a head full of complex equations and financial formulas, he's able to figure out how to win even when everyone else is losing. After running a successful family enterprise and growing his real estate empire, Rheda decided to take on a new challenge and become our trusted Consigliere. On the rare occasion that he has some down time, you can find him with a stiff drink in hand cruising the net looking for high rises for sale. He wants a skyscraper with his name on it. Seriously. ",
			photo: '/images/about/partners/rheda.jpg'
		},
		{
			name: 'Josh Batchelor',
			title: 'Partner / Director of Development',
			bio: "Josh is STS’s dark lord of development. With over 15 years experience developing complex applications and Internet things for brands like Jaybird, Coke, Lexus and Net Gear—Josh has been deep in the trenches with the evolution of the Internet. He gets things done in ones and zeros so hard he makes Neo look like a Luddite. Got nerd questions? Chances are he’s been there and done that. Twice. With his eyes closed. While eating three Otter Pops. When not writing glorious, glorious code, you might find Josh working on his apparel line or doing soccer hooligan things. ",
			photo: '/images/about/partners/josh.jpg'
		},
		{
			name: 'Dave Trevino',
			title: 'Partner / Director of Photography',
			bio: "Dave is an accomplished director of photography and editor who, for the last two decades, has been behind the lens creating compelling and stellar content for the likes of NBC Sports, Red Bull, Burton Snowboards, Mountain Dew, and Skullcandy to name a few. Dave has an impeccable eye, a relentless work ethic and does whatever it takes to get the shot; all while making it look so easy.",
			photo: '/images/about/partners/dave.jpg',
		},
		{
			name: 'Carl',
			title: 'Head Of Security / Good Boy',
			bio: "The OG shop dog and STS mascot is a vet industry vet who’s made his mark on every street sign along Edison Street in Salt Lake City. Transplanted from Seattle next to a subwoofer in the trunk of a Volkswagen GTI, Carl is a Goldendoodle of the black variety. While the majority of his day is spent doing a convincing bearskin rug impression, he magically appears whenever and wherever a bag of beef jerky is unsealed. When he’s not protecting STS from receiving it’s daily mail, you can find Carl frolicking about on the skate ramp or massaging his own bodyparts with his tongue. Woof.",
			photo: '/images/about/partners/carl.jpg'
		}
	];
	this.returnPartners = function() {
		return partners;
	}
}

v3AppServices.factory('workFactory', ['$http', '$q', function($http, $q) {

	return {
		getData: function(feedUrl) {
			var deferred = $q.defer();
			$http.defaults.useXDomain = true;

			$http.get(feedUrl).then(function(response) {
				deferred.resolve(response);
			})

			return deferred.promise;
		}
	}
}])

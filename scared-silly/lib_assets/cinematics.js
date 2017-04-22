(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 450,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.cinematic_credits_bat = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_credits_bg = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_credits_globo = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_credits_text_cn = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_credits_text_wonbats = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_hitbox = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_cloud1 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_cloud2 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_door1 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_door2 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_general = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_jeffblink = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_jeffblink_peak = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_jefflook = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_jeffpeak = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_jeffpeak_shadow = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_jeffseei_moutht = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_jeffseeit = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_living = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_roombase = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_roombase_light = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_tvglow = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_intro_windowglow = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_loading_bg = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_loading_postitpngcopy = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_bg_1 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_bg_2 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_armhi = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_blink = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_body = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_bush = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_eyes_1 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_hand2 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_handhi = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_clarence_mouth = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_arm = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_blink = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_body = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_eyes_1 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_eyes_2 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_head = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_mouth_1 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_mouth_2 = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_pupils = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_jeff_toy = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_sumo_arm = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_sumo_baee = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_sumo_blink = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_sumo_bush = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_outro_sumo_toys = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_blackie_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_button_base_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_button_top_highlight_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_button_top_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_credits_glow_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_disaperar_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_flashgfx_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_icon_home_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_icon_skip_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_papelpicado_1_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_papelpicado_2_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_white_png = function() {
	this.spriteSheet = ss["cinematics_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.cinematic_x_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_white_png();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.cinematic_x_papelpicado_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_papelpicado_2_png();
	this.instance.setTransform(-100.7,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.1,-76.5,224.9,140.4);
p.frameBounds = [rect];


(lib.cinematic_x_papelpicado_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_papelpicado_1_png();
	this.instance.setTransform(-100.7,-74.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-74.8,226.9,140.3);
p.frameBounds = [rect];


(lib.cinematic_x_icon_skip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_icon_skip_png();
	this.instance.setTransform(-29.8,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.8,-20.3,62,42);
p.frameBounds = [rect];


(lib.cinematic_x_icon_home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_icon_home_png();
	this.instance.setTransform(-25.7,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-26,54,50.4);
p.frameBounds = [rect];


(lib.cinematic_x_flashgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_flashgfx_png();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.cinematic_x_disaperar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_disaperar_png();
	this.instance.setTransform(-5.9,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.9,-30.9,11.4,61.4);
p.frameBounds = [rect];


(lib.cinematic_x_credits_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_credits_glow_png();
	this.instance.setTransform(-14,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-14,28.1,28.1);
p.frameBounds = [rect];


(lib.cinematic_x_button_top_highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_button_top_highlight_png();
	this.instance.setTransform(-39,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-39.7,79.2,77.3);
p.frameBounds = [rect];


(lib.cinematic_x_button_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_button_top_png();
	this.instance.setTransform(-39,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-39.7,79.2,77.3);
p.frameBounds = [rect];


(lib.cinematic_x_button_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_button_base_png();
	this.instance.setTransform(-40.2,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-19.2,81,65.3);
p.frameBounds = [rect];


(lib.cinematic_x_blackie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.cinematic_x_blackie_png();
	this.instance.setTransform(-37.1,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-37,74.2,74.2);
p.frameBounds = [rect];


(lib.cinematic_windowglow_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_windowglow();
	this.instance.setTransform(-24.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-32.5,49,65);
p.frameBounds = [rect];


(lib.cinematic_tv_glow_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_tvglow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,293,418);
p.frameBounds = [rect];


(lib.cinematic_text_wonbats_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_credits_text_wonbats();
	this.instance.setTransform(-111.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-42,223,84);
p.frameBounds = [rect];


(lib.cinematic_text_cngames_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_credits_text_cn();
	this.instance.setTransform(-103,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-41.5,206,83);
p.frameBounds = [rect];


(lib.cinematic_outro_sumo_toys_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_sumo_toys();
	this.instance.setTransform(-87.8,-74.7,1,1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.6,-74.7,189.8,151.8);
p.frameBounds = [rect];


(lib.cinematic_outro_sumo_bush_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_sumo_bush();
	this.instance.setTransform(-64,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-56.5,128,113);
p.frameBounds = [rect];


(lib.cinematic_outro_sumo_blink_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_sumo_blink();
	this.instance.setTransform(-31,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-15.5,62,31);
p.frameBounds = [rect];


(lib.cinematic_outro_sumo_baee_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_sumo_baee();
	this.instance.setTransform(-50.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-63,101,126);
p.frameBounds = [rect];


(lib.cinematic_outro_sumo_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_sumo_arm();
	this.instance.setTransform(-5.4,-87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.4,-87.2,73,94);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_pupils_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_pupils();
	this.instance.setTransform(-6.5,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.5,-7,13,14);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_mouth_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_mouth_2();
	this.instance.setTransform(-11.1,-14.2,1,1,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.7,-14.2,31.1,24.9);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_mouth_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_mouth_1();
	this.instance.setTransform(-39.5,-32.9,1,1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-32.9,97.7,65.9);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_head();
	this.instance.setTransform(-81.1,-175.3,1,1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.8,-175.3,229.8,220.5);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_eyes_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_eyes_2();
	this.instance.setTransform(-48.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-17,97,34);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_eyes_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_eyes_1();
	this.instance.setTransform(-55.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-32,111,64);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_body();
	this.instance.setTransform(-32,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-71.5,64,143);
p.frameBounds = [rect];


(lib.cinematic_outro_jeff_blink_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_blink();
	this.instance.setTransform(-51.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-30,103,60);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_mouth_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_clarence_mouth();
	this.instance.setTransform(-30,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-18.5,60,37);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_handhi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_clarence_handhi();
	this.instance.setTransform(-28.1,-36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.1,-36.4,57,43);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_hand2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_clarence_hand2();
	this.instance.setTransform(-15.5,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,-9,31,18);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_eyes_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_clarence_eyes_1();
	this.instance.setTransform(-20.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-5,41,10);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_bush_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_clarence_bush();
	this.instance.setTransform(-82,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-39.5,164,79);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_clarence_body();
	this.instance.setTransform(-59,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-68,118,136);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_blink_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_clarence_blink();
	this.instance.setTransform(-28.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-14,57,28);
p.frameBounds = [rect];


(lib.cinematic_outro_bg_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_bg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,504);
p.frameBounds = [rect];


(lib.cinematic_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_jeffseei_moutht();
	this.instance.setTransform(-18.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.5,-12.5,37,25);
p.frameBounds = [rect];


(lib.cinematic_jeffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_jeffpeak();
	this.instance.setTransform(-52,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-126,104,252);
p.frameBounds = [rect];


(lib.cinematic_intro_1_cloud_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_cloud1();
	this.instance.setTransform(-41.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-21.5,83,43);
p.frameBounds = [rect];


(lib.cinematic_intro_1_cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_cloud2();
	this.instance.setTransform(-124,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124,-34.5,248,69);
p.frameBounds = [rect];


(lib.cinematic_intro_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_general();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,450);
p.frameBounds = [rect];


(lib.cinematic_eyeeyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_jeffseeit();
	this.instance.setTransform(-27,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-22,54,44);
p.frameBounds = [rect];


(lib.cinematic_door2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_door1();
	this.instance.setTransform(-25.9,-207.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.9,-207.1,196,409);
p.frameBounds = [rect];


(lib.cinematic_door1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_intro_door2();
	this.instance.setTransform(-112,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-177,224,354);
p.frameBounds = [rect];


(lib.cinematic_cinematic_jeff_toy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_toy();
	this.instance.setTransform(-18.6,-112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.6,-112.8,117,143);
p.frameBounds = [rect];


(lib.cinematic_cinematic_jeff_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_outro_jeff_arm();
	this.instance.setTransform(69.6,-108.8,1,1,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.5,-108.8,215.6,212.4);
p.frameBounds = [rect];


(lib.cinematic_bat_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_credits_bat();
	this.instance.setTransform(-26.2,-5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-5.4,52,118);
p.frameBounds = [rect];


(lib.cinematic_ballon_squesh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_credits_globo();
	this.instance.setTransform(-21,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-44,42,88);
p.frameBounds = [rect];


(lib.cinematic_hitboxbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_hitbox();
	this.instance.setTransform(-51.4,-49.3,1.097,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect];


(lib.cinematic_windowglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_windowglow_gfx();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.628},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.614},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.701},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.626},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.614},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.701},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.528},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-32.5,49,65);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_x_white();
	this.instance.setTransform(399,220.1,13.159,7.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-20.5,842.2,481.3);
p.frameBounds = [rect];


(lib.cinematic_tvglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_tv_glow_gfx();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:146.5,regY:209,x:146.5,y:209,alpha:0.99},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.768},0).wait(1).to({alpha:0.733},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.719},0).wait(1).to({regX:146.5,regY:209,x:146.5,y:209,alpha:0.723},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.751},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.802},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.899},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.994},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(1).to({regX:146.5,regY:209,x:146.5,y:209,alpha:0.991},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.864},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.852},0).wait(1).to({regX:146.5,regY:209,x:146.5,y:209,alpha:0.855},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.899},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,293,418);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_text_wonbats_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_text_wonbats_gfx();
	this.instance.setTransform(0,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-4.1},0).wait(1).to({y:-4},0).wait(1).to({y:-3.9},0).wait(1).to({y:-3.7},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2.9},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.5},0).wait(1).to({y:0},0).wait(1).to({y:0.6},0).wait(1).to({y:1.2},0).wait(1).to({y:1.7},0).wait(1).to({y:2.2},0).wait(1).to({y:2.6},0).wait(1).to({y:3},0).wait(1).to({y:3.3},0).wait(1).to({y:3.6},0).wait(1).to({y:3.8},0).wait(1).to({y:4},0).wait(1).to({y:4.1},0).wait(1).to({y:4.2},0).wait(2).to({y:4.3},0).wait(1).to({y:4.2},0).wait(2).to({y:4.1},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.5},0).wait(1).to({y:3.3},0).wait(1).to({y:3},0).wait(1).to({y:2.6},0).wait(1).to({y:2.2},0).wait(1).to({y:1.8},0).wait(1).to({y:1.3},0).wait(1).to({y:0.8},0).wait(1).to({y:0.3},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.8},0).wait(1).to({y:-1.4},0).wait(1).to({y:-1.9},0).wait(1).to({y:-2.3},0).wait(1).to({y:-2.7},0).wait(1).to({y:-3.1},0).wait(1).to({y:-3.4},0).wait(1).to({y:-3.6},0).wait(1).to({y:-3.8},0).wait(1).to({y:-4},0).wait(1).to({y:-4.1},0).wait(1).to({y:-4.2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-46.2,223,84);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-111.5,-46.1,223,84), new cjs.Rectangle(-111.5,-46,223,84), new cjs.Rectangle(-111.5,-45.8,223,84), new cjs.Rectangle(-111.5,-45.7,223,84), new cjs.Rectangle(-111.5,-45.4,223,84), new cjs.Rectangle(-111.5,-45.2,223,84), new cjs.Rectangle(-111.5,-44.8,223,84), new cjs.Rectangle(-111.5,-44.5,223,84), new cjs.Rectangle(-111.5,-44,223,84), new cjs.Rectangle(-111.5,-43.6,223,84), new cjs.Rectangle(-111.5,-43.1,223,84), new cjs.Rectangle(-111.5,-42.5,223,84), new cjs.Rectangle(-111.5,-41.9,223,84), new cjs.Rectangle(-111.5,-41.4,223,84), new cjs.Rectangle(-111.5,-40.8,223,84), new cjs.Rectangle(-111.5,-40.3,223,84), new cjs.Rectangle(-111.5,-39.8,223,84), new cjs.Rectangle(-111.5,-39.4,223,84), new cjs.Rectangle(-111.5,-39,223,84), new cjs.Rectangle(-111.5,-38.7,223,84), new cjs.Rectangle(-111.5,-38.4,223,84), new cjs.Rectangle(-111.5,-38.2,223,84), new cjs.Rectangle(-111.5,-38,223,84), new cjs.Rectangle(-111.5,-37.9,223,84), new cjs.Rectangle(-111.5,-37.8,223,84), rect=new cjs.Rectangle(-111.5,-37.7,223,84), rect, rect, rect=new cjs.Rectangle(-111.5,-37.8,223,84), rect, new cjs.Rectangle(-111.5,-37.9,223,84), new cjs.Rectangle(-111.5,-38.1,223,84), new cjs.Rectangle(-111.5,-38.3,223,84), new cjs.Rectangle(-111.5,-38.5,223,84), new cjs.Rectangle(-111.5,-38.7,223,84), new cjs.Rectangle(-111.5,-39,223,84), new cjs.Rectangle(-111.5,-39.4,223,84), new cjs.Rectangle(-111.5,-39.8,223,84), new cjs.Rectangle(-111.5,-40.2,223,84), new cjs.Rectangle(-111.5,-40.7,223,84), new cjs.Rectangle(-111.5,-41.2,223,84), new cjs.Rectangle(-111.5,-41.7,223,84), new cjs.Rectangle(-111.5,-42.3,223,84), new cjs.Rectangle(-111.5,-42.8,223,84), new cjs.Rectangle(-111.5,-43.3,223,84), new cjs.Rectangle(-111.5,-43.8,223,84), new cjs.Rectangle(-111.5,-44.3,223,84), new cjs.Rectangle(-111.5,-44.7,223,84), new cjs.Rectangle(-111.5,-45,223,84), new cjs.Rectangle(-111.5,-45.3,223,84), new cjs.Rectangle(-111.5,-45.6,223,84), new cjs.Rectangle(-111.5,-45.8,223,84), new cjs.Rectangle(-111.5,-46,223,84), new cjs.Rectangle(-111.5,-46.1,223,84), rect=new cjs.Rectangle(-111.5,-46.2,223,84), rect, rect];


(lib.cinematic_text_wonbats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_text_wonbats_move("synched",14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-42.5,223,84);
p.frameBounds = [rect, new cjs.Rectangle(-111.5,-41.9,223,84), new cjs.Rectangle(-111.5,-41.4,223,84), new cjs.Rectangle(-111.5,-40.8,223,84), new cjs.Rectangle(-111.5,-40.3,223,84), new cjs.Rectangle(-111.5,-39.8,223,84), new cjs.Rectangle(-111.5,-39.4,223,84), new cjs.Rectangle(-111.5,-39,223,84), new cjs.Rectangle(-111.5,-38.7,223,84), new cjs.Rectangle(-111.5,-38.4,223,84), new cjs.Rectangle(-111.5,-38.2,223,84), new cjs.Rectangle(-111.5,-38,223,84), new cjs.Rectangle(-111.5,-37.9,223,84), new cjs.Rectangle(-111.5,-37.8,223,84), rect=new cjs.Rectangle(-111.5,-37.7,223,84), rect, rect, rect=new cjs.Rectangle(-111.5,-37.8,223,84), rect, new cjs.Rectangle(-111.5,-37.9,223,84), new cjs.Rectangle(-111.5,-38.1,223,84), new cjs.Rectangle(-111.5,-38.3,223,84), new cjs.Rectangle(-111.5,-38.5,223,84), new cjs.Rectangle(-111.5,-38.7,223,84), new cjs.Rectangle(-111.5,-39,223,84), new cjs.Rectangle(-111.5,-39.4,223,84), new cjs.Rectangle(-111.5,-39.8,223,84), new cjs.Rectangle(-111.5,-40.2,223,84), new cjs.Rectangle(-111.5,-40.7,223,84), new cjs.Rectangle(-111.5,-41.2,223,84), new cjs.Rectangle(-111.5,-41.7,223,84), new cjs.Rectangle(-111.5,-42.3,223,84), new cjs.Rectangle(-111.5,-42.8,223,84), new cjs.Rectangle(-111.5,-43.3,223,84), new cjs.Rectangle(-111.5,-43.8,223,84), new cjs.Rectangle(-111.5,-44.3,223,84), new cjs.Rectangle(-111.5,-44.7,223,84), new cjs.Rectangle(-111.5,-45,223,84), new cjs.Rectangle(-111.5,-45.3,223,84), new cjs.Rectangle(-111.5,-45.6,223,84), new cjs.Rectangle(-111.5,-45.8,223,84), new cjs.Rectangle(-111.5,-46,223,84), new cjs.Rectangle(-111.5,-46.1,223,84), rect=new cjs.Rectangle(-111.5,-46.2,223,84), rect, rect, rect, rect, rect, new cjs.Rectangle(-111.5,-46.1,223,84), new cjs.Rectangle(-111.5,-46,223,84), new cjs.Rectangle(-111.5,-45.8,223,84), new cjs.Rectangle(-111.5,-45.7,223,84), new cjs.Rectangle(-111.5,-45.4,223,84), new cjs.Rectangle(-111.5,-45.2,223,84), new cjs.Rectangle(-111.5,-44.8,223,84), new cjs.Rectangle(-111.5,-44.5,223,84), new cjs.Rectangle(-111.5,-44,223,84), new cjs.Rectangle(-111.5,-43.6,223,84), new cjs.Rectangle(-111.5,-43.1,223,84)];


(lib.cinematic_text_cngames_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_text_cngames_gfx();
	this.instance.setTransform(0,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-4.1},0).wait(1).to({y:-4},0).wait(1).to({y:-3.9},0).wait(1).to({y:-3.7},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2.9},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.5},0).wait(1).to({y:0},0).wait(1).to({y:0.6},0).wait(1).to({y:1.2},0).wait(1).to({y:1.7},0).wait(1).to({y:2.2},0).wait(1).to({y:2.6},0).wait(1).to({y:3},0).wait(1).to({y:3.3},0).wait(1).to({y:3.6},0).wait(1).to({y:3.8},0).wait(1).to({y:4},0).wait(1).to({y:4.1},0).wait(1).to({y:4.2},0).wait(2).to({y:4.3},0).wait(1).to({y:4.2},0).wait(2).to({y:4.1},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.5},0).wait(1).to({y:3.3},0).wait(1).to({y:3},0).wait(1).to({y:2.6},0).wait(1).to({y:2.2},0).wait(1).to({y:1.8},0).wait(1).to({y:1.3},0).wait(1).to({y:0.8},0).wait(1).to({y:0.3},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.8},0).wait(1).to({y:-1.4},0).wait(1).to({y:-1.9},0).wait(1).to({y:-2.3},0).wait(1).to({y:-2.7},0).wait(1).to({y:-3.1},0).wait(1).to({y:-3.4},0).wait(1).to({y:-3.6},0).wait(1).to({y:-3.8},0).wait(1).to({y:-4},0).wait(1).to({y:-4.1},0).wait(1).to({y:-4.2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-45.7,206,83);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-103,-45.6,206,83), new cjs.Rectangle(-103,-45.5,206,83), new cjs.Rectangle(-103,-45.3,206,83), new cjs.Rectangle(-103,-45.2,206,83), new cjs.Rectangle(-103,-44.9,206,83), new cjs.Rectangle(-103,-44.7,206,83), new cjs.Rectangle(-103,-44.3,206,83), new cjs.Rectangle(-103,-44,206,83), new cjs.Rectangle(-103,-43.5,206,83), new cjs.Rectangle(-103,-43.1,206,83), new cjs.Rectangle(-103,-42.6,206,83), new cjs.Rectangle(-103,-42,206,83), new cjs.Rectangle(-103,-41.4,206,83), new cjs.Rectangle(-103,-40.9,206,83), new cjs.Rectangle(-103,-40.3,206,83), new cjs.Rectangle(-103,-39.8,206,83), new cjs.Rectangle(-103,-39.3,206,83), new cjs.Rectangle(-103,-38.9,206,83), new cjs.Rectangle(-103,-38.5,206,83), new cjs.Rectangle(-103,-38.2,206,83), new cjs.Rectangle(-103,-37.9,206,83), new cjs.Rectangle(-103,-37.7,206,83), new cjs.Rectangle(-103,-37.5,206,83), new cjs.Rectangle(-103,-37.4,206,83), new cjs.Rectangle(-103,-37.3,206,83), rect=new cjs.Rectangle(-103,-37.2,206,83), rect, rect, rect=new cjs.Rectangle(-103,-37.3,206,83), rect, new cjs.Rectangle(-103,-37.4,206,83), new cjs.Rectangle(-103,-37.6,206,83), new cjs.Rectangle(-103,-37.8,206,83), new cjs.Rectangle(-103,-38,206,83), new cjs.Rectangle(-103,-38.2,206,83), new cjs.Rectangle(-103,-38.5,206,83), new cjs.Rectangle(-103,-38.9,206,83), new cjs.Rectangle(-103,-39.3,206,83), new cjs.Rectangle(-103,-39.7,206,83), new cjs.Rectangle(-103,-40.2,206,83), new cjs.Rectangle(-103,-40.7,206,83), new cjs.Rectangle(-103,-41.2,206,83), new cjs.Rectangle(-103,-41.8,206,83), new cjs.Rectangle(-103,-42.3,206,83), new cjs.Rectangle(-103,-42.8,206,83), new cjs.Rectangle(-103,-43.3,206,83), new cjs.Rectangle(-103,-43.8,206,83), new cjs.Rectangle(-103,-44.2,206,83), new cjs.Rectangle(-103,-44.5,206,83), new cjs.Rectangle(-103,-44.8,206,83), new cjs.Rectangle(-103,-45.1,206,83), new cjs.Rectangle(-103,-45.3,206,83), new cjs.Rectangle(-103,-45.5,206,83), new cjs.Rectangle(-103,-45.6,206,83), rect=new cjs.Rectangle(-103,-45.7,206,83), rect, rect];


(lib.cinematic_text_cngames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_text_cngames_move("synched",24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-37.7,206,83);
p.frameBounds = [rect, new cjs.Rectangle(-103,-37.5,206,83), new cjs.Rectangle(-103,-37.4,206,83), new cjs.Rectangle(-103,-37.3,206,83), rect=new cjs.Rectangle(-103,-37.2,206,83), rect, rect, rect=new cjs.Rectangle(-103,-37.3,206,83), rect, new cjs.Rectangle(-103,-37.4,206,83), new cjs.Rectangle(-103,-37.6,206,83), new cjs.Rectangle(-103,-37.8,206,83), new cjs.Rectangle(-103,-38,206,83), new cjs.Rectangle(-103,-38.2,206,83), new cjs.Rectangle(-103,-38.5,206,83), new cjs.Rectangle(-103,-38.9,206,83), new cjs.Rectangle(-103,-39.3,206,83), new cjs.Rectangle(-103,-39.7,206,83), new cjs.Rectangle(-103,-40.2,206,83), new cjs.Rectangle(-103,-40.7,206,83), new cjs.Rectangle(-103,-41.2,206,83), new cjs.Rectangle(-103,-41.8,206,83), new cjs.Rectangle(-103,-42.3,206,83), new cjs.Rectangle(-103,-42.8,206,83), new cjs.Rectangle(-103,-43.3,206,83), new cjs.Rectangle(-103,-43.8,206,83), new cjs.Rectangle(-103,-44.2,206,83), new cjs.Rectangle(-103,-44.5,206,83), new cjs.Rectangle(-103,-44.8,206,83), new cjs.Rectangle(-103,-45.1,206,83), new cjs.Rectangle(-103,-45.3,206,83), new cjs.Rectangle(-103,-45.5,206,83), new cjs.Rectangle(-103,-45.6,206,83), rect=new cjs.Rectangle(-103,-45.7,206,83), rect, rect, rect, rect, rect, new cjs.Rectangle(-103,-45.6,206,83), new cjs.Rectangle(-103,-45.5,206,83), new cjs.Rectangle(-103,-45.3,206,83), new cjs.Rectangle(-103,-45.2,206,83), new cjs.Rectangle(-103,-44.9,206,83), new cjs.Rectangle(-103,-44.7,206,83), new cjs.Rectangle(-103,-44.3,206,83), new cjs.Rectangle(-103,-44,206,83), new cjs.Rectangle(-103,-43.5,206,83), new cjs.Rectangle(-103,-43.1,206,83), new cjs.Rectangle(-103,-42.6,206,83), new cjs.Rectangle(-103,-42,206,83), new cjs.Rectangle(-103,-41.4,206,83), new cjs.Rectangle(-103,-40.9,206,83), new cjs.Rectangle(-103,-40.3,206,83), new cjs.Rectangle(-103,-39.8,206,83), new cjs.Rectangle(-103,-39.3,206,83), new cjs.Rectangle(-103,-38.9,206,83), new cjs.Rectangle(-103,-38.5,206,83), new cjs.Rectangle(-103,-38.2,206,83), new cjs.Rectangle(-103,-37.9,206,83)];


(lib.cinematic_sumo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outro_sumo_bush
	this.instance = new lib.cinematic_outro_sumo_bush_1();
	this.instance.setTransform(-1.2,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},143).wait(88));

	// outro_sumo_blink
	this.instance_1 = new lib.cinematic_outro_sumo_blink_1();
	this.instance_1.setTransform(-3.2,5.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({_off:true},3).wait(36).to({_off:false},0).to({_off:true},3).wait(27).to({_off:false},0).wait(1).to({y:5.9},0).wait(1).to({y:6.9},0).wait(1).to({y:8.2},0).wait(1).to({y:9},0).wait(1).to({y:9.3},0).wait(1).to({x:-3.3,y:7.6},0).wait(1).to({x:-3.4,y:2.4},0).wait(1).to({x:-3.8,y:-6.5},0).wait(1).to({x:-4.2,y:-18.4},0).to({_off:true},1).wait(14).to({_off:false,x:-5.7,y:-61.8},0).to({_off:true},3).wait(113));

	// outro_sumo_toys
	this.instance_2 = new lib.cinematic_outro_sumo_toys_1();
	this.instance_2.setTransform(3.8,-8.3,0.891,0.627);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).wait(1).to({regX:3.2,regY:1.2,scaleX:0.94,scaleY:0.79,x:2.4,y:-69.2},0).wait(1).to({scaleX:0.97,scaleY:0.91,x:-0.8,y:-114.7},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:-2.5,y:-140.7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-6.3,y:-149.8},0).wait(1).to({regX:3.2,regY:1.2,x:-3.2,y:-148.1},0).wait(1).to({x:-3.4,y:-146.2},0).wait(1).to({x:-3.8,y:-142.9},0).wait(1).to({x:-4.2,y:-139},0).wait(1).to({x:-4.5,y:-136.4},0).wait(1).to({regX:0,regY:0,x:-7.8,y:-136.8},0).wait(17).to({regX:3.2,regY:1.2,x:-4.6,y:-135.8},0).wait(1).to({y:-136.9},0).wait(1).to({y:-138.1},0).wait(1).to({regX:0,regY:0,x:-7.8,y:-139.7},0).wait(1).to({regX:3.2,regY:1.2,scaleX:1,x:-4.6,y:-137.1},0).wait(1).to({scaleX:0.98,scaleY:1,x:-4.7,y:-132.2},0).wait(1).to({scaleX:0.96,x:-4.8,y:-123.1},0).wait(1).to({scaleX:0.92,scaleY:1,x:-4.9,y:-108.6},0).wait(1).to({scaleX:0.87,scaleY:1,x:-5.1,y:-87.6},0).wait(1).to({regX:0,regY:0,scaleX:0.79,scaleY:0.99,x:-7.8,y:-61.7},0).wait(1).to({scaleX:0.71,scaleY:0.89,x:-4.8,y:-29.6},0).wait(1).to({scaleX:0.5,scaleY:0.99,x:-1.3,y:30.7},0).to({_off:true},1).wait(90));

	// outro_sumo_arm
	this.instance_3 = new lib.cinematic_outro_sumo_arm_1();
	this.instance_3.setTransform(1.2,43.8,0.999,0.754,0,0.8,-179.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).wait(1).to({regX:31,regY:-40.3,scaleX:1,scaleY:0.86,skewX:5,skewY:-175,x:-38.3,y:-17.5},0).wait(1).to({scaleY:0.94,skewX:8.1,skewY:-171.9,x:-44.4,y:-39.9},0).wait(1).to({scaleY:0.99,skewX:9.9,skewY:-170.1,x:-47.7,y:-52.5},0).wait(1).to({regX:0,regY:0,scaleY:1,skewX:10.4,skewY:-169.6,x:-25.5,y:-11.1},0).wait(1).to({regX:31,regY:-40.3,skewX:10.3,skewY:-169.7,x:-48.8,y:-55.9},0).wait(1).to({skewX:9.8,skewY:-170.2,x:-49.2,y:-54.4},0).wait(1).to({skewX:8.8,skewY:-171.2,x:-50,y:-51.7},0).wait(1).to({skewX:7.7,skewY:-172.3,x:-50.8,y:-48.6},0).wait(1).to({skewX:6.9,skewY:-173.1,x:-51.4,y:-46.4},0).wait(1).to({regX:0,regY:0,skewX:6.7,skewY:-173.3,x:-25.5,y:-2.1},0).wait(17).to({regX:31,regY:-40.3,skewX:6.2,skewY:-173.8,x:-52,y:-46.1},0).wait(1).to({skewX:4.4,skewY:-175.6,x:-53.4,y:-47.4},0).wait(1).to({skewX:2.2,skewY:-177.8,x:-55,y:-48.8},0).wait(1).to({regX:0,regY:0,skewX:1.5,skewY:-178.5,x:-25.5,y:-8.1},0).wait(1).to({regX:31,regY:-40.3,skewX:2,skewY:-178,x:-55.1,y:-47.7},0).wait(1).to({skewX:3.6,skewY:-176.4,x:-54,y:-42.7},0).wait(1).to({skewX:6.5,skewY:-173.5,x:-51.7,y:-33.3},0).wait(1).to({skewX:11.3,skewY:-168.7,x:-48.1,y:-18},0).wait(1).to({skewX:18.1,skewY:-161.9,x:-42.5,y:4.7},0).wait(1).to({regX:0,regY:0,skewX:26.9,skewY:-153.1,x:-25.5,y:85.1},0).wait(1).to({y:105.1},0).to({_off:true},1).wait(91));

	// outro_sumo_arm
	this.instance_4 = new lib.cinematic_outro_sumo_arm_1();
	this.instance_4.setTransform(6.6,18.5,1,0.652,0.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(102).to({_off:false},0).wait(1).to({regX:31,regY:-40.3,scaleY:0.8,rotation:-2.1,x:36.6,y:-27.4},0).wait(1).to({scaleY:0.92,rotation:-3.9,x:35.3,y:-41.9},0).wait(1).to({scaleY:0.98,rotation:-4.9,x:34.4,y:-50.1},0).wait(1).to({regX:0,regY:0,scaleY:1,rotation:-5.3,x:6.9,y:-9.7},0).wait(1).to({regX:31,regY:-40.3,rotation:-5.1,x:34.3,y:-52.2},0).wait(1).to({rotation:-4.3,x:34.8,y:-50.6},0).wait(1).to({rotation:-3,x:35.8,y:-47.6},0).wait(1).to({rotation:-1.4,x:36.9,y:-44.1},0).wait(1).to({rotation:-0.3,x:37.7,y:-41.8},0).wait(1).to({regX:0,regY:0,rotation:0,x:6.9,y:-0.7},0).wait(17).to({regX:31,regY:-40.3,rotation:0.4,x:38.2,y:-41.4},0).wait(1).to({rotation:1.7,x:39.1,y:-42.8},0).wait(1).to({rotation:3.3,x:40.2,y:-44.4},0).wait(1).to({regX:0,regY:0,rotation:3.7,x:6.9,y:-6.7},0).wait(1).to({regX:31,regY:-40.3,rotation:3.2,x:40.3,y:-43.4},0).wait(1).to({rotation:1.6,x:39.7,y:-38.5},0).wait(1).to({rotation:-1.6,x:38.5,y:-29.1},0).wait(1).to({rotation:-6.6,x:36.4,y:-13.8},0).wait(1).to({rotation:-13.8,x:33,y:8.9},0).wait(1).to({regX:0,regY:0,rotation:-23.2,x:15.6,y:88.6},0).wait(1).to({y:108.6},0).to({_off:true},1).wait(91));

	// outro_sumo_baee
	this.instance_5 = new lib.cinematic_outro_sumo_baee_1();
	this.instance_5.setTransform(-1.7,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92).to({y:36.4},0).wait(1).to({y:37.3},0).wait(1).to({y:38.6},0).wait(1).to({y:39.5},0).wait(1).to({y:39.7},0).wait(1).to({y:38},0).wait(1).to({x:-1.9,y:32.7},0).wait(1).to({x:-2.1,y:23.8},0).wait(1).to({x:-2.4,y:11.7},0).wait(1).to({x:-2.8,y:-2},0).wait(1).to({x:-3.1,y:-15.4},0).wait(1).to({x:-3.4,y:-26.6},0).wait(1).to({x:-3.6,y:-34.7},0).wait(1).to({x:-3.7,y:-39.3},0).wait(1).to({y:-40.8},0).wait(1).to({y:-40.4},0).wait(1).to({y:-39.1},0).wait(1).to({y:-36.9},0).wait(1).to({y:-34.2},0).wait(1).to({y:-32.4},0).wait(1).to({y:-31.8},0).wait(17).to({y:-32.4},0).wait(1).to({y:-34.5},0).wait(1).to({y:-37},0).wait(1).to({y:-37.8},0).wait(1).to({scaleY:1,y:-36.2},0).wait(1).to({scaleY:0.99,y:-30.8},0).wait(1).to({scaleY:0.98,y:-20.6},0).wait(1).to({scaleY:0.97,y:-4.3},0).wait(1).to({scaleY:0.94,y:19.2},0).wait(1).to({scaleY:0.91,y:49.7},0).to({_off:true},1).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.2,-26.9,128,146.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-65.2,-26.6,128,146.2), new cjs.Rectangle(-65.2,-25.6,128,145.3), new cjs.Rectangle(-65.2,-24.3,128,144), new cjs.Rectangle(-65.2,-23.5,128,143.2), new cjs.Rectangle(-65.2,-23.3,128,142.9), new cjs.Rectangle(-65.2,-25,128,144.6), new cjs.Rectangle(-65.2,-30.2,128,149.9), new cjs.Rectangle(-65.2,-39.2,128,158.8), new cjs.Rectangle(-65.2,-51.3,128,170.9), new cjs.Rectangle(-65.2,-65,128,184.6), new cjs.Rectangle(-77.9,-78.4,169.2,198), new cjs.Rectangle(-86.7,-129.2,178.2,248.9), new cjs.Rectangle(-93.1,-183.8,184.8,303.5), new cjs.Rectangle(-96.8,-214.9,188.6,334.5), new cjs.Rectangle(-98,-224.5,189.8,344.2), new cjs.Rectangle(-98,-224,189.8,343.6), new cjs.Rectangle(-98.3,-222.1,189.8,341.8), new cjs.Rectangle(-98.6,-218.8,189.8,338.5), new cjs.Rectangle(-99.1,-214.9,189.8,334.5), new cjs.Rectangle(-99.4,-212.3,189.8,331.9), rect=new cjs.Rectangle(-99.5,-211.5,189.8,331.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-99.5,-211.8,189.8,331.4), new cjs.Rectangle(-99.5,-212.8,189.8,332.5), new cjs.Rectangle(-99.5,-214,189.8,333.7), new cjs.Rectangle(-99.5,-214.4,189.8,334), new cjs.Rectangle(-99.1,-213,189,332.6), new cjs.Rectangle(-98,-208.1,186.6,327.8), new cjs.Rectangle(-95.7,-198.9,182,318.5), new cjs.Rectangle(-93,-184.3,175.5,304), new cjs.Rectangle(-91.8,-163.3,171.5,282.9), new cjs.Rectangle(-88.8,-135.9,169.1,255.6), new cjs.Rectangle(-88.8,-96.2,169.1,215.9), new cjs.Rectangle(-65.2,-43,128,162.6), rect=new cjs.Rectangle(-65.2,6.6,128,113), rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_SkiptButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:9,down:13});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(4).call(this.frame_12).wait(7).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.cinematic_x_icon_skip();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.1,regY:0.6,x:1.1,y:0.6},0).wait(3).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1.1,regY:0.6,x:1.1,y:1.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:1.1,regY:0.6,x:1.1,y:1.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1.1,regY:0.6,x:1.1,y:1},0).wait(1).to({y:1.9},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.cinematic_x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.cinematic_x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.cinematic_x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.cinematic_hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_selection_flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_x_flashgfx();
	this.instance.setTransform(399,220.1,13.159,7.52);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-20.5,842.2,481.3);
p.frameBounds = [rect];


(lib.cinematic_outro_clarence_armhi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.cinematic_outro_clarence_handhi_1();
	this.instance.setTransform(54.8,-37.7,1,1,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.4,regY:-14.9,rotation:-7.3,x:53.3,y:-52.6},0).wait(1).to({rotation:-3.8,x:54.2},0).wait(1).to({rotation:3,x:56},0).wait(1).to({rotation:11.9,x:58.3,y:-52.2},0).wait(1).to({rotation:17.9,x:59.8,y:-51.8},0).wait(1).to({regX:0,regY:0,rotation:19.5,x:54.8,y:-37.7},0).wait(1).to({regX:0.4,regY:-14.9,rotation:18.6,x:60,y:-51.7},0).wait(1).to({rotation:15.2,x:59.1,y:-52},0).wait(1).to({rotation:8.3,x:57.4,y:-52.4},0).wait(1).to({rotation:-0.6,x:55.1,y:-52.6},0).wait(1).to({rotation:-6.5,x:53.5},0).wait(1).to({regX:0,regY:0,rotation:-8.2,x:54.8,y:-37.7},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.cinematic_outro_clarence_armhi();
	this.instance_1.setTransform(-14.1,-48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-77.9,98.4,92.3);
p.frameBounds = [rect, new cjs.Rectangle(-14.1,-77.5,98.4,91.9), new cjs.Rectangle(-14.1,-75.9,98.1,90.3), new cjs.Rectangle(-14.1,-75.5,99.6,89.9), new cjs.Rectangle(-14.1,-79.1,104.6,93.5), new cjs.Rectangle(-14.1,-81,107.5,95.4), new cjs.Rectangle(-14.1,-81.4,108.3,95.9), new cjs.Rectangle(-14.1,-81.2,107.9,95.6), new cjs.Rectangle(-14.1,-80.1,106.2,94.6), new cjs.Rectangle(-14.1,-77.8,102.7,92.2), new cjs.Rectangle(-14.1,-74.4,97.9,88.9), new cjs.Rectangle(-14.1,-77.1,98.3,91.5), new cjs.Rectangle(-14.1,-77.9,98.4,92.3)];


(lib.cinematic_jeffhead_lookup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.cinematic_outro_jeff_blink_1();
	this.instance.setTransform(21.8,-70.6,1,1,11.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},4).wait(13).to({_off:false},0).to({_off:true},4).wait(112));

	// Layer 2
	this.instance_1 = new lib.cinematic_outro_jeff_eyes_2_1();
	this.instance_1.setTransform(23.1,-89.7,1,1,14.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(112));

	// outro_jeff_pupils
	this.instance_2 = new lib.cinematic_outro_jeff_pupils_1();
	this.instance_2.setTransform(65.7,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:65.6,y:-71.7},0).wait(1).to({x:65.1,y:-72.3},0).wait(1).to({x:64.2,y:-73.4},0).wait(1).to({x:62.8,y:-75.2},0).wait(1).to({x:60.7,y:-77.8},0).wait(1).to({x:58.2,y:-80.9},0).wait(1).to({x:55.9,y:-83.8},0).wait(1).to({x:54.2,y:-85.9},0).wait(1).to({x:53.4,y:-87},0).wait(1).to({x:53.1,y:-87.3},0).wait(126));

	// outro_jeff_pupils
	this.instance_3 = new lib.cinematic_outro_jeff_pupils_1();
	this.instance_3.setTransform(7.5,-70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:7.3,y:-70.6},0).wait(1).to({x:6.8,y:-71.2},0).wait(1).to({x:5.9,y:-72.4},0).wait(1).to({x:4.3,y:-74.3},0).wait(1).to({x:2.1,y:-76.9},0).wait(1).to({x:-0.6,y:-80.1},0).wait(1).to({x:-3.2,y:-83.2},0).wait(1).to({x:-5,y:-85.3},0).wait(1).to({x:-5.9,y:-86.5},0).wait(1).to({x:-6.2,y:-86.8},0).wait(126));

	// outro_jeff_eyes_1
	this.instance_4 = new lib.cinematic_outro_jeff_eyes_1_1();
	this.instance_4.setTransform(21.8,-70.6,1,1,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136));

	// outro_jeff_mouth_1
	this.instance_5 = new lib.cinematic_outro_jeff_mouth_1_1();
	this.instance_5.setTransform(23.2,-27.8);

	this.instance_6 = new lib.cinematic_outro_jeff_mouth_2_1();
	this.instance_6.setTransform(27.2,-32.6,1.323,1.323);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:0.99,scaleY:0.99,y:-28},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:-28.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-29.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-29.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-29.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-29.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-28.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-28.2},0).wait(1).to({scaleX:1,scaleY:1,y:-27.9},0).wait(1).to({scaleX:1,scaleY:1,y:-27.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-28},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:23.6,y:-28.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:24.3,y:-30.2},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:24.8,y:-31.4},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:24.9,y:-31.6},0).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1},2).wait(118));

	// outro_jeff_head
	this.instance_7 = new lib.cinematic_outro_jeff_head_1();
	this.instance_7.setTransform(1.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.6,-172.9,229.8,220.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_jeffhead_happy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.cinematic_outro_jeff_blink_1();
	this.instance.setTransform(21.8,-70.6,1,1,11.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(6));

	// outro_jeff_pupils
	this.instance_1 = new lib.cinematic_outro_jeff_pupils_1();
	this.instance_1.setTransform(65.7,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29));

	// outro_jeff_pupils
	this.instance_2 = new lib.cinematic_outro_jeff_pupils_1();
	this.instance_2.setTransform(7.5,-70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29));

	// outro_jeff_eyes_1
	this.instance_3 = new lib.cinematic_outro_jeff_eyes_1_1();
	this.instance_3.setTransform(21.8,-70.6,1,1,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29));

	// outro_jeff_mouth_1
	this.instance_4 = new lib.cinematic_outro_jeff_mouth_1_1();
	this.instance_4.setTransform(23.2,-27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-28},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-28.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-28.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-29.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-29.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-29.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-29.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-29.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-28.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-28.2},0).wait(1).to({scaleX:1,scaleY:1,y:-27.9},0).wait(1).to({scaleX:1,scaleY:1,y:-27.8},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-28},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-28.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:-28.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:-29},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-29.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-29.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-29.6},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-29.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:-29},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:-28.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-28.1},0).wait(1).to({scaleX:1,scaleY:1,y:-27.9},0).wait(1).to({scaleX:1,scaleY:1,y:-27.8},0).wait(1));

	// outro_jeff_head
	this.instance_5 = new lib.cinematic_outro_jeff_head_1();
	this.instance_5.setTransform(1.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.6,-172.9,229.8,220.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_jeff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.cinematic_cinematic_jeff_toy();
	this.instance.setTransform(139.2,-23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.8,regY:-41.3,x:178.9,y:-64.6},0).wait(1).to({x:178.7,y:-64.9},0).wait(1).to({rotation:0.1,x:178.1,y:-65.5},0).wait(1).to({rotation:0.2,x:177.3,y:-66.5},0).wait(1).to({rotation:0.4,x:176.1,y:-67.8},0).wait(1).to({rotation:0.5,x:174.7,y:-69.5},0).wait(1).to({rotation:0.8,x:172.9,y:-71.5},0).wait(1).to({rotation:1,x:171.1,y:-73.6},0).wait(1).to({rotation:1.2,x:169.6,y:-75.4},0).wait(1).to({rotation:1.3,x:168.4,y:-76.8},0).wait(1).to({rotation:1.5,x:167.5,y:-77.8},0).wait(1).to({x:167,y:-78.5},0).wait(1).to({rotation:1.6,x:166.6,y:-78.8},0).wait(1).to({regX:0,regY:0,x:125.7,y:-38.7},0).wait(1).to({regX:39.8,regY:-41.3,x:166.7,y:-78.8},0).wait(1).to({rotation:1.5,x:166.9,y:-78.6},0).wait(1).to({x:167.3,y:-78},0).wait(1).to({rotation:1.4,x:168,y:-77.2},0).wait(1).to({rotation:1.3,x:169,y:-76.1},0).wait(1).to({rotation:1.1,x:170.3,y:-74.6},0).wait(1).to({rotation:0.9,x:171.8,y:-72.8},0).wait(1).to({rotation:0.7,x:173.5,y:-70.9},0).wait(1).to({rotation:0.5,x:175.1,y:-69},0).wait(1).to({rotation:0.3,x:176.4,y:-67.5},0).wait(1).to({rotation:0.2,x:177.5,y:-66.3},0).wait(1).to({rotation:0.1,x:178.2,y:-65.5},0).wait(1).to({rotation:0,x:178.7,y:-64.9},0).wait(1).to({x:178.9,y:-64.6},0).wait(1).to({regX:0,regY:0,x:139.2,y:-23.2},0).wait(1).to({regX:39.8,regY:-41.3,x:178.9,y:-64.6},0).wait(1).to({x:178.7,y:-64.9},0).wait(1).to({rotation:0.1,x:178.1,y:-65.5},0).wait(1).to({rotation:0.2,x:177.3,y:-66.5},0).wait(1).to({rotation:0.4,x:176.1,y:-67.8},0).wait(1).to({rotation:0.5,x:174.7,y:-69.5},0).wait(1).to({rotation:0.8,x:172.9,y:-71.5},0).wait(1).to({rotation:1,x:171.1,y:-73.6},0).wait(1).to({rotation:1.2,x:169.6,y:-75.4},0).wait(1).to({rotation:1.3,x:168.4,y:-76.8},0).wait(1).to({rotation:1.5,x:167.5,y:-77.8},0).wait(1).to({x:167,y:-78.5},0).wait(1).to({rotation:1.6,x:166.6,y:-78.8},0).wait(1).to({regX:0,regY:0,x:125.7,y:-38.7},0).wait(1).to({regX:39.8,regY:-41.3,x:166.7,y:-78.8},0).wait(1).to({rotation:1.5,x:166.9,y:-78.6},0).wait(1).to({x:167.3,y:-78},0).wait(1).to({rotation:1.4,x:168,y:-77.2},0).wait(1).to({rotation:1.3,x:169,y:-76.1},0).wait(1).to({rotation:1.1,x:170.3,y:-74.6},0).wait(1).to({rotation:0.9,x:171.8,y:-72.8},0).wait(1).to({rotation:0.7,x:173.5,y:-70.9},0).wait(1).to({rotation:0.5,x:175.1,y:-69},0).wait(1).to({rotation:0.3,x:176.4,y:-67.5},0).wait(1).to({rotation:0.2,x:177.5,y:-66.3},0).wait(1).to({rotation:0.1,x:178.2,y:-65.5},0).wait(1).to({rotation:0,x:178.7,y:-64.9},0).wait(1).to({x:178.9,y:-64.6},0).wait(1).to({regX:0,regY:0,x:139.2,y:-23.2},0).wait(1).to({regX:39.8,regY:-41.3,x:178.9,y:-64.4},0).wait(1).to({rotation:0.1,x:178.7,y:-64.1},0).wait(1).to({rotation:0.2,x:178.3,y:-63.4},0).wait(1).to({rotation:0.3,x:177.6,y:-62.5},0).wait(1).to({rotation:0.6,x:176.8,y:-61.2},0).wait(1).to({rotation:0.8,x:175.6,y:-59.6},0).wait(1).to({rotation:1.2,x:174.1,y:-57.5},0).wait(1).to({rotation:1.7,x:172.4,y:-54.9},0).wait(1).to({rotation:2.2,x:170.3,y:-51.9},0).wait(1).to({rotation:2.7,x:168,y:-48.6},0).wait(1).to({rotation:3.3,x:165.6,y:-45.1},0).wait(1).to({rotation:3.9,x:163.2,y:-41.7},0).wait(1).to({rotation:4.5,x:161.1,y:-38.5},0).wait(1).to({rotation:4.9,x:159.2,y:-35.9},0).wait(1).to({rotation:5.3,x:157.7,y:-33.6},0).wait(1).to({rotation:5.6,x:156.4,y:-31.8},0).wait(1).to({rotation:5.8,x:155.5,y:-30.5},0).wait(1).to({rotation:6,x:154.8,y:-29.5},0).wait(1).to({rotation:6.1,x:154.3,y:-28.8},0).wait(1).to({rotation:6.2,x:154,y:-28.5},0).wait(1).to({regX:0,regY:0,x:110,y:8.4},0).wait(24).to({regX:39.8,regY:-41.3,x:154,y:-28.3},0).wait(1).to({rotation:6.3,x:154.1,y:-28.1},0).wait(1).to({rotation:6.5,x:154.3,y:-27.8},0).wait(1).to({rotation:6.8,x:154.5,y:-27.4},0).wait(1).to({rotation:7.2,x:154.8,y:-26.7},0).wait(1).to({rotation:7.7,x:155.2,y:-26},0).wait(1).to({rotation:8.3,x:155.7,y:-24.9},0).wait(1).to({rotation:9,x:156.3,y:-23.8},0).wait(1).to({rotation:9.7,x:156.9,y:-22.5},0).wait(1).to({rotation:10.4,x:157.4,y:-21.3},0).wait(1).to({rotation:11,x:157.9,y:-20.2},0).wait(1).to({rotation:11.6,x:158.4,y:-19.3},0).wait(1).to({rotation:12,x:158.7,y:-18.7},0).wait(1).to({rotation:12.3,x:158.9,y:-18.2},0).wait(1).to({rotation:12.4,y:-17.9},0).wait(1).to({regX:0,regY:0,rotation:12.5,x:111.3,y:13.9},0).wait(87));

	// outro_jeff_arm
	this.instance_1 = new lib.cinematic_cinematic_jeff_arm();
	this.instance_1.setTransform(-12.1,69.4,1,1,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:88.3,regY:-2.7,x:61.7,y:20.9},0).wait(1).to({rotation:-31.6,x:61.5,y:20.7},0).wait(1).to({rotation:-31.9,x:61.2,y:20.3},0).wait(1).to({rotation:-32.3,x:60.6,y:19.8},0).wait(1).to({rotation:-32.8,x:59.9,y:19.1},0).wait(1).to({rotation:-33.5,x:58.8,y:18.1},0).wait(1).to({rotation:-34.3,x:57.6,y:16.9},0).wait(1).to({rotation:-35.1,x:56.3,y:15.8},0).wait(1).to({rotation:-35.8,x:55.2,y:14.8},0).wait(1).to({rotation:-36.3,x:54.3,y:14},0).wait(1).to({rotation:-36.7,x:53.7,y:13.5},0).wait(1).to({rotation:-37,x:53.3,y:13.1},0).wait(1).to({rotation:-37.1,x:53,y:13},0).wait(1).to({regX:0,regY:0,x:-15.8,y:68.4},0).wait(1).to({regX:88.3,regY:-2.7,x:53,y:12.9},0).wait(1).to({rotation:-37,x:53.2,y:13.1},0).wait(1).to({rotation:-36.8,x:53.6,y:13.4},0).wait(1).to({rotation:-36.5,x:54.1,y:13.8},0).wait(1).to({rotation:-36,x:54.8,y:14.4},0).wait(1).to({rotation:-35.5,x:55.7,y:15.2},0).wait(1).to({rotation:-34.8,x:56.8,y:16.2},0).wait(1).to({rotation:-34,x:58,y:17.3},0).wait(1).to({rotation:-33.3,x:59.1,y:18.3},0).wait(1).to({rotation:-32.7,x:60,y:19.2},0).wait(1).to({rotation:-32.2,x:60.7,y:19.9},0).wait(1).to({rotation:-31.8,x:61.3,y:20.4},0).wait(1).to({rotation:-31.6,x:61.6,y:20.7},0).wait(1).to({rotation:-31.5,x:61.7,y:20.9},0).wait(1).to({regX:0,regY:0,x:-12.1,y:69.4},0).wait(1).to({regX:88.3,regY:-2.7,x:61.7,y:20.9},0).wait(1).to({rotation:-31.6,x:61.5,y:20.7},0).wait(1).to({rotation:-31.9,x:61.2,y:20.3},0).wait(1).to({rotation:-32.3,x:60.6,y:19.8},0).wait(1).to({rotation:-32.8,x:59.9,y:19.1},0).wait(1).to({rotation:-33.5,x:58.8,y:18.1},0).wait(1).to({rotation:-34.3,x:57.6,y:16.9},0).wait(1).to({rotation:-35.1,x:56.3,y:15.8},0).wait(1).to({rotation:-35.8,x:55.2,y:14.8},0).wait(1).to({rotation:-36.3,x:54.3,y:14},0).wait(1).to({rotation:-36.7,x:53.7,y:13.5},0).wait(1).to({rotation:-37,x:53.3,y:13.1},0).wait(1).to({rotation:-37.1,x:53,y:13},0).wait(1).to({regX:0,regY:0,x:-15.8,y:68.4},0).wait(1).to({regX:88.3,regY:-2.7,x:53,y:12.9},0).wait(1).to({rotation:-37,x:53.2,y:13.1},0).wait(1).to({rotation:-36.8,x:53.6,y:13.4},0).wait(1).to({rotation:-36.5,x:54.1,y:13.8},0).wait(1).to({rotation:-36,x:54.8,y:14.4},0).wait(1).to({rotation:-35.5,x:55.7,y:15.2},0).wait(1).to({rotation:-34.8,x:56.8,y:16.2},0).wait(1).to({rotation:-34,x:58,y:17.3},0).wait(1).to({rotation:-33.3,x:59.1,y:18.3},0).wait(1).to({rotation:-32.7,x:60,y:19.2},0).wait(1).to({rotation:-32.2,x:60.7,y:19.9},0).wait(1).to({rotation:-31.8,x:61.3,y:20.4},0).wait(1).to({rotation:-31.6,x:61.6,y:20.7},0).wait(1).to({rotation:-31.5,x:61.7,y:20.9},0).wait(1).to({regX:0,regY:0,x:-12.1,y:69.4},0).wait(1).to({regX:88.3,regY:-2.7,scaleX:1,x:61.7,y:21},0).wait(1).to({scaleX:1,rotation:-31.4,x:61.5,y:21.2},0).wait(1).to({scaleX:0.99,rotation:-31.3,x:61.1,y:21.6},0).wait(1).to({scaleX:0.99,rotation:-31.1,x:60.6,y:22.1},0).wait(1).to({scaleX:0.98,rotation:-30.9,x:59.9,y:22.8},0).wait(1).to({scaleX:0.97,rotation:-30.6,x:58.8,y:23.8},0).wait(1).to({scaleX:0.95,rotation:-30.3,x:57.6,y:25},0).wait(1).to({scaleX:0.94,rotation:-29.8,x:56,y:26.4},0).wait(1).to({scaleX:0.92,rotation:-29.3,x:54.2,y:28.1},0).wait(1).to({scaleX:0.9,rotation:-28.7,x:52,y:29.9},0).wait(1).to({scaleX:0.87,rotation:-28.1,x:49.8,y:31.7},0).wait(1).to({scaleX:0.85,rotation:-27.6,x:47.7,y:33.5},0).wait(1).to({scaleX:0.83,rotation:-27,x:45.6,y:35.2},0).wait(1).to({scaleX:0.81,rotation:-26.6,x:43.9,y:36.5},0).wait(1).to({scaleX:0.8,rotation:-26.2,x:42.4,y:37.6},0).wait(1).to({scaleX:0.79,rotation:-25.9,x:41.2,y:38.5},0).wait(1).to({scaleX:0.78,rotation:-25.6,x:40.3,y:39.2},0).wait(1).to({scaleX:0.77,rotation:-25.5,x:39.6,y:39.6},0).wait(1).to({scaleX:0.77,rotation:-25.4,x:39.2,y:40},0).wait(1).to({scaleX:0.76,rotation:-25.3,x:39,y:40.1},0).wait(1).to({regX:0,regY:0,x:-21,y:71.5},0).wait(24).to({regX:88.3,regY:-2.7,x:38.9,y:40.2},0).wait(1).to({rotation:-25.2,y:40.3},0).wait(2).to({rotation:-25.1,y:40.4},0).wait(1).to({rotation:-25,x:39,y:40.6},0).wait(1).to({rotation:-24.8,x:39.1,y:40.7},0).wait(1).to({rotation:-24.6,x:39.2,y:40.9},0).wait(1).to({rotation:-24.4,x:39.3,y:41.2},0).wait(1).to({rotation:-24.2,x:39.4,y:41.4},0).wait(1).to({rotation:-23.9,x:39.6,y:41.7},0).wait(1).to({rotation:-23.7,y:41.9},0).wait(1).to({rotation:-23.6,x:39.7,y:42.1},0).wait(1).to({rotation:-23.4,x:39.8,y:42.2},0).wait(1).to({x:39.9},0).wait(1).to({rotation:-23.3,y:42.3},0).wait(1).to({regX:0,regY:0,x:-21,y:71.5},0).wait(87));

	// head
	this.instance_2 = new lib.cinematic_jeffhead_happy();
	this.instance_2.setTransform(3.3,36.9,1,1,-2);

	this.instance_3 = new lib.cinematic_jeffhead_lookup();
	this.instance_3.setTransform(3.3,36.9,1,1,-2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-1.7,regY:-62.7,x:-0.6,y:-25.7},0).wait(1).to({rotation:-1.9,x:-0.7,y:-25.8},0).wait(1).to({x:-0.9,y:-25.9},0).wait(1).to({x:-1.2,y:-26},0).wait(1).to({x:-1.7,y:-26.2},0).wait(1).to({x:-2.3,y:-26.5},0).wait(1).to({rotation:-1.8,x:-3,y:-26.9},0).wait(1).to({x:-3.7,y:-27.2},0).wait(1).to({x:-4.4,y:-27.5},0).wait(1).to({rotation:-1.7,x:-4.9,y:-27.7},0).wait(1).to({x:-5.2,y:-27.9},0).wait(1).to({x:-5.4,y:-28},0).wait(1).to({x:-5.6,y:-28.1},0).wait(1).to({regX:0,regY:0,x:-2,y:34.5},0).wait(1).to({regX:-1.7,regY:-62.7,x:-5.5,y:-28.1},0).wait(1).to({x:-5.4,y:-28},0).wait(1).to({x:-5.3},0).wait(1).to({x:-5,y:-27.8},0).wait(1).to({rotation:-1.8,x:-4.5,y:-27.6},0).wait(1).to({x:-4,y:-27.4},0).wait(1).to({x:-3.5,y:-27.1},0).wait(1).to({x:-2.7,y:-26.8},0).wait(1).to({rotation:-1.9,x:-2.1,y:-26.5},0).wait(1).to({x:-1.6,y:-26.2},0).wait(1).to({x:-1.1,y:-26},0).wait(1).to({x:-0.8,y:-25.9},0).wait(1).to({x:-0.6,y:-25.8},0).wait(1).to({rotation:-2,x:-0.5,y:-25.7},0).wait(1).to({regX:0,regY:0,x:3.3,y:36.9},0).wait(1).to({regX:-1.7,regY:-62.7,x:-0.6,y:-25.7},0).wait(1).to({rotation:-1.9,x:-0.7,y:-25.8},0).wait(1).to({x:-0.9,y:-25.9},0).wait(1).to({x:-1.2,y:-26},0).wait(1).to({x:-1.7,y:-26.2},0).wait(1).to({x:-2.3,y:-26.5},0).wait(1).to({rotation:-1.8,x:-3,y:-26.9},0).wait(1).to({x:-3.7,y:-27.2},0).wait(1).to({x:-4.4,y:-27.5},0).wait(1).to({rotation:-1.7,x:-4.9,y:-27.7},0).wait(1).to({x:-5.2,y:-27.9},0).wait(1).to({x:-5.4,y:-28},0).wait(1).to({x:-5.6,y:-28.1},0).wait(1).to({regX:0,regY:0,x:-2,y:34.5},0).wait(1).to({regX:-1.7,regY:-62.7,x:-5.5,y:-28.1},0).wait(1).to({x:-5.4,y:-28},0).wait(1).to({x:-5.3},0).wait(1).to({x:-5,y:-27.8},0).wait(1).to({rotation:-1.8,x:-4.5,y:-27.6},0).wait(1).to({x:-4,y:-27.4},0).wait(1).to({x:-3.5,y:-27.1},0).wait(1).to({x:-2.7,y:-26.8},0).wait(1).to({rotation:-1.9,x:-2.1,y:-26.5},0).wait(1).to({x:-1.6,y:-26.2},0).wait(1).to({x:-1.1,y:-26},0).wait(1).to({x:-0.8,y:-25.9},0).wait(1).to({x:-0.6,y:-25.8},0).wait(1).to({rotation:-2,x:-0.5,y:-25.7},0).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).wait(1).to({regX:-1.7,regY:-62.7,x:-0.6,y:-25.7},0).wait(1).to({rotation:-2.1,x:-0.8},0).wait(1).to({rotation:-2.3,x:-1.1},0).wait(1).to({rotation:-2.6,x:-1.6,y:-25.6},0).wait(1).to({rotation:-3,x:-2.2},0).wait(1).to({rotation:-3.5,x:-3.1},0).wait(1).to({rotation:-4.2,x:-4.3,y:-25.5},0).wait(1).to({rotation:-5,x:-5.6,y:-25.3},0).wait(1).to({rotation:-6,x:-7.2,y:-25.2},0).wait(1).to({rotation:-7,x:-8.9,y:-25},0).wait(1).to({rotation:-8.1,x:-10.7,y:-24.8},0).wait(1).to({rotation:-9.2,x:-12.5,y:-24.6},0).wait(1).to({rotation:-10.2,x:-14.1,y:-24.3},0).wait(1).to({rotation:-11,x:-15.5,y:-24.1},0).wait(1).to({rotation:-11.7,x:-16.6,y:-23.9},0).wait(1).to({rotation:-12.3,x:-17.6,y:-23.8},0).wait(1).to({rotation:-12.7,x:-18.3,y:-23.7},0).wait(1).to({rotation:-13.1,x:-18.8,y:-23.6},0).wait(1).to({rotation:-13.3,x:-19.2,y:-23.5},0).wait(1).to({rotation:-13.4,x:-19.3},0).wait(1).to({regX:0,regY:0,x:-3.2,y:37.2},0).wait(24).to({regX:-1.7,regY:-62.7,x:-19.4,y:-23.4},0).wait(1).to({rotation:-13.5},0).wait(1).to({x:-19.5},0).wait(1).to({rotation:-13.6,x:-19.6},0).wait(1).to({rotation:-13.7,x:-19.7,y:-23.3},0).wait(1).to({rotation:-13.9,x:-19.9},0).wait(1).to({rotation:-14.1,x:-20.1,y:-23.2},0).wait(1).to({rotation:-14.3,x:-20.3},0).wait(1).to({rotation:-14.5,x:-20.5,y:-23.1},0).wait(1).to({rotation:-14.7,x:-20.8,y:-23},0).wait(1).to({rotation:-14.9,x:-21},0).wait(1).to({rotation:-15.1,x:-21.2,y:-22.9},0).wait(1).to({rotation:-15.2,x:-21.3},0).wait(1).to({rotation:-15.3,x:-21.4,y:-22.8},0).wait(1).to({rotation:-15.4},0).wait(1).to({regX:0,regY:0,x:-3.2,y:37.2},0).wait(87));

	// outro_jeff_body
	this.instance_4 = new lib.cinematic_outro_jeff_body_1();
	this.instance_4.setTransform(0.6,112.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({rotation:-0.1,x:0.5,y:112.2},0).wait(1).to({rotation:-0.2,x:0.4,y:112.1},0).wait(1).to({rotation:-0.3,x:0.3,y:112},0).wait(1).to({rotation:-0.6,x:0.1,y:111.8},0).wait(1).to({rotation:-0.9,x:-0.2,y:111.5},0).wait(1).to({rotation:-1.2,x:-0.5,y:111.2},0).wait(1).to({rotation:-1.5,x:-0.8,y:110.8},0).wait(1).to({rotation:-1.9,x:-1,y:110.5},0).wait(1).to({rotation:-2.1,x:-1.2,y:110.3},0).wait(1).to({rotation:-2.3,x:-1.4,y:110.1},0).wait(1).to({rotation:-2.4,x:-1.5,y:110},0).wait(2).to({rotation:-2.5},0).wait(1).to({rotation:-2.4},0).wait(2).to({rotation:-2.3,x:-1.4,y:110.1},0).wait(1).to({rotation:-2.2,x:-1.3,y:110.2},0).wait(1).to({rotation:-2,x:-1.1,y:110.4},0).wait(1).to({rotation:-1.7,x:-0.9,y:110.7},0).wait(1).to({rotation:-1.4,x:-0.6,y:110.9},0).wait(1).to({rotation:-1.1,x:-0.4,y:111.3},0).wait(1).to({rotation:-0.8,x:-0.1,y:111.6},0).wait(1).to({rotation:-0.5,x:0.2,y:111.8},0).wait(1).to({rotation:-0.3,x:0.3,y:112},0).wait(1).to({rotation:-0.2,x:0.5,y:112.1},0).wait(1).to({rotation:-0.1,y:112.2},0).wait(1).to({rotation:0,x:0.6,y:112.3},0).wait(3).to({rotation:-0.1,x:0.5,y:112.2},0).wait(1).to({rotation:-0.2,x:0.4,y:112.1},0).wait(1).to({rotation:-0.3,x:0.3,y:112},0).wait(1).to({rotation:-0.6,x:0.1,y:111.8},0).wait(1).to({rotation:-0.9,x:-0.2,y:111.5},0).wait(1).to({rotation:-1.2,x:-0.5,y:111.2},0).wait(1).to({rotation:-1.5,x:-0.8,y:110.8},0).wait(1).to({rotation:-1.9,x:-1,y:110.5},0).wait(1).to({rotation:-2.1,x:-1.2,y:110.3},0).wait(1).to({rotation:-2.3,x:-1.4,y:110.1},0).wait(1).to({rotation:-2.4,x:-1.5,y:110},0).wait(2).to({rotation:-2.5},0).wait(1).to({rotation:-2.4},0).wait(2).to({rotation:-2.3,x:-1.4,y:110.1},0).wait(1).to({rotation:-2.2,x:-1.3,y:110.2},0).wait(1).to({rotation:-2,x:-1.1,y:110.4},0).wait(1).to({rotation:-1.7,x:-0.9,y:110.7},0).wait(1).to({rotation:-1.4,x:-0.6,y:110.9},0).wait(1).to({rotation:-1.1,x:-0.4,y:111.3},0).wait(1).to({rotation:-0.8,x:-0.1,y:111.6},0).wait(1).to({rotation:-0.5,x:0.2,y:111.8},0).wait(1).to({rotation:-0.3,x:0.3,y:112},0).wait(1).to({rotation:-0.2,x:0.5,y:112.1},0).wait(1).to({rotation:-0.1,y:112.2},0).wait(1).to({rotation:0,x:0.6,y:112.3},0).wait(4).to({rotation:-0.1,x:0.5},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.3,x:0.4},0).wait(1).to({rotation:-0.4,x:0.2},0).wait(1).to({rotation:-0.6,x:0.1},0).wait(1).to({rotation:-0.8,x:-0.1,y:112.4},0).wait(1).to({rotation:-1,x:-0.3},0).wait(1).to({rotation:-1.3,x:-0.5},0).wait(1).to({rotation:-1.6,x:-0.8},0).wait(1).to({rotation:-1.9,x:-1,y:112.5},0).wait(1).to({rotation:-2.2,x:-1.3},0).wait(1).to({rotation:-2.4,x:-1.5},0).wait(1).to({rotation:-2.6,x:-1.6},0).wait(1).to({rotation:-2.7,x:-1.8},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-2.9,x:-1.9},0).wait(1).to({rotation:-3,x:-2},0).wait(2).to({y:112.6},0).wait(126));

	// outro_jeff_arm copy
	this.instance_5 = new lib.cinematic_cinematic_jeff_arm();
	this.instance_5.setTransform(23.9,69.4,1,1,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:88.3,regY:-2.7,x:97.7,y:20.9},0).wait(1).to({rotation:-31.6,x:97.5,y:20.6},0).wait(1).to({rotation:-31.9,x:97.1,y:20.1},0).wait(1).to({rotation:-32.3,x:96.5,y:19.3},0).wait(1).to({rotation:-32.8,x:95.8,y:18.3},0).wait(1).to({rotation:-33.5,x:94.7,y:16.8},0).wait(1).to({rotation:-34.3,x:93.5,y:15.2},0).wait(1).to({rotation:-35.1,x:92.2,y:13.6},0).wait(1).to({rotation:-35.8,x:91,y:12.1},0).wait(1).to({rotation:-36.3,x:90.1,y:11},0).wait(1).to({rotation:-36.7,x:89.5,y:10.2},0).wait(1).to({rotation:-37,x:89.1,y:9.7},0).wait(1).to({rotation:-37.1,x:88.8,y:9.5},0).wait(1).to({regX:0,regY:0,x:20,y:64.9},0).wait(1).to({regX:88.3,regY:-2.7,x:88.8,y:9.4},0).wait(1).to({rotation:-37,x:89,y:9.7},0).wait(1).to({rotation:-36.8,x:89.3,y:10.1},0).wait(1).to({rotation:-36.5,x:89.8,y:10.7},0).wait(1).to({rotation:-36,x:90.6,y:11.6},0).wait(1).to({rotation:-35.5,x:91.5,y:12.8},0).wait(1).to({rotation:-34.8,x:92.6,y:14.2},0).wait(1).to({rotation:-34,x:93.8,y:15.8},0).wait(1).to({rotation:-33.3,x:95,y:17.2},0).wait(1).to({rotation:-32.7,x:96,y:18.5},0).wait(1).to({rotation:-32.2,x:96.7,y:19.4},0).wait(1).to({rotation:-31.8,x:97.2,y:20.2},0).wait(1).to({rotation:-31.6,x:97.5,y:20.6},0).wait(1).to({rotation:-31.5,x:97.7,y:20.9},0).wait(1).to({regX:0,regY:0,x:23.9,y:69.4},0).wait(1).to({regX:88.3,regY:-2.7,x:97.7,y:20.9},0).wait(1).to({rotation:-31.6,x:97.5,y:20.6},0).wait(1).to({rotation:-31.9,x:97.1,y:20.1},0).wait(1).to({rotation:-32.3,x:96.5,y:19.3},0).wait(1).to({rotation:-32.8,x:95.8,y:18.3},0).wait(1).to({rotation:-33.5,x:94.7,y:16.8},0).wait(1).to({rotation:-34.3,x:93.5,y:15.2},0).wait(1).to({rotation:-35.1,x:92.2,y:13.6},0).wait(1).to({rotation:-35.8,x:91,y:12.1},0).wait(1).to({rotation:-36.3,x:90.1,y:11},0).wait(1).to({rotation:-36.7,x:89.5,y:10.2},0).wait(1).to({rotation:-37,x:89.1,y:9.7},0).wait(1).to({rotation:-37.1,x:88.8,y:9.5},0).wait(1).to({regX:0,regY:0,x:20,y:64.9},0).wait(1).to({regX:88.3,regY:-2.7,x:88.8,y:9.4},0).wait(1).to({rotation:-37,x:89,y:9.7},0).wait(1).to({rotation:-36.8,x:89.3,y:10.1},0).wait(1).to({rotation:-36.5,x:89.8,y:10.7},0).wait(1).to({rotation:-36,x:90.6,y:11.6},0).wait(1).to({rotation:-35.5,x:91.5,y:12.8},0).wait(1).to({rotation:-34.8,x:92.6,y:14.2},0).wait(1).to({rotation:-34,x:93.8,y:15.8},0).wait(1).to({rotation:-33.3,x:95,y:17.2},0).wait(1).to({rotation:-32.7,x:96,y:18.5},0).wait(1).to({rotation:-32.2,x:96.7,y:19.4},0).wait(1).to({rotation:-31.8,x:97.2,y:20.2},0).wait(1).to({rotation:-31.6,x:97.5,y:20.6},0).wait(1).to({rotation:-31.5,x:97.7,y:20.9},0).wait(1).to({regX:0,regY:0,x:23.9,y:69.4},0).wait(1).to({regX:88.3,regY:-2.7,scaleX:1,x:97.7,y:21},0).wait(1).to({scaleX:1,rotation:-31.4,x:97.4,y:21.3},0).wait(1).to({scaleX:0.99,rotation:-31.3,x:96.8,y:21.8},0).wait(1).to({scaleX:0.98,rotation:-31.1,x:96.1,y:22.6},0).wait(1).to({scaleX:0.97,rotation:-30.9,x:95,y:23.6},0).wait(1).to({scaleX:0.96,rotation:-30.6,x:93.5,y:25},0).wait(1).to({scaleX:0.94,rotation:-30.3,x:91.8,y:26.7},0).wait(1).to({scaleX:0.91,rotation:-29.8,x:89.6,y:28.7},0).wait(1).to({scaleX:0.89,rotation:-29.3,x:87,y:31},0).wait(1).to({scaleX:0.86,rotation:-28.7,x:84.1,y:33.7},0).wait(1).to({scaleX:0.82,rotation:-28.1,x:81,y:36.2},0).wait(1).to({scaleX:0.79,rotation:-27.6,x:77.9,y:38.8},0).wait(1).to({scaleX:0.77,rotation:-27,x:75.1,y:41.1},0).wait(1).to({scaleX:0.74,rotation:-26.6,x:72.7,y:43.1},0).wait(1).to({scaleX:0.72,rotation:-26.2,x:70.6,y:44.6},0).wait(1).to({scaleX:0.7,rotation:-25.9,x:68.9,y:45.8},0).wait(1).to({scaleX:0.69,rotation:-25.6,x:67.7,y:46.8},0).wait(1).to({scaleX:0.68,rotation:-25.5,x:66.8,y:47.5},0).wait(1).to({scaleX:0.68,rotation:-25.4,x:66.2,y:47.9},0).wait(1).to({scaleX:0.67,rotation:-25.3,x:65.8,y:48.2},0).wait(1).to({regX:0,regY:0,scaleX:0.67,x:13.2,y:76.1},0).wait(24).to({regX:88.3,regY:-2.7,x:65.7,y:48.3},0).wait(1).to({rotation:-25.2,y:48.4},0).wait(1).to({y:48.5},0).wait(1).to({rotation:-25.1,y:48.7},0).wait(1).to({rotation:-25,x:65.6,y:49},0).wait(1).to({rotation:-24.9,y:49.3},0).wait(1).to({rotation:-24.8,y:49.8},0).wait(1).to({rotation:-24.6,y:50.2},0).wait(1).to({rotation:-24.4,y:50.7},0).wait(1).to({rotation:-24.2,x:65.5,y:51.2},0).wait(1).to({rotation:-24.1,y:51.7},0).wait(1).to({rotation:-23.9,x:65.4,y:52},0).wait(1).to({y:52.3},0).wait(1).to({rotation:-23.8,y:52.5},0).wait(1).to({rotation:-23.7,x:65.3,y:52.6},0).wait(1).to({regX:0.1,regY:-0.1,x:12.1,y:78.9},0).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.2,-139.7,364.4,323.6);
p.frameBounds = [rect, new cjs.Rectangle(-113,-136.1,350.5,320), new cjs.Rectangle(-113.1,-136.5,350.3,320.3), new cjs.Rectangle(-113.4,-137.1,350.1,320.8), new cjs.Rectangle(-113.7,-138.1,349.6,321.8), new cjs.Rectangle(-114.2,-139.7,349.3,323.3), new cjs.Rectangle(-114.9,-141.6,348.7,325), new cjs.Rectangle(-115.6,-143.9,348.1,327.1), new cjs.Rectangle(-116.4,-146.1,347,329.3), new cjs.Rectangle(-117.2,-148.1,346.6,331.1), new cjs.Rectangle(-117.7,-149.6,346.1,332.6), new cjs.Rectangle(-118,-150.7,345.6,333.5), new cjs.Rectangle(-118.3,-151.5,345.7,334.2), new cjs.Rectangle(-118.4,-151.9,345.5,334.6), new cjs.Rectangle(-123.8,-152,362.6,334.8), new cjs.Rectangle(-118.4,-151.8,345.5,334.5), new cjs.Rectangle(-118.3,-151.6,345.6,334.3), new cjs.Rectangle(-118.1,-151,345.5,333.8), new cjs.Rectangle(-117.8,-150.1,345.9,333), new cjs.Rectangle(-117.3,-148.9,346.5,331.8), new cjs.Rectangle(-116.8,-147.2,346.9,330.3), new cjs.Rectangle(-116,-145.2,347.3,328.3), new cjs.Rectangle(-115.4,-143.1,348.1,326.4), new cjs.Rectangle(-114.6,-141,348.5,324.5), new cjs.Rectangle(-114,-139.3,349.3,323), new cjs.Rectangle(-113.6,-137.9,349.6,321.5), new cjs.Rectangle(-113.3,-137,350,320.7), new cjs.Rectangle(-113.1,-136.4,350.4,320.2), new cjs.Rectangle(-113,-136.1,350.5,320), new cjs.Rectangle(-119.2,-139.7,364.4,323.6), new cjs.Rectangle(-113,-136.1,350.5,320), new cjs.Rectangle(-113.1,-136.5,350.3,320.3), new cjs.Rectangle(-113.4,-137.1,350.1,320.8), new cjs.Rectangle(-113.7,-138.1,349.6,321.8), new cjs.Rectangle(-114.2,-139.7,349.3,323.3), new cjs.Rectangle(-114.9,-141.6,348.7,325), new cjs.Rectangle(-115.6,-143.9,348.1,327.1), new cjs.Rectangle(-116.4,-146.1,347,329.3), new cjs.Rectangle(-117.2,-148.1,346.6,331.1), new cjs.Rectangle(-117.7,-149.6,346.1,332.6), new cjs.Rectangle(-118,-150.7,345.6,333.5), new cjs.Rectangle(-118.3,-151.5,345.7,334.2), new cjs.Rectangle(-118.4,-151.9,345.5,334.6), new cjs.Rectangle(-123.8,-152,362.6,334.8), new cjs.Rectangle(-118.4,-151.8,345.5,334.5), new cjs.Rectangle(-118.3,-151.6,345.6,334.3), new cjs.Rectangle(-118.1,-151,345.5,333.8), new cjs.Rectangle(-117.8,-150.1,345.9,333), new cjs.Rectangle(-117.3,-148.9,346.5,331.8), new cjs.Rectangle(-116.8,-147.2,346.9,330.3), new cjs.Rectangle(-116,-145.2,347.3,328.3), new cjs.Rectangle(-115.4,-143.1,348.1,326.4), new cjs.Rectangle(-114.6,-141,348.5,324.5), new cjs.Rectangle(-114,-139.3,349.3,323), new cjs.Rectangle(-113.6,-137.9,349.6,321.5), new cjs.Rectangle(-113.3,-137,350,320.7), new cjs.Rectangle(-113.1,-136.4,350.4,320.2), new cjs.Rectangle(-113,-136.1,350.5,320), new cjs.Rectangle(-119.2,-139.7,364.4,323.6), new cjs.Rectangle(-113,-135.9,350.5,319.8), new cjs.Rectangle(-113,-135.6,350.3,319.5), new cjs.Rectangle(-113.1,-135.1,349.9,318.9), new cjs.Rectangle(-113.2,-134.4,349.8,318.2), new cjs.Rectangle(-113.4,-133.3,349.3,317.3), new cjs.Rectangle(-113.5,-132,348.6,316), new cjs.Rectangle(-113.8,-130.2,347.7,314.4), new cjs.Rectangle(-113.9,-128.3,346.7,312.6), new cjs.Rectangle(-114.1,-126.8,345.4,311.3), new cjs.Rectangle(-114.3,-124.7,343.9,309.3), new cjs.Rectangle(-114.4,-122.9,342.6,307.7), new cjs.Rectangle(-114.6,-121.1,341,306), new cjs.Rectangle(-114.7,-119.1,339.4,304.2), new cjs.Rectangle(-114.7,-117.2,338.2,302.4), new cjs.Rectangle(-115.2,-116.6,337.7,302), new cjs.Rectangle(-117.4,-117.4,338.9,302.9), new cjs.Rectangle(-118.4,-117.9,339.2,303.4), new cjs.Rectangle(-119.7,-118.5,340.2,304), new cjs.Rectangle(-120.5,-118.9,340.5,304.5), new cjs.Rectangle(-120.7,-119,340.4,304.5), rect=new cjs.Rectangle(-156.8,-157.2,376.8,342.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-120.7,-118.9,340.3,304.6), new cjs.Rectangle(-120.7,-118.9,340.8,304.6), new cjs.Rectangle(-121.3,-119.2,341.9,304.9), new cjs.Rectangle(-121.3,-119.3,342.4,304.9), new cjs.Rectangle(-121.5,-119.4,343.1,305), new cjs.Rectangle(-121.9,-119.6,344.5,305.3), new cjs.Rectangle(-122.5,-119.9,346.5,305.5), new cjs.Rectangle(-123.2,-120.3,348.2,306), new cjs.Rectangle(-123.9,-120.6,350.2,306.3), new cjs.Rectangle(-124.1,-120.7,351.8,306.3), new cjs.Rectangle(-124.6,-121,353.6,306.6), new cjs.Rectangle(-125.1,-121.2,355.1,306.9), new cjs.Rectangle(-125.2,-121.3,355.7,307), new cjs.Rectangle(-125.8,-121.5,357,307.2), new cjs.Rectangle(-125.8,-121.6,357.2,307.2), rect=new cjs.Rectangle(-161.5,-159.5,393.2,345.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_intro_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.parent.signal.emit("sound", "cinematic_jeff_no");
	}
	this.frame_88 = function() {
		this.stop();
		this.parent.signal.emit("exit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(82));

	// white
	this.instance = new lib.cinematic_white();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).wait(82));

	// flash
	this.instance_1 = new lib.cinematic_selection_flash();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.126},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.295},0).wait(1).to({alpha:0.336},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.221},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.373},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.801},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.65},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.096},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.027},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(19).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.126},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.336},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.349},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.221},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.8},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(83));

	// backy
	this.instance_2 = new lib.cinematic_x_blackie();
	this.instance_2.setTransform(399.3,223.8,12.426,7.027);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},2).to({_off:true},1).wait(76).to({_off:false},0).to({alpha:1},9).wait(82));

	// intro_1_cloud_2
	this.instance_3 = new lib.cinematic_intro_1_cloud_2();
	this.instance_3.setTransform(412.9,93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:496.1},151).wait(19));

	// intro_1_cloud_1
	this.instance_4 = new lib.cinematic_intro_1_cloud_1();
	this.instance_4.setTransform(181.5,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:224.5},151).wait(19));

	// Layer 2
	this.instance_5 = new lib.cinematic_windowglow();
	this.instance_5.setTransform(371.3,249.8,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,x:373.2,y:248.1},88).wait(82));

	// intro_1_bg
	this.instance_6 = new lib.cinematic_intro_1_bg();
	this.instance_6.setTransform(-28.5,-16,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:0,y:0},88).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-36.5,919.5,520);
p.frameBounds = [rect, new cjs.Rectangle(-61.9,-36.5,919.5,519.9), new cjs.Rectangle(-61.7,-36.5,919.5,520), new cjs.Rectangle(-27.5,-15.4,855.1,481), new cjs.Rectangle(-27.2,-15.3,854.4,480.6), new cjs.Rectangle(-26.9,-15.1,853.8,480.3), new cjs.Rectangle(-26.5,-14.9,853.1,479.9), new cjs.Rectangle(-26.2,-14.7,852.5,479.5), new cjs.Rectangle(-25.9,-14.6,851.8,479.2), new cjs.Rectangle(-25.6,-14.4,851.2,478.8), new cjs.Rectangle(-25.2,-14.2,850.5,478.4), new cjs.Rectangle(-24.9,-14,849.9,478.1), new cjs.Rectangle(-24.6,-13.8,849.2,477.7), new cjs.Rectangle(-24.3,-13.7,848.6,477.3), new cjs.Rectangle(-23.9,-13.5,847.9,477), new cjs.Rectangle(-23.7,-13.2,847.3,476.6), new cjs.Rectangle(-23.3,-13.1,846.6,476.2), new cjs.Rectangle(-23,-12.9,846,475.9), new cjs.Rectangle(-22.6,-12.7,845.3,475.5), new cjs.Rectangle(-22.3,-12.5,844.7,475.2), new cjs.Rectangle(-22,-12.3,844,474.8), new cjs.Rectangle(-21.7,-12.2,843.4,474.4), new cjs.Rectangle(-21.4,-12,842.7,474.1), new cjs.Rectangle(-21,-11.8,842.1,473.7), new cjs.Rectangle(-20.7,-11.6,841.5,473.3), new cjs.Rectangle(-20.4,-11.5,840.8,473), new cjs.Rectangle(-20.1,-11.3,840.2,472.6), new cjs.Rectangle(-22.1,-20.5,842.2,481.6), new cjs.Rectangle(-22.1,-20.5,842.2,481.5), rect=new cjs.Rectangle(-22.1,-20.5,842.2,481.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-11.3,-6.3,822.7,462.8), new cjs.Rectangle(-11,-6.2,822,462.4), new cjs.Rectangle(-10.7,-6,821.4,462), new cjs.Rectangle(-10.3,-5.8,820.7,461.7), new cjs.Rectangle(-10,-5.6,820.1,461.3), new cjs.Rectangle(-9.7,-5.4,819.4,460.9), new cjs.Rectangle(-9.4,-5.3,818.8,460.6), new cjs.Rectangle(-9,-5,818.1,460.2), new cjs.Rectangle(-8.7,-4.9,817.5,459.9), new cjs.Rectangle(-8.4,-4.7,816.8,459.5), new cjs.Rectangle(-8.1,-4.5,816.2,459.1), new cjs.Rectangle(-7.7,-4.3,815.6,458.8), new cjs.Rectangle(-7.4,-4.1,814.9,458.4), new cjs.Rectangle(-7.1,-4,814.3,458), new cjs.Rectangle(-6.8,-3.8,813.6,457.7), new cjs.Rectangle(-6.5,-3.6,813,457.3), new cjs.Rectangle(-6.1,-3.4,812.3,456.9), new cjs.Rectangle(-5.8,-3.3,811.7,456.6), new cjs.Rectangle(-5.5,-3.1,811,456.2), rect=new cjs.Rectangle(-22.1,-20.5,842.2,481.3), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-61.7,-36.5,919.5,520), rect=new cjs.Rectangle(-61.9,-36.5,919.5,519.9), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-61.7,-36.5,919.5,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_intro_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.parent.signal.emit("sound", "cinematic_door_open");
	}
	this.frame_69 = function() {
		this.parent.signal.emit("sound", "cinematic_surprise");
	}
	this.frame_80 = function() {
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(43).call(this.frame_69).wait(11).call(this.frame_80).wait(114));

	// backy
	this.instance = new lib.cinematic_x_blackie();
	this.instance.setTransform(399.3,223.8,12.426,7.027);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(184));

	// door
	this.instance_1 = new lib.cinematic_door1();
	this.instance_1.setTransform(265.5,207.8);

	this.instance_2 = new lib.cinematic_door2();
	this.instance_2.setTransform(345.3,211.3,0.737,1,0,0,10.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({x:266.1},3).to({x:263.9},4).to({x:268.5},3).wait(1).to({scaleX:0.99,skewY:-0.4,x:269.4,y:208.4},0).wait(1).to({scaleX:0.95,skewY:-1.8,x:272.6,y:210.8},0).wait(1).to({scaleX:0.88,skewY:-4.4,x:278.8,y:215.4},0).to({_off:true},3).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).wait(1).to({regX:72.1,regY:-2.6,scaleX:0.85,skewY:5.9,x:409.5,y:213.4},0).wait(1).to({scaleX:0.93,skewY:2.7,x:417.8,y:209.2},0).wait(1).to({scaleX:0.98,skewY:0.7,x:422.8,y:206.2},0).wait(1).to({regX:0,regY:0,scaleX:1,skewY:0,x:352.5,y:207.8},0).wait(148));

	// Layer 10
	this.instance_3 = new lib.cinematic_mouth();
	this.instance_3.setTransform(235.3,199.9,0.468,0.456);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({scaleY:0.47,y:196.3},3).wait(1).to({scaleX:0.53,scaleY:0.53,x:236.1,y:198.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:237.4,y:202},0).wait(1).to({scaleX:0.65,scaleY:0.64,x:237.8,y:202.9},0).wait(119));

	// eyes
	this.instance_4 = new lib.cinematic_intro_jeffblink_peak();
	this.instance_4.setTransform(206.7,164.6);

	this.instance_5 = new lib.cinematic_eyeeyes();
	this.instance_5.setTransform(235.5,181.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},63).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({scaleY:1.02,y:177.7},3).wait(1).to({scaleY:1.01,y:178.7},0).wait(1).to({scaleY:1,y:180.9},0).wait(1).to({scaleY:1,y:181.7},0).wait(119));

	// jeff
	this.instance_6 = new lib.cinematic_jeffy();
	this.instance_6.setTransform(248.4,255.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).wait(1).to({skewX:-0.5,x:246,y:259.7},0).wait(1).to({skewX:-0.8,x:244.7,y:262},0).wait(1).to({skewX:-1,x:243.9,y:263.4},0).wait(1).to({skewX:-1.1,x:243.6,y:263.8},0).wait(1).to({skewX:-1,x:243.9},0).wait(1).to({skewX:-0.5,x:244.8},0).wait(1).to({skewX:-0.1,x:245.7},0).wait(1).to({skewX:0,x:246},0).wait(19).to({scaleY:1.02,y:261.4},3).wait(1).to({scaleY:1.01,y:262},0).wait(1).to({scaleY:1,y:263.4},0).wait(1).to({scaleY:1,y:263.8},0).to({_off:true},88).wait(31));

	// jeffshadow
	this.instance_7 = new lib.cinematic_intro_jeffpeak_shadow();
	this.instance_7.setTransform(213.5,369);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({_off:true},121).wait(31));

	// light
	this.instance_8 = new lib.cinematic_intro_roombase_light();
	this.instance_8.setTransform(96.4,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).to({_off:true},121).wait(31));

	// bg
	this.instance_9 = new lib.cinematic_intro_roombase();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(194));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-36.5,919.5,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-61.9,-36.5,919.5,519.9), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-61.7,-36.5,919.5,520), rect=new cjs.Rectangle(0,0,800,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,800,456), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,800,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_intro_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_48 = function() {
		this.parent.signal.emit("sound", "cinematic_room_fall");
	}
	this.frame_113 = function() {
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(65).call(this.frame_113).wait(56));

	// backy
	this.instance = new lib.cinematic_x_blackie();
	this.instance.setTransform(399.3,223.8,12.426,7.027);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(159));

	// tvglow
	this.instance_1 = new lib.cinematic_tvglow();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169));

	// eyes
	this.instance_2 = new lib.cinematic_intro_jeffblink();
	this.instance_2.setTransform(324.3,160.7,1,1.092);

	this.instance_3 = new lib.cinematic_intro_jefflook();
	this.instance_3.setTransform(327,164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},25).to({state:[]},4).to({state:[{t:this.instance_2}]},44).to({state:[{t:this.instance_3}]},9).wait(87));

	// bg
	this.instance_4 = new lib.cinematic_intro_living();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-36.5,919.5,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-61.9,-36.5,919.5,519.9), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-61.7,-36.5,919.5,520), rect=new cjs.Rectangle(0,0,800,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_intro_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.parent.signal.emit("sound", "cinematic_tv");
	}
	this.frame_88 = function() {
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(64));

	// backy
	this.instance = new lib.cinematic_x_blackie();
	this.instance.setTransform(399.3,223.8,12.426,7.027);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(69).to({_off:false},0).to({alpha:1},9).wait(64));

	// intro_1_cloud_2
	this.instance_1 = new lib.cinematic_intro_1_cloud_2();
	this.instance_1.setTransform(412.9,93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:496.1},151).wait(1));

	// intro_1_cloud_1
	this.instance_2 = new lib.cinematic_intro_1_cloud_1();
	this.instance_2.setTransform(181.5,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:224.5},151).wait(1));

	// Layer 2
	this.instance_3 = new lib.cinematic_windowglow();
	this.instance_3.setTransform(373.2,248.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:373.1},0).wait(1).to({scaleX:1,scaleY:1,y:248.2},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:373},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:248.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:372.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:248.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:372.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:372.7,y:248.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:372.6,y:248.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:372.5,y:248.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:248.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:372.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:372.2,y:248.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:372.1,y:249},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:372,y:249.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:371.9,y:249.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:371.7,y:249.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:371.6,y:249.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:371.4,y:249.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:371.3,y:249.8},0).wait(64));

	// intro_1_bg
	this.instance_4 = new lib.cinematic_intro_1_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({regX:400,regY:225,x:400.1,y:225.1},0).wait(1).to({y:225},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:225.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:225},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:225.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:225},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:225.1},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:225},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:400},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:225.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:225},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:400.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:400},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({regX:0,regY:0,scaleX:1.07,scaleY:1.07,x:-28.5,y:-16},0).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-36.5,919.5,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-61.9,-36.5,919.5,519.9), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-61.7,-36.5,919.5,520), rect=new cjs.Rectangle(0,-0.8,800,450.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-0.8,800.1,450.8), new cjs.Rectangle(-0.2,-0.8,800.4,450.9), new cjs.Rectangle(-0.4,-0.8,800.9,451.1), new cjs.Rectangle(-0.8,-0.8,801.6,451.3), new cjs.Rectangle(-1.2,-0.8,802.5,451.5), new cjs.Rectangle(-1.8,-1,803.6,452), new cjs.Rectangle(-2.4,-1.3,804.9,452.8), new cjs.Rectangle(-3.2,-1.8,806.4,453.6), new cjs.Rectangle(-4,-2.2,808.1,454.6), new cjs.Rectangle(-5,-2.8,810,455.6), new cjs.Rectangle(-6,-3.4,812.1,456.8), new cjs.Rectangle(-7.2,-4,814.4,458.1), new cjs.Rectangle(-8.4,-4.7,816.9,459.5), new cjs.Rectangle(-9.8,-5.5,819.6,461), new cjs.Rectangle(-61.7,-36.5,919.5,520), rect=new cjs.Rectangle(-61.9,-36.5,919.5,519.9), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-61.7,-36.5,919.5,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_HomeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":9,"down":13});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(4).call(this.frame_12).wait(7).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.cinematic_x_icon_home();
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.3,regY:-1.1,x:1.3,y:0.6},0).wait(1).to({y:0.3},0).wait(1).to({y:-0.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1.3,regY:-1.1,x:1.3,y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:1.3,regY:-1.1,x:1.3,y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1.3,regY:-1.1,x:1.3,y:-0.7},0).wait(1).to({y:0.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.cinematic_x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.cinematic_x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.cinematic_x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.cinematic_hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_glow_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_x_credits_glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({alpha:0.301},4).wait(12).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-14,28,28);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_glow_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_glow_anima("synched",14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-14,28,28);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_glow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_glow_anima("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-14,28,28);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_disapearline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_x_disaperar();
	this.instance.setTransform(0,27.9,0.467,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.4,regY:-0.4,scaleX:0.6,scaleY:0.51,x:-0.2,y:24},0).wait(1).to({scaleX:0.97,scaleY:0.86,x:-0.4,y:13.8},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:0.99,x:0,y:10.6},0).wait(1).to({regX:-0.4,regY:-0.4,scaleX:1.03,scaleY:0.92,x:-0.4,y:7.8},0).wait(1).to({scaleX:0.79,scaleY:0.68,x:-0.3,y:-0.6},0).wait(1).to({scaleX:0.55,scaleY:0.43,x:-0.2,y:-9.2},0).wait(1).to({regX:0,regY:0,scaleX:0.48,scaleY:0.37,x:0,y:-11.5},0).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.7,16.1,5.2,23.2);
p.frameBounds = [rect, new cjs.Rectangle(-3.5,8.6,6.6,30.9), new cjs.Rectangle(-5.7,-12.5,10.7,52.7), new cjs.Rectangle(-6.5,-20,12.2,60.4), new cjs.Rectangle(-6.1,-20.3,11.4,56.3), new cjs.Rectangle(-4.6,-21.3,8.7,41.4), new cjs.Rectangle(-3.2,-22.4,6,26.5), new cjs.Rectangle(-2.8,-22.8,5.3,22.3), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_clarence = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.cinematic_outro_clarence_blink_1();
	this.instance.setTransform(30.2,-53);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93).to({_off:false},0).to({_off:true},5).wait(26).to({_off:false},0).to({_off:true},5).wait(88));

	// Layer 10
	this.instance_1 = new lib.cinematic_outro_clarence_hand2_1();
	this.instance_1.setTransform(69.4,21.7,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).to({x:68.3,y:28.1},3).wait(42).to({x:68.1,y:27.9},0).wait(1).to({x:67.6,y:27.1},0).wait(1).to({x:66.5,y:25.6},0).wait(1).to({x:65.3,y:23.9},0).wait(1).to({x:64.6,y:22.9},0).wait(1).to({x:64.4,y:22.6},0).wait(1).to({x:64.1,y:22.4},0).wait(1).to({x:63.4,y:22.1},0).wait(1).to({x:62,y:21.4},0).wait(1).to({x:59.9,y:20.3},0).to({_off:true},1).wait(70));

	// outro_clarence_hand2
	this.instance_2 = new lib.cinematic_outro_clarence_hand2_1();
	this.instance_2.setTransform(-58.2,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(137).to({x:-58.1,y:18.2},0).wait(1).to({x:-57.7,y:17.3},0).wait(1).to({x:-56.8,y:15.5},0).wait(1).to({x:-55.7,y:13.4},0).wait(1).to({x:-55.1,y:12.2},0).wait(1).to({x:-54.9,y:11.8},0).wait(1).to({x:-54.5,y:11.9},0).wait(1).to({x:-53.4,y:12.3},0).wait(1).to({x:-51.2,y:13},0).wait(1).to({x:-47.7,y:14.1},0).to({_off:true},1).wait(70));

	// outro_clarence_bush
	this.instance_3 = new lib.cinematic_outro_clarence_bush_1();
	this.instance_3.setTransform(0,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(148).to({_off:true},1).wait(68));

	// outro_clarence_eyes_1
	this.instance_4 = new lib.cinematic_outro_clarence_eyes_1_1();
	this.instance_4.setTransform(29.4,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({x:29.3,y:-44.7},0).wait(1).to({rotation:-0.1},0).wait(1).to({x:29.2,y:-44.9},0).wait(1).to({rotation:-0.3,x:29,y:-45.1},0).wait(1).to({rotation:-0.4,x:28.8,y:-45.4},0).wait(1).to({rotation:-0.7,x:28.4,y:-45.8},0).wait(1).to({rotation:-0.9,x:28.1,y:-46.2},0).wait(1).to({rotation:-1.2,x:27.8,y:-46.6},0).wait(1).to({rotation:-1.3,x:27.6,y:-46.8},0).wait(1).to({rotation:-1.4,x:27.4,y:-47},0).wait(1).to({rotation:-1.5,y:-47.1},0).wait(3).to({rotation:-1.4,y:-47},0).wait(1).to({x:27.5,y:-46.9},0).wait(1).to({rotation:-1.2,x:27.7,y:-46.7},0).wait(1).to({rotation:-1,x:27.9,y:-46.4},0).wait(1).to({rotation:-0.8,x:28.3,y:-46},0).wait(1).to({rotation:-0.5,x:28.6,y:-45.6},0).wait(1).to({rotation:-0.3,x:28.9,y:-45.2},0).wait(1).to({rotation:-0.2,x:29.1,y:-44.9},0).wait(1).to({rotation:-0.1,x:29.3,y:-44.8},0).wait(1).to({rotation:0,y:-44.7},0).wait(1).to({x:29.4,y:-44.6},0).wait(1).to({x:29.3,y:-44.7},0).wait(1).to({rotation:-0.1},0).wait(1).to({x:29.2,y:-44.9},0).wait(1).to({rotation:-0.3,x:29,y:-45.1},0).wait(1).to({rotation:-0.4,x:28.8,y:-45.4},0).wait(1).to({rotation:-0.7,x:28.4,y:-45.8},0).wait(1).to({rotation:-0.9,x:28.1,y:-46.2},0).wait(1).to({rotation:-1.2,x:27.8,y:-46.6},0).wait(1).to({rotation:-1.3,x:27.6,y:-46.8},0).wait(1).to({rotation:-1.4,x:27.4,y:-47},0).wait(1).to({rotation:-1.5,y:-47.1},0).wait(3).to({rotation:-1.4,y:-47},0).wait(1).to({x:27.5,y:-46.9},0).wait(1).to({rotation:-1.2,x:27.7,y:-46.7},0).wait(1).to({rotation:-1,x:27.9,y:-46.4},0).wait(1).to({rotation:-0.8,x:28.3,y:-46},0).wait(1).to({rotation:-0.5,x:28.6,y:-45.6},0).wait(1).to({rotation:-0.3,x:28.9,y:-45.2},0).wait(1).to({rotation:-0.2,x:29.1,y:-44.9},0).wait(1).to({rotation:-0.1,x:29.3,y:-44.8},0).wait(1).to({rotation:0,y:-44.7},0).wait(1).to({x:29.4,y:-44.6},0).wait(1).to({y:-44.7},0).wait(1).to({rotation:0.1,x:29.7,y:-45},0).wait(1).to({x:30.3,y:-45.5},0).wait(1).to({rotation:0.3,x:31.2,y:-46.3},0).wait(1).to({rotation:0.4,x:32.5,y:-47.4},0).wait(1).to({rotation:0.7,x:34.1,y:-48.9},0).wait(1).to({rotation:0.9,x:35.7,y:-50.2},0).wait(1).to({rotation:1.1,x:36.9,y:-51.3},0).wait(1).to({rotation:1.2,x:37.6,y:-51.9},0).wait(1).to({x:37.9,y:-52.2},0).wait(1).to({x:38.1,y:-52.3},0).wait(34).to({x:37.9,y:-52.2},0).wait(1).to({x:37.6,y:-51.7},0).wait(1).to({x:36.8,y:-50.9},0).wait(1).to({x:35.7,y:-49.6},0).wait(1).to({x:34.5,y:-48.2},0).wait(1).to({x:33.5,y:-47.1},0).wait(1).to({x:33,y:-46.5},0).wait(1).to({x:32.9,y:-46.3},0).wait(1).to({y:-46.6},0).wait(1).to({y:-47.7},0).wait(1).to({y:-49.8},0).wait(1).to({x:33,y:-52.2},0).wait(1).to({y:-53.7},0).wait(1).to({x:33.1,y:-54.1},0).wait(1).to({scaleY:0.99,x:33.2,y:-52.3},0).wait(1).to({scaleY:0.98,rotation:0,skewX:1.3,skewY:1.2,x:33.5,y:-46.5},0).wait(1).to({scaleY:0.94,skewY:1.1,x:34.1,y:-36.3},0).wait(1).to({scaleY:0.89,skewX:1.4,skewY:1,x:35.1,y:-21.1},0).wait(1).to({scaleY:0.82,skewX:1.6,skewY:0.9,x:36.4,y:-0.2},0).wait(1).to({scaleY:0.73,skewX:1.8,skewY:0.8,x:38.1,y:27.1},0).to({_off:true},1).wait(68));

	// outro_clarence_mouth
	this.instance_5 = new lib.cinematic_outro_clarence_mouth_1();
	this.instance_5.setTransform(21.5,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({scaleX:1,scaleY:1,x:21.4,y:-21.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,y:-22},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-22.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.3,x:21.3,y:-22.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.4,x:21.2,y:-23.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.7,x:21,y:-24.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-0.9,x:20.9,y:-25.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-1.2,x:20.7,y:-25.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-1.3,x:20.6,y:-26.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.4,x:20.5,y:-26.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.5,y:-26.9},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.4,y:-26.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:20.6,y:-26.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-1.2,x:20.7,y:-26.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-1,x:20.8,y:-25.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-0.8,x:20.9,y:-24.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.5,x:21.1,y:-23.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.3,x:21.2,y:-23},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.2,x:21.3,y:-22.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:21.4,y:-22.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:-21.9},0).wait(1).to({scaleX:1,scaleY:1,x:21.5,y:-21.8},0).wait(1).to({scaleX:1,scaleY:1,x:21.4,y:-21.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,y:-22},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-22.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.3,x:21.3,y:-22.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.4,x:21.2,y:-23.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.7,x:21,y:-24.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-0.9,x:20.9,y:-25.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-1.2,x:20.7,y:-25.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-1.3,x:20.6,y:-26.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.4,x:20.5,y:-26.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.5,y:-26.9},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.4,y:-26.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:20.6,y:-26.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-1.2,x:20.7,y:-26.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-1,x:20.8,y:-25.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-0.8,x:20.9,y:-24.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.5,x:21.1,y:-23.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.3,x:21.2,y:-23},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.2,x:21.3,y:-22.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:21.4,y:-22.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:-21.9},0).wait(1).to({scaleX:1,scaleY:1,x:21.5,y:-21.8},0).wait(1).to({y:-21.9},0).wait(1).to({rotation:0.1,x:21.6},0).wait(1).to({x:21.8,y:-22},0).wait(1).to({rotation:0.3,x:22.1,y:-22.1},0).wait(1).to({rotation:0.4,x:22.6,y:-22.3},0).wait(1).to({rotation:0.7,x:23.3,y:-22.5},0).wait(1).to({rotation:0.9,x:23.9,y:-22.7},0).wait(1).to({rotation:1.1,x:24.3,y:-22.8},0).wait(1).to({rotation:1.2,x:24.6,y:-22.9},0).wait(1).to({x:24.7,y:-23},0).wait(1).to({x:24.8},0).wait(18).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1.01},0).wait(1).to({scaleX:1.01,x:24.9,y:-23.1},0).wait(1).to({scaleX:1.02,x:25.1,y:-23.2},0).wait(1).to({scaleX:1.03,x:25.2},0).wait(1).to({scaleX:1.05,x:25.4,y:-23.3},0).wait(1).to({scaleX:1.07,scaleY:1,x:25.7,y:-23.5},0).wait(1).to({scaleX:1.09,x:26,y:-23.6},0).wait(1).to({scaleX:1.11,x:26.2,y:-23.7},0).wait(1).to({scaleX:1.13,x:26.5,y:-23.9},0).wait(1).to({scaleX:1.14,x:26.7,y:-24},0).wait(1).to({scaleX:1.16,x:26.9,y:-24.1},0).wait(1).to({scaleX:1.17,x:27.1,y:-24.2},0).wait(1).to({scaleX:1.18,scaleY:1,x:27.2},0).wait(1).to({scaleX:1.18,x:27.3,y:-24.3},0).wait(1).to({scaleX:1.19,x:27.4},0).wait(1).to({scaleX:1.19},0).wait(1).to({scaleX:1.19},0).wait(1).to({x:27.5},0).wait(5).to({scaleX:1.19,x:27.3,y:-24.6},0).wait(1).to({scaleX:1.16,scaleY:1,x:27,y:-25.5},0).wait(1).to({scaleX:1.11,x:26.3,y:-27.2},0).wait(1).to({scaleX:1.05,scaleY:1,x:25.4,y:-29.2},0).wait(1).to({scaleX:1.01,x:24.9,y:-30.4},0).wait(1).to({scaleX:1,x:24.8,y:-30.8},0).wait(1).to({scaleY:0.99,y:-29},0).wait(1).to({scaleY:0.98,rotation:0,skewX:1.3,skewY:1.2,y:-23.3},0).wait(1).to({scaleY:0.94,skewY:1.1,y:-13.4},0).wait(1).to({scaleY:0.89,skewX:1.4,skewY:1,y:1.5},0).wait(1).to({scaleY:0.82,skewX:1.6,skewY:0.9,y:21.9},0).wait(1).to({scaleY:0.73,skewX:1.8,skewY:0.8,y:48.6},0).to({_off:true},1).wait(68));

	// outro_clarence_body
	this.instance_6 = new lib.cinematic_outro_clarence_body_1();
	this.instance_6.setTransform(7,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({y:-17.1},0).wait(1).to({rotation:-0.1},0).wait(1).to({x:6.9,y:-17.2},0).wait(1).to({rotation:-0.3,x:6.8,y:-17.4},0).wait(1).to({rotation:-0.4,x:6.6,y:-17.6},0).wait(1).to({rotation:-0.7,x:6.4,y:-17.9},0).wait(1).to({rotation:-0.9,x:6.2,y:-18.2},0).wait(1).to({rotation:-1.2,x:6,y:-18.5},0).wait(1).to({rotation:-1.3,x:5.8,y:-18.7},0).wait(1).to({rotation:-1.4,y:-18.9},0).wait(1).to({rotation:-1.5,x:5.7},0).wait(3).to({rotation:-1.4},0).wait(1).to({x:5.8,y:-18.8},0).wait(1).to({rotation:-1.2,x:5.9,y:-18.6},0).wait(1).to({rotation:-1,x:6.1,y:-18.4},0).wait(1).to({rotation:-0.8,x:6.3,y:-18.1},0).wait(1).to({rotation:-0.5,x:6.5,y:-17.8},0).wait(1).to({rotation:-0.3,x:6.7,y:-17.5},0).wait(1).to({rotation:-0.2,x:6.9,y:-17.3},0).wait(1).to({rotation:-0.1,y:-17.1},0).wait(1).to({rotation:0,x:7},0).wait(1).to({y:-17},0).wait(1).to({y:-17.1},0).wait(1).to({rotation:-0.1},0).wait(1).to({x:6.9,y:-17.2},0).wait(1).to({rotation:-0.3,x:6.8,y:-17.4},0).wait(1).to({rotation:-0.4,x:6.6,y:-17.6},0).wait(1).to({rotation:-0.7,x:6.4,y:-17.9},0).wait(1).to({rotation:-0.9,x:6.2,y:-18.2},0).wait(1).to({rotation:-1.2,x:6,y:-18.5},0).wait(1).to({rotation:-1.3,x:5.8,y:-18.7},0).wait(1).to({rotation:-1.4,y:-18.9},0).wait(1).to({rotation:-1.5,x:5.7},0).wait(3).to({rotation:-1.4},0).wait(1).to({x:5.8,y:-18.8},0).wait(1).to({rotation:-1.2,x:5.9,y:-18.6},0).wait(1).to({rotation:-1,x:6.1,y:-18.4},0).wait(1).to({rotation:-0.8,x:6.3,y:-18.1},0).wait(1).to({rotation:-0.5,x:6.5,y:-17.8},0).wait(1).to({rotation:-0.3,x:6.7,y:-17.5},0).wait(1).to({rotation:-0.2,x:6.9,y:-17.3},0).wait(1).to({rotation:-0.1,y:-17.1},0).wait(1).to({rotation:0,x:7},0).wait(1).to({y:-17},0).wait(1).to({y:-17.1},0).wait(1).to({rotation:0.1,x:7.1},0).wait(1).to({x:7.3,y:-17.2},0).wait(1).to({rotation:0.3,x:7.7,y:-17.4},0).wait(1).to({rotation:0.4,x:8.2,y:-17.6},0).wait(1).to({rotation:0.7,x:8.8,y:-17.8},0).wait(1).to({rotation:0.9,x:9.3,y:-18.1},0).wait(1).to({rotation:1.1,x:9.8,y:-18.3},0).wait(1).to({rotation:1.2,x:10,y:-18.4},0).wait(1).to({x:10.2,y:-18.5},0).wait(43).to({y:-18.8},0).wait(1).to({y:-19.9},0).wait(1).to({y:-22},0).wait(1).to({y:-24.4},0).wait(1).to({y:-25.9},0).wait(1).to({y:-26.3},0).wait(1).to({scaleY:0.99,y:-24.8},0).wait(1).to({scaleY:0.96,rotation:0,skewX:1.3,skewY:1.2,y:-20.1},0).wait(1).to({scaleY:0.9,skewY:1.1,x:10.3,y:-11.9},0).wait(1).to({scaleY:0.82,skewX:1.4,skewY:1,x:10.4,y:0.4},0).wait(1).to({scaleY:0.7,skewX:1.6,skewY:0.9,x:10.5,y:17.3},0).wait(1).to({scaleY:0.55,skewX:1.8,skewY:0.8,x:10.6,y:39.4},0).to({_off:true},1).wait(68));

	// outro_clarence_armhi
	this.instance_7 = new lib.cinematic_outro_clarence_armhi_1();
	this.instance_7.setTransform(42.4,13.2,1,1,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({regX:40.1,regY:-33.5,rotation:-10.3,x:75.8,y:-27},0).wait(1).to({rotation:-10,x:76.1,y:-26.9},0).wait(1).to({rotation:-9.2,x:76.6,y:-26.6},0).wait(1).to({rotation:-8.1,x:77.3,y:-26.1},0).wait(1).to({rotation:-6.4,x:78.4,y:-25.4},0).wait(1).to({rotation:-4.1,x:79.8,y:-24.4},0).wait(1).to({rotation:-1.7,x:81.2,y:-23.3},0).wait(1).to({rotation:0.4,x:82.4,y:-22.2},0).wait(1).to({rotation:1.9,x:83.2,y:-21.5},0).wait(1).to({rotation:2.8,x:83.6,y:-21},0).wait(1).to({rotation:3.3,x:83.9,y:-20.8},0).wait(1).to({regX:0,regY:0,rotation:3.5,x:41.9,y:10.4},0).wait(1).to({regX:40.1,regY:-33.5,rotation:3.3,x:83.9,y:-20.7},0).wait(1).to({rotation:3,x:83.7,y:-20.9},0).wait(1).to({rotation:2.3,x:83.3,y:-21.3},0).wait(1).to({rotation:1.1,x:82.7,y:-21.9},0).wait(1).to({rotation:-0.6,x:81.8,y:-22.8},0).wait(1).to({rotation:-2.9,x:80.5,y:-23.8},0).wait(1).to({rotation:-5.3,x:79.1,y:-24.9},0).wait(1).to({rotation:-7.4,x:77.7,y:-25.8},0).wait(1).to({rotation:-8.9,x:76.7,y:-26.5},0).wait(1).to({rotation:-9.8,x:76.2,y:-26.8},0).wait(1).to({rotation:-10.3,x:75.8,y:-27},0).wait(1).to({regX:0,regY:0,rotation:-10.4,x:42.4,y:13.2},0).wait(1).to({regX:40.1,regY:-33.5,rotation:-10.3,x:75.8,y:-27},0).wait(1).to({rotation:-10,x:76.1,y:-26.9},0).wait(1).to({rotation:-9.2,x:76.6,y:-26.6},0).wait(1).to({rotation:-8.1,x:77.3,y:-26.1},0).wait(1).to({rotation:-6.4,x:78.4,y:-25.4},0).wait(1).to({rotation:-4.1,x:79.8,y:-24.4},0).wait(1).to({rotation:-1.7,x:81.2,y:-23.3},0).wait(1).to({rotation:0.4,x:82.4,y:-22.2},0).wait(1).to({rotation:1.9,x:83.2,y:-21.5},0).wait(1).to({rotation:2.8,x:83.6,y:-21},0).wait(1).to({rotation:3.3,x:83.9,y:-20.8},0).wait(1).to({regX:0,regY:0,rotation:3.5,x:41.9,y:10.4},0).wait(1).to({regX:40.1,regY:-33.5,rotation:3.3,x:83.9,y:-20.7},0).wait(1).to({rotation:3,x:83.7,y:-20.9},0).wait(1).to({rotation:2.3,x:83.3,y:-21.3},0).wait(1).to({rotation:1.1,x:82.7,y:-21.9},0).wait(1).to({rotation:-0.6,x:81.8,y:-22.8},0).wait(1).to({rotation:-2.9,x:80.5,y:-23.8},0).wait(1).to({rotation:-5.3,x:79.1,y:-24.9},0).wait(1).to({rotation:-7.4,x:77.7,y:-25.8},0).wait(1).to({rotation:-8.9,x:76.7,y:-26.5},0).wait(1).to({rotation:-9.8,x:76.2,y:-26.8},0).wait(1).to({rotation:-10.3,x:75.8,y:-27},0).wait(1).to({regX:0,regY:0,rotation:-10.4,x:42.4,y:13.2},0).wait(1).to({regX:40.1,regY:-33.5,rotation:-9.6,x:75.7,y:-26.4},0).wait(1).to({rotation:-6.5,x:75.5,y:-23.7},0).wait(1).to({rotation:-0.1,x:74.6,y:-17.7},0).wait(1).to({rotation:9.5,x:72.4,y:-8.1},0).wait(1).to({rotation:17.5,x:69.6,y:0.5},0).wait(1).to({rotation:21.5,x:67.8,y:4.9},0).wait(1).to({regX:0,regY:0,rotation:22.5,x:17.5,y:21.7},0).to({_off:true},1).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-85,201,176.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-85.1,201.5,176.8), new cjs.Rectangle(-82,-85.2,202.1,176.9), new cjs.Rectangle(-82,-85.6,202.9,177.3), new cjs.Rectangle(-82,-85.9,204.2,177.6), new cjs.Rectangle(-82,-86.4,205.9,178.1), new cjs.Rectangle(-82,-87.1,207.5,178.8), new cjs.Rectangle(-82,-87.6,208.5,179.3), new cjs.Rectangle(-82,-88,209.4,179.7), new cjs.Rectangle(-82,-88.1,209.9,179.8), new cjs.Rectangle(-82,-88.3,210.2,180), new cjs.Rectangle(-82,-88.5,210.3,180.2), new cjs.Rectangle(-82,-88.3,210.3,180), new cjs.Rectangle(-82,-88.2,210,179.9), new cjs.Rectangle(-82,-88.1,209.7,179.8), new cjs.Rectangle(-82,-87.7,209,179.4), new cjs.Rectangle(-82,-87.4,208.2,179.1), new cjs.Rectangle(-82,-86.9,206.7,178.6), new cjs.Rectangle(-82,-86.2,205,177.9), new cjs.Rectangle(-82,-85.7,203.6,177.4), new cjs.Rectangle(-82,-85.3,202.4,177), new cjs.Rectangle(-82,-85.2,201.5,176.9), new cjs.Rectangle(-82,-85,201.1,176.7), rect=new cjs.Rectangle(-82,-85,201,176.7), rect, new cjs.Rectangle(-82,-85.1,201.5,176.8), new cjs.Rectangle(-82,-85.2,202.1,176.9), new cjs.Rectangle(-82,-85.6,202.9,177.3), new cjs.Rectangle(-82,-85.9,204.2,177.6), new cjs.Rectangle(-82,-86.4,205.9,178.1), new cjs.Rectangle(-82,-87.1,207.5,178.8), new cjs.Rectangle(-82,-87.6,208.5,179.3), new cjs.Rectangle(-82,-88,209.4,179.7), new cjs.Rectangle(-82,-88.1,209.9,179.8), new cjs.Rectangle(-82,-88.3,210.2,180), new cjs.Rectangle(-82,-88.5,210.3,180.2), new cjs.Rectangle(-82,-88.3,210.3,180), new cjs.Rectangle(-82,-88.2,210,179.9), new cjs.Rectangle(-82,-88.1,209.7,179.8), new cjs.Rectangle(-82,-87.7,209,179.4), new cjs.Rectangle(-82,-87.4,208.2,179.1), new cjs.Rectangle(-82,-86.9,206.7,178.6), new cjs.Rectangle(-82,-86.2,205,177.9), new cjs.Rectangle(-82,-85.7,203.6,177.4), new cjs.Rectangle(-82,-85.3,202.4,177), new cjs.Rectangle(-82,-85.2,201.5,176.9), new cjs.Rectangle(-82,-85,201.1,176.7), rect=new cjs.Rectangle(-82,-85,201,176.7), rect, new cjs.Rectangle(-82,-85.1,201.2,176.8), new cjs.Rectangle(-82,-85.2,200.9,176.9), new cjs.Rectangle(-82,-85.6,199.3,177.3), new cjs.Rectangle(-82,-85.9,201.2,177.6), new cjs.Rectangle(-82,-86.4,201.4,178.1), new cjs.Rectangle(-82,-86.9,201.5,178.6), new cjs.Rectangle(-82,-87.3,166.9,179), new cjs.Rectangle(-82,-87.4,166.5,179.1), new cjs.Rectangle(-82,-87.6,166.1,179.3), rect=new cjs.Rectangle(-82,-87.7,165.8,179.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-87.9,165.6,179.6), new cjs.Rectangle(-82,-89,165.1,180.7), new cjs.Rectangle(-82,-91.1,164.1,182.8), new cjs.Rectangle(-82,-93.5,164,185.2), new cjs.Rectangle(-82,-95,164,186.7), new cjs.Rectangle(-82,-95.5,164,187.2), new cjs.Rectangle(-82,-93.2,164,184.9), new cjs.Rectangle(-82,-86.3,164,178), new cjs.Rectangle(-82,-74.1,164,165.8), new cjs.Rectangle(-82,-56.1,164,147.8), new cjs.Rectangle(-82,-31.1,164,122.8), new cjs.Rectangle(-82,1.3,164,90.4), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_cinematic_bg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.cinematic_glow_2();
	this.instance.setTransform(641.4,3.6,0.932,0.932);

	this.instance_1 = new lib.cinematic_glow_1();
	this.instance_1.setTransform(605.9,262,0.495,0.495);

	this.instance_2 = new lib.cinematic_glow_2();
	this.instance_2.setTransform(390.3,23.4,0.932,0.932);

	this.instance_3 = new lib.cinematic_glow_1();
	this.instance_3.setTransform(727.4,133.3,0.68,0.68);

	this.instance_4 = new lib.cinematic_glow_2();
	this.instance_4.setTransform(348.8,162,0.932,0.932);

	this.instance_5 = new lib.cinematic_glow_1();
	this.instance_5.setTransform(63.2,150.4,0.423,0.423);

	this.instance_6 = new lib.cinematic_glow_2();
	this.instance_6.setTransform(605.4,411.3,0.932,0.932);

	this.instance_7 = new lib.cinematic_glow_1();
	this.instance_7.setTransform(421.4,47.8,0.68,0.68);

	this.instance_8 = new lib.cinematic_glow_2();
	this.instance_8.setTransform(97.7,297,0.932,0.932);

	this.instance_9 = new lib.cinematic_glow_1();
	this.instance_9.setTransform(240.5,353.8,0.68,0.68);

	this.instance_10 = new lib.cinematic_glow_2();
	this.instance_10.setTransform(187.8,-57.6,0.614,0.614);

	this.instance_11 = new lib.cinematic_glow_2();
	this.instance_11.setTransform(23.1,503.1,0.932,0.932);

	this.instance_12 = new lib.cinematic_glow_1();
	this.instance_12.setTransform(140.7,578.8,0.68,0.68);

	this.instance_13 = new lib.cinematic_glow_2();
	this.instance_13.setTransform(516.3,549.9,0.932,0.932);

	this.instance_14 = new lib.cinematic_glow_1();
	this.instance_14.setTransform(713,568.9,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_15 = new lib.cinematic_outro_bg_2();
	this.instance_15.setTransform(0,-115.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-115.3,800,1045);
p.frameBounds = [rect];


(lib.cinematic_bat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_bat_gfx();
	this.instance.setTransform(0,0,1,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.2,regY:53.6,x:-1.3,y:53.6},0).wait(2).to({rotation:1.1,x:-1.2},0).wait(2).to({rotation:1,x:-1.1},0).wait(1).to({rotation:0.8,x:-0.9},0).wait(1).to({rotation:0.7,x:-0.8},0).wait(1).to({rotation:0.5,x:-0.6},0).wait(1).to({rotation:0.3,x:-0.4},0).wait(1).to({rotation:0,x:-0.2},0).wait(1).to({rotation:-0.2,x:0},0).wait(1).to({rotation:-0.5,x:0.2},0).wait(1).to({rotation:-0.7,x:0.4},0).wait(1).to({rotation:-0.8,x:0.6},0).wait(1).to({rotation:-1,x:0.8},0).wait(1).to({rotation:-1.1,x:0.9},0).wait(1).to({rotation:-1.2},0).wait(1).to({x:1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-0.2,regY:53.6,x:1,y:53.6},0).wait(1).to({x:0.9},0).wait(1).to({rotation:-1.1},0).wait(1).to({x:0.8},0).wait(1).to({rotation:-1,x:0.7},0).wait(1).to({rotation:-0.9,x:0.6},0).wait(1).to({rotation:-0.7,x:0.5},0).wait(1).to({rotation:-0.6,x:0.3},0).wait(1).to({rotation:-0.4,x:0.2},0).wait(1).to({rotation:-0.1,x:0},0).wait(1).to({rotation:0.1,x:-0.3},0).wait(1).to({rotation:0.3,x:-0.5},0).wait(1).to({rotation:0.5,x:-0.7},0).wait(1).to({rotation:0.7,x:-0.8},0).wait(1).to({rotation:0.9,x:-1},0).wait(1).to({rotation:1,x:-1.1},0).wait(1).to({rotation:1.1,x:-1.2},0).wait(1).to({rotation:1.2,x:-1.3},0).wait(2).to({regX:0,regY:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-5.9,54.5,119.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-28.2,-5.9,54.2,118.9), rect, new cjs.Rectangle(-28.2,-5.8,54.2,118.9), new cjs.Rectangle(-28.2,-5.8,54.1,118.9), new cjs.Rectangle(-27.7,-5.7,53.7,118.8), new cjs.Rectangle(-27.7,-5.7,53.6,118.7), new cjs.Rectangle(-27.2,-5.6,53.1,118.5), new cjs.Rectangle(-26.8,-5.5,52.7,118.3), new cjs.Rectangle(-26.7,-5.5,52.5,118.3), new cjs.Rectangle(-26.2,-5.4,52,118), new cjs.Rectangle(-26.2,-5.4,52.1,118.1), new cjs.Rectangle(-26.2,-5.5,52.6,118.3), new cjs.Rectangle(-26.2,-5.6,53.1,118.5), new cjs.Rectangle(-26.2,-5.7,53.6,118.7), new cjs.Rectangle(-26.3,-5.8,53.7,118.8), new cjs.Rectangle(-26.3,-5.9,54.1,118.9), rect=new cjs.Rectangle(-26.3,-5.8,54.2,118.9), rect, new cjs.Rectangle(-26.3,-5.9,54.5,119.1), rect=new cjs.Rectangle(-26.3,-5.8,54.2,118.9), rect, new cjs.Rectangle(-26.3,-5.9,54.2,118.9), new cjs.Rectangle(-26.3,-5.9,54.1,118.9), new cjs.Rectangle(-26.3,-5.8,53.7,118.8), new cjs.Rectangle(-26.2,-5.7,53.6,118.7), new cjs.Rectangle(-26.2,-5.6,53.2,118.5), new cjs.Rectangle(-26.2,-5.6,53.1,118.5), new cjs.Rectangle(-26.2,-5.5,52.6,118.3), new cjs.Rectangle(-26.2,-5.4,52.1,118.1), new cjs.Rectangle(-26.2,-5.4,52.1,118), new cjs.Rectangle(-26.7,-5.5,52.6,118.3), new cjs.Rectangle(-27.2,-5.6,53.1,118.5), new cjs.Rectangle(-27.3,-5.6,53.2,118.5), new cjs.Rectangle(-27.7,-5.7,53.6,118.7), new cjs.Rectangle(-28.1,-5.8,54.1,118.9), new cjs.Rectangle(-28.2,-5.8,54.1,118.9), rect=new cjs.Rectangle(-28.2,-5.9,54.2,118.9), rect, new cjs.Rectangle(-28.6,-5.9,54.5,119.1)];


(lib.cinematic_balloon_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_ballon_squesh();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:0.99},0).wait(1).to({scaleX:1.01,scaleY:0.99},0).wait(1).to({scaleX:1.02,scaleY:0.98},0).wait(1).to({scaleX:1.03,scaleY:0.98},0).wait(1).to({scaleX:1.03,scaleY:0.97},0).wait(1).to({scaleX:1.04,scaleY:0.97},0).wait(1).to({scaleX:1.04,scaleY:0.97},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleX:1.04,scaleY:0.97},0).wait(1).to({scaleX:1.04,scaleY:0.97},0).wait(1).to({scaleX:1.03,scaleY:0.98},0).wait(1).to({scaleX:1.02,scaleY:0.98},0).wait(1).to({scaleX:1.02,scaleY:0.99},0).wait(1).to({scaleX:1.01,scaleY:0.99},0).wait(1).to({scaleX:1.01,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-44,42,88);
p.frameBounds = [rect, rect, new cjs.Rectangle(-21,-43.9,42.1,87.9), new cjs.Rectangle(-21.1,-43.8,42.2,87.7), new cjs.Rectangle(-21.2,-43.7,42.4,87.4), new cjs.Rectangle(-21.3,-43.5,42.7,87), new cjs.Rectangle(-21.4,-43.2,43,86.5), new cjs.Rectangle(-21.6,-43,43.3,86.1), new cjs.Rectangle(-21.7,-42.8,43.5,85.7), new cjs.Rectangle(-21.8,-42.7,43.6,85.5), new cjs.Rectangle(-21.8,-42.6,43.7,85.4), new cjs.Rectangle(-21.8,-42.6,43.7,85.3), new cjs.Rectangle(-21.8,-42.6,43.7,85.4), new cjs.Rectangle(-21.8,-42.7,43.6,85.5), new cjs.Rectangle(-21.7,-42.8,43.5,85.6), new cjs.Rectangle(-21.6,-42.9,43.3,85.9), new cjs.Rectangle(-21.5,-43.1,43.1,86.4), new cjs.Rectangle(-21.4,-43.4,42.8,86.8), new cjs.Rectangle(-21.2,-43.6,42.5,87.3), new cjs.Rectangle(-21.1,-43.8,42.3,87.6), new cjs.Rectangle(-21,-43.9,42.1,87.9), rect=new cjs.Rectangle(-21,-44,42,88), rect];


(lib.cinematic_balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cinematic_balloon_gfx();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-0.1},0).wait(1).to({y:-0.2},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.5},0).wait(1).to({y:-0.6},0).wait(1).to({y:-0.8},0).wait(1).to({y:-1.1},0).wait(1).to({y:-1.3},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1.9},0).wait(1).to({y:-2.3},0).wait(1).to({y:-2.7},0).wait(1).to({y:-3.1},0).wait(1).to({y:-3.5},0).wait(1).to({y:-4},0).wait(1).to({y:-4.5},0).wait(1).to({y:-4.9},0).wait(1).to({y:-5.4},0).wait(1).to({y:-5.9},0).wait(1).to({y:-6.4},0).wait(1).to({y:-6.9},0).wait(1).to({y:-7.3},0).wait(1).to({y:-7.7},0).wait(1).to({y:-8.1},0).wait(1).to({y:-8.5},0).wait(1).to({y:-8.9},0).wait(1).to({y:-9.2},0).wait(1).to({y:-9.5},0).wait(1).to({y:-9.7},0).wait(1).to({y:-9.9},0).wait(1).to({y:-10.1},0).wait(1).to({y:-10.3},0).wait(1).to({y:-10.4},0).wait(1).to({y:-10.5},0).wait(2).to({y:-10.6},0).wait(4).to({y:-10.5},0).wait(1).to({y:-10.4},0).wait(1).to({y:-10.3},0).wait(1).to({y:-10.2},0).wait(1).to({y:-10},0).wait(1).to({y:-9.9},0).wait(1).to({y:-9.6},0).wait(1).to({y:-9.4},0).wait(1).to({y:-9.1},0).wait(1).to({y:-8.9},0).wait(1).to({y:-8.5},0).wait(1).to({y:-8.2},0).wait(1).to({y:-7.8},0).wait(1).to({y:-7.4},0).wait(1).to({y:-7},0).wait(1).to({y:-6.6},0).wait(1).to({y:-6.1},0).wait(1).to({y:-5.6},0).wait(1).to({y:-5.2},0).wait(1).to({y:-4.7},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.8},0).wait(1).to({y:-3.4},0).wait(1).to({y:-3},0).wait(1).to({y:-2.6},0).wait(1).to({y:-2.2},0).wait(1).to({y:-1.9},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1.3},0).wait(1).to({y:-1},0).wait(1).to({y:-0.8},0).wait(1).to({y:-0.6},0).wait(1).to({y:-0.4},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-44,42,88);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-21,-44.1,42,88), new cjs.Rectangle(-21,-44.2,42,88), new cjs.Rectangle(-21,-44.3,42,88), new cjs.Rectangle(-21,-44.4,42,88), new cjs.Rectangle(-21,-44.6,42,88), new cjs.Rectangle(-21,-44.8,42,88), new cjs.Rectangle(-21,-45,42,88), new cjs.Rectangle(-21,-45.3,42,88), new cjs.Rectangle(-21,-45.6,42,88), new cjs.Rectangle(-21,-45.9,42,88), new cjs.Rectangle(-21,-46.3,42,88), new cjs.Rectangle(-21,-46.7,42,88), new cjs.Rectangle(-21,-47.1,42,88), new cjs.Rectangle(-21,-47.5,42,88), new cjs.Rectangle(-21,-48,42,88), new cjs.Rectangle(-21,-48.4,42,88), new cjs.Rectangle(-21,-48.9,42,88), new cjs.Rectangle(-21,-49.4,42,88), new cjs.Rectangle(-21,-49.9,42,88), new cjs.Rectangle(-21,-50.4,42,88), new cjs.Rectangle(-21,-50.8,42,88), new cjs.Rectangle(-21,-51.3,42,88), new cjs.Rectangle(-21,-51.7,42,88), new cjs.Rectangle(-21,-52.1,42,88), new cjs.Rectangle(-21,-52.5,42,88), new cjs.Rectangle(-21,-52.8,42,88), new cjs.Rectangle(-21,-53.2,42,88), new cjs.Rectangle(-21,-53.4,42,88), new cjs.Rectangle(-21,-53.7,42,88), new cjs.Rectangle(-21,-53.9,42,88), new cjs.Rectangle(-21,-54.1,42,88), new cjs.Rectangle(-21,-54.2,42,88), new cjs.Rectangle(-21,-54.4,42,88), rect=new cjs.Rectangle(-21,-54.5,42,88), rect, rect=new cjs.Rectangle(-21,-54.6,42,88), rect, rect, rect=new cjs.Rectangle(-21,-54.5,42,88), rect, new cjs.Rectangle(-21,-54.4,42,88), new cjs.Rectangle(-21,-54.3,42,88), new cjs.Rectangle(-21,-54.2,42,88), new cjs.Rectangle(-21,-54,42,88), new cjs.Rectangle(-21,-53.8,42,88), new cjs.Rectangle(-21,-53.6,42,88), new cjs.Rectangle(-21,-53.4,42,88), new cjs.Rectangle(-21,-53.1,42,88), new cjs.Rectangle(-21,-52.8,42,88), new cjs.Rectangle(-21,-52.5,42,88), new cjs.Rectangle(-21,-52.2,42,88), new cjs.Rectangle(-21,-51.8,42,88), new cjs.Rectangle(-21,-51.4,42,88), new cjs.Rectangle(-21,-51,42,88), new cjs.Rectangle(-21,-50.5,42,88), new cjs.Rectangle(-21,-50.1,42,88), new cjs.Rectangle(-21,-49.6,42,88), new cjs.Rectangle(-21,-49.2,42,88), new cjs.Rectangle(-21,-48.7,42,88), new cjs.Rectangle(-21,-48.2,42,88), new cjs.Rectangle(-21,-47.8,42,88), new cjs.Rectangle(-21,-47.4,42,88), new cjs.Rectangle(-21,-46.9,42,88), new cjs.Rectangle(-21,-46.6,42,88), new cjs.Rectangle(-21,-46.2,42,88), new cjs.Rectangle(-21,-45.8,42,88), new cjs.Rectangle(-21,-45.5,42,88), new cjs.Rectangle(-21,-45.2,42,88), new cjs.Rectangle(-21,-45,42,88), new cjs.Rectangle(-21,-44.8,42,88), new cjs.Rectangle(-21,-44.6,42,88), new cjs.Rectangle(-21,-44.4,42,88), new cjs.Rectangle(-21,-44.3,42,88), new cjs.Rectangle(-21,-44.2,42,88), new cjs.Rectangle(-21,-44.1,42,88), rect=new cjs.Rectangle(-21,-44,42,88), rect, rect];


(lib.Credits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lights
	this.instance = new lib.cinematic_glow_1();
	this.instance.setTransform(800.4,297.8);

	this.instance_1 = new lib.cinematic_glow_2();
	this.instance_1.setTransform(733.5,351.3,0.356,0.356);

	this.instance_2 = new lib.cinematic_glow_2();
	this.instance_2.setTransform(697.8,411.6,0.932,0.932);

	this.instance_3 = new lib.cinematic_glow_1();
	this.instance_3.setTransform(772.2,431.5,0.68,0.68);

	this.instance_4 = new lib.cinematic_glow_1();
	this.instance_4.setTransform(622.4,427.9,0.59,0.59);

	this.instance_5 = new lib.cinematic_glow_2();
	this.instance_5.setTransform(475.7,425.4,0.562,0.562);

	this.instance_6 = new lib.cinematic_glow_2();
	this.instance_6.setTransform(209.8,408.6,0.527,0.527);

	this.instance_7 = new lib.cinematic_glow_1();
	this.instance_7.setTransform(129.8,451.3);

	this.instance_8 = new lib.cinematic_glow_2();
	this.instance_8.setTransform(42.4,417.5,0.833,0.833);

	this.instance_9 = new lib.cinematic_glow_2();
	this.instance_9.setTransform(11.7,272.3,0.67,0.67);

	this.instance_10 = new lib.cinematic_glow_1();
	this.instance_10.setTransform(53,308.1,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// obj
	this.instance_11 = new lib.cinematic_text_cngames();
	this.instance_11.setTransform(400,134);

	this.instance_12 = new lib.cinematic_text_wonbats();
	this.instance_12.setTransform(400,297.1);

	this.instance_13 = new lib.cinematic_balloon();
	this.instance_13.setTransform(143,92);

	this.instance_14 = new lib.cinematic_bat();
	this.instance_14.setTransform(723.1,139.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// bg
	this.instance_15 = new lib.cinematic_credits_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,814.3,465.3);
p.frameBounds = [rect];


(lib.CinematicOutro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":0,"out":335});

	// timeline functions:
	this.frame_5 = function() {
		this.signal.emit("sound", "cinematic_win");
	}
	this.frame_190 = function() {
		this.signal.emit("sound", "cinematic_sumo_laugh");
	}
	this.frame_213 = function() {
		this.signal.emit("sound", "cinematic_surprise");
	}
	this.frame_253 = function() {
		this.signal.emit("sound", "cinematic_jeff_no");
	}
	this.frame_280 = function() {
		this.signal.emit("music", "cinematic_credits");
	}
	this.frame_334 = function() {
		this.stop();
	}
	this.frame_347 = function() {
		this.stop();
		this.signal.emit("exit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(185).call(this.frame_190).wait(23).call(this.frame_213).wait(40).call(this.frame_253).wait(27).call(this.frame_280).wait(54).call(this.frame_334).wait(13).call(this.frame_347).wait(1));

	// white
	this.instance = new lib.cinematic_white();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(347).to({_off:false},0).wait(1));

	// flash
	this.instance_1 = new lib.cinematic_selection_flash();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(335).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.165},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.334},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0.601},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(2));

	// black
	this.instance_2 = new lib.cinematic_x_blackie();
	this.instance_2.setTransform(404.6,199.4,11.295,7.343,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},8).to({_off:true},1).wait(339));

	// byrron
	this.homeBtn = new lib.cinematic_HomeBtn();
	this.homeBtn.setTransform(839.6,409.9,0.591,0.591,0,0,0,-1,2);

	this.timeline.addTween(cjs.Tween.get(this.homeBtn).wait(318).to({x:824.8},0).wait(1).to({x:811.7},0).wait(1).to({x:800},0).wait(1).to({x:789.6},0).wait(1).to({x:780.4},0).wait(1).to({x:772.5},0).wait(1).to({x:765.7},0).wait(1).to({x:760.4},0).wait(1).to({x:756.3},0).wait(1).to({x:753.8},0).wait(1).to({x:753},0).wait(1).to({x:753.5},0).wait(1).to({x:755.3},0).wait(1).to({x:757.9},0).wait(1).to({x:760.2},0).wait(1).to({x:761},0).wait(15));

	// credits
	this.instance_3 = new lib.Credits();
	this.instance_3.setTransform(398.5,-219.2,1,1,0,0,0,399,237.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(261).to({_off:false},0).wait(1).to({regX:407.2,regY:232.6,x:406.7,y:-223.7},0).wait(1).to({y:-223.1},0).wait(1).to({y:-222.1},0).wait(1).to({y:-220.7},0).wait(1).to({y:-218.7},0).wait(1).to({y:-216.3},0).wait(1).to({y:-213.4},0).wait(1).to({y:-209.9},0).wait(1).to({y:-205.8},0).wait(1).to({y:-201.1},0).wait(1).to({y:-195.7},0).wait(1).to({y:-189.6},0).wait(1).to({y:-182.8},0).wait(1).to({x:406.8,y:-175.1},0).wait(1).to({y:-166.6},0).wait(1).to({y:-157.3},0).wait(1).to({y:-146.9},0).wait(1).to({y:-135.6},0).wait(1).to({y:-123.2},0).wait(1).to({y:-109.7},0).wait(1).to({x:406.9,y:-95.1},0).wait(1).to({y:-79.4},0).wait(1).to({y:-62.7},0).wait(1).to({y:-44.8},0).wait(1).to({y:-26.1},0).wait(1).to({x:407,y:-6.5},0).wait(1).to({y:13.6},0).wait(1).to({y:33.9},0).wait(1).to({y:54.3},0).wait(1).to({x:407.1,y:74.3},0).wait(1).to({y:93.7},0).wait(1).to({y:112.2},0).wait(1).to({y:129.4},0).wait(1).to({y:145.4},0).wait(1).to({x:407.2,y:159.9},0).wait(1).to({y:173},0).wait(1).to({y:184.5},0).wait(1).to({y:194.7},0).wait(1).to({y:203.4},0).wait(1).to({y:210.9},0).wait(1).to({y:217.1},0).wait(1).to({y:222.1},0).wait(1).to({y:226.1},0).wait(1).to({y:229},0).wait(1).to({y:231.1},0).wait(1).to({y:232.3},0).wait(1).to({regX:399,regY:237.3,x:399,y:237.3},0).wait(40));

	// sumo
	this.instance_4 = new lib.cinematic_sumo();
	this.instance_4.setTransform(593,-317.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).wait(1).to({regX:-3.9,regY:-52.5,x:589.1,y:-370},0).wait(1).to({y:-369},0).wait(1).to({y:-367.2},0).wait(1).to({y:-364.6},0).wait(1).to({y:-361.2},0).wait(1).to({y:-357},0).wait(1).to({y:-351.8},0).wait(1).to({y:-345.8},0).wait(1).to({y:-338.7},0).wait(1).to({y:-330.6},0).wait(1).to({y:-321.4},0).wait(1).to({y:-311.1},0).wait(1).to({y:-299.6},0).wait(1).to({y:-286.9},0).wait(1).to({y:-273},0).wait(1).to({y:-257.8},0).wait(1).to({y:-241.4},0).wait(1).to({y:-223.8},0).wait(1).to({y:-205},0).wait(1).to({y:-185},0).wait(1).to({y:-164.1},0).wait(1).to({y:-142.2},0).wait(1).to({y:-119.6},0).wait(1).to({y:-96.5},0).wait(1).to({y:-73.2},0).wait(1).to({y:-49.8},0).wait(1).to({y:-26.7},0).wait(1).to({y:-4},0).wait(1).to({y:17.9},0).wait(1).to({y:38.9},0).wait(1).to({y:58.8},0).wait(1).to({y:77.4},0).wait(1).to({y:94.6},0).wait(1).to({y:110.4},0).wait(1).to({y:124.7},0).wait(1).to({y:137.6},0).wait(1).to({y:149},0).wait(1).to({y:158.9},0).wait(1).to({y:167.5},0).wait(1).to({y:174.8},0).wait(1).to({y:180.8},0).wait(1).to({y:185.5},0).wait(1).to({y:189.2},0).wait(1).to({y:191.7},0).wait(1).to({y:193.1},0).wait(1).to({regX:0,regY:0,x:593,y:246.1},0).wait(107).to({regX:-3.9,regY:-52.5,x:589.1,y:193.8},0).wait(1).to({y:194.4},0).wait(1).to({y:195.5},0).wait(1).to({y:197},0).wait(1).to({y:199},0).wait(1).to({y:201.6},0).wait(1).to({y:204.6},0).wait(1).to({y:208.3},0).wait(1).to({y:212.6},0).wait(1).to({y:217.5},0).wait(1).to({y:223.2},0).wait(1).to({y:229.6},0).wait(1).to({y:236.7},0).wait(1).to({y:244.7},0).wait(1).to({y:253.6},0).wait(1).to({y:263.5},0).wait(1).to({y:274.3},0).wait(1).to({y:286.2},0).wait(1).to({y:299.2},0).wait(1).to({y:313.3},0).wait(1).to({y:328.6},0).wait(1).to({y:345.1},0).wait(1).to({y:362.7},0).wait(1).to({y:381.4},0).wait(1).to({y:401.1},0).wait(1).to({y:421.6},0).wait(1).to({y:442.6},0).wait(1).to({y:464},0).wait(1).to({y:485.4},0).wait(1).to({y:506.4},0).wait(1).to({y:526.7},0).wait(1).to({y:546},0).wait(1).to({y:564.2},0).wait(1).to({y:580.9},0).wait(1).to({y:596.1},0).wait(1).to({y:609.8},0).wait(1).to({y:621.9},0).wait(1).to({y:632.6},0).wait(1).to({y:641.7},0).wait(1).to({y:649.5},0).wait(1).to({y:656},0).wait(1).to({y:661.3},0).wait(1).to({y:665.5},0).wait(1).to({y:668.6},0).wait(1).to({y:670.8},0).wait(1).to({y:672},0).wait(1).to({regX:0,regY:0,x:593,y:724.9},0).to({_off:true},1).wait(39));

	// clarence
	this.instance_5 = new lib.cinematic_clarence();
	this.instance_5.setTransform(177.4,-343.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).wait(1).to({regX:29.4,regY:-1.9,x:206.8,y:-345.1},0).wait(1).to({y:-344.1},0).wait(1).to({y:-342.3},0).wait(1).to({y:-339.7},0).wait(1).to({y:-336.3},0).wait(1).to({y:-332.1},0).wait(1).to({y:-326.9},0).wait(1).to({y:-320.9},0).wait(1).to({y:-313.8},0).wait(1).to({y:-305.7},0).wait(1).to({y:-296.5},0).wait(1).to({y:-286.2},0).wait(1).to({y:-274.7},0).wait(1).to({y:-262},0).wait(1).to({y:-248.1},0).wait(1).to({y:-232.9},0).wait(1).to({y:-216.5},0).wait(1).to({y:-198.9},0).wait(1).to({y:-180.1},0).wait(1).to({y:-160.1},0).wait(1).to({y:-139.2},0).wait(1).to({y:-117.3},0).wait(1).to({y:-94.7},0).wait(1).to({y:-71.6},0).wait(1).to({y:-48.3},0).wait(1).to({y:-24.9},0).wait(1).to({y:-1.8},0).wait(1).to({y:20.9},0).wait(1).to({y:42.8},0).wait(1).to({y:63.8},0).wait(1).to({y:83.7},0).wait(1).to({y:102.3},0).wait(1).to({y:119.5},0).wait(1).to({y:135.3},0).wait(1).to({y:149.6},0).wait(1).to({y:162.5},0).wait(1).to({y:173.9},0).wait(1).to({y:183.8},0).wait(1).to({y:192.4},0).wait(1).to({y:199.7},0).wait(1).to({y:205.7},0).wait(1).to({y:210.4},0).wait(1).to({y:214.1},0).wait(1).to({y:216.6},0).wait(1).to({y:218},0).wait(1).to({regX:0,regY:0,x:177.4,y:220.4},0).wait(107).to({regX:29.4,regY:-1.9,x:206.8,y:218.7},0).wait(1).to({y:219.3},0).wait(1).to({y:220.4},0).wait(1).to({y:221.9},0).wait(1).to({y:223.9},0).wait(1).to({y:226.5},0).wait(1).to({y:229.5},0).wait(1).to({y:233.2},0).wait(1).to({y:237.5},0).wait(1).to({y:242.4},0).wait(1).to({y:248.1},0).wait(1).to({y:254.5},0).wait(1).to({y:261.6},0).wait(1).to({y:269.6},0).wait(1).to({y:278.5},0).wait(1).to({y:288.4},0).wait(1).to({y:299.2},0).wait(1).to({y:311.1},0).wait(1).to({y:324.1},0).wait(1).to({y:338.2},0).wait(1).to({y:353.5},0).wait(1).to({y:370},0).wait(1).to({y:387.6},0).wait(1).to({y:406.3},0).wait(1).to({y:426},0).wait(1).to({y:446.5},0).wait(1).to({y:467.5},0).wait(1).to({y:488.9},0).wait(1).to({y:510.3},0).wait(1).to({y:531.3},0).wait(1).to({y:551.6},0).wait(1).to({y:570.9},0).wait(1).to({y:589.1},0).wait(1).to({y:605.8},0).wait(1).to({y:621},0).wait(1).to({y:634.7},0).wait(1).to({y:646.8},0).wait(1).to({y:657.5},0).wait(1).to({y:666.6},0).wait(1).to({y:674.4},0).wait(1).to({y:680.9},0).wait(1).to({y:686.2},0).wait(1).to({y:690.4},0).wait(1).to({y:693.5},0).wait(1).to({y:695.7},0).wait(1).to({y:696.9},0).wait(1).to({regX:0,regY:0,x:177.4,y:699.2},0).to({_off:true},1).wait(39));

	// outro_bg_2
	this.instance_6 = new lib.cinematic_cinematic_bg_2();
	this.instance_6.setTransform(0,-476.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110).to({regX:400,regY:407.2,x:400,y:-68.8},0).wait(1).to({y:-67.7},0).wait(1).to({y:-65.9},0).wait(1).to({y:-63.4},0).wait(1).to({y:-60},0).wait(1).to({y:-55.8},0).wait(1).to({y:-50.7},0).wait(1).to({y:-44.6},0).wait(1).to({y:-37.6},0).wait(1).to({y:-29.5},0).wait(1).to({y:-20.4},0).wait(1).to({y:-10.1},0).wait(1).to({y:1.3},0).wait(1).to({y:13.9},0).wait(1).to({y:27.7},0).wait(1).to({y:42.8},0).wait(1).to({y:59.1},0).wait(1).to({y:76.7},0).wait(1).to({y:95.4},0).wait(1).to({y:115.2},0).wait(1).to({y:136.1},0).wait(1).to({y:157.9},0).wait(1).to({y:180.3},0).wait(1).to({y:203.3},0).wait(1).to({y:226.5},0).wait(1).to({y:249.8},0).wait(1).to({y:272.9},0).wait(1).to({y:295.4},0).wait(1).to({y:317.2},0).wait(1).to({y:338.1},0).wait(1).to({y:357.8},0).wait(1).to({y:376.3},0).wait(1).to({y:393.5},0).wait(1).to({y:409.1},0).wait(1).to({y:423.4},0).wait(1).to({y:436.2},0).wait(1).to({y:447.5},0).wait(1).to({y:457.4},0).wait(1).to({y:466},0).wait(1).to({y:473.2},0).wait(1).to({y:479.1},0).wait(1).to({y:483.9},0).wait(1).to({y:487.5},0).wait(1).to({y:490},0).wait(1).to({y:491.4},0).wait(1).to({regX:0,regY:0,x:0,y:84.7},0).wait(107).to({regX:400,regY:407.2,x:400,y:492.1},0).wait(1).to({y:492.7},0).wait(1).to({y:493.8},0).wait(1).to({y:495.3},0).wait(1).to({y:497.3},0).wait(1).to({y:499.9},0).wait(1).to({y:502.9},0).wait(1).to({y:506.6},0).wait(1).to({y:510.9},0).wait(1).to({y:515.8},0).wait(1).to({y:521.5},0).wait(1).to({y:527.9},0).wait(1).to({y:535},0).wait(1).to({y:543},0).wait(1).to({y:551.9},0).wait(1).to({y:561.8},0).wait(1).to({y:572.6},0).wait(1).to({y:584.5},0).wait(1).to({y:597.5},0).wait(1).to({y:611.6},0).wait(1).to({y:626.9},0).wait(1).to({y:643.4},0).wait(1).to({y:661},0).wait(1).to({y:679.7},0).wait(1).to({y:699.4},0).wait(1).to({y:719.9},0).wait(1).to({y:740.9},0).wait(1).to({y:762.3},0).wait(1).to({y:783.7},0).wait(1).to({y:804.7},0).wait(1).to({y:825},0).wait(1).to({y:844.3},0).wait(1).to({y:862.5},0).wait(1).to({y:879.2},0).wait(1).to({y:894.4},0).wait(1).to({y:908.1},0).wait(1).to({y:920.2},0).wait(1).to({y:930.9},0).wait(1).to({y:940},0).wait(1).to({y:947.8},0).wait(1).to({y:954.3},0).wait(1).to({y:959.6},0).wait(1).to({y:963.8},0).wait(1).to({y:966.9},0).wait(1).to({y:969.1},0).wait(1).to({y:970.3},0).wait(1).to({regX:0,regY:0,x:0,y:563.5},0).to({_off:true},1).wait(39));

	// x_papelpicado_2 copy
	this.instance_7 = new lib.cinematic_x_papelpicado_2();
	this.instance_7.setTransform(490.3,-136.8,1.177,1.177,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:553.3},119).to({_off:true},1).wait(228));

	// x_papelpicado_1 copy
	this.instance_8 = new lib.cinematic_x_papelpicado_1();
	this.instance_8.setTransform(256.7,-33.6,1.177,1.177,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.31,scaleY:1.31,x:288.9,y:770.1},119).to({_off:true},1).wait(228));

	// jeff
	this.instance_9 = new lib.cinematic_jeff();
	this.instance_9.setTransform(357.3,280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110).to({regX:41.8,regY:13,x:399.1,y:293.3},0).wait(1).to({y:294.3},0).wait(1).to({y:295.8},0).wait(1).to({y:298.1},0).wait(1).to({y:301},0).wait(1).to({y:304.8},0).wait(1).to({y:309.3},0).wait(1).to({y:314.6},0).wait(1).to({y:320.8},0).wait(1).to({y:327.9},0).wait(1).to({y:335.9},0).wait(1).to({y:345},0).wait(1).to({y:355},0).wait(1).to({y:366.1},0).wait(1).to({y:378.3},0).wait(1).to({y:391.6},0).wait(1).to({y:406},0).wait(1).to({y:421.4},0).wait(1).to({y:437.9},0).wait(1).to({y:455.4},0).wait(1).to({y:473.8},0).wait(1).to({y:492.9},0).wait(1).to({y:512.7},0).wait(1).to({y:532.9},0).wait(1).to({y:553.4},0).wait(1).to({y:573.9},0).wait(1).to({y:594.2},0).wait(1).to({y:614},0).wait(1).to({y:633.2},0).wait(1).to({y:651.6},0).wait(1).to({y:669},0).wait(1).to({y:685.3},0).wait(1).to({y:700.4},0).wait(1).to({y:714.2},0).wait(1).to({y:726.7},0).wait(1).to({y:738},0).wait(1).to({y:748},0).wait(1).to({y:756.7},0).wait(1).to({y:764.3},0).wait(1).to({y:770.6},0).wait(1).to({y:775.9},0).wait(1).to({y:780},0).wait(1).to({y:783.2},0).wait(1).to({y:785.4},0).wait(1).to({y:786.7},0).wait(1).to({regX:0,regY:0,x:357.3,y:774.1},0).to({_off:true},1).wait(192));

	// x_papelpicado_1
	this.instance_10 = new lib.cinematic_x_papelpicado_1();
	this.instance_10.setTransform(373.6,-268.2,0.911,0.911);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:9,y:538.6},119).to({_off:true},1).wait(228));

	// x_papelpicado_2
	this.instance_11 = new lib.cinematic_x_papelpicado_2();
	this.instance_11.setTransform(202.1,-49,1.177,1.177,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({skewX:188,skewY:8,y:1143.6},119).to({_off:true},1).wait(228));

	// x_papelpicado_1
	this.instance_12 = new lib.cinematic_x_papelpicado_1();
	this.instance_12.setTransform(448.6,-1.4,1.177,1.177,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:170.5,skewY:-9.5,y:1191.2},119).to({_off:true},1).wait(228));

	// x_papelpicado_2
	this.instance_13 = new lib.cinematic_x_papelpicado_2();
	this.instance_13.setTransform(518.6,-158.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-8.2,y:863.9},119).to({_off:true},1).wait(228));

	// x_papelpicado_1
	this.instance_14 = new lib.cinematic_x_papelpicado_1();
	this.instance_14.setTransform(246.1,-164.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:6.5,y:857.6},119).to({_off:true},1).wait(228));

	// outro_bg_1
	this.instance_15 = new lib.cinematic_outro_bg_1_1();
	this.instance_15.setTransform(0,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(110).to({regX:400,regY:252,x:400,y:199.8},0).wait(1).to({y:200.6},0).wait(1).to({y:202},0).wait(1).to({y:203.9},0).wait(1).to({y:206.6},0).wait(1).to({y:209.8},0).wait(1).to({y:213.8},0).wait(1).to({y:218.5},0).wait(1).to({y:224},0).wait(1).to({y:230.3},0).wait(1).to({y:237.4},0).wait(1).to({y:245.3},0).wait(1).to({y:254.2},0).wait(1).to({y:264},0).wait(1).to({y:274.7},0).wait(1).to({y:286.4},0).wait(1).to({y:299.1},0).wait(1).to({y:312.7},0).wait(1).to({y:327.3},0).wait(1).to({y:342.7},0).wait(1).to({y:358.9},0).wait(1).to({y:375.8},0).wait(1).to({y:393.3},0).wait(1).to({y:411.2},0).wait(1).to({y:429.2},0).wait(1).to({y:447.3},0).wait(1).to({y:465.2},0).wait(1).to({y:482.7},0).wait(1).to({y:499.7},0).wait(1).to({y:515.9},0).wait(1).to({y:531.3},0).wait(1).to({y:545.6},0).wait(1).to({y:558.9},0).wait(1).to({y:571.2},0).wait(1).to({y:582.2},0).wait(1).to({y:592.2},0).wait(1).to({y:601},0).wait(1).to({y:608.7},0).wait(1).to({y:615.3},0).wait(1).to({y:621},0).wait(1).to({y:625.6},0).wait(1).to({y:629.3},0).wait(1).to({y:632.1},0).wait(1).to({y:634},0).wait(1).to({y:635.1},0).wait(1).to({regX:0,regY:0,x:0,y:383.5},0).to({_off:true},1).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.6,-591.6,885,1061.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-15.4,-591.6,884.8,1061.5), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-15.6,-591.6,885,1061.6), rect=new cjs.Rectangle(0,-591.6,869.4,1055.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-591.6,869.4,1065.2), new cjs.Rectangle(0,-591.6,869.4,1075.2), new cjs.Rectangle(0,-591.6,869.4,1085.3), new cjs.Rectangle(0,-591.6,869.4,1095.8), new cjs.Rectangle(0,-591.6,869.4,1105.8), new cjs.Rectangle(0,-591.6,869.4,1115.9), new cjs.Rectangle(0,-591.6,869.4,1126.3), new cjs.Rectangle(0,-591.6,869.4,1136.4), new cjs.Rectangle(0,-591.6,869.4,1146.4), new cjs.Rectangle(0,-591.6,869.4,1156.9), new cjs.Rectangle(0,-591.6,869.4,1166.9), new cjs.Rectangle(0,-591.6,869.4,1176.9), new cjs.Rectangle(0,-591.6,869.4,1187.1), new cjs.Rectangle(0,-591.6,869.4,1197.4), new cjs.Rectangle(0,-591.6,869.4,1207.5), new cjs.Rectangle(0,-591.6,869.4,1217.6), new cjs.Rectangle(0,-591.6,869.4,1227.9), new cjs.Rectangle(0,-591.6,869.4,1238), new cjs.Rectangle(0,-591.6,869.4,1248.1), new cjs.Rectangle(0,-591.6,869.4,1258.6), new cjs.Rectangle(0,-591.6,869.4,1268.6), new cjs.Rectangle(0,-591.6,869.4,1278.7), new cjs.Rectangle(0,-591.6,869.4,1289.1), new cjs.Rectangle(0,-591.6,869.4,1299.2), new cjs.Rectangle(0,-591.6,869.4,1309.2), new cjs.Rectangle(0,-591.6,869.4,1319.7), new cjs.Rectangle(0,-591.6,869.4,1329.7), new cjs.Rectangle(0,-591.6,869.4,1339.7), new cjs.Rectangle(0,-591.6,869.4,1350.2), new cjs.Rectangle(0,-591.6,869.4,1360.2), new cjs.Rectangle(0,-591.6,869.4,1370.3), new cjs.Rectangle(0,-591.6,869.4,1380.7), new cjs.Rectangle(0,-591.6,869.4,1390.8), new cjs.Rectangle(0,-591.6,869.4,1400.8), new cjs.Rectangle(0,-591.6,869.4,1410.9), new cjs.Rectangle(0,-591.6,869.4,1421.3), new cjs.Rectangle(0,-591.6,869.4,1431.3), new cjs.Rectangle(0,-591.6,869.4,1441.4), new cjs.Rectangle(0,-591.6,869.4,1451.8), new cjs.Rectangle(0,-591.6,869.4,1461.9), new cjs.Rectangle(0,-591.6,869.4,1471.9), new cjs.Rectangle(0,-591.6,869.4,1482.4), new cjs.Rectangle(0,-591.6,869.4,1492.4), new cjs.Rectangle(0,-591.6,869.4,1502.5), new cjs.Rectangle(0,-591.6,869.4,1512.9), new cjs.Rectangle(0,-591.6,869.4,1522.9), new cjs.Rectangle(0,-591.6,869.4,1533.1), new cjs.Rectangle(0,-591.6,869.4,1543.4), new cjs.Rectangle(0,-591.6,869.4,1553.5), new cjs.Rectangle(0,-591.6,869.4,1563.6), new cjs.Rectangle(0,-591.6,869.4,1573.9), new cjs.Rectangle(0,-591.6,869.4,1584), new cjs.Rectangle(0,-591.6,869.4,1594.1), new cjs.Rectangle(0,-591.6,869.4,1604.4), new cjs.Rectangle(0,-591.6,869.4,1614.5), new cjs.Rectangle(0,-591.6,869.4,1624.6), new cjs.Rectangle(0,-591.6,869.4,1635), new cjs.Rectangle(0,-591.6,869.4,1645.1), new cjs.Rectangle(0,-591.6,869.4,1655.1), new cjs.Rectangle(0,-591.6,869.4,1665.2), new cjs.Rectangle(0,-591.6,869.4,1675.6), new cjs.Rectangle(0,-591.6,869.4,1685.6), new cjs.Rectangle(0,-591.6,869.4,1695.7), new cjs.Rectangle(0,-591.6,869.4,1706.1), new cjs.Rectangle(0,-591.6,869.4,1716.2), new cjs.Rectangle(0,-591.6,869.4,1726.2), new cjs.Rectangle(0,-591.6,869.4,1736.6), new cjs.Rectangle(0,-591.6,869.4,1746.7), new cjs.Rectangle(0,-591.6,869.4,1756.7), new cjs.Rectangle(0,-591.6,869.4,1767.2), new cjs.Rectangle(0,-591.6,869.4,1777.2), new cjs.Rectangle(0,-591.6,869.4,1787.3), new cjs.Rectangle(0,-591.3,869.4,1797.3), new cjs.Rectangle(0,-590.2,869.4,1806.3), new cjs.Rectangle(0,-588.5,869.4,1814.6), new cjs.Rectangle(0,-585.9,869.4,1822.4), new cjs.Rectangle(0,-582.6,869.4,1829.2), new cjs.Rectangle(0,-578.3,869.4,1835), new cjs.Rectangle(0,-573.2,869.4,1840.3), new cjs.Rectangle(0,-567.2,869.4,1844.3), new cjs.Rectangle(0,-560.1,869.4,1847.3), new cjs.Rectangle(0,-552.1,869.4,1849.7), new cjs.Rectangle(0,-542.9,869.4,1049.7), new cjs.Rectangle(0,-532.6,869.4,1048.4), new cjs.Rectangle(0,-521.2,869.4,1047.1), new cjs.Rectangle(0,-508.6,869.4,1045.6), new cjs.Rectangle(0,-494.8,869.4,1045), new cjs.Rectangle(0,-479.7,869.4,1045), new cjs.Rectangle(0,-463.4,869.4,1045), new cjs.Rectangle(0,-445.9,869.4,1045), new cjs.Rectangle(0,-427.1,869.4,1045), new cjs.Rectangle(0,-407.3,869.4,1045), new cjs.Rectangle(0,-386.4,869.4,1045), new cjs.Rectangle(0,-364.7,869.4,1045), new cjs.Rectangle(0,-342.2,869.4,1045), new cjs.Rectangle(0,-319.2,869.4,1045), new cjs.Rectangle(0,-296,869.4,1045), new cjs.Rectangle(0,-272.7,869.4,1045), new cjs.Rectangle(0,-249.7,869.4,1045), new cjs.Rectangle(0,-227.1,869.4,1045), new cjs.Rectangle(0,-205.3,869.4,1045), new cjs.Rectangle(0,-184.4,869.4,1045), new cjs.Rectangle(0,-164.7,869.4,1045), new cjs.Rectangle(0,-146.2,869.4,1045), new cjs.Rectangle(0,-129.1,869.4,1045), new cjs.Rectangle(0,-113.4,869.4,1045), new cjs.Rectangle(0,-99.1,869.4,1045), new cjs.Rectangle(0,-86.3,869.4,1045), new cjs.Rectangle(0,-75,869.4,1045), new cjs.Rectangle(0,-65.1,869.4,1045), new cjs.Rectangle(0,-56.5,869.4,1045), new cjs.Rectangle(0,-49.3,869.4,1045), new cjs.Rectangle(0,-43.3,869.4,1045), new cjs.Rectangle(0,-38.6,869.4,1045), new cjs.Rectangle(0,-35,869.4,1045), new cjs.Rectangle(0,-32.5,869.4,1045), new cjs.Rectangle(0,-31.1,869.4,1045), rect=new cjs.Rectangle(0,-30.6,869.4,1045), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-0.5,-456.5,869.9,1471), new cjs.Rectangle(-0.5,-456.3,869.9,1471), new cjs.Rectangle(-0.5,-455.7,869.9,1471), new cjs.Rectangle(-0.5,-454.7,869.9,1471.1), new cjs.Rectangle(-0.5,-453.3,869.9,1471.1), new cjs.Rectangle(-0.5,-451.4,869.9,1471.2), new cjs.Rectangle(-0.5,-448.9,869.9,1471.3), new cjs.Rectangle(-0.5,-446,869.9,1471.5), new cjs.Rectangle(-0.5,-442.5,869.9,1471.6), new cjs.Rectangle(-0.5,-438.4,869.9,1471.9), new cjs.Rectangle(-0.5,-433.7,869.9,1472.1), new cjs.Rectangle(-0.5,-428.3,869.9,1472.3), new cjs.Rectangle(-0.5,-422.2,869.9,1472.6), new cjs.Rectangle(-0.5,-415.4,869.9,1473), new cjs.Rectangle(-0.5,-407.8,869.9,1473.4), new cjs.Rectangle(-0.5,-399.3,869.9,1473.8), new cjs.Rectangle(-0.4,-389.9,869.8,1474.2), new cjs.Rectangle(-0.4,-379.6,869.8,1474.7), new cjs.Rectangle(-0.4,-368.2,869.8,1475.3), new cjs.Rectangle(-0.4,-355.8,869.8,1475.9), new cjs.Rectangle(-0.4,-342.4,869.8,1476.6), new cjs.Rectangle(-0.4,-327.8,869.8,1477.3), new cjs.Rectangle(-0.4,-312.1,869.8,1478), new cjs.Rectangle(-0.3,-295.3,869.7,1478.8), new cjs.Rectangle(-0.3,-277.5,869.7,1479.7), new cjs.Rectangle(-0.3,-258.7,869.7,1480.6), new cjs.Rectangle(-0.3,-239.2,869.7,1481.6), new cjs.Rectangle(-0.2,-219.1,869.6,1482.6), new cjs.Rectangle(-0.2,-198.7,869.6,1483.5), new cjs.Rectangle(-0.2,-178.3,869.6,1484.5), new cjs.Rectangle(-0.2,-158.3,869.6,1485.5), new cjs.Rectangle(-0.1,-138.9,869.5,1486.5), new cjs.Rectangle(-0.1,-120.5,869.5,1487.4), new cjs.Rectangle(-0.1,-103.2,869.5,1488.2), new cjs.Rectangle(-0.1,-87.2,869.5,1489), new cjs.Rectangle(-0.1,-72.7,869.5,1489.7), new cjs.Rectangle(0,-59.7,869.4,1490.3), new cjs.Rectangle(0,-48.1,869.4,1490.9), new cjs.Rectangle(0,-38,869.4,1491.4), new cjs.Rectangle(0,-29.2,869.4,1491.8), new cjs.Rectangle(0,-21.8,869.4,1492.1), new cjs.Rectangle(0,-15.6,869.4,1492.4), new cjs.Rectangle(0,-10.5,869.4,1492.7), new cjs.Rectangle(0,-6.6,869.4,1492.9), new cjs.Rectangle(0,-3.6,869.4,1493), new cjs.Rectangle(0,-1.5,869.4,1493.1), new cjs.Rectangle(0,-0.4,869.4,1493.2), new cjs.Rectangle(0,0,869.4,1493.2), rect=new cjs.Rectangle(0,0,869.4,465.3), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,854.6,465.3), new cjs.Rectangle(0,0,841.5,465.3), new cjs.Rectangle(0,0,829.8,465.3), new cjs.Rectangle(0,0,819.4,465.3), rect=new cjs.Rectangle(0,0,814.3,465.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-22.1,-20.5,842.2,485.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cinematic_intro_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.parent.signal.emit("sound", "thunder");
	}
	this.frame_51 = function() {
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(17).call(this.frame_51).wait(3));

	// white
	this.instance = new lib.cinematic_white();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(4));

	// flash
	this.instance_1 = new lib.cinematic_selection_flash();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.126},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.336},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.349},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.221},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.8},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(5));

	// Layer 3
	this.instance_2 = new lib.cinematic_disapearline();
	this.instance_2.setTransform(448.5,268,0.483,0.483,135);

	this.instance_3 = new lib.cinematic_disapearline();
	this.instance_3.setTransform(356.7,178.2,0.788,0.788,-45);

	this.instance_4 = new lib.cinematic_disapearline();
	this.instance_4.setTransform(351,270.3,0.483,0.483,-135);

	this.instance_5 = new lib.cinematic_disapearline();
	this.instance_5.setTransform(440.8,178.4,0.788,0.788,45);

	this.instance_6 = new lib.cinematic_disapearline();
	this.instance_6.setTransform(456.7,218.8,0.483,0.483,90);

	this.instance_7 = new lib.cinematic_disapearline();
	this.instance_7.setTransform(339.1,220.3,0.788,0.788,-90);

	this.instance_8 = new lib.cinematic_disapearline();
	this.instance_8.setTransform(400.3,289.4,0.483,0.483,180);

	this.instance_9 = new lib.cinematic_disapearline();
	this.instance_9.setTransform(398.8,160.9,0.788,0.788);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},18).wait(36));

	// Layer 2
	this.instance_10 = new lib.cinematic_loading_postitpngcopy();
	this.instance_10.setTransform(377.1,201.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54));

	// loading_bg.png
	this.instance_11 = new lib.cinematic_loading_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,450);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-22.1,-20.5,842.2,481.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CinematicIntro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(15));

	// Layer 2
	this.skipBtn = new lib.cinematic_SkiptButton();
	this.skipBtn.setTransform(757,411.9,0.591,0.591,0,0,0,-1,2);

	this.timeline.addTween(cjs.Tween.get(this.skipBtn).wait(19));

	// Layer 1
	this.instance = new lib.cinematic_intro_1();
	this.instance.setTransform(227.8,240,1,1,0,0,0,227.8,240);

	this.instance_1 = new lib.cinematic_intro_2();
	this.instance_1.setTransform(227.8,240,1,1,0,0,0,227.8,240);

	this.instance_2 = new lib.cinematic_intro_3();
	this.instance_2.setTransform(227.8,240,1,1,0,0,0,227.8,240);

	this.instance_3 = new lib.cinematic_intro_4();
	this.instance_3.setTransform(227.8,240,1,1,0,0,0,227.8,240);

	this.instance_4 = new lib.cinematic_intro_5();
	this.instance_4.setTransform(227.8,240,1,1,0,0,0,227.8,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-36.5,919.5,520);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,800,450), rect=new cjs.Rectangle(-61.7,-36.5,919.5,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.cinematics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(384.4,-366.6,885,1061.6);
p.frameBounds = [rect];

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;
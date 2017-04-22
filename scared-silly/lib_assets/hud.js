(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 450,
	fps: 30,
	color: "#CCCCCC",
	manifest: []
};



// symbols:



(lib.hitbox = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.x_button_base_2_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.x_button_base_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_2_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_highlight_2_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_highlight_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_fullscreen_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_home_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_map_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_musicOFF_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_musicON_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_next_png = function() {
	this.spriteSheet = ss["hud_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_next_png();
	this.instance.setTransform(-21.9,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.9,-26,54,56.1);
p.frameBounds = [rect];


(lib.x_icon_musicON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_musicON_png();
	this.instance.setTransform(-22.5,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-24.6,47.3,55.1);
p.frameBounds = [rect];


(lib.x_icon_musicOFF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_musicOFF_png();
	this.instance.setTransform(-21.5,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-24.6,46.3,54.4);
p.frameBounds = [rect];


(lib.x_icon_map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_map_png();
	this.instance.setTransform(-26.3,-27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.3,-27.3,54,57);
p.frameBounds = [rect];


(lib.x_icon_home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_home_png();
	this.instance.setTransform(-25.7,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-26,54,50.4);
p.frameBounds = [rect];


(lib.x_icon_fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_fullscreen_png();
	this.instance.setTransform(-26.3,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.3,-27.2,55.1,55);
p.frameBounds = [rect];


(lib.x_button_top_highlight_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_top_highlight_2_png();
	this.instance.setTransform(-39,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-39.7,79.2,77.3);
p.frameBounds = [rect];


(lib.x_button_top_highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_top_highlight_png();
	this.instance.setTransform(-39,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-39.7,79.2,77.3);
p.frameBounds = [rect];


(lib.x_button_top_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_top_2_png();
	this.instance.setTransform(-39,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-39.7,79.2,77.3);
p.frameBounds = [rect];


(lib.x_button_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_top_png();
	this.instance.setTransform(-39,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-39.7,79.2,77.3);
p.frameBounds = [rect];


(lib.x_button_base_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_base_2_png();
	this.instance.setTransform(-40.2,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-19.2,81,65.3);
p.frameBounds = [rect];


(lib.x_button_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_base_png();
	this.instance.setTransform(-40.2,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-19.2,81,65.3);
p.frameBounds = [rect];


(lib.hitboxbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hitbox();
	this.instance.setTransform(-51.4,-49.3,1.097,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect];


(lib.NextButton = function(mode,startPosition,loop) {
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
	this.instance = new lib.x_icon_next();
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:5,regY:2,x:5,y:3.7},0).wait(1).to({y:3.4},0).wait(1).to({y:2.9},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:5,regY:2,x:5,y:2.8},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:5,regY:2,x:5,y:2.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:5,regY:2,x:5,y:2.4},0).wait(1).to({y:3.3},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.HomeBtn = function(mode,startPosition,loop) {
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
	this.instance = new lib.x_icon_home();
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.3,regY:-1.1,x:1.3,y:0.6},0).wait(1).to({y:0.3},0).wait(1).to({y:-0.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1.3,regY:-1.1,x:1.3,y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:1.3,regY:-1.1,x:1.3,y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1.3,regY:-1.1,x:1.3,y:-0.7},0).wait(1).to({y:0.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.FullscreenBtn = function(mode,startPosition,loop) {
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
	this.instance = new lib.x_icon_fullscreen();
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.2,regY:0.3,x:1.2,y:2},0).wait(1).to({y:1.7},0).wait(1).to({y:1.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1.2,regY:0.3,x:1.2,y:1.1},0).wait(1).to({regX:0,regY:0,x:0},0).wait(1).to({regX:1.2,regY:0.3,x:1.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1.2,regY:0.3,x:1.2,y:0.7},0).wait(1).to({y:1.6},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ExitBtn = function(mode,startPosition,loop) {
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
	this.instance = new lib.x_icon_map();
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.6,regY:1.1,x:0.6,y:2.8},0).wait(1).to({y:2.5},0).wait(1).to({y:2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.6,regY:1.1,x:0.6,y:1.9},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.6,regY:1.1,x:0.6,y:1.9},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.6,regY:1.1,x:0.6,y:1.5},0).wait(1).to({y:2.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.button_music_off = function(mode,startPosition,loop) {
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
	this.instance = new lib.x_icon_musicOFF();
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.4,regY:2.4,x:1.4,y:4.1},0).wait(1).to({y:3.8},0).wait(1).to({y:3.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1.4,regY:2.4,x:1.4,y:3.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:1.4,regY:2.4,x:1.4,y:3.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1.4,regY:2.4,x:1.4,y:2.8},0).wait(1).to({y:3.7},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top_2();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight_2();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base_2();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.button_music = function(mode,startPosition,loop) {
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
	this.instance = new lib.x_icon_musicON();
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1,regY:2.9,x:1,y:4.6},0).wait(1).to({y:4.3},0).wait(1).to({y:3.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1,regY:2.9,x:1,y:3.7},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:1,regY:2.9,x:1,y:3.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1,regY:2.9,x:1,y:3.3},0).wait(1).to({y:4.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.4,regY:-1.2,x:0.4,y:-0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.4,regY:-1.2,x:0.4,y:-0.8},0).wait(1).to({y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.SoundBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.soundOn = new lib.button_music();

	this.timeline.addTween(cjs.Tween.get(this.soundOn).wait(1));

	// Layer 2
	this.soundOff = new lib.button_music_off();

	this.timeline.addTween(cjs.Tween.get(this.soundOff).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-49.3,100.9,102.7);
p.frameBounds = [rect];


(lib.HUDLevelSelector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.soundBtn = new lib.SoundBtn();
	this.soundBtn.setTransform(51.3,47.1);

	this.fullscreenBtn = new lib.FullscreenBtn();
	this.fullscreenBtn.setTransform(753.2,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fullscreenBtn},{t:this.soundBtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.2,-2.2,802.9,105.7);
p.frameBounds = [rect];


(lib.HUD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":0,"out":12});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(13).call(this.frame_24).wait(1));

	// fullscreenBtn
	this.fullscreenBtn = new lib.FullscreenBtn();
	this.fullscreenBtn.setTransform(836.7,-132.5,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.fullscreenBtn).wait(1).to({regX:-1,regY:2,x:818.9,y:-131.2},0).wait(1).to({x:803.4},0).wait(1).to({x:789.9},0).wait(1).to({x:778.5},0).wait(1).to({x:769.3},0).wait(1).to({x:762.5},0).wait(1).to({x:758.3},0).wait(1).to({regX:0,regY:0,x:757.4,y:-132.5},0).wait(1).to({regX:-1,regY:2,x:757.6,y:-131.2},0).wait(1).to({x:761.1},0).wait(1).to({regX:0,regY:0,x:763.9,y:-132.5},0).wait(1).to({regX:-1,regY:2,x:762.6,y:-131.2},0).wait(1).to({x:760.2},0).wait(1).to({x:757.6},0).wait(1).to({regX:0,regY:0,x:757.4,y:-132.5},0).wait(1).to({regX:-1,regY:2,x:757.3,y:-131.2},0).wait(1).to({x:759},0).wait(1).to({x:762.2},0).wait(1).to({x:767},0).wait(1).to({x:774},0).wait(1).to({x:783.7},0).wait(1).to({x:797},0).wait(1).to({x:814.6},0).wait(1).to({regX:0,regY:0,x:836.7,y:-132.5},0).wait(1));

	// exitBtn
	this.exitBtn = new lib.ExitBtn();
	this.exitBtn.setTransform(-39,31.2,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.exitBtn).wait(1).to({regX:-1,regY:2,x:-22.4,y:32.5},0).wait(1).to({x:-6.9},0).wait(1).to({x:6.6},0).wait(1).to({x:18},0).wait(1).to({x:27.2},0).wait(1).to({x:34},0).wait(1).to({x:38.2},0).wait(1).to({regX:0,regY:0,x:40.3,y:31.2},0).wait(1).to({regX:-1,regY:2,x:38.9,y:32.5},0).wait(1).to({x:35.4},0).wait(1).to({regX:0,regY:0,x:33.8,y:31.2},0).wait(1).to({regX:-1,regY:2,x:33.9,y:32.5},0).wait(1).to({x:36.3},0).wait(1).to({x:38.9},0).wait(1).to({regX:0,regY:0,x:40.3,y:31.2},0).wait(1).to({regX:-1,regY:2,x:39.2,y:32.5},0).wait(1).to({x:37.5},0).wait(1).to({x:34.3},0).wait(1).to({x:29.5},0).wait(1).to({x:22.5},0).wait(1).to({x:12.7},0).wait(1).to({x:-0.5},0).wait(1).to({x:-18.1},0).wait(1).to({regX:0,regY:0,x:-39,y:31.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.8,-162.9,938,227.1);
p.frameBounds = [rect, new cjs.Rectangle(-53.6,-162.9,903.7,227.2), new cjs.Rectangle(-38.2,-162.9,872.8,227.2), new cjs.Rectangle(-24.6,-162.9,845.7,227.2), new cjs.Rectangle(-13.2,-162.9,822.9,227.2), new cjs.Rectangle(-4,-162.9,804.5,227.2), new cjs.Rectangle(2.8,-162.9,790.9,227.2), new cjs.Rectangle(7.1,-162.9,782.4,227.2), new cjs.Rectangle(8.5,-162.9,779.5,227.1), new cjs.Rectangle(7.7,-162.9,781.1,227.2), new cjs.Rectangle(4.2,-162.9,788.2,227.2), new cjs.Rectangle(2,-162.9,792.5,227.1), new cjs.Rectangle(2.8,-162.9,791,227.2), new cjs.Rectangle(5.1,-162.9,786.3,227.2), new cjs.Rectangle(7.7,-162.9,781.2,227.2), new cjs.Rectangle(8.5,-162.9,779.5,227.1), new cjs.Rectangle(8,-162.9,780.6,227.2), new cjs.Rectangle(6.3,-162.9,784,227.2), new cjs.Rectangle(3.1,-162.9,790.2,227.2), new cjs.Rectangle(-1.7,-162.9,799.9,227.2), new cjs.Rectangle(-8.7,-162.9,813.9,227.2), new cjs.Rectangle(-18.4,-162.9,833.4,227.2), new cjs.Rectangle(-31.7,-162.9,859.9,227.2), new cjs.Rectangle(-49.3,-162.9,895.1,227.2), new cjs.Rectangle(-70.8,-162.9,938,227.1)];


// stage content:



(lib.hud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 450,
	fps: 30,
	color: "#333333",
	manifest: []
};



// symbols:



(lib.hitbox = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.levelselection_bg = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.levelselection_board = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.levelselection_selection_1 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.levelselection_selection_2 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.postit_1 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.postit_10 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.postit_11 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.postit_12 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.postit_2 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.postit_3 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.postit_4 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.postit_5 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.postit_6 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.postit_7 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.postit_8 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.postit_9 = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.x_button_base_2_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.x_button_base_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_2_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_highlight_2_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_highlight_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.x_flashgfx_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_fullscreen_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_home_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_musicOFF_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_musicON_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.x_white_png = function() {
	this.spriteSheet = ss["levelselection_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.x_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_white_png();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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


(lib.x_flashgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_flashgfx_png();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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


(lib.selectionCorner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.levelselection_selection_2();
	this.instance.setTransform(-12,-11);

	this.instance_1 = new lib.levelselection_selection_1();
	this.instance_1.setTransform(-11.5,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-11,24,22);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-11.5,-10.4,23,20), rect, rect, rect, rect];


(lib.selection_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.levelselection_bg();
	this.instance.setTransform(400.3,-225,1,1,0,0,180);

	this.instance_1 = new lib.levelselection_bg();
	this.instance_1.setTransform(-400,-225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-225,800.3,450);
p.frameBounds = [rect];


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.levelselection_board();
	this.instance.setTransform(-389,-221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-389,-221,778,442);
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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.x_white();
	this.instance.setTransform(399,220.1,13.159,7.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-20.5,842.2,481.3);
p.frameBounds = [rect];


(lib.selection_flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.x_flashgfx();
	this.instance.setTransform(399,220.1,13.159,7.52);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-20.5,842.2,481.3);
p.frameBounds = [rect];


(lib.postit_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(35.2,121.2,0.854,1,0,88,-92);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-30.3,121.1,0.896,0.896,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(32.4,12.6,1,1,0,-0.8,179.2);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-31.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_12();
	this.instance_4.setTransform(-51.1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-3.4,103,145);
p.frameBounds = [rect, rect];


(lib.postit_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(34,118.2,0.914,0.914,0,90,-92.4);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-34.3,118.9,1,1,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(35.5,10.4,0.886,0.886,0,0,180);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-34.2,8.3,0.808,0.808,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_11();
	this.instance_4.setTransform(-56.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.6,-4.2,106,141);
p.frameBounds = [rect, rect];


(lib.postit_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(35.4,120.7,1.001,1,0,90,-92);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-32.1,121.1,0.908,0.908,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(32.6,9.9,0.873,0.873,0,0,180);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-36.6,10.1,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_10();
	this.instance_4.setTransform(-52.9,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.9,-2.7,103,145);
p.frameBounds = [rect, rect];


(lib.postit_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(34.3,120.2,0.913,0.913,0,90,-90);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-38.1,120.9,0.933,0.933,-86.8);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(34.3,12.1,1,1,0,-1.2,178.8);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-32.2,11.8,1,1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_9();
	this.instance_4.setTransform(-52.1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.1,-3.4,106,145);
p.frameBounds = [rect, rect];


(lib.postit_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(36.2,121.4,0.879,0.879,0,90,-90);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-33,120.3,1,1,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(33.5,11.6,1,1,0,0,180);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-32.2,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_8();
	this.instance_4.setTransform(-55.5,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-3.9,106,146);
p.frameBounds = [rect, rect];


(lib.postit_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(32.9,120.6,0.944,1,0,87.5,-93);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-34,119.9,1,1,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(34.6,10.7,1,1,0,0,180);
	this.instance_2.alpha = 0.91;

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-32.2,10.5,1,1,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_7();
	this.instance_4.setTransform(-56.5,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-4,106,143);
p.frameBounds = [rect, rect];


(lib.postit_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(35.2,121,0.877,1,0,90,-90);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-33.2,121.2,1.002,1,0,-90,-86.8);
	this.instance_1.alpha = 0.93;

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(31.5,10.9,1,1,0,-1.7,178.3);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-33.2,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_6();
	this.instance_4.setTransform(-50.3,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.3,-3.5,106,143);
p.frameBounds = [rect, rect];


(lib.postit_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(32.6,119.2,1,1,0,89,-91);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-34.5,120.6,1,1,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(33.2,9.3,1,1,0,-2.1,177.9);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-31.5,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_5();
	this.instance_4.setTransform(-49.9,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-4.9,104,147);
p.frameBounds = [rect, rect];


(lib.postit_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(38.5,119.9,1.007,1,0,90,-96.5);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-30.6,121.2,1.001,1,0,-90,-92.9);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(33.5,11.9,1,1,0,-1,179);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-33.5,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_4();
	this.instance_4.setTransform(-52.7,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-3.4,106,145);
p.frameBounds = [rect, rect];


(lib.postit_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(30.6,119.9,1,1,0,90,-90);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-36.5,120.9,1,1,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(33.5,11.6,1,1,0,-1,179);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-34.2,10.5,0.817,0.9,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_3();
	this.instance_4.setTransform(-51.7,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-3.4,103,145);
p.frameBounds = [rect, rect];


(lib.postit_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(36.3,119,1.002,1,0,90,-93.5);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-32.9,119.7,0.875,0.873,0,-90,-85.8);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(34.6,11.6,1,1.002,0,-3.3,180);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-32.9,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_2();
	this.instance_4.setTransform(-48.7,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-3.6,106,141);
p.frameBounds = [rect, rect];


(lib.postit_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.selectionCorner();
	this.instance.setTransform(31.2,119.9,1,1,0,90,-90);

	this.instance_1 = new lib.selectionCorner();
	this.instance_1.setTransform(-36.5,120.9,1,1,-90);

	this.instance_2 = new lib.selectionCorner();
	this.instance_2.setTransform(33.5,11.6,1,1,0,0,180);

	this.instance_3 = new lib.selectionCorner();
	this.instance_3.setTransform(-32.2,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.postit_1();
	this.instance_4.setTransform(-51.5,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-3.6,103,145);
p.frameBounds = [rect, rect];


(lib.LightningOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_27 = function() {
		this.stop();
		this.signal.emit("exit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// white
	this.instance = new lib.white();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},15).to({_off:true},1).wait(12));

	// flash
	this.instance_1 = new lib.selection_flash();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.919},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.699},0).wait(1).to({alpha:0.672},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.648},0).wait(2).to({alpha:0.654},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.772},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.334},0).wait(1).to({alpha:0.08},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-20.5,842.2,481.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect];


(lib.LightningIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
		this.signal.emit("exit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// white
	this.instance = new lib.white();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(1));

	// flash
	this.instance_1 = new lib.selection_flash();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.126},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.336},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.349},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.221},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.8},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-22.1,-20.5,842.2,481.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.HomeBtn = function(mode,startPosition,loop) {
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


(lib.levelPostIt_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,locked:20,disabled:30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_12_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:0.4,regY:69.1,skewX:-1.1,x:1.8,y:69.1},0).wait(1).to({x:1.7},0).wait(1).to({skewX:-0.9,x:1.5},0).wait(1).to({skewX:-0.7,x:1.2},0).wait(1).to({skewX:-0.4,x:0.9},0).wait(1).to({skewX:-0.2,x:0.6},0).wait(1).to({skewX:0,x:0.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.4,regY:69.1,x:0.5,y:69.1},0).wait(1).to({skewX:-0.2,x:0.6},0).wait(1).to({skewX:-0.4,x:0.9},0).wait(1).to({skewX:-0.7,x:1.2},0).wait(1).to({skewX:-0.9,x:1.6},0).wait(1).to({skewX:-1.1,x:1.8},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-3.4,106,145);
p.frameBounds = [rect, rect=new cjs.Rectangle(-51.2,-3.4,105.6,145), rect, new cjs.Rectangle(-51.2,-3.4,105,145), new cjs.Rectangle(-51.2,-3.4,104.4,145), new cjs.Rectangle(-51.1,-3.4,103.7,145), new cjs.Rectangle(-51.1,-3.4,103.1,145), rect=new cjs.Rectangle(-51.1,-3.4,103,145), rect, rect, new cjs.Rectangle(-51.1,-3.4,103.1,145), new cjs.Rectangle(-51.1,-3.4,103.7,145), new cjs.Rectangle(-51.2,-3.4,104.4,145), new cjs.Rectangle(-51.2,-3.4,105,145), new cjs.Rectangle(-51.2,-3.4,105.6,145), rect=new cjs.Rectangle(-51.2,-3.4,106,145), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_11_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:-3.6,regY:66.3,skewX:-1.1,x:-2.3,y:66.3},0).wait(1).to({scaleY:1,y:66.4},0).wait(1).to({skewX:-0.9,x:-2.5},0).wait(1).to({scaleY:1,skewX:-0.7,x:-2.8},0).wait(1).to({scaleY:1,skewX:-0.4,x:-3.1,y:66.5},0).wait(1).to({skewX:-0.2,x:-3.4},0).wait(1).to({scaleY:1,skewX:0,x:-3.5,y:66.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-3.6,regY:66.3,x:-3.5,y:66.6},0).wait(1).to({scaleY:1,skewX:-0.2,x:-3.4,y:66.5},0).wait(1).to({skewX:-0.4,x:-3.1},0).wait(1).to({scaleY:1,skewX:-0.7,x:-2.8,y:66.4},0).wait(1).to({scaleY:1,skewX:-0.9,x:-2.5},0).wait(1).to({scaleY:1,skewX:-1.1,x:-2.3,y:66.3},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.7,-4.2,108.9,141);
p.frameBounds = [rect, new cjs.Rectangle(-56.7,-4.2,108.6,141), new cjs.Rectangle(-56.7,-4.2,108.5,141), new cjs.Rectangle(-56.7,-4.2,108,141.1), new cjs.Rectangle(-56.7,-4.2,107.4,141.3), new cjs.Rectangle(-56.6,-4.2,106.7,141.4), new cjs.Rectangle(-56.6,-4.2,106.1,141.5), rect=new cjs.Rectangle(-56.6,-4.2,106,141.5), rect, rect, new cjs.Rectangle(-56.6,-4.2,106.1,141.5), new cjs.Rectangle(-56.6,-4.2,106.7,141.4), new cjs.Rectangle(-56.7,-4.2,107.4,141.3), new cjs.Rectangle(-56.7,-4.2,108,141.1), new cjs.Rectangle(-56.7,-4.2,108.6,141), rect=new cjs.Rectangle(-56.7,-4.2,108.9,141), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_10_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:-1.4,regY:69.8,skewX:-1.1,y:69.8},0).wait(1).to({scaleY:1,x:-0.1,y:69.9},0).wait(1).to({scaleY:1,skewX:-0.9,x:-0.3,y:70},0).wait(1).to({scaleY:1,skewX:-0.7,x:-0.6,y:70.1},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:-0.9,y:70.3},0).wait(1).to({scaleY:1.01,skewX:-0.2,x:-1.2,y:70.4},0).wait(1).to({scaleY:1.01,skewX:0,x:-1.3,y:70.5},0).wait(1).to({regX:0,regY:0,x:0,y:0.1},0).wait(1).to({regX:-1.4,regY:69.8,x:-1.3,y:70.5},0).wait(1).to({scaleY:1.01,skewX:-0.2,x:-1.2,y:70.4},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:-0.9,y:70.3},0).wait(1).to({scaleY:1,skewX:-0.7,x:-0.5,y:70.1},0).wait(1).to({scaleY:1,skewX:-0.9,x:-0.2,y:70},0).wait(1).to({scaleY:1,skewX:-1.1,x:0,y:69.9},0).wait(1).to({regX:0,regY:0,scaleY:1,skewX:-1.2,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.9,-2.7,106,145);
p.frameBounds = [rect, new cjs.Rectangle(-52.9,-2.7,105.6,145.1), new cjs.Rectangle(-52.9,-2.7,105.6,145.2), new cjs.Rectangle(-52.9,-2.7,105,145.4), new cjs.Rectangle(-52.9,-2.7,104.4,145.7), new cjs.Rectangle(-52.9,-2.7,103.7,146), new cjs.Rectangle(-52.9,-2.7,103.1,146.3), rect=new cjs.Rectangle(-52.9,-2.7,103,146.5), rect, rect, new cjs.Rectangle(-52.9,-2.7,103.1,146.3), new cjs.Rectangle(-52.9,-2.7,103.8,146), new cjs.Rectangle(-52.9,-2.7,104.4,145.7), new cjs.Rectangle(-52.9,-2.7,105,145.3), new cjs.Rectangle(-52.9,-2.7,105.6,145.1), rect=new cjs.Rectangle(-52.9,-2.7,106,145), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_9_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:0.9,regY:69.1,skewX:-1.1,x:2.3,y:69.1},0).wait(1).to({x:2.2},0).wait(1).to({skewX:-0.9,x:2},0).wait(1).to({skewX:-0.7,x:1.7},0).wait(1).to({skewX:-0.4,x:1.4},0).wait(1).to({skewX:-0.2,x:1.1},0).wait(1).to({skewX:0,x:1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.9,regY:69.1,x:1,y:69.1},0).wait(1).to({skewX:-0.2,x:1.1},0).wait(1).to({skewX:-0.4,x:1.4},0).wait(1).to({skewX:-0.7,x:1.7},0).wait(1).to({skewX:-0.9,x:2.1},0).wait(1).to({skewX:-1.1,x:2.3},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.2,-3.4,109,145);
p.frameBounds = [rect, rect=new cjs.Rectangle(-52.2,-3.4,108.6,145), rect, new cjs.Rectangle(-52.2,-3.4,108,145), new cjs.Rectangle(-52.2,-3.4,107.4,145), new cjs.Rectangle(-52.1,-3.4,106.7,145), new cjs.Rectangle(-52.1,-3.4,106.1,145), rect=new cjs.Rectangle(-52.1,-3.4,106,145), rect, rect, new cjs.Rectangle(-52.1,-3.4,106.1,145), new cjs.Rectangle(-52.1,-3.4,106.7,145), new cjs.Rectangle(-52.2,-3.4,107.4,145), new cjs.Rectangle(-52.2,-3.4,108,145), new cjs.Rectangle(-52.2,-3.4,108.6,145), rect=new cjs.Rectangle(-52.2,-3.4,109,145), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_8_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:-2.6,regY:69.1,skewX:-1.1,x:-1.2,y:69.1},0).wait(1).to({x:-1.3},0).wait(1).to({skewX:-0.9,x:-1.5},0).wait(1).to({skewX:-0.7,x:-1.8},0).wait(1).to({skewX:-0.4,x:-2.1},0).wait(1).to({skewX:-0.2,x:-2.4},0).wait(1).to({skewX:0,x:-2.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-2.6,regY:69.1,x:-2.5,y:69.1},0).wait(1).to({skewX:-0.2,x:-2.4},0).wait(1).to({skewX:-0.4,x:-2.1},0).wait(1).to({skewX:-0.7,x:-1.8},0).wait(1).to({skewX:-0.9,x:-1.4},0).wait(1).to({skewX:-1.1,x:-1.2},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-3.9,109,146);
p.frameBounds = [rect, new cjs.Rectangle(-55.6,-3.9,108.7,146), new cjs.Rectangle(-55.6,-3.9,108.6,146), new cjs.Rectangle(-55.6,-3.9,108,146), new cjs.Rectangle(-55.6,-3.9,107.4,146), new cjs.Rectangle(-55.5,-3.9,106.7,146), new cjs.Rectangle(-55.5,-3.9,106.1,146), rect=new cjs.Rectangle(-55.5,-3.9,106,146), rect, rect, new cjs.Rectangle(-55.5,-3.9,106.1,146), new cjs.Rectangle(-55.5,-3.9,106.8,146), new cjs.Rectangle(-55.6,-3.9,107.4,146), new cjs.Rectangle(-55.6,-3.9,108.1,146), new cjs.Rectangle(-55.6,-3.9,108.6,146), rect=new cjs.Rectangle(-55.6,-3.9,109,146), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_7_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:-3.6,regY:67.4,skewX:-1.1,x:-2.2,y:67.4},0).wait(1).to({x:-2.3},0).wait(1).to({skewX:-0.9,x:-2.5},0).wait(1).to({skewX:-0.7,x:-2.8},0).wait(1).to({skewX:-0.4,x:-3.1},0).wait(1).to({skewX:-0.2,x:-3.4},0).wait(1).to({skewX:0,x:-3.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-3.6,regY:67.4,x:-3.5,y:67.4},0).wait(1).to({skewX:-0.2,x:-3.4},0).wait(1).to({skewX:-0.4,x:-3.1},0).wait(1).to({skewX:-0.7,x:-2.8},0).wait(1).to({skewX:-0.9,x:-2.5},0).wait(1).to({skewX:-1.1,x:-2.3},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.6,-4,109,143);
p.frameBounds = [rect, rect=new cjs.Rectangle(-56.6,-4,108.6,143), rect, new cjs.Rectangle(-56.6,-4,108,143), new cjs.Rectangle(-56.6,-4,107.4,143), new cjs.Rectangle(-56.5,-4,106.7,143), new cjs.Rectangle(-56.5,-4,106.1,143), rect=new cjs.Rectangle(-56.5,-4,106,143), rect, rect, new cjs.Rectangle(-56.5,-4,106.1,143), new cjs.Rectangle(-56.5,-4,106.7,143), new cjs.Rectangle(-56.6,-4,107.4,143), new cjs.Rectangle(-56.6,-4,108,143), new cjs.Rectangle(-56.6,-4,108.6,143), rect=new cjs.Rectangle(-56.6,-4,109,143), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_6_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:2.6,regY:67.9,scaleY:1,skewX:-1.1,x:4,y:68},0).wait(1).to({scaleY:1,x:3.9,y:68.1},0).wait(1).to({scaleY:1.01,skewX:-1,x:3.8,y:68.3},0).wait(1).to({scaleY:1.01,skewX:-0.8,x:3.6,y:68.7},0).wait(1).to({scaleY:1.02,skewX:-0.7,x:3.4,y:69.1},0).wait(1).to({scaleY:1.02,skewX:-0.5,x:3.2,y:69.5},0).wait(1).to({scaleY:1.02,skewX:-0.4,x:3.1,y:69.6},0).wait(1).to({regX:0,regY:0,scaleY:1.02,x:0,y:0.1},0).wait(1).to({regX:2.6,regY:67.9,scaleY:1.02,x:3.1,y:69.6},0).wait(1).to({scaleY:1.02,skewX:-0.5,x:3.2,y:69.4},0).wait(1).to({scaleY:1.02,skewX:-0.7,x:3.4,y:69.1},0).wait(1).to({scaleY:1.01,skewX:-0.8,x:3.6,y:68.6},0).wait(1).to({scaleY:1,skewX:-1,x:3.8,y:68.3},0).wait(1).to({scaleY:1,skewX:-1.1,x:4,y:68},0).wait(1).to({regX:0,regY:0,scaleY:1,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-3.5,108.9,143);
p.frameBounds = [rect, new cjs.Rectangle(-50.4,-3.5,108.6,143.1), new cjs.Rectangle(-50.4,-3.5,108.6,143.3), new cjs.Rectangle(-50.4,-3.5,108.1,143.8), new cjs.Rectangle(-50.4,-3.5,108,144.6), new cjs.Rectangle(-50.4,-3.5,107.4,145.4), new cjs.Rectangle(-50.4,-3.5,107.3,146.1), new cjs.Rectangle(-50.3,-3.5,106.8,146.5), new cjs.Rectangle(-50.4,-3.5,107.1,146.6), new cjs.Rectangle(-50.3,-3.5,106.8,146.5), new cjs.Rectangle(-50.4,-3.5,107.3,146.1), new cjs.Rectangle(-50.4,-3.5,107.4,145.4), new cjs.Rectangle(-50.4,-3.5,108,144.5), new cjs.Rectangle(-50.4,-3.5,108.5,143.7), new cjs.Rectangle(-50.4,-3.5,108.6,143.2), rect=new cjs.Rectangle(-50.4,-3.5,108.9,143), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_5_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:2,regY:68.6,scaleY:1,x:3.4,y:68.7},0).wait(1).to({scaleY:1,skewX:-1.1,y:68.8},0).wait(1).to({scaleY:1,y:68.9},0).wait(1).to({scaleY:1.01,x:3.3,y:69.2},0).wait(1).to({scaleY:1.01,y:69.6},0).wait(1).to({scaleY:1.02,skewX:-1,y:69.9},0).wait(1).to({scaleY:1.02,y:70.1},0).wait(1).to({regX:0,regY:0,x:0.1,y:0.1},0).wait(1).to({regX:2,regY:68.6,x:3.3,y:70.1},0).wait(1).to({scaleY:1.02,y:69.9},0).wait(1).to({scaleY:1.01,skewX:-1.1,x:3.4,y:69.6},0).wait(1).to({scaleY:1.01,x:3.3,y:69.2},0).wait(1).to({scaleY:1,x:3.4,y:68.9},0).wait(1).to({scaleY:1,skewX:-1.2,y:68.7},0).wait(1).to({regX:0,regY:0,scaleY:1,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-4.9,107,147);
p.frameBounds = [rect, new cjs.Rectangle(-50,-4.9,106.7,147), new cjs.Rectangle(-50,-4.9,106.7,147.3), new cjs.Rectangle(-50,-4.9,106.7,147.7), new cjs.Rectangle(-50,-4.9,106.7,148.4), new cjs.Rectangle(-50,-4.9,106.7,149), new cjs.Rectangle(-49.9,-4.9,106.6,149.6), new cjs.Rectangle(-49.9,-4.9,106.2,150), new cjs.Rectangle(-49.9,-4.9,106.6,150.1), new cjs.Rectangle(-49.9,-4.9,106.2,150), new cjs.Rectangle(-49.9,-4.9,106.6,149.6), new cjs.Rectangle(-50,-4.9,106.7,149), new cjs.Rectangle(-50,-4.9,106.7,148.3), new cjs.Rectangle(-50,-4.9,106.7,147.6), new cjs.Rectangle(-50,-4.9,106.7,147.1), rect=new cjs.Rectangle(-50,-4.9,107,147), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_4_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:0.3,regY:69.1,skewX:-1.1,x:1.7,y:69.1},0).wait(1).to({x:1.6},0).wait(1).to({skewX:-0.9,x:1.4},0).wait(1).to({skewX:-0.7,x:1.1},0).wait(1).to({skewX:-0.4,x:0.8},0).wait(1).to({skewX:-0.2,x:0.5},0).wait(1).to({skewX:0,x:0.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.3,regY:69.1,x:0.4,y:69.1},0).wait(1).to({skewX:-0.2,x:0.5},0).wait(1).to({skewX:-0.4,x:0.8},0).wait(1).to({skewX:-0.7,x:1.1},0).wait(1).to({skewX:-0.9,x:1.5},0).wait(1).to({skewX:-1.1,x:1.7},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-3.4,109,145);
p.frameBounds = [rect, rect=new cjs.Rectangle(-52.7,-3.4,108.6,145), rect, new cjs.Rectangle(-52.7,-3.4,108,145), new cjs.Rectangle(-52.7,-3.4,107.4,145), new cjs.Rectangle(-52.7,-3.4,106.7,145), new cjs.Rectangle(-52.7,-3.4,106.1,145), rect=new cjs.Rectangle(-52.7,-3.4,106,145), rect, rect, new cjs.Rectangle(-52.7,-3.4,106.1,145), new cjs.Rectangle(-52.7,-3.4,106.7,145), new cjs.Rectangle(-52.7,-3.4,107.4,145), new cjs.Rectangle(-52.7,-3.4,108,145), new cjs.Rectangle(-52.7,-3.4,108.6,145), rect=new cjs.Rectangle(-52.7,-3.4,109,145), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_3_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:-0.3,regY:69.1,skewX:-1.1,x:1.1,y:69.1},0).wait(1).to({x:1},0).wait(1).to({skewX:-0.9,x:0.8},0).wait(1).to({skewX:-0.7,x:0.5},0).wait(1).to({skewX:-0.4,x:0.2},0).wait(1).to({skewX:-0.2,x:-0.1},0).wait(1).to({skewX:0,x:-0.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-0.3,regY:69.1,x:-0.2,y:69.1},0).wait(1).to({skewX:-0.2,x:-0.1},0).wait(1).to({skewX:-0.4,x:0.2},0).wait(1).to({skewX:-0.7,x:0.5},0).wait(1).to({skewX:-0.9,x:0.9},0).wait(1).to({skewX:-1.1,x:1.1},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.8,-3.4,106,145);
p.frameBounds = [rect, rect=new cjs.Rectangle(-51.8,-3.4,105.6,145), rect, new cjs.Rectangle(-51.8,-3.4,105,145), new cjs.Rectangle(-51.8,-3.4,104.4,145), new cjs.Rectangle(-51.7,-3.4,103.7,145), new cjs.Rectangle(-51.7,-3.4,103.1,145), rect=new cjs.Rectangle(-51.7,-3.4,103,145), rect, rect, new cjs.Rectangle(-51.7,-3.4,103.1,145), new cjs.Rectangle(-51.7,-3.4,103.7,145), new cjs.Rectangle(-51.8,-3.4,104.4,145), new cjs.Rectangle(-51.8,-3.4,105,145), new cjs.Rectangle(-51.8,-3.4,105.6,145), rect=new cjs.Rectangle(-51.8,-3.4,106,145), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_2_1();
	this.postit.setTransform(0,0,1,1,0,-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regX:4.3,regY:66.8,skewX:-1.1,x:5.7,y:66.8},0).wait(1).to({x:5.6},0).wait(1).to({skewX:-0.9,x:5.4},0).wait(1).to({skewX:-0.7,x:5.1},0).wait(1).to({skewX:-0.4,x:4.8},0).wait(1).to({skewX:-0.2,x:4.5},0).wait(1).to({skewX:0,x:4.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:4.3,regY:66.8,x:4.4,y:66.8},0).wait(1).to({skewX:-0.2,x:4.5},0).wait(1).to({skewX:-0.4,x:4.8},0).wait(1).to({skewX:-0.7,x:5.1},0).wait(1).to({skewX:-0.9,x:5.4},0).wait(1).to({skewX:-1.1,x:5.6},0).wait(1).to({regX:0,regY:0,skewX:-1.2,x:0,y:0},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-3.6,108.9,141);
p.frameBounds = [rect, new cjs.Rectangle(-48.8,-3.6,108.6,141), new cjs.Rectangle(-48.8,-3.6,108.5,141), new cjs.Rectangle(-48.8,-3.6,108,141), new cjs.Rectangle(-48.8,-3.6,107.4,141), new cjs.Rectangle(-48.7,-3.6,106.7,141), new cjs.Rectangle(-48.7,-3.6,106.1,141), rect=new cjs.Rectangle(-48.7,-3.6,106,141), rect, rect, new cjs.Rectangle(-48.7,-3.6,106.1,141), new cjs.Rectangle(-48.7,-3.6,106.7,141), new cjs.Rectangle(-48.8,-3.6,107.4,141), new cjs.Rectangle(-48.8,-3.6,108,141), new cjs.Rectangle(-48.8,-3.6,108.6,141), rect=new cjs.Rectangle(-48.8,-3.6,108.9,141), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.levelPostIt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":8,"down":15,"locked":20,"disabled":30});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Layer 2
	this.postit = new lib.postit_1_1();
	this.postit.setTransform(0.1,0.1,1,1.018,0,-1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.postit).wait(1).to({regY:68.8,x:2,y:70},0).wait(1).to({scaleY:1.02,y:69.9},0).wait(1).to({scaleY:1.01,skewX:-1.5,x:1.9,y:69.7},0).wait(1).to({scaleY:1.01,skewX:-1.4,x:1.8,y:69.5},0).wait(1).to({scaleY:1.01,skewX:-1.3,x:1.6,y:69.2},0).wait(1).to({scaleY:1,skewX:-1.2,x:1.5,y:69},0).wait(1).to({scaleY:1,x:1.4,y:68.9},0).wait(1).to({regY:0,scaleY:1,x:0,y:0},0).wait(1).to({regY:68.8,scaleY:1,x:1.4,y:68.9},0).wait(1).to({scaleY:1,x:1.5,y:69},0).wait(1).to({scaleY:1.01,skewX:-1.3,x:1.6,y:69.2},0).wait(1).to({scaleY:1.01,skewX:-1.4,x:1.8,y:69.5},0).wait(1).to({scaleY:1.01,skewX:-1.5,x:1.9,y:69.8},0).wait(1).to({scaleY:1.02,skewX:-1.6,x:2,y:70},0).wait(1).to({regY:0,scaleY:1.02,x:0.1,y:0.1},0).wait(5).to({alpha:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-3.6,107.2,147.6);
p.frameBounds = [rect, new cjs.Rectangle(-51.5,-3.6,107,147.5), new cjs.Rectangle(-51.5,-3.6,106.9,147.3), new cjs.Rectangle(-51.5,-3.6,106.9,146.9), new cjs.Rectangle(-51.5,-3.6,106.3,146.4), new cjs.Rectangle(-51.5,-3.6,106.3,145.9), new cjs.Rectangle(-51.5,-3.6,105.7,145.4), new cjs.Rectangle(-51.5,-3.6,105.7,145.1), new cjs.Rectangle(-51.5,-3.6,106,145), new cjs.Rectangle(-51.5,-3.6,105.7,145.1), new cjs.Rectangle(-51.5,-3.6,105.7,145.3), new cjs.Rectangle(-51.5,-3.6,106.2,145.8), new cjs.Rectangle(-51.5,-3.6,106.3,146.5), new cjs.Rectangle(-51.5,-3.6,106.9,147.1), new cjs.Rectangle(-51.5,-3.6,107,147.5), rect=new cjs.Rectangle(-51.5,-3.6,107.2,147.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.LevelSelection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":0,"out":44});

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
		this.signal.emit("exit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(13).call(this.frame_56).wait(1));

	// white
	this.instance = new lib.white();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(55).to({_off:false},0).wait(1));

	// flash
	this.instance_1 = new lib.selection_flash();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.783},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.441},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.555},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.084},0).wait(1).to({alpha:0.021},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).wait(2).to({alpha:0.32},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.267},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.124},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.023},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(6).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.165},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.334},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0.601},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(2));

	// homeBtn
	this.homeBtn = new lib.HomeBtn();
	this.homeBtn.setTransform(-37.4,33.2,0.6,0.6,0,0,0,-0.9,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.homeBtn).wait(1).to({regX:-1,regY:2,x:-29.2,y:35.2},0).wait(1).to({x:-20.8},0).wait(1).to({x:-12.2},0).wait(1).to({x:-3.7},0).wait(1).to({x:4.4},0).wait(1).to({x:12},0).wait(1).to({x:18.9},0).wait(1).to({x:25},0).wait(1).to({x:30.3},0).wait(1).to({x:34.7},0).wait(1).to({x:38.2},0).wait(1).to({x:40.9},0).wait(1).to({x:42.8},0).wait(1).to({x:43.9},0).wait(1).to({regX:-0.9,regY:-1.3,x:44.3,y:33.2},0).wait(1).to({regX:-1,regY:2,x:43.9,y:35.2},0).wait(1).to({x:42.7},0).wait(1).to({x:40.6},0).wait(1).to({x:38.4},0).wait(1).to({x:37.1},0).wait(1).to({regX:-0.9,regY:-1.3,x:36.8,y:33.2},0).wait(24).to({regX:-1,regY:2,x:38.1,y:35.2},0).wait(1).to({x:42.8},0).wait(1).to({regX:-0.9,regY:-1.3,x:44.3,y:33.2},0).wait(1).to({regX:-1,regY:2,x:43.5,y:35.2},0).wait(1).to({x:41.2},0).wait(1).to({x:37.2},0).wait(1).to({x:31.4},0).wait(1).to({x:23.5},0).wait(1).to({x:13.3},0).wait(1).to({x:0.4},0).wait(1).to({x:-16},0).wait(1).to({regX:-0.9,regY:-1.3,x:-37.4,y:33.2},0).wait(1));

	// soundBtn copy
	this.fullscreenBtn = new lib.FullscreenBtn();
	this.fullscreenBtn.setTransform(832.8,-89.6,0.6,0.6,0,0,0,-3.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.fullscreenBtn).wait(4).to({regX:-1,regY:2,x:826.4,y:-90.8},0).wait(1).to({x:818.3},0).wait(1).to({x:810.1},0).wait(1).to({x:802},0).wait(1).to({x:794.3},0).wait(1).to({x:787},0).wait(1).to({x:780.4},0).wait(1).to({x:774.6},0).wait(1).to({x:769.6},0).wait(1).to({x:765.4},0).wait(1).to({x:762},0).wait(1).to({x:759.4},0).wait(1).to({x:757.7},0).wait(1).to({x:756.6},0).wait(1).to({regX:-3.3,regY:3.9,x:754.9,y:-89.6},0).wait(1).to({regX:-1,regY:2,x:756.6,y:-90.8},0).wait(1).to({x:757.5},0).wait(1).to({x:759.2},0).wait(1).to({x:761},0).wait(1).to({x:762},0).wait(1).to({regX:-3.3,regY:3.9,x:760.9,y:-89.6},0).wait(21).to({regX:-1,regY:2,y:-90.8},0).wait(1).to({x:756.2},0).wait(1).to({regX:-3.3,regY:3.9,x:753.4,y:-89.6},0).wait(1).to({regX:-1,regY:2,x:755.5,y:-90.8},0).wait(1).to({x:757.8},0).wait(1).to({x:761.6},0).wait(1).to({x:767.3},0).wait(1).to({x:774.9},0).wait(1).to({x:784.8},0).wait(1).to({x:797.4},0).wait(1).to({x:813.3},0).wait(1).to({regX:-3.3,regY:3.9,x:832.8,y:-89.6},0).wait(1));

	// soundBtn
	this.soundBtn = new lib.SoundBtn();
	this.soundBtn.setTransform(832.8,36.4,0.6,0.6,0,0,0,-3.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.soundBtn).wait(8).to({regX:-1,regY:2,x:826.4,y:35.2},0).wait(1).to({x:818.3},0).wait(1).to({x:810.1},0).wait(1).to({x:802},0).wait(1).to({x:794.3},0).wait(1).to({x:787},0).wait(1).to({x:780.4},0).wait(1).to({x:774.6},0).wait(1).to({x:769.6},0).wait(1).to({x:765.4},0).wait(1).to({x:762},0).wait(1).to({x:759.4},0).wait(1).to({x:757.7},0).wait(1).to({x:756.6},0).wait(1).to({regX:-3.3,regY:3.9,x:754.9,y:36.4},0).wait(1).to({regX:-1,regY:2,x:756.6,y:35.2},0).wait(1).to({x:757.5},0).wait(1).to({x:759.2},0).wait(1).to({x:761},0).wait(1).to({x:762},0).wait(1).to({regX:-3.3,regY:3.9,x:760.9,y:36.4},0).wait(17).to({regX:-1,regY:2,y:35.2},0).wait(1).to({x:756.2},0).wait(1).to({regX:-3.3,regY:3.9,x:753.4,y:36.4},0).wait(1).to({regX:-1,regY:2,x:755.5,y:35.2},0).wait(1).to({x:757.8},0).wait(1).to({x:761.6},0).wait(1).to({x:767.3},0).wait(1).to({x:774.9},0).wait(1).to({x:784.8},0).wait(1).to({x:797.4},0).wait(1).to({x:813.3},0).wait(1).to({regX:-3.3,regY:3.9,x:832.8,y:36.4},0).wait(1));

	// level12
	this.level12 = new lib.levelPostIt_12();
	this.level12.setTransform(643.5,304.4,1,1,0,0,0,-0.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.level12).wait(1).to({regX:1.8,regY:69.1,x:645.6,y:369.2},0).wait(1).to({y:361.6},0).wait(1).to({y:354.7},0).wait(1).to({y:348.6},0).wait(1).to({y:343.2},0).wait(1).to({y:338.6},0).wait(1).to({y:334.8},0).wait(1).to({y:331.8},0).wait(1).to({y:329.6},0).wait(1).to({y:328.3},0).wait(1).to({regX:-0.3,regY:-4.2,x:643.5,y:254.5},0).wait(1).to({regX:1.8,regY:69.1,x:645.6,y:328},0).wait(1).to({y:328.7},0).wait(1).to({y:329.9},0).wait(1).to({y:331.6},0).wait(1).to({y:333},0).wait(1).to({y:333.9},0).wait(1).to({regX:-0.3,regY:-4.2,x:643.5,y:260.8},0).wait(27).to({regX:1.8,regY:69.1,x:645.6,y:333.6},0).wait(1).to({y:331.9},0).wait(1).to({y:329.4},0).wait(1).to({y:327.6},0).wait(1).to({regX:-0.3,regY:-4.2,x:643.5,y:253.8},0).wait(1).to({regX:1.8,regY:69.1,x:645.6,y:327.7},0).wait(1).to({y:329.7},0).wait(1).to({y:333.2},0).wait(1).to({y:338.4},0).wait(1).to({y:345.4},0).wait(1).to({y:354.4},0).wait(1).to({regX:-0.3,regY:-4.2,x:643.5,y:291.7},0).wait(1));

	// level5
	this.level10 = new lib.levelPostIt_10();
	this.level10.setTransform(544.1,144.2,1,1,0,0,0,-0.4,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.level10).wait(1).to({regX:0,regY:70.5,x:544.5,y:210.4},0).wait(1).to({y:202.8},0).wait(1).to({y:195.9},0).wait(1).to({y:189.8},0).wait(1).to({y:184.4},0).wait(1).to({y:179.8},0).wait(1).to({y:176},0).wait(1).to({y:173},0).wait(1).to({y:170.8},0).wait(1).to({y:169.5},0).wait(1).to({regX:-0.4,regY:-4.2,x:544.1,y:94.3},0).wait(1).to({regX:0,regY:70.5,x:544.5,y:169.2},0).wait(1).to({y:169.9},0).wait(1).to({y:171.1},0).wait(1).to({y:172.8},0).wait(1).to({y:174.2},0).wait(1).to({y:175.1},0).wait(1).to({regX:-0.4,regY:-4.2,x:544.1,y:100.6},0).wait(27).to({regX:0,regY:70.5,x:544.5,y:174.8},0).wait(1).to({y:173.1},0).wait(1).to({y:170.6},0).wait(1).to({y:168.8},0).wait(1).to({regX:-0.4,regY:-4.2,x:544.1,y:93.6},0).wait(1).to({regX:0,regY:70.5,x:544.5,y:168.9},0).wait(1).to({y:170.9},0).wait(1).to({y:174.4},0).wait(1).to({y:179.6},0).wait(1).to({y:186.6},0).wait(1).to({y:195.6},0).wait(1).to({regX:-0.4,regY:-4.2,x:544.1,y:131.5},0).wait(1));

	// level6
	this.level11 = new lib.levelPostIt_11();
	this.level11.setTransform(641,159.6,1,1,0,0,0,-0.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.level11).wait(1).to({regX:-2.3,regY:66.6,x:639,y:222},0).wait(1).to({y:214.3},0).wait(1).to({y:207.4},0).wait(1).to({y:201.3},0).wait(1).to({y:196},0).wait(1).to({y:191.4},0).wait(1).to({y:187.6},0).wait(1).to({y:184.5},0).wait(1).to({y:182.3},0).wait(1).to({y:181},0).wait(1).to({regX:-0.3,regY:-4.2,x:641,y:109.8},0).wait(1).to({regX:-2.3,regY:66.6,x:639,y:180.7},0).wait(1).to({y:181.4},0).wait(1).to({y:182.6},0).wait(1).to({y:184.3},0).wait(1).to({y:185.8},0).wait(1).to({y:186.6},0).wait(1).to({regX:-0.3,regY:-4.2,x:641,y:116.1},0).wait(27).to({regX:-2.3,regY:66.6,x:639,y:186.4},0).wait(1).to({y:184.7},0).wait(1).to({y:182.1},0).wait(1).to({y:180.3},0).wait(1).to({regX:-0.3,regY:-4.2,x:641,y:109.1},0).wait(1).to({regX:-2.3,regY:66.6,x:639,y:180.5},0).wait(1).to({y:182.4},0).wait(1).to({y:185.9},0).wait(1).to({y:191.1},0).wait(1).to({y:198.2},0).wait(1).to({y:207.1},0).wait(1).to({regX:-0.3,regY:-4.2,x:641,y:147},0).wait(1));

	// level11
	this.level9 = new lib.levelPostIt_9();
	this.level9.setTransform(540.3,308.4,1,1,0,0,0,-0.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.level9).wait(1).to({regX:2.3,regY:69.1,x:542.9,y:373.3},0).wait(1).to({y:365.6},0).wait(1).to({y:358.7},0).wait(1).to({y:352.6},0).wait(1).to({y:347.3},0).wait(1).to({y:342.7},0).wait(1).to({y:338.9},0).wait(1).to({y:335.8},0).wait(1).to({y:333.6},0).wait(1).to({y:332.3},0).wait(1).to({regX:-0.3,regY:-4.2,x:540.3,y:258.6},0).wait(1).to({regX:2.3,regY:69.1,x:542.9,y:332},0).wait(1).to({y:332.7},0).wait(1).to({y:333.9},0).wait(1).to({y:335.6},0).wait(1).to({y:337.1},0).wait(1).to({y:337.9},0).wait(1).to({regX:-0.3,regY:-4.2,x:540.3,y:264.9},0).wait(27).to({regX:2.3,regY:69.1,x:542.9,y:337.7},0).wait(1).to({y:336},0).wait(1).to({y:333.4},0).wait(1).to({y:331.6},0).wait(1).to({regX:-0.3,regY:-4.2,x:540.3,y:257.9},0).wait(1).to({regX:2.3,regY:69.1,x:542.9,y:331.8},0).wait(1).to({y:333.7},0).wait(1).to({y:337.2},0).wait(1).to({y:342.4},0).wait(1).to({y:349.5},0).wait(1).to({y:358.4},0).wait(1).to({regX:-0.3,regY:-4.2,x:540.3,y:295.8},0).wait(1));

	// level10
	this.level8 = new lib.levelPostIt_8();
	this.level8.setTransform(433.6,304.7,1,1,0,0,0,-0.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.level8).wait(1).to({regX:-1.1,regY:69.1,x:432.8,y:369.6},0).wait(1).to({y:361.9},0).wait(1).to({y:355},0).wait(1).to({y:348.9},0).wait(1).to({y:343.6},0).wait(1).to({y:339},0).wait(1).to({y:335.2},0).wait(1).to({y:332.1},0).wait(1).to({y:329.9},0).wait(1).to({y:328.6},0).wait(1).to({regX:-0.3,regY:-4.2,x:433.6,y:254.9},0).wait(1).to({regX:-1.1,regY:69.1,x:432.8,y:328.3},0).wait(1).to({y:329},0).wait(1).to({y:330.2},0).wait(1).to({y:331.9},0).wait(1).to({y:333.4},0).wait(1).to({y:334.2},0).wait(1).to({regX:-0.3,regY:-4.2,x:433.6,y:261.2},0).wait(27).to({regX:-1.1,regY:69.1,x:432.8,y:334},0).wait(1).to({y:332.3},0).wait(1).to({y:329.7},0).wait(1).to({y:327.9},0).wait(1).to({regX:-0.3,regY:-4.2,x:433.6,y:254.2},0).wait(1).to({regX:-1.1,regY:69.1,x:432.8,y:328.1},0).wait(1).to({y:330},0).wait(1).to({y:333.5},0).wait(1).to({y:338.7},0).wait(1).to({y:345.8},0).wait(1).to({y:354.7},0).wait(1).to({regX:-0.3,regY:-4.2,x:433.6,y:292.1},0).wait(1));

	// level3
	this.level5 = new lib.levelPostIt_5();
	this.level5.setTransform(345,160.2,1,1,0,0,0,-0.4,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.level5).wait(1).to({regX:3.4,regY:70.1,x:348.8,y:226},0).wait(1).to({y:218.3},0).wait(1).to({y:211.4},0).wait(1).to({y:205.3},0).wait(1).to({y:200},0).wait(1).to({y:195.4},0).wait(1).to({y:191.6},0).wait(1).to({y:188.5},0).wait(1).to({y:186.3},0).wait(1).to({y:185},0).wait(1).to({regX:-0.4,regY:-4.1,x:345,y:110.4},0).wait(1).to({regX:3.4,regY:70.1,x:348.8,y:184.7},0).wait(1).to({y:185.4},0).wait(1).to({y:186.6},0).wait(1).to({y:188.3},0).wait(1).to({y:189.8},0).wait(1).to({y:190.6},0).wait(1).to({regX:-0.4,regY:-4.1,x:345,y:116.7},0).wait(27).to({regX:3.4,regY:70.1,x:348.8,y:190.4},0).wait(1).to({y:188.7},0).wait(1).to({y:186.1},0).wait(1).to({y:184.3},0).wait(1).to({regX:-0.4,regY:-4.1,x:345,y:109.7},0).wait(1).to({regX:3.4,regY:70.1,x:348.8,y:184.5},0).wait(1).to({y:186.4},0).wait(1).to({y:189.9},0).wait(1).to({y:195.1},0).wait(1).to({y:202.2},0).wait(1).to({y:211.1},0).wait(1).to({regX:-0.4,regY:-4.1,x:345,y:147.6},0).wait(1));

	// level4
	this.level6 = new lib.levelPostIt_6();
	this.level6.setTransform(443.3,152.9,1,1,0,0,0,-0.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.level6).wait(1).to({regX:4,regY:69.8,x:447.6,y:218.4},0).wait(1).to({y:210.8},0).wait(1).to({y:203.9},0).wait(1).to({y:197.8},0).wait(1).to({y:192.4},0).wait(1).to({y:187.8},0).wait(1).to({y:184},0).wait(1).to({y:181},0).wait(1).to({y:178.8},0).wait(1).to({y:177.5},0).wait(1).to({regX:-0.3,regY:-4.2,x:443.3,y:103},0).wait(1).to({regX:4,regY:69.8,x:447.6,y:177.2},0).wait(1).to({y:177.9},0).wait(1).to({y:179.1},0).wait(1).to({y:180.8},0).wait(1).to({y:182.2},0).wait(1).to({y:183.1},0).wait(1).to({regX:-0.3,regY:-4.2,x:443.3,y:109.3},0).wait(27).to({regX:4,regY:69.8,x:447.6,y:182.8},0).wait(1).to({y:181.1},0).wait(1).to({y:178.6},0).wait(1).to({y:176.8},0).wait(1).to({regX:-0.3,regY:-4.2,x:443.3,y:102.3},0).wait(1).to({regX:4,regY:69.8,x:447.6,y:176.9},0).wait(1).to({y:178.9},0).wait(1).to({y:182.4},0).wait(1).to({y:187.6},0).wait(1).to({y:194.6},0).wait(1).to({y:203.6},0).wait(1).to({regX:-0.3,regY:-4.2,x:443.3,y:140.2},0).wait(1));

	// level2
	this.level4 = new lib.levelPostIt_4();
	this.level4.setTransform(241.1,159.5,1,1,0,0,0,-0.3,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.level4).wait(1).to({regX:1.7,regY:69.1,x:243.1,y:224.2},0).wait(1).to({y:216.6},0).wait(1).to({y:209.7},0).wait(1).to({y:203.6},0).wait(1).to({y:198.2},0).wait(1).to({y:193.6},0).wait(1).to({y:189.8},0).wait(1).to({y:186.8},0).wait(1).to({y:184.6},0).wait(1).to({y:183.3},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.1,y:109.6},0).wait(1).to({regX:1.7,regY:69.1,x:243.1,y:183},0).wait(1).to({y:183.7},0).wait(1).to({y:184.9},0).wait(1).to({y:186.6},0).wait(1).to({y:188},0).wait(1).to({y:188.9},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.1,y:115.9},0).wait(27).to({regX:1.7,regY:69.1,x:243.1,y:188.6},0).wait(1).to({y:186.9},0).wait(1).to({y:184.4},0).wait(1).to({y:182.6},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.1,y:108.9},0).wait(1).to({regX:1.7,regY:69.1,x:243.1,y:182.7},0).wait(1).to({y:184.7},0).wait(1).to({y:188.2},0).wait(1).to({y:193.4},0).wait(1).to({y:200.4},0).wait(1).to({y:209.4},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.1,y:146.8},0).wait(1));

	// level8
	this.level3 = new lib.levelPostIt_3();
	this.level3.setTransform(241.7,317.1,1,1,0,0,0,-0.3,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.level3).wait(1).to({regX:1.2,regY:69.1,x:243.2,y:381.9},0).wait(1).to({y:374.2},0).wait(1).to({y:367.3},0).wait(1).to({y:361.2},0).wait(1).to({y:355.9},0).wait(1).to({y:351.3},0).wait(1).to({y:347.5},0).wait(1).to({y:344.4},0).wait(1).to({y:342.2},0).wait(1).to({y:340.9},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.7,y:267.3},0).wait(1).to({regX:1.2,regY:69.1,x:243.2,y:340.6},0).wait(1).to({y:341.3},0).wait(1).to({y:342.5},0).wait(1).to({y:344.2},0).wait(1).to({y:345.7},0).wait(1).to({y:346.5},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.7,y:273.6},0).wait(27).to({regX:1.2,regY:69.1,x:243.2,y:346.3},0).wait(1).to({y:344.6},0).wait(1).to({y:342},0).wait(1).to({y:340.2},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.7,y:266.6},0).wait(1).to({regX:1.2,regY:69.1,x:243.2,y:340.4},0).wait(1).to({y:342.3},0).wait(1).to({y:345.8},0).wait(1).to({y:351},0).wait(1).to({y:358.1},0).wait(1).to({y:367},0).wait(1).to({regX:-0.3,regY:-4.1,x:241.7,y:304.5},0).wait(1));

	// level9
	this.level7 = new lib.levelPostIt_7();
	this.level7.setTransform(327.2,304.3,1,1,0,0,0,-0.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.level7).wait(1).to({regX:-2.2,regY:67.5,x:325.3,y:367.6},0).wait(1).to({y:359.9},0).wait(1).to({y:353},0).wait(1).to({y:346.9},0).wait(1).to({y:341.6},0).wait(1).to({y:337},0).wait(1).to({y:333.2},0).wait(1).to({y:330.1},0).wait(1).to({y:327.9},0).wait(1).to({y:326.6},0).wait(1).to({regX:-0.3,regY:-4.2,x:327.2,y:254.5},0).wait(1).to({regX:-2.2,regY:67.5,x:325.3,y:326.3},0).wait(1).to({y:327},0).wait(1).to({y:328.2},0).wait(1).to({y:329.9},0).wait(1).to({y:331.4},0).wait(1).to({y:332.2},0).wait(1).to({regX:-0.3,regY:-4.2,x:327.2,y:260.8},0).wait(27).to({regX:-2.2,regY:67.5,x:325.3,y:332},0).wait(1).to({y:330.3},0).wait(1).to({y:327.7},0).wait(1).to({y:325.9},0).wait(1).to({regX:-0.3,regY:-4.2,x:327.2,y:253.8},0).wait(1).to({regX:-2.2,regY:67.5,x:325.3,y:326.1},0).wait(1).to({y:328},0).wait(1).to({y:331.5},0).wait(1).to({y:336.7},0).wait(1).to({y:343.8},0).wait(1).to({y:352.7},0).wait(1).to({regX:-0.3,regY:-4.2,x:327.2,y:291.7},0).wait(1));

	// level7
	this.level2 = new lib.levelPostIt_2();
	this.level2.setTransform(143.1,305.4,1,1,0,0,0,-0.4,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.level2).wait(1).to({regX:5.6,regY:66.9,x:149.1,y:367.9},0).wait(1).to({y:360.3},0).wait(1).to({y:353.4},0).wait(1).to({y:347.3},0).wait(1).to({y:341.9},0).wait(1).to({y:337.3},0).wait(1).to({y:333.5},0).wait(1).to({y:330.5},0).wait(1).to({y:328.3},0).wait(1).to({y:327},0).wait(1).to({regX:-0.4,regY:-4.1,x:143.1,y:255.5},0).wait(1).to({regX:5.6,regY:66.9,x:149.1,y:326.7},0).wait(1).to({y:327.4},0).wait(1).to({y:328.6},0).wait(1).to({y:330.3},0).wait(1).to({y:331.7},0).wait(1).to({y:332.6},0).wait(1).to({regX:-0.4,regY:-4.1,x:143.1,y:261.8},0).wait(27).to({regX:5.6,regY:66.9,x:149.1,y:332.3},0).wait(1).to({y:330.6},0).wait(1).to({y:328.1},0).wait(1).to({y:326.3},0).wait(1).to({regX:-0.4,regY:-4.1,x:143.1,y:254.8},0).wait(1).to({regX:5.6,regY:66.9,x:149.1,y:326.4},0).wait(1).to({y:328.4},0).wait(1).to({y:331.9},0).wait(1).to({y:337.1},0).wait(1).to({y:344.1},0).wait(1).to({y:353.1},0).wait(1).to({regX:-0.4,regY:-4.1,x:143.1,y:292.7},0).wait(1));

	// level1
	this.level1 = new lib.levelPostIt_1();
	this.level1.setTransform(140.6,146.5,1,1,0,0,0,-0.3,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(1).to({regX:2,regY:70.1,x:142.9,y:212.3},0).wait(1).to({y:204.6},0).wait(1).to({y:197.7},0).wait(1).to({y:191.6},0).wait(1).to({y:186.3},0).wait(1).to({y:181.7},0).wait(1).to({y:177.9},0).wait(1).to({y:174.8},0).wait(1).to({y:172.6},0).wait(1).to({y:171.3},0).wait(1).to({regX:-0.3,regY:-4.1,x:140.6,y:96.7},0).wait(1).to({regX:2,regY:70.1,x:142.9,y:171},0).wait(1).to({y:171.7},0).wait(1).to({y:172.9},0).wait(1).to({y:174.6},0).wait(1).to({y:176.1},0).wait(1).to({y:176.9},0).wait(1).to({regX:-0.3,regY:-4.1,x:140.6,y:103},0).wait(27).to({regX:2,regY:70.1,x:142.9,y:176.7},0).wait(1).to({y:175},0).wait(1).to({y:172.4},0).wait(1).to({y:170.6},0).wait(1).to({regX:-0.3,regY:-4.1,x:140.6,y:96},0).wait(1).to({regX:2,regY:70.1,x:142.9,y:170.8},0).wait(1).to({y:172.7},0).wait(1).to({y:176.2},0).wait(1).to({y:181.4},0).wait(1).to({y:188.5},0).wait(1).to({y:197.4},0).wait(1).to({regX:-0.3,regY:-4.1,x:140.6,y:133.9},0).wait(1));

	// board
	this.instance_2 = new lib.board();
	this.instance_2.setTransform(400.2,274.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:265.6},0).wait(1).to({y:258},0).wait(1).to({y:251.1},0).wait(1).to({y:245},0).wait(1).to({y:239.6},0).wait(1).to({y:235},0).wait(1).to({y:231.2},0).wait(1).to({y:228.2},0).wait(1).to({y:226},0).wait(1).to({y:224.7},0).wait(1).to({y:224.2},0).wait(1).to({y:224.4},0).wait(1).to({y:225.1},0).wait(1).to({y:226.3},0).wait(1).to({y:228},0).wait(1).to({y:229.4},0).wait(1).to({y:230.3},0).wait(1).to({y:230.5},0).wait(27).to({y:230},0).wait(1).to({y:228.3},0).wait(1).to({y:225.8},0).wait(1).to({y:224},0).wait(1).to({y:223.5},0).wait(1).to({y:224.1},0).wait(1).to({y:226.1},0).wait(1).to({y:229.6},0).wait(1).to({y:234.8},0).wait(1).to({y:241.8},0).wait(1).to({y:250.8},0).wait(1).to({y:261.4},0).wait(1));

	// bg
	this.instance_3 = new lib.selection_bg();
	this.instance_3.setTransform(400,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-121.6,932.2,616.7);
p.frameBounds = [rect, new cjs.Rectangle(-59.6,-121.6,924,608.3), new cjs.Rectangle(-51.1,-121.6,915.5,600.6), new cjs.Rectangle(-42.5,-121.6,907,593.7), new cjs.Rectangle(-34,-121.6,898.5,587.6), new cjs.Rectangle(-25.9,-121.6,890.4,582.4), rect=new cjs.Rectangle(-22.1,-121.6,886.5,582.4), rect, new cjs.Rectangle(-22.1,-121.6,878.7,582.4), new cjs.Rectangle(-22.1,-121.6,870.7,582.4), new cjs.Rectangle(-22.1,-121.6,862.5,582.4), new cjs.Rectangle(-22.1,-121.6,854.4,582.4), new cjs.Rectangle(-22.1,-121.6,846.7,582.4), rect=new cjs.Rectangle(-22.1,-121.6,842.2,582.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-121.6,800.3,573.1), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-22.1,-121.6,842.2,582.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-29.9,-121.6,857.6,584.5), new cjs.Rectangle(-46.3,-121.6,890,593.4), new cjs.Rectangle(-67.7,-121.6,932.2,604)];


// stage content:
(lib.levelselection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;
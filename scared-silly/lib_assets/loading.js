(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 450,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.loading_bg = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.loading_gancho = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.loading_ganchotop = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.loading_toy = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.loading_toy_shadow = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.x_blackie_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_arm_1_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_arm_2_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_basehead_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_cachete_1_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_cachete_2_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_cachete_3_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_mouth_1_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_nose_1_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.x_clarence_shadow_1_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.x_eee_2_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.x_eee_p1_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.x_eee_pupil_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.x_loading_dot_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.x_loading_english_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.x_loading_portuguese_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.x_loading_spanish_png = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.x_loading_spanish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_loading_spanish_png();
	this.instance.setTransform(-141.3,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.3,-33.9,250,80.1);
p.frameBounds = [rect];


(lib.x_loading_portuguese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_loading_portuguese_png();
	this.instance.setTransform(-196.4,-33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196.4,-33.1,306,81.2);
p.frameBounds = [rect];


(lib.x_loading_english = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_loading_english_png();
	this.instance.setTransform(-100.2,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.2,-35.5,201,78.1);
p.frameBounds = [rect];


(lib.x_loading_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_loading_dot_png();
	this.instance.setTransform(-9.2,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.2,-8.1,19.4,22);
p.frameBounds = [rect];


(lib.x_eee_pupil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_eee_pupil_png();
	this.instance.setTransform(-7.5,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.5,-6.8,15.1,14);
p.frameBounds = [rect];


(lib.x_eee_p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_eee_p1_png();
	this.instance.setTransform(-22.4,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-21.5,45,43.1);
p.frameBounds = [rect];


(lib.x_eee_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_eee_2_png();
	this.instance.setTransform(-21,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-15.7,42,31.4);
p.frameBounds = [rect];


(lib.x_clarence_shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_shadow_1_png();
	this.instance.setTransform(-143.8,-127.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.8,-127.8,290,258);
p.frameBounds = [rect];


(lib.x_clarence_nose_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_nose_1_png();
	this.instance.setTransform(-13.7,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.7,-13.1,26,17.5);
p.frameBounds = [rect];


(lib.x_clarence_mouth_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_mouth_1_png();
	this.instance.setTransform(-34.2,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-13.2,68.1,24.1);
p.frameBounds = [rect];


(lib.x_clarence_cachete_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_cachete_3_png();
	this.instance.setTransform(-15.3,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.3,-21,23.3,40.2);
p.frameBounds = [rect];


(lib.x_clarence_cachete_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_cachete_2_png();
	this.instance.setTransform(-10.2,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.2,-15.7,21.4,32);
p.frameBounds = [rect];


(lib.x_clarence_cachete_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_cachete_1_png();
	this.instance.setTransform(-32,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-28,45.3,63.3);
p.frameBounds = [rect];


(lib.x_clarence_basehead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_basehead_png();
	this.instance.setTransform(-83.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am6MkQjXglidhJQAKnhAqkTQAskoBdiHQCCi6DBhXQCxhPDCAOQC7AOCXBdQCaBfBACRQBBCTAtD6QA3ErAYGzQlACvnxAMIg4AAQjHAAi4geg");
	mask.setTransform(2,-11.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(2,1,1).p("ArtjsIXbAAIAAE+Ih/AeQhdDIidi2QisDAiIjTQilDciqjjQkrERgOkhg");
	this.shape.setTransform(0.5,-81.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D89D38").s().p("ApHBYIimlEIXbAAIAAE+Ih/AeQhdDIidi2QisDAiIjTQilDciqjjQiRCFhOAAQhTAAgHiVg");
	this.shape_1.setTransform(0.5,-81.9);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-96.5,179,292);
p.frameBounds = [rect];


(lib.x_clarence_arm_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_arm_2_png();
	this.instance.setTransform(-33.2,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.2,-31.9,69,94);
p.frameBounds = [rect];


(lib.x_clarence_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_clarence_arm_1_png();
	this.instance.setTransform(-33.2,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.2,-31.9,69,94);
p.frameBounds = [rect];


(lib.x_blackie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_blackie_png();
	this.instance.setTransform(-37.1,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-37,74.2,74.2);
p.frameBounds = [rect];


(lib.toyshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loading_toy_shadow();
	this.instance.setTransform(-54,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-11.5,108,23);
p.frameBounds = [rect];


(lib.toy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loading_toy();
	this.instance.setTransform(-56,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-17.5,106,137);
p.frameBounds = [rect];


(lib.gancho_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loading_ganchotop();
	this.instance.setTransform(-6,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6,-7.5,12,15);
p.frameBounds = [rect];


(lib.gancho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loading_gancho();
	this.instance.setTransform(-11,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11,-105.5,22,211);
p.frameBounds = [rect];


(lib.loading_dots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// x_loading_dot
	this.instance = new lib.x_loading_dot();
	this.instance.setTransform(-26.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:0.3,regY:2.8,scaleX:0.97,scaleY:0.97,x:-26,y:2.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-26.1,y:2.6},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:2.2},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-26.2,y:1.6},0).wait(1).to({regX:0,regY:0,scaleX:0.3,scaleY:0.3,x:-26.3,y:0.1},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({regX:0.3,regY:2.8,scaleX:0.6,scaleY:0.6,x:-26.1,y:1.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:2.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-26,y:2.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:3},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:-26.3,y:0.1},0).wait(1).to({regX:0.3,regY:2.8,scaleX:1.04,scaleY:1.04,x:-26,y:3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-26.3,y:0.1},0).wait(15));

	// x_loading_dot
	this.instance_1 = new lib.x_loading_dot();
	this.instance_1.setTransform(0.7,0.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:0.3,regY:2.8,scaleX:0.97,scaleY:0.97,x:0.4,y:2.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:2.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:0.5,y:2.1},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:1.5},0).wait(1).to({regX:0,regY:0,scaleX:0.26,scaleY:0.26,x:0.7,y:0.1},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({regX:0.3,regY:2.8,scaleX:0.58,scaleY:0.58,x:0.5,y:1.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:0.4,y:2.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:2.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:3},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:0.7,y:0.1},0).wait(1).to({regX:0.3,regY:2.8,scaleX:1.04,scaleY:1.04,x:0.4,y:3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0.7,y:0.1},0).wait(13));

	// x_loading_dot
	this.instance_2 = new lib.x_loading_dot();
	this.instance_2.setTransform(25.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({regX:0.3,regY:2.8,scaleX:0.97,scaleY:0.97,x:26.2,y:2.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:26.1,y:2.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:2.1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:26,y:1.5},0).wait(1).to({regX:0,regY:0,scaleX:0.26,scaleY:0.26,x:25.9,y:0.1},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({regX:0.3,regY:2.8,scaleX:0.58,scaleY:0.58,x:26,y:1.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:26.1,y:2.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:26.2,y:2.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:3},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:25.9,y:0.1},0).wait(1).to({regX:0.3,regY:2.8,scaleX:1.04,scaleY:1.04,x:26.2,y:3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:25.9,y:0.1},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.6,-8,71.2,22);
p.frameBounds = [rect, rect, new cjs.Rectangle(-35.3,-8,70.9,22), new cjs.Rectangle(-34.5,-8,70.1,22), new cjs.Rectangle(-33.1,-8,68.7,22), new cjs.Rectangle(-31.2,-8,66.9,22), new cjs.Rectangle(-29.1,-7.8,64.4,21.3), new cjs.Rectangle(-4.2,-7,38.7,19.2), new cjs.Rectangle(-1.9,-5.7,34.8,15.7), new cjs.Rectangle(21.2,-4,9.6,11.1), new cjs.Rectangle(23.5,-2,4.9,5.7), new cjs.Rectangle(-29.1,-2.3,5.8,6.6), new cjs.Rectangle(-31.9,-4.8,11.5,13.3), new cjs.Rectangle(-33.8,-6.5,36.8,17.7), new cjs.Rectangle(-35,-7.6,41.1,20.7), new cjs.Rectangle(-35.8,-8.2,64.2,22.5), new cjs.Rectangle(-36,-8.4,67.6,23.1), new cjs.Rectangle(-35.9,-8.3,69.5,22.9), new cjs.Rectangle(-35.7,-8.4,70.7,23.1), new cjs.Rectangle(-35.6,-8.3,71.4,22.9), new cjs.Rectangle(-35.6,-8.4,71.7,23.1), new cjs.Rectangle(-35.6,-8.3,71.7,22.9), new cjs.Rectangle(-35.6,-8.1,71.4,22.3), rect=new cjs.Rectangle(-35.6,-8,71.2,22), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.clarence_eye_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.instance = new lib.x_eee_p1();
	this.instance.setTransform(37.5,3.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

	// Layer 2
	this.instance_1 = new lib.x_eee_p1();
	this.instance_1.setTransform(-38.9,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97));

	// Layer 3 copy
	this.instance_2 = new lib.x_eee_pupil();
	this.instance_2.setTransform(24.2,5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({x:31.5,y:-0.3},9).to({x:38.8,y:-0.6},9).to({x:46.1,y:1.1},8).to({x:52,y:4.3},9).wait(36));

	// Layer 3
	this.instance_3 = new lib.x_eee_pupil();
	this.instance_3.setTransform(-52.4,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({x:-45,y:-0.6},9).to({x:-37.7,y:-0.9},9).to({x:-30.4,y:0.8},8).to({x:-24.6,y:4},9).wait(36));

	// Layer 1 copy
	this.instance_4 = new lib.x_eee_2();
	this.instance_4.setTransform(38.1,4.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97));

	// Layer 1
	this.instance_5 = new lib.x_eee_2();
	this.instance_5.setTransform(-39.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.3,-18,121.2,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.clarence_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// x_clarence_arm_1
	this.instance = new lib.x_clarence_arm_1();
	this.instance.setTransform(-92,186.1,1,1,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.3,regY:15,rotation:21.8,x:-94.8,y:147.4},0).wait(1).to({rotation:18.8,x:-92.7,y:101.8},0).wait(1).to({rotation:16.3,x:-91,y:63.4},0).wait(1).to({rotation:14.3,x:-89.6,y:32.3},0).wait(1).to({rotation:12.8,x:-88.5,y:8.4},0).wait(1).to({rotation:11.7,x:-87.7,y:-8.7},0).wait(1).to({rotation:11,x:-87.2,y:-19},0).wait(1).to({regX:0,regY:0,rotation:10.8,x:-85.6,y:-37.3},0).wait(1).to({regX:1.3,regY:15,rotation:11,x:-87.1,y:-21.8},0).wait(1).to({rotation:11.5,x:-87.5,y:-20.2},0).wait(1).to({rotation:12.5,x:-88,y:-17.1},0).wait(1).to({rotation:14.1,x:-88.8,y:-12.5},0).wait(1).to({rotation:16.1,x:-89.8,y:-6.8},0).wait(1).to({rotation:18,x:-90.8,y:-1.2},0).wait(1).to({rotation:19.5,x:-91.5,y:3.3},0).wait(1).to({rotation:20.5,x:-92.1,y:6.2},0).wait(1).to({rotation:21.1,x:-92.4,y:7.8},0).wait(1).to({regX:0,regY:0,rotation:21.2,x:-88.2,y:-6.2},0).wait(1).to({regX:1.3,regY:15,x:-92.4,y:8.2},0).wait(1).to({rotation:21.1,y:8},0).wait(1).to({rotation:21,x:-92.5,y:7.8},0).wait(1).to({rotation:20.9,x:-92.4,y:7.3},0).wait(1).to({rotation:20.7,x:-92.5,y:6.8},0).wait(1).to({rotation:20.4,x:-92.4,y:6},0).wait(1).to({rotation:20.1,x:-92.5,y:5.1},0).wait(1).to({rotation:19.7,y:4.2},0).wait(1).to({rotation:19.4,y:3.3},0).wait(1).to({rotation:19.1,y:2.6},0).wait(1).to({rotation:18.9,y:2.1},0).wait(1).to({rotation:18.8,y:1.7},0).wait(1).to({rotation:18.7,y:1.6},0).wait(1).to({regX:0,regY:0,x:-89,y:-13.1},0).wait(1).to({regX:1.3,regY:15,x:-92.5,y:1.5},0).wait(1).to({rotation:18.8,y:1.7},0).wait(1).to({rotation:18.9,y:2},0).wait(1).to({rotation:19.1,y:2.4},0).wait(1).to({rotation:19.3,y:3},0).wait(1).to({rotation:19.6,y:3.8},0).wait(1).to({rotation:19.9,y:4.7},0).wait(1).to({rotation:20.2,y:5.6},0).wait(1).to({rotation:20.5,y:6.5},0).wait(1).to({rotation:20.8,y:7.1},0).wait(1).to({rotation:21,y:7.7},0).wait(1).to({rotation:21.1,x:-92.4,y:8},0).wait(1).to({rotation:21.2,y:8.2},0).wait(1).to({regX:0,regY:0,x:-88.2,y:-6.2},0).wait(1).to({regX:1.3,regY:15,x:-92.4,y:8.2},0).wait(1).to({rotation:21.1,y:8},0).wait(1).to({rotation:21,x:-92.5,y:7.8},0).wait(1).to({rotation:20.9,x:-92.4,y:7.3},0).wait(1).to({rotation:20.7,x:-92.5,y:6.8},0).wait(1).to({rotation:20.4,x:-92.4,y:6},0).wait(1).to({rotation:20.1,x:-92.5,y:5.1},0).wait(1).to({rotation:19.7,y:4.2},0).wait(1).to({rotation:19.4,y:3.3},0).wait(1).to({rotation:19.1,y:2.6},0).wait(1).to({rotation:18.9,y:2.1},0).wait(1).to({rotation:18.8,y:1.7},0).wait(1).to({rotation:18.7,y:1.6},0).wait(1).to({regX:0,regY:0,x:-89,y:-13.1},0).wait(1).to({regX:1.3,regY:15,x:-92.5,y:1.5},0).wait(1).to({rotation:18.8,y:1.7},0).wait(1).to({rotation:18.9,y:2},0).wait(1).to({rotation:19.1,y:2.4},0).wait(1).to({rotation:19.3,y:3},0).wait(1).to({rotation:19.6,y:3.8},0).wait(1).to({rotation:19.9,y:4.7},0).wait(1).to({rotation:20.2,y:5.6},0).wait(1).to({rotation:20.5,y:6.5},0).wait(1).to({rotation:20.8,y:7.1},0).wait(1).to({rotation:21,y:7.7},0).wait(1).to({rotation:21.1,x:-92.4,y:8},0).wait(1).to({rotation:21.2,y:8.2},0).wait(1).to({regX:0,regY:0,x:-88.2,y:-6.2},0).wait(1).to({regX:1.3,regY:15,rotation:21.3,x:-92.5,y:7.8},0).wait(1).to({rotation:21.4,x:-92.7,y:6},0).wait(1).to({rotation:21.7,x:-93,y:3.1},0).wait(1).to({rotation:21.9,x:-93.3,y:0.9},0).wait(1).to({regX:0,regY:0,rotation:22,x:-89,y:-14.1},0).wait(1).to({regX:1.3,regY:15,x:-93.4,y:3.3},0).wait(1).to({rotation:22.2,x:-93.6,y:12.6},0).wait(1).to({rotation:22.4,x:-93.9,y:28.6},0).wait(1).to({rotation:22.8,x:-94.3,y:52.5},0).wait(1).to({rotation:23.4,x:-95,y:85.7},0).wait(1).to({rotation:24.1,x:-95.9,y:131.6},0).wait(1).to({regX:0,regY:0,rotation:25.2,x:-92,y:186.1},0).to({_off:true},1).wait(24));

	// x_clarence_nose_1
	this.instance_1 = new lib.x_clarence_nose_1();
	this.instance_1.setTransform(8.3,57.7,1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.8,regY:-4.7,scaleY:0.97,rotation:2.4,x:7.1,y:8.9},0).wait(1).to({scaleY:0.95,rotation:1.1,x:6.4,y:-29},0).wait(1).to({scaleY:0.93,rotation:0,x:5.9,y:-60.8},0).wait(1).to({scaleY:0.91,rotation:-0.9,x:5.5,y:-86.7},0).wait(1).to({scaleY:0.9,rotation:-1.6,x:5.2,y:-106.7},0).wait(1).to({scaleY:0.89,rotation:-2.1,x:4.9,y:-120.8},0).wait(1).to({scaleY:0.89,rotation:-2.4,x:4.8,y:-129.3},0).wait(1).to({regX:0,regY:0,scaleY:0.89,rotation:-2.5,x:5.7,y:-128},0).wait(1).to({regX:-0.8,regY:-4.7,scaleY:0.89,rotation:-2.4,x:4.7,y:-131.7},0).wait(1).to({scaleY:0.89,rotation:-2.3,y:-130.6},0).wait(1).to({scaleY:0.9,rotation:-2.1,y:-128.5},0).wait(1).to({scaleY:0.92,rotation:-1.7,x:4.6,y:-125.4},0).wait(1).to({scaleY:0.94,rotation:-1.2,y:-121.5},0).wait(1).to({scaleY:0.96,rotation:-0.8,y:-117.6},0).wait(1).to({scaleY:0.98,rotation:-0.4,y:-114.5},0).wait(1).to({scaleY:0.99,rotation:-0.2,y:-112.5},0).wait(1).to({scaleY:1,rotation:0,y:-111.4},0).wait(1).to({regX:0,regY:0,scaleY:1,x:5.4,y:-106.5},0).wait(1).to({regX:-0.8,regY:-4.7,x:4.6,y:-111.2},0).wait(1).to({y:-111.3},0).wait(1).to({x:4.7,y:-111.5},0).wait(1).to({x:4.8,y:-111.8},0).wait(1).to({x:5,y:-112.2},0).wait(1).to({x:5.2,y:-112.8},0).wait(1).to({x:5.5,y:-113.5},0).wait(1).to({x:5.8,y:-114.1},0).wait(1).to({x:6,y:-114.8},0).wait(1).to({x:6.2,y:-115.3},0).wait(1).to({x:6.4,y:-115.7},0).wait(1).to({x:6.5,y:-115.9},0).wait(1).to({y:-116.1},0).wait(1).to({regX:0,regY:0,x:7.4,y:-111.4},0).wait(1).to({regX:-0.8,regY:-4.7,x:6.5,y:-116.1},0).wait(1).to({y:-116},0).wait(1).to({x:6.4,y:-115.8},0).wait(1).to({x:6.3,y:-115.4},0).wait(1).to({x:6.1,y:-115},0).wait(1).to({x:5.9,y:-114.5},0).wait(1).to({x:5.6,y:-113.8},0).wait(1).to({x:5.3,y:-113.1},0).wait(1).to({x:5.1,y:-112.5},0).wait(1).to({x:4.9,y:-112},0).wait(1).to({x:4.7,y:-111.6},0).wait(1).to({x:4.6,y:-111.3},0).wait(1).to({y:-111.2},0).wait(1).to({regX:0,regY:0,x:5.4,y:-106.5},0).wait(1).to({regX:-0.8,regY:-4.7,x:4.6,y:-111.2},0).wait(1).to({y:-111.3},0).wait(1).to({x:4.7,y:-111.5},0).wait(1).to({x:4.8,y:-111.8},0).wait(1).to({x:5,y:-112.2},0).wait(1).to({x:5.2,y:-112.8},0).wait(1).to({x:5.5,y:-113.5},0).wait(1).to({x:5.8,y:-114.1},0).wait(1).to({x:6,y:-114.8},0).wait(1).to({x:6.2,y:-115.3},0).wait(1).to({x:6.4,y:-115.7},0).wait(1).to({x:6.5,y:-115.9},0).wait(1).to({y:-116.1},0).wait(1).to({regX:0,regY:0,x:7.4,y:-111.4},0).wait(1).to({regX:-0.8,regY:-4.7,x:6.5,y:-116.1},0).wait(1).to({y:-116},0).wait(1).to({x:6.4,y:-115.8},0).wait(1).to({x:6.3,y:-115.4},0).wait(1).to({x:6.1,y:-115},0).wait(1).to({x:5.9,y:-114.5},0).wait(1).to({x:5.6,y:-113.8},0).wait(1).to({x:5.3,y:-113.1},0).wait(1).to({x:5.1,y:-112.5},0).wait(1).to({x:4.9,y:-112},0).wait(1).to({x:4.7,y:-111.6},0).wait(1).to({x:4.6,y:-111.3},0).wait(1).to({y:-111.2},0).wait(1).to({regX:0,regY:0,x:5.4,y:-106.5},0).wait(1).to({regX:-0.8,regY:-4.7,x:4.6,y:-111.8},0).wait(1).to({rotation:0.2,x:4.7,y:-114.1},0).wait(1).to({rotation:0.5,x:5,y:-118},0).wait(1).to({rotation:0.7,x:5.2,y:-120.7},0).wait(1).to({regX:0,regY:0,rotation:0.8,x:6,y:-116.8},0).wait(1).to({regX:-0.8,regY:-4.7,rotation:0.9,x:5.3,y:-116.1},0).wait(1).to({rotation:1,x:5.5,y:-105.7},0).wait(1).to({rotation:1.3,x:5.7,y:-89.6},0).wait(1).to({rotation:1.7,x:6.1,y:-67},0).wait(1).to({rotation:2.2,x:6.7,y:-36.8},0).wait(1).to({rotation:2.9,x:7.3,y:3.8},0).wait(1).to({regX:0,regY:0,rotation:4,x:8.8,y:68.2},0).to({_off:true},1).wait(24));

	// clarence_eye_1
	this.instance_2 = new lib.clarence_eye_1();
	this.instance_2.setTransform(9.4,47.8,1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.7,regY:3.4,rotation:2.4,x:6.4,y:4.1},0).wait(1).to({rotation:1.1,x:4.7,y:-36.3},0).wait(1).to({rotation:0,x:3.2,y:-70.4},0).wait(1).to({rotation:-0.9,x:2,y:-98},0).wait(1).to({rotation:-1.6,x:1.1,y:-119.3},0).wait(1).to({rotation:-2.1,x:0.4,y:-134.4},0).wait(1).to({rotation:-2.4,x:0.1,y:-143.5},0).wait(1).to({regX:0,regY:0,rotation:-2.5,x:0.5,y:-149.9},0).wait(1).to({regX:-0.7,regY:3.4,rotation:-2.4,x:0,y:-146.1},0).wait(1).to({rotation:-2.3,x:0.1,y:-144.8},0).wait(1).to({rotation:-2.1,x:0.3,y:-142.4},0).wait(1).to({rotation:-1.7,x:0.6,y:-138.9},0).wait(1).to({rotation:-1.2,x:0.9,y:-134.5},0).wait(1).to({rotation:-0.8,x:1.3,y:-130.1},0).wait(1).to({rotation:-0.4,x:1.6,y:-126.6},0).wait(1).to({rotation:-0.2,x:1.8,y:-124.3},0).wait(1).to({rotation:0,x:1.9,y:-123.1},0).wait(1).to({regX:0,regY:0,x:2.7,y:-126.1},0).wait(1).to({regX:-0.7,regY:3.4,x:2,y:-122.7},0).wait(1).to({y:-122.8},0).wait(1).to({y:-123},0).wait(1).to({y:-123.2},0).wait(1).to({y:-123.5},0).wait(1).to({x:2.1,y:-124},0).wait(1).to({y:-124.5},0).wait(1).to({x:2.2,y:-125},0).wait(1).to({y:-125.5},0).wait(1).to({y:-125.9},0).wait(1).to({x:2.3,y:-126.2},0).wait(1).to({y:-126.4},0).wait(1).to({y:-126.5},0).wait(1).to({regX:0,regY:0,x:3,y:-130},0).wait(1).to({regX:-0.7,regY:3.4,x:2.3,y:-126.5},0).wait(1).to({y:-126.4},0).wait(1).to({y:-126.3},0).wait(1).to({y:-126},0).wait(1).to({x:2.2,y:-125.7},0).wait(1).to({y:-125.3},0).wait(1).to({x:2.1,y:-124.8},0).wait(1).to({y:-124.2},0).wait(1).to({x:2,y:-123.7},0).wait(1).to({y:-123.3},0).wait(1).to({y:-123},0).wait(1).to({y:-122.8},0).wait(1).to({y:-122.7},0).wait(1).to({regX:0,regY:0,x:2.7,y:-126.1},0).wait(1).to({regX:-0.7,regY:3.4,x:2,y:-122.7},0).wait(1).to({y:-122.8},0).wait(1).to({y:-123},0).wait(1).to({y:-123.2},0).wait(1).to({y:-123.5},0).wait(1).to({x:2.1,y:-124},0).wait(1).to({y:-124.5},0).wait(1).to({x:2.2,y:-125},0).wait(1).to({y:-125.5},0).wait(1).to({y:-125.9},0).wait(1).to({x:2.3,y:-126.2},0).wait(1).to({y:-126.4},0).wait(1).to({y:-126.5},0).wait(1).to({regX:0,regY:0,x:3,y:-130},0).wait(1).to({regX:-0.7,regY:3.4,x:2.3,y:-126.5},0).wait(1).to({y:-126.4},0).wait(1).to({y:-126.3},0).wait(1).to({y:-126},0).wait(1).to({x:2.2,y:-125.7},0).wait(1).to({y:-125.3},0).wait(1).to({x:2.1,y:-124.8},0).wait(1).to({y:-124.2},0).wait(1).to({x:2,y:-123.7},0).wait(1).to({y:-123.3},0).wait(1).to({y:-123},0).wait(1).to({y:-122.8},0).wait(1).to({y:-122.7},0).wait(1).to({regX:0,regY:0,x:2.7,y:-126.1},0).wait(1).to({regX:-0.7,regY:3.4,x:2,y:-123.2},0).wait(1).to({rotation:0.2,x:2.2,y:-125.1},0).wait(1).to({rotation:0.5,x:2.5,y:-128.2},0).wait(1).to({rotation:0.7,x:2.7,y:-130.5},0).wait(1).to({regX:0,regY:0,rotation:0.8,x:3.5,y:-134.5},0).wait(1).to({regX:-0.7,regY:3.4,rotation:0.9,x:2.9,y:-125.6},0).wait(1).to({rotation:1,x:3.1,y:-114.9},0).wait(1).to({rotation:1.3,x:3.5,y:-98.5},0).wait(1).to({rotation:1.7,x:4,y:-75.5},0).wait(1).to({rotation:2.2,x:4.7,y:-44.7},0).wait(1).to({rotation:2.9,x:5.6,y:-3.1},0).wait(1).to({regX:0,regY:0,rotation:4,x:7.9,y:54.3},0).to({_off:true},1).wait(24));

	// x_clarence_cachete_3
	this.instance_3 = new lib.x_clarence_cachete_3();
	this.instance_3.setTransform(45.1,96.4,1,1,4,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-3.8,regY:-1.1,scaleY:0.99,rotation:2.4,x:40.6,y:48.8},0).wait(1).to({scaleY:0.99,rotation:1.1,x:40.2,y:9.2},0).wait(1).to({scaleY:0.98,rotation:0,x:39.8,y:-24},0).wait(1).to({scaleY:0.98,rotation:-0.9,x:39.6,y:-51},0).wait(1).to({scaleY:0.97,rotation:-1.6,x:39.3,y:-71.7},0).wait(1).to({scaleY:0.97,rotation:-2.1,x:39.2,y:-86.5},0).wait(1).to({scaleY:0.97,rotation:-2.4,x:39.1,y:-95.4},0).wait(1).to({regX:0.3,regY:0.3,scaleY:0.97,rotation:-2.5,x:43.3,y:-97.1},0).wait(1).to({regX:-3.8,regY:-1.1,scaleY:0.97,rotation:-2.4,x:39.1,y:-97.9},0).wait(1).to({scaleY:0.97,rotation:-2.3,y:-96.7},0).wait(1).to({scaleY:0.98,rotation:-2.1,y:-94.4},0).wait(1).to({scaleY:0.98,rotation:-1.7,y:-91},0).wait(1).to({scaleY:0.99,rotation:-1.2,y:-86.7},0).wait(1).to({scaleY:0.99,rotation:-0.8,x:39,y:-82.5},0).wait(1).to({scaleY:1,rotation:-0.4,y:-79.1},0).wait(1).to({scaleY:1,rotation:-0.2,y:-76.9},0).wait(1).to({scaleY:1,rotation:0,y:-75.8},0).wait(1).to({regX:0.3,regY:0.3,x:43.1,y:-74},0).wait(1).to({regX:-3.8,regY:-1.1,x:39,y:-75.4},0).wait(1).to({x:38.9,y:-75.6},0).wait(1).to({x:38.8,y:-75.9},0).wait(1).to({x:38.7,y:-76.3},0).wait(1).to({x:38.5,y:-76.8},0).wait(1).to({x:38.2,y:-77.6},0).wait(1).to({x:37.9,y:-78.5},0).wait(1).to({x:37.6,y:-79.4},0).wait(1).to({x:37.3,y:-80.2},0).wait(1).to({x:37.1,y:-80.9},0).wait(1).to({x:36.9,y:-81.4},0).wait(1).to({x:36.8,y:-81.7},0).wait(1).to({x:36.7,y:-81.9},0).wait(1).to({regX:0.3,regY:0.3,x:40.8,y:-80.6},0).wait(1).to({regX:-3.8,regY:-1.1,x:36.7,y:-81.9},0).wait(1).to({x:36.8,y:-81.8},0).wait(1).to({x:36.9,y:-81.5},0).wait(1).to({x:37,y:-81.1},0).wait(1).to({x:37.2,y:-80.5},0).wait(1).to({x:37.5,y:-79.8},0).wait(1).to({x:37.8,y:-78.9},0).wait(1).to({x:38.1,y:-78},0).wait(1).to({x:38.4,y:-77.2},0).wait(1).to({x:38.6,y:-76.5},0).wait(1).to({x:38.8,y:-76},0).wait(1).to({x:38.9,y:-75.6},0).wait(1).to({x:39,y:-75.5},0).wait(1).to({regX:0.3,regY:0.3,x:43.1,y:-74},0).wait(1).to({regX:-3.8,regY:-1.1,x:39,y:-75.4},0).wait(1).to({x:38.9,y:-75.6},0).wait(1).to({x:38.8,y:-75.9},0).wait(1).to({x:38.7,y:-76.3},0).wait(1).to({x:38.5,y:-76.8},0).wait(1).to({x:38.2,y:-77.6},0).wait(1).to({x:37.9,y:-78.5},0).wait(1).to({x:37.6,y:-79.4},0).wait(1).to({x:37.3,y:-80.2},0).wait(1).to({x:37.1,y:-80.9},0).wait(1).to({x:36.9,y:-81.4},0).wait(1).to({x:36.8,y:-81.7},0).wait(1).to({x:36.7,y:-81.9},0).wait(1).to({regX:0.3,regY:0.3,x:40.8,y:-80.6},0).wait(1).to({regX:-3.8,regY:-1.1,x:36.7,y:-81.9},0).wait(1).to({x:36.8,y:-81.8},0).wait(1).to({x:36.9,y:-81.5},0).wait(1).to({x:37,y:-81.1},0).wait(1).to({x:37.2,y:-80.5},0).wait(1).to({x:37.5,y:-79.8},0).wait(1).to({x:37.8,y:-78.9},0).wait(1).to({x:38.1,y:-78},0).wait(1).to({x:38.4,y:-77.2},0).wait(1).to({x:38.6,y:-76.5},0).wait(1).to({x:38.8,y:-76},0).wait(1).to({x:38.9,y:-75.6},0).wait(1).to({x:39,y:-75.5},0).wait(1).to({regX:0.3,regY:0.3,x:43.1,y:-74},0).wait(1).to({regX:-3.8,regY:-1.1,x:39,y:-75.9},0).wait(1).to({rotation:0.2,x:39.1,y:-77.8},0).wait(1).to({rotation:0.5,y:-80.9},0).wait(1).to({rotation:0.7,x:39.2,y:-83.1},0).wait(1).to({regX:0.3,regY:0.3,rotation:0.8,x:43.3,y:-82.3},0).wait(1).to({regX:-3.8,regY:-1.1,rotation:0.9,x:39.4,y:-78.6},0).wait(1).to({rotation:1,x:39.7,y:-68.5},0).wait(1).to({rotation:1.3,x:40.2,y:-53},0).wait(1).to({rotation:1.7,x:40.9,y:-31.2},0).wait(1).to({rotation:2.2,x:41.8,y:-2.1},0).wait(1).to({rotation:2.9,x:43,y:37.1},0).wait(1).to({regX:0.3,regY:0.3,rotation:4,x:48.9,y:96.2},0).to({_off:true},1).wait(24));

	// x_clarence_cachete_2
	this.instance_4 = new lib.x_clarence_cachete_2();
	this.instance_4.setTransform(-27.3,91.8,1,1,4,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0.3,rotation:2.4,x:-27.6,y:47.9},0).wait(1).to({rotation:1.1,x:-28,y:10},0).wait(1).to({rotation:0,x:-28.3,y:-21.8},0).wait(1).to({rotation:-0.9,x:-28.5,y:-47.6},0).wait(1).to({rotation:-1.6,x:-28.7,y:-67.6},0).wait(1).to({rotation:-2.1,x:-28.8,y:-81.7},0).wait(1).to({rotation:-2.4,x:-28.9,y:-90.1},0).wait(1).to({regY:0.2,rotation:-2.5,x:-29,y:-93},0).wait(1).to({regY:0.3,rotation:-2.4,y:-92.6},0).wait(1).to({rotation:-2.3,y:-91.6},0).wait(1).to({rotation:-2.1,x:-29.1,y:-89.6},0).wait(1).to({rotation:-1.7,y:-86.7},0).wait(1).to({rotation:-1.2,x:-29.2,y:-83.1},0).wait(1).to({rotation:-0.8,y:-79.5},0).wait(1).to({rotation:-0.4,x:-29.3,y:-76.7},0).wait(1).to({rotation:-0.2,y:-74.8},0).wait(1).to({rotation:0,y:-73.8},0).wait(1).to({y:-73.6},0).wait(1).to({y:-73.7},0).wait(1).to({x:-29.2,y:-73.8},0).wait(1).to({x:-29.1,y:-74.1},0).wait(1).to({x:-28.9,y:-74.6},0).wait(1).to({x:-28.7,y:-75.2},0).wait(1).to({x:-28.4,y:-76},0).wait(1).to({x:-28,y:-77},0).wait(1).to({x:-27.7,y:-78},0).wait(1).to({x:-27.3,y:-78.9},0).wait(1).to({x:-27,y:-79.7},0).wait(1).to({x:-26.8,y:-80.3},0).wait(1).to({x:-26.7,y:-80.6},0).wait(1).to({x:-26.6,y:-80.8},0).wait(1).to({y:-80.9},0).wait(1).to({y:-80.8},0).wait(1).to({x:-26.7,y:-80.7},0).wait(1).to({x:-26.8,y:-80.4},0).wait(1).to({x:-27,y:-79.9},0).wait(1).to({x:-27.2,y:-79.3},0).wait(1).to({x:-27.5,y:-78.5},0).wait(1).to({x:-27.9,y:-77.5},0).wait(1).to({x:-28.2,y:-76.5},0).wait(1).to({x:-28.6,y:-75.6},0).wait(1).to({x:-28.9,y:-74.8},0).wait(1).to({x:-29.1,y:-74.2},0).wait(1).to({x:-29.2,y:-73.9},0).wait(1).to({x:-29.3,y:-73.7},0).wait(1).to({y:-73.6},0).wait(1).to({y:-73.7},0).wait(1).to({x:-29.2,y:-73.8},0).wait(1).to({x:-29.1,y:-74.1},0).wait(1).to({x:-28.9,y:-74.6},0).wait(1).to({x:-28.7,y:-75.2},0).wait(1).to({x:-28.4,y:-76},0).wait(1).to({x:-28,y:-77},0).wait(1).to({x:-27.7,y:-78},0).wait(1).to({x:-27.3,y:-78.9},0).wait(1).to({x:-27,y:-79.7},0).wait(1).to({x:-26.8,y:-80.3},0).wait(1).to({x:-26.7,y:-80.6},0).wait(1).to({x:-26.6,y:-80.8},0).wait(1).to({y:-80.9},0).wait(1).to({y:-80.8},0).wait(1).to({x:-26.7,y:-80.7},0).wait(1).to({x:-26.8,y:-80.4},0).wait(1).to({x:-27,y:-79.9},0).wait(1).to({x:-27.2,y:-79.3},0).wait(1).to({x:-27.5,y:-78.5},0).wait(1).to({x:-27.9,y:-77.5},0).wait(1).to({x:-28.2,y:-76.5},0).wait(1).to({x:-28.6,y:-75.6},0).wait(1).to({x:-28.9,y:-74.8},0).wait(1).to({x:-29.1,y:-74.2},0).wait(1).to({x:-29.2,y:-73.9},0).wait(1).to({x:-29.3,y:-73.7},0).wait(1).to({y:-73.6},0).wait(1).to({y:-74.3},0).wait(1).to({rotation:0.2,x:-29.2,y:-76.7},0).wait(1).to({rotation:0.5,y:-80.7},0).wait(1).to({rotation:0.7,x:-29.1,y:-83.6},0).wait(1).to({rotation:0.8,y:-84.5},0).wait(1).to({rotation:0.9,y:-79.5},0).wait(1).to({rotation:1,x:-29.2,y:-69.9},0).wait(1).to({rotation:1.3,x:-29.3,y:-55},0).wait(1).to({rotation:1.7,x:-29.5,y:-34.3},0).wait(1).to({rotation:2.2,x:-29.7,y:-6.4},0).wait(1).to({rotation:2.9,x:-30,y:31},0).wait(1).to({regX:0.2,rotation:4,x:-30.6,y:86},0).to({_off:true},1).wait(24));

	// x_clarence_mouth_1
	this.instance_5 = new lib.x_clarence_mouth_1();
	this.instance_5.setTransform(6.7,100.5,1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.2,regY:-1.8,scaleX:0.95,rotation:2.4,x:6.4,y:53.9},0).wait(1).to({scaleX:0.91,rotation:1.1,x:6.1,y:15.3},0).wait(1).to({scaleX:0.88,rotation:0,x:5.9,y:-17},0).wait(1).to({scaleX:0.85,rotation:-0.9,x:5.7,y:-43.3},0).wait(1).to({scaleX:0.83,rotation:-1.6,x:5.6,y:-63.6},0).wait(1).to({scaleX:0.81,rotation:-2.1,y:-78},0).wait(1).to({scaleX:0.8,rotation:-2.4,x:5.5,y:-86.6},0).wait(1).to({regX:0,regY:0,scaleX:0.8,rotation:-2.5,x:5.7,y:-87.7},0).wait(1).to({regX:-0.2,regY:-1.8,scaleX:0.8,rotation:-2.4,x:5.4,y:-89.2},0).wait(1).to({scaleX:0.81,rotation:-2.3,x:5.5,y:-88.1},0).wait(1).to({scaleX:0.83,rotation:-2.1,x:5.4,y:-86.1},0).wait(1).to({scaleX:0.86,rotation:-1.7,x:5.3,y:-83},0).wait(1).to({scaleX:0.9,rotation:-1.2,x:5.2,y:-79.2},0).wait(1).to({scaleX:0.94,rotation:-0.8,x:5.1,y:-75.4},0).wait(1).to({scaleX:0.97,rotation:-0.4,x:5,y:-72.4},0).wait(1).to({scaleX:0.99,rotation:-0.2,y:-70.5},0).wait(1).to({scaleX:1,rotation:0,y:-69.4},0).wait(1).to({regX:0,regY:0,scaleX:1,x:5.2,y:-67.3},0).wait(1).to({regX:-0.2,regY:-1.8,x:5,y:-69.2},0).wait(1).to({y:-69.3},0).wait(1).to({y:-69.7},0).wait(1).to({y:-70.2},0).wait(1).to({y:-71},0).wait(1).to({y:-71.9},0).wait(1).to({y:-73},0).wait(1).to({y:-74.2},0).wait(1).to({y:-75.3},0).wait(1).to({y:-76.2},0).wait(1).to({y:-76.8},0).wait(1).to({y:-77.2},0).wait(1).to({y:-77.5},0).wait(1).to({regX:0,regY:0,x:5.2,y:-75.8},0).wait(1).to({regX:-0.2,regY:-1.8,x:5,y:-77.5},0).wait(1).to({y:-77.3},0).wait(1).to({y:-77},0).wait(1).to({y:-76.4},0).wait(1).to({y:-75.7},0).wait(1).to({y:-74.7},0).wait(1).to({y:-73.6},0).wait(1).to({y:-72.4},0).wait(1).to({y:-71.4},0).wait(1).to({y:-70.5},0).wait(1).to({y:-69.8},0).wait(1).to({y:-69.4},0).wait(1).to({y:-69.2},0).wait(1).to({regX:0,regY:0,x:5.2,y:-67.3},0).wait(1).to({regX:-0.2,regY:-1.8,x:5,y:-69.2},0).wait(1).to({y:-69.3},0).wait(1).to({y:-69.7},0).wait(1).to({y:-70.2},0).wait(1).to({y:-71},0).wait(1).to({y:-71.9},0).wait(1).to({y:-73},0).wait(1).to({y:-74.2},0).wait(1).to({y:-75.3},0).wait(1).to({y:-76.2},0).wait(1).to({y:-76.8},0).wait(1).to({y:-77.2},0).wait(1).to({y:-77.5},0).wait(1).to({regX:0,regY:0,x:5.2,y:-75.8},0).wait(1).to({regX:-0.2,regY:-1.8,x:5,y:-77.5},0).wait(1).to({y:-77.3},0).wait(1).to({y:-77},0).wait(1).to({y:-76.4},0).wait(1).to({y:-75.7},0).wait(1).to({y:-74.7},0).wait(1).to({y:-73.6},0).wait(1).to({y:-72.4},0).wait(1).to({y:-71.4},0).wait(1).to({y:-70.5},0).wait(1).to({y:-69.8},0).wait(1).to({y:-69.4},0).wait(1).to({y:-69.2},0).wait(1).to({regX:0,regY:0,x:5.2,y:-67.3},0).wait(1).to({regX:-0.2,regY:-1.8,x:5,y:-69.8},0).wait(1).to({rotation:0.2,y:-72.5},0).wait(1).to({rotation:0.5,y:-76.9},0).wait(1).to({rotation:0.7,y:-80},0).wait(1).to({regX:0,regY:0,rotation:0.8,x:5.2,y:-79.1},0).wait(1).to({regX:-0.2,regY:-1.8,rotation:0.9,y:-76},0).wait(1).to({rotation:1,x:5.4,y:-66.5},0).wait(1).to({rotation:1.3,x:5.7,y:-51.8},0).wait(1).to({rotation:1.7,x:6.2,y:-31.3},0).wait(1).to({rotation:2.2,x:6.9,y:-3.7},0).wait(1).to({rotation:2.9,x:7.8,y:33.4},0).wait(1).to({regX:0,regY:0,rotation:4,x:9.2,y:89.5},0).to({_off:true},1).wait(24));

	// x_clarence_cachete_1
	this.instance_6 = new lib.x_clarence_cachete_1();
	this.instance_6.setTransform(70.8,93.8,1,1,0,4,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-9.5,regY:3.5,scaleX:0.99,scaleY:0.98,skewX:1.7,skewY:-178.3,x:79.2,y:49.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,skewX:-0.3,skewY:-180.3,x:78.6,y:7.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,skewX:-2,skewY:-182,x:78,y:-27.3},0).wait(1).to({scaleX:0.96,scaleY:0.95,skewX:-3.3,skewY:-183.3,x:77.6,y:-55.8},0).wait(1).to({scaleX:0.95,scaleY:0.94,skewX:-4.4,skewY:-184.4,x:77.2,y:-77.8},0).wait(1).to({scaleX:0.94,scaleY:0.93,skewX:-5.1,skewY:-185.1,x:77,y:-93.4},0).wait(1).to({scaleX:0.94,scaleY:0.93,skewX:-5.6,skewY:-185.6,x:76.8,y:-102.7},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.94,scaleY:0.93,skewX:-5.7,skewY:-185.7,x:67.7,y:-108.2},0).wait(1).to({regX:-9.5,regY:3.5,scaleX:0.94,scaleY:0.93,skewX:-5.6,skewY:-185.6,x:76.8,y:-105.2},0).wait(1).to({scaleX:0.94,scaleY:0.93,skewX:-5.3,skewY:-185.3,x:76.9,y:-103.6},0).wait(1).to({scaleX:0.95,scaleY:0.94,skewX:-4.7,skewY:-184.7,x:77,y:-100.5},0).wait(1).to({scaleX:0.96,scaleY:0.95,skewX:-3.9,skewY:-183.9,x:77.2,y:-95.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,skewX:-2.8,skewY:-182.8,x:77.4,y:-90.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,skewX:-1.8,skewY:-181.8,x:77.6,y:-84.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewX:-0.9,skewY:-180.9,x:77.8,y:-79.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.4,skewY:-180.4,x:77.9,y:-76.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.1,skewY:-180.1,x:78,y:-75.3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:-180,x:68.6,y:-78.5},0).wait(1).to({regX:-9.5,regY:3.5,x:78.1,y:-75},0).wait(1).to({scaleY:1,y:-75.2},0).wait(1).to({scaleY:1,y:-75.4},0).wait(1).to({scaleY:1,y:-75.9},0).wait(1).to({scaleY:0.99,y:-76.5},0).wait(1).to({scaleY:0.99,y:-77.3},0).wait(1).to({scaleY:0.98,y:-78.2},0).wait(1).to({scaleY:0.98,y:-79.2},0).wait(1).to({scaleY:0.97,y:-80.1},0).wait(1).to({scaleY:0.97,y:-80.8},0).wait(1).to({scaleY:0.97,y:-81.3},0).wait(1).to({scaleY:0.96,y:-81.7},0).wait(1).to({scaleY:0.96,y:-81.9},0).wait(1).to({regX:0,regY:0,x:68.6,y:-85.3},0).wait(1).to({regX:-9.5,regY:3.5,x:78.1,y:-81.9},0).wait(1).to({scaleY:0.96,y:-81.7},0).wait(1).to({scaleY:0.96,y:-81.4},0).wait(1).to({scaleY:0.97,y:-80.9},0).wait(1).to({scaleY:0.97,y:-80.3},0).wait(1).to({scaleY:0.97,y:-79.6},0).wait(1).to({scaleY:0.98,y:-78.6},0).wait(1).to({scaleY:0.99,y:-77.7},0).wait(1).to({scaleY:0.99,y:-76.8},0).wait(1).to({scaleY:0.99,y:-76},0).wait(1).to({scaleY:1,y:-75.5},0).wait(1).to({scaleY:1,y:-75.1},0).wait(1).to({scaleY:1,y:-75},0).wait(1).to({regX:0,regY:0,x:68.6,y:-78.5},0).wait(1).to({regX:-9.5,regY:3.5,x:78.1,y:-75},0).wait(1).to({scaleY:1,y:-75.2},0).wait(1).to({scaleY:1,y:-75.4},0).wait(1).to({scaleY:1,y:-75.9},0).wait(1).to({scaleY:0.99,y:-76.5},0).wait(1).to({scaleY:0.99,y:-77.3},0).wait(1).to({scaleY:0.98,y:-78.2},0).wait(1).to({scaleY:0.98,y:-79.2},0).wait(1).to({scaleY:0.97,y:-80.1},0).wait(1).to({scaleY:0.97,y:-80.8},0).wait(1).to({scaleY:0.97,y:-81.3},0).wait(1).to({scaleY:0.96,y:-81.7},0).wait(1).to({scaleY:0.96,y:-81.9},0).wait(1).to({regX:0,regY:0,x:68.6,y:-85.3},0).wait(1).to({regX:-9.5,regY:3.5,x:78.1,y:-81.9},0).wait(1).to({scaleY:0.96,y:-81.7},0).wait(1).to({scaleY:0.96,y:-81.4},0).wait(1).to({scaleY:0.97,y:-80.9},0).wait(1).to({scaleY:0.97,y:-80.3},0).wait(1).to({scaleY:0.97,y:-79.6},0).wait(1).to({scaleY:0.98,y:-78.6},0).wait(1).to({scaleY:0.99,y:-77.7},0).wait(1).to({scaleY:0.99,y:-76.8},0).wait(1).to({scaleY:0.99,y:-76},0).wait(1).to({scaleY:1,y:-75.5},0).wait(1).to({scaleY:1,y:-75.1},0).wait(1).to({scaleY:1,y:-75},0).wait(1).to({regX:0,regY:0,x:68.6,y:-78.5},0).wait(1).to({regX:-9.5,regY:3.5,x:78.1,y:-75.3},0).wait(1).to({skewX:0.2,skewY:-179.8,y:-76.5},0).wait(1).to({skewX:0.5,skewY:-179.5,y:-78.6},0).wait(1).to({skewX:0.7,skewY:-179.3,x:78.2,y:-80.1},0).wait(1).to({regX:0,regY:0,skewX:0.8,skewY:-179.2,x:68.8,y:-84.2},0).wait(1).to({regX:-9.5,regY:3.5,x:78.2,y:-77.7},0).wait(1).to({skewX:1,skewY:-179,x:78.4,y:-68.9},0).wait(1).to({skewX:1.2,skewY:-178.8,x:78.6,y:-53.6},0).wait(1).to({skewX:1.6,skewY:-178.4,x:78.9,y:-30.9},0).wait(1).to({skewX:2.1,skewY:-177.9,x:79.4,y:0.7},0).wait(1).to({skewX:2.9,skewY:-177.1,x:80.1,y:44.3},0).wait(1).to({regX:0,regY:0,skewX:4,skewY:-176,x:71.8,y:105.4},0).to({_off:true},1).wait(24));

	// x_clarence_cachete_1
	this.instance_7 = new lib.x_clarence_cachete_1();
	this.instance_7.setTransform(-65.7,88.7,1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-9.5,regY:3.5,scaleY:0.98,rotation:3.1,x:-76,y:46.7},0).wait(1).to({scaleY:0.97,rotation:2.3,x:-76.5,y:8},0).wait(1).to({scaleY:0.96,rotation:1.7,x:-77,y:-24.4},0).wait(1).to({scaleY:0.95,rotation:1.2,x:-77.3,y:-50.8},0).wait(1).to({scaleY:0.94,rotation:0.7,x:-77.6,y:-71.1},0).wait(1).to({scaleY:0.93,rotation:0.5,x:-77.8,y:-85.6},0).wait(1).to({scaleY:0.93,rotation:0.3,x:-77.9,y:-94.2},0).wait(1).to({regX:-0.1,regY:0,scaleY:0.93,rotation:0.2,x:-68.5,y:-100.3},0).wait(1).to({regX:-9.5,regY:3.5,scaleY:0.93,x:-77.9,y:-96.6},0).wait(1).to({scaleY:0.93,y:-95.2},0).wait(1).to({scaleY:0.94,x:-77.8,y:-92.6},0).wait(1).to({scaleY:0.95,x:-77.7,y:-88.6},0).wait(1).to({scaleY:0.97,rotation:0.1,x:-77.6,y:-83.6},0).wait(1).to({scaleY:0.98,x:-77.5,y:-78.7},0).wait(1).to({scaleY:0.99,rotation:0,x:-77.4,y:-74.9},0).wait(1).to({scaleY:1,x:-77.3,y:-72.3},0).wait(1).to({scaleY:1,y:-70.9},0).wait(1).to({regX:0,regY:0,scaleY:1,x:-67.9,y:-74.1},0).wait(1).to({regX:-9.5,regY:3.5,x:-77.4,y:-70.6},0).wait(1).to({scaleY:1,y:-70.8},0).wait(1).to({scaleY:1,y:-71.1},0).wait(1).to({scaleY:0.99,y:-71.6},0).wait(1).to({scaleY:0.99,y:-72.3},0).wait(1).to({scaleY:0.98,y:-73.2},0).wait(1).to({scaleY:0.97,y:-74.2},0).wait(1).to({scaleY:0.96,y:-75.3},0).wait(1).to({scaleY:0.95,y:-76.3},0).wait(1).to({scaleY:0.94,y:-77.1},0).wait(1).to({scaleY:0.94,y:-77.7},0).wait(1).to({scaleY:0.93,y:-78.1},0).wait(1).to({scaleY:0.93,y:-78.3},0).wait(1).to({regX:0,regY:0,x:-67.9,y:-81.7},0).wait(1).to({regX:-9.5,regY:3.5,x:-77.4,y:-78.3},0).wait(1).to({scaleY:0.93,y:-78.2},0).wait(1).to({scaleY:0.94,y:-77.9},0).wait(1).to({scaleY:0.94,y:-77.3},0).wait(1).to({scaleY:0.95,y:-76.7},0).wait(1).to({scaleY:0.95,y:-75.8},0).wait(1).to({scaleY:0.96,y:-74.8},0).wait(1).to({scaleY:0.97,y:-73.7},0).wait(1).to({scaleY:0.98,y:-72.6},0).wait(1).to({scaleY:0.99,y:-71.8},0).wait(1).to({scaleY:0.99,y:-71.2},0).wait(1).to({scaleY:1,y:-70.8},0).wait(1).to({scaleY:1,y:-70.6},0).wait(1).to({regX:0,regY:0,scaleY:1,x:-67.9,y:-74.1},0).wait(1).to({regX:-9.5,regY:3.5,x:-77.4,y:-70.6},0).wait(1).to({scaleY:1,y:-70.8},0).wait(1).to({scaleY:1,y:-71.1},0).wait(1).to({scaleY:0.99,y:-71.6},0).wait(1).to({scaleY:0.99,y:-72.3},0).wait(1).to({scaleY:0.98,y:-73.2},0).wait(1).to({scaleY:0.97,y:-74.2},0).wait(1).to({scaleY:0.96,y:-75.3},0).wait(1).to({scaleY:0.95,y:-76.3},0).wait(1).to({scaleY:0.94,y:-77.1},0).wait(1).to({scaleY:0.94,y:-77.7},0).wait(1).to({scaleY:0.93,y:-78.1},0).wait(1).to({scaleY:0.93,y:-78.3},0).wait(1).to({regX:0,regY:0,x:-67.9,y:-81.7},0).wait(1).to({regX:-9.5,regY:3.5,x:-77.4,y:-78.3},0).wait(1).to({scaleY:0.93,y:-78.2},0).wait(1).to({scaleY:0.94,y:-77.9},0).wait(1).to({scaleY:0.94,y:-77.3},0).wait(1).to({scaleY:0.95,y:-76.7},0).wait(1).to({scaleY:0.95,y:-75.8},0).wait(1).to({scaleY:0.96,y:-74.8},0).wait(1).to({scaleY:0.97,y:-73.7},0).wait(1).to({scaleY:0.98,y:-72.6},0).wait(1).to({scaleY:0.99,y:-71.8},0).wait(1).to({scaleY:0.99,y:-71.2},0).wait(1).to({scaleY:1,y:-70.8},0).wait(1).to({scaleY:1,y:-70.6},0).wait(1).to({regX:0,regY:0,scaleY:1,x:-67.9,y:-74.1},0).wait(1).to({regX:-9.5,regY:3.5,x:-77.3,y:-71},0).wait(1).to({rotation:0.2,y:-72.8},0).wait(1).to({rotation:0.5,y:-75.6},0).wait(1).to({rotation:0.7,y:-77.6},0).wait(1).to({regX:0,regY:0,rotation:0.8,x:-67.7,y:-81.6},0).wait(1).to({regX:-9.5,regY:3.5,x:-77.2,y:-75.6},0).wait(1).to({rotation:1,x:-77.1,y:-67.5},0).wait(1).to({rotation:1.2,x:-76.9,y:-53.3},0).wait(1).to({rotation:1.6,x:-76.5,y:-32.3},0).wait(1).to({rotation:2.1,x:-76,y:-3.1},0).wait(1).to({rotation:2.9,x:-75.4,y:37.1},0).wait(1).to({regX:0,regY:0,rotation:4,x:-64.7,y:94.7},0).to({_off:true},1).wait(24));

	// x_clarence_basehead
	this.instance_8 = new lib.x_clarence_basehead();
	this.instance_8.setTransform(1.8,102,1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:6,regY:49.5,rotation:2.4,x:4.8,y:99.5},0).wait(1).to({rotation:1.1,x:5.3,y:54.3},0).wait(1).to({rotation:0,x:5.6,y:16.4},0).wait(1).to({rotation:-0.9,x:5.9,y:-14.3},0).wait(1).to({rotation:-1.6,x:6.1,y:-38.1},0).wait(1).to({rotation:-2.1,x:6.3,y:-55},0).wait(1).to({rotation:-2.4,x:6.4,y:-65.1},0).wait(1).to({regX:0,regY:0,rotation:-2.5,x:-1.8,y:-117.7},0).wait(1).to({regX:6,regY:49.5,rotation:-2.4,x:6.4,y:-68.1},0).wait(1).to({rotation:-2.3,x:6.3,y:-67},0).wait(1).to({rotation:-2.1,x:6.2,y:-64.8},0).wait(1).to({rotation:-1.7,x:6.1,y:-61.6},0).wait(1).to({rotation:-1.2,x:6,y:-57.6},0).wait(1).to({rotation:-0.8,x:5.8,y:-53.7},0).wait(1).to({rotation:-0.4,x:5.7,y:-50.5},0).wait(1).to({rotation:-0.2,y:-48.5},0).wait(1).to({rotation:0,x:5.6,y:-47.4},0).wait(1).to({regX:0,regY:0,x:-0.4,y:-96.6},0).wait(1).to({regX:6,regY:49.5,x:5.6,y:-47.1},0).wait(1).to({y:-47.2},0).wait(1).to({scaleX:1,y:-47.4},0).wait(1).to({scaleX:1,scaleY:1,y:-47.8},0).wait(1).to({scaleX:1,y:-48.2},0).wait(1).to({scaleX:1,scaleY:1,y:-48.8},0).wait(1).to({scaleX:1.01,y:-49.5},0).wait(1).to({scaleX:1.01,scaleY:1,y:-50.3},0).wait(1).to({scaleX:1.01,scaleY:1,y:-51},0).wait(1).to({scaleX:1.01,y:-51.5},0).wait(1).to({scaleY:1,y:-52},0).wait(1).to({scaleX:1.01,y:-52.2},0).wait(1).to({y:-52.4},0).wait(1).to({regX:0,regY:0,scaleX:1.01,x:-0.4,y:-101.7},0).wait(1).to({regX:6,regY:49.5,scaleX:1.01,x:5.6,y:-52.4},0).wait(1).to({y:-52.3},0).wait(1).to({y:-52},0).wait(1).to({scaleX:1.01,scaleY:1,y:-51.7},0).wait(1).to({scaleX:1.01,y:-51.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:-50.6},0).wait(1).to({scaleX:1.01,y:-49.9},0).wait(1).to({scaleX:1,scaleY:1,y:-49.2},0).wait(1).to({scaleX:1,scaleY:1,y:-48.5},0).wait(1).to({scaleX:1,y:-47.9},0).wait(1).to({scaleX:1,scaleY:1,y:-47.5},0).wait(1).to({scaleX:1,y:-47.2},0).wait(1).to({y:-47.1},0).wait(1).to({regX:0,regY:0,x:-0.4,y:-96.6},0).wait(1).to({regX:6,regY:49.5,x:5.6,y:-47.1},0).wait(1).to({y:-47.2},0).wait(1).to({scaleX:1,y:-47.4},0).wait(1).to({scaleX:1,scaleY:1,y:-47.8},0).wait(1).to({scaleX:1,y:-48.2},0).wait(1).to({scaleX:1,scaleY:1,y:-48.8},0).wait(1).to({scaleX:1.01,y:-49.5},0).wait(1).to({scaleX:1.01,scaleY:1,y:-50.3},0).wait(1).to({scaleX:1.01,scaleY:1,y:-51},0).wait(1).to({scaleX:1.01,y:-51.5},0).wait(1).to({scaleY:1,y:-52},0).wait(1).to({scaleX:1.01,y:-52.2},0).wait(1).to({y:-52.4},0).wait(1).to({regX:0,regY:0,scaleX:1.01,x:-0.4,y:-101.7},0).wait(1).to({regX:6,regY:49.5,scaleX:1.01,x:5.6,y:-52.4},0).wait(1).to({y:-52.3},0).wait(1).to({y:-52},0).wait(1).to({scaleX:1.01,scaleY:1,y:-51.7},0).wait(1).to({scaleX:1.01,y:-51.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:-50.6},0).wait(1).to({scaleX:1.01,y:-49.9},0).wait(1).to({scaleX:1,scaleY:1,y:-49.2},0).wait(1).to({scaleX:1,scaleY:1,y:-48.5},0).wait(1).to({scaleX:1,y:-47.9},0).wait(1).to({scaleX:1,scaleY:1,y:-47.5},0).wait(1).to({scaleX:1,y:-47.2},0).wait(1).to({y:-47.1},0).wait(1).to({regX:0,regY:0,x:-0.4,y:-96.6},0).wait(1).to({regX:6,regY:49.5,x:5.6,y:-47.5},0).wait(1).to({rotation:0.2,x:5.5,y:-48.9},0).wait(1).to({rotation:0.5,x:5.4,y:-51.4},0).wait(1).to({rotation:0.7,y:-53.1},0).wait(1).to({regX:0,regY:0,rotation:0.8,x:0,y:-103.2},0).wait(1).to({regX:6,regY:49.5,x:5.3,y:-50.5},0).wait(1).to({rotation:1,y:-41.1},0).wait(1).to({rotation:1.2,x:5.2,y:-24.5},0).wait(1).to({rotation:1.6,x:5.1,y:0},0).wait(1).to({rotation:2.1,x:4.9,y:34.2},0).wait(1).to({rotation:2.9,x:4.7,y:81.3},0).wait(1).to({regX:0,regY:0,rotation:4,x:1.8,y:102},0).to({_off:true},1).wait(24));

	// x_clarence_arm_2
	this.instance_9 = new lib.x_clarence_arm_2();
	this.instance_9.setTransform(85.1,192.7,1,1,0,-29.7,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:1.3,regY:15,skewX:-26.7,skewY:153.3,x:92,y:150.8},0).wait(1).to({skewX:-24.2,skewY:155.8,x:92.5,y:102.9},0).wait(1).to({skewX:-22,skewY:158,x:92.9,y:62.6},0).wait(1).to({skewX:-20.3,skewY:159.7,x:93.2,y:29.9},0).wait(1).to({skewX:-18.9,skewY:161.1,x:93.4,y:4.7},0).wait(1).to({skewX:-18,skewY:162,x:93.6,y:-13.2},0).wait(1).to({skewX:-17.4,skewY:162.6,x:93.7,y:-23.9},0).wait(1).to({regX:0,regY:0,skewX:-17.2,skewY:162.8,x:90.6,y:-42.2},0).wait(1).to({regX:1.3,regY:15,skewX:-17.5,skewY:162.5,x:93.8,y:-27},0).wait(1).to({skewX:-18.3,skewY:161.7,x:93.9,y:-25.5},0).wait(1).to({skewX:-20,skewY:160,x:94.2,y:-22.5},0).wait(1).to({skewX:-22.5,skewY:157.5,x:94.6,y:-18.2},0).wait(1).to({skewX:-25.5,skewY:154.5,x:95,y:-12.7},0).wait(1).to({skewX:-28.6,skewY:151.4,x:95.5,y:-7.5},0).wait(1).to({skewX:-31,skewY:149,x:95.8,y:-3.3},0).wait(1).to({skewX:-32.6,skewY:147.4,x:96.1,y:-0.5},0).wait(1).to({skewX:-33.4,skewY:146.6,y:0.9},0).wait(1).to({regX:0,regY:0,skewX:-33.7,skewY:146.3,x:89,y:-11.9},0).wait(1).to({regX:1.3,regY:15,x:96.2,y:1.3},0).wait(1).to({skewX:-33.6,skewY:146.4,y:1.1},0).wait(1).to({skewX:-33.4,skewY:146.6,x:96.1,y:0.7},0).wait(1).to({skewX:-33.2,skewY:146.8,y:0.2},0).wait(1).to({skewX:-33,skewY:147,x:96,y:-0.5},0).wait(1).to({skewX:-32.6,skewY:147.4,y:-1.4},0).wait(1).to({skewX:-32.2,skewY:147.8,x:95.9,y:-2.5},0).wait(1).to({skewX:-31.7,skewY:148.3,x:95.8,y:-3.7},0).wait(1).to({skewX:-31.3,skewY:148.7,x:95.7,y:-4.8},0).wait(1).to({skewX:-31,skewY:149,x:95.6,y:-5.7},0).wait(1).to({skewX:-30.7,skewY:149.3,x:95.5,y:-6.3},0).wait(1).to({skewX:-30.6,skewY:149.4,y:-6.8},0).wait(1).to({skewX:-30.5,skewY:149.5,y:-7},0).wait(1).to({regX:0,regY:0,skewX:-30.4,skewY:149.6,x:89,y:-20.7},0).wait(1).to({regX:1.3,regY:15,skewX:-30.5,skewY:149.5,x:95.5,y:-7},0).wait(1).to({y:-6.8},0).wait(1).to({skewX:-30.7,skewY:149.3,y:-6.5},0).wait(1).to({skewX:-30.9,skewY:149.1,x:95.6,y:-6},0).wait(1).to({skewX:-31.2,skewY:148.8,y:-5.2},0).wait(1).to({skewX:-31.5,skewY:148.5,x:95.7,y:-4.2},0).wait(1).to({skewX:-32,skewY:148,x:95.8,y:-3.1},0).wait(1).to({skewX:-32.4,skewY:147.6,x:95.9,y:-2},0).wait(1).to({skewX:-32.8,skewY:147.2,x:96,y:-0.9},0).wait(1).to({skewX:-33.2,skewY:146.8,x:96.1,y:0},0).wait(1).to({skewX:-33.4,skewY:146.6,y:0.6},0).wait(1).to({skewX:-33.6,skewY:146.4,x:96.2,y:1},0).wait(1).to({y:1.3},0).wait(1).to({regX:0,regY:0,skewX:-33.7,skewY:146.3,x:89,y:-11.9},0).wait(1).to({regX:1.3,regY:15,x:96.2,y:1.3},0).wait(1).to({skewX:-33.6,skewY:146.4,y:1.1},0).wait(1).to({skewX:-33.4,skewY:146.6,x:96.1,y:0.7},0).wait(1).to({skewX:-33.2,skewY:146.8,y:0.2},0).wait(1).to({skewX:-33,skewY:147,x:96,y:-0.5},0).wait(1).to({skewX:-32.6,skewY:147.4,y:-1.4},0).wait(1).to({skewX:-32.2,skewY:147.8,x:95.9,y:-2.5},0).wait(1).to({skewX:-31.7,skewY:148.3,x:95.8,y:-3.7},0).wait(1).to({skewX:-31.3,skewY:148.7,x:95.7,y:-4.8},0).wait(1).to({skewX:-31,skewY:149,x:95.6,y:-5.7},0).wait(1).to({skewX:-30.7,skewY:149.3,x:95.5,y:-6.3},0).wait(1).to({skewX:-30.6,skewY:149.4,y:-6.8},0).wait(1).to({skewX:-30.5,skewY:149.5,y:-7},0).wait(1).to({regX:0,regY:0,skewX:-30.4,skewY:149.6,x:89,y:-20.7},0).wait(1).to({regX:1.3,regY:15,skewX:-30.5,skewY:149.5,x:95.5,y:-7},0).wait(1).to({y:-6.8},0).wait(1).to({skewX:-30.7,skewY:149.3,y:-6.5},0).wait(1).to({skewX:-30.9,skewY:149.1,x:95.6,y:-6},0).wait(1).to({skewX:-31.2,skewY:148.8,y:-5.2},0).wait(1).to({skewX:-31.5,skewY:148.5,x:95.7,y:-4.2},0).wait(1).to({skewX:-32,skewY:148,x:95.8,y:-3.1},0).wait(1).to({skewX:-32.4,skewY:147.6,x:95.9,y:-2},0).wait(1).to({skewX:-32.8,skewY:147.2,x:96,y:-0.9},0).wait(1).to({skewX:-33.2,skewY:146.8,x:96.1,y:0},0).wait(1).to({skewX:-33.4,skewY:146.6,y:0.6},0).wait(1).to({skewX:-33.6,skewY:146.4,x:96.2,y:1},0).wait(1).to({y:1.3},0).wait(1).to({regX:0,regY:0,skewX:-33.7,skewY:146.3,x:89,y:-11.9},0).wait(1).to({regX:1.3,regY:15,skewX:-33.6,skewY:146.4,x:96.1,y:1},0).wait(1).to({skewX:-33.5,skewY:146.5,x:95.9,y:-0.2},0).wait(1).to({skewX:-33.2,skewY:146.8,x:95.6,y:-2.2},0).wait(1).to({skewX:-33,skewY:147,x:95.4,y:-3.6},0).wait(1).to({regX:0,regY:0,skewX:-32.9,skewY:147.1,x:88.3,y:-17.3},0).wait(1).to({regX:1.3,regY:15,x:95.3,y:-0.9},0).wait(1).to({skewX:-32.7,skewY:147.3,x:95.1,y:8.8},0).wait(1).to({skewX:-32.4,skewY:147.6,x:94.8,y:25.7},0).wait(1).to({skewX:-32.1,skewY:147.9,x:94.3,y:50.9},0).wait(1).to({skewX:-31.5,skewY:148.5,x:93.7,y:85.9},0).wait(1).to({skewX:-30.8,skewY:149.2,x:92.8,y:134.1},0).wait(1).to({regX:0,regY:0,skewX:-29.7,skewY:150.3,x:85.1,y:192.7},0).to({_off:true},1).wait(24));

	// Layer 2
	this.instance_10 = new lib.x_clarence_shadow_1();
	this.instance_10.setTransform(37.7,139.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:78.4},0).wait(1).to({y:31},0).wait(1).to({y:-5.7},0).wait(1).to({y:-33.9},0).wait(1).to({y:-54.6},0).wait(1).to({y:-68.8},0).wait(1).to({y:-76.9},0).wait(1).to({regX:0,regY:0,x:37.7,y:-80.7},0).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:-79.2},0).wait(1).to({y:-78.1},0).wait(1).to({y:-76.1},0).wait(1).to({y:-73},0).wait(1).to({y:-69.1},0).wait(1).to({y:-65.3},0).wait(1).to({y:-62.3},0).wait(1).to({y:-60.2},0).wait(1).to({y:-59.2},0).wait(1).to({regX:0,regY:0,x:37.7,y:-60},0).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:-58.9},0).wait(1).to({y:-59.1},0).wait(1).to({y:-59.5},0).wait(1).to({y:-60},0).wait(1).to({y:-60.8},0).wait(1).to({y:-61.6},0).wait(1).to({y:-62.6},0).wait(1).to({y:-63.6},0).wait(1).to({y:-64.6},0).wait(1).to({y:-65.3},0).wait(1).to({y:-65.9},0).wait(1).to({y:-66.3},0).wait(1).to({y:-66.5},0).wait(1).to({regX:0,regY:0,x:37.7,y:-67.7},0).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:-66.5},0).wait(1).to({y:-66.3},0).wait(1).to({y:-65.9},0).wait(1).to({y:-65.4},0).wait(1).to({y:-64.6},0).wait(1).to({y:-63.8},0).wait(1).to({y:-62.8},0).wait(1).to({y:-61.8},0).wait(1).to({y:-60.8},0).wait(1).to({y:-60.1},0).wait(1).to({y:-59.5},0).wait(1).to({y:-59.1},0).wait(1).to({y:-58.9},0).wait(1).to({regX:0,regY:0,x:37.7,y:-60},0).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:-58.9},0).wait(1).to({y:-59.1},0).wait(1).to({y:-59.5},0).wait(1).to({y:-60},0).wait(1).to({y:-60.8},0).wait(1).to({y:-61.6},0).wait(1).to({y:-62.6},0).wait(1).to({y:-63.6},0).wait(1).to({y:-64.6},0).wait(1).to({y:-65.3},0).wait(1).to({y:-65.9},0).wait(1).to({y:-66.3},0).wait(1).to({y:-66.5},0).wait(1).to({regX:0,regY:0,x:37.7,y:-67.7},0).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:-66.5},0).wait(1).to({y:-66.3},0).wait(1).to({y:-65.9},0).wait(1).to({y:-65.4},0).wait(1).to({y:-64.6},0).wait(1).to({y:-63.8},0).wait(1).to({y:-62.8},0).wait(1).to({y:-61.8},0).wait(1).to({y:-60.8},0).wait(1).to({y:-60.1},0).wait(1).to({y:-59.5},0).wait(1).to({y:-59.1},0).wait(1).to({y:-58.9},0).wait(1).to({regX:0,regY:0,x:37.7,y:-60},0).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:-59.6},0).wait(1).to({y:-62},0).wait(1).to({y:-65.5},0).wait(1).to({y:-68},0).wait(1).to({regX:0,regY:0,x:37.7,y:-69.9},0).wait(1).to({regX:1.2,regY:1.1,x:38.9,y:-65.1},0).wait(1).to({y:-54.5},0).wait(1).to({y:-36.8},0).wait(1).to({y:-11.8},0).wait(1).to({y:21.8},0).wait(1).to({y:67.4},0).wait(1).to({regX:0,regY:0,x:37.7,y:139.4},0).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.5,-9.7,332.4,313.3);
p.frameBounds = [rect, new cjs.Rectangle(-144.3,-50.6,328.2,299.6), new cjs.Rectangle(-140.5,-97.9,324.4,299.8), new cjs.Rectangle(-137.3,-134.7,321.2,297.1), new cjs.Rectangle(-134.6,-162.8,318.5,295.6), new cjs.Rectangle(-132.5,-186.5,316.4,296.7), new cjs.Rectangle(-130.8,-204.1,314.7,298.1), new cjs.Rectangle(-130.1,-214.5,314,298.9), new cjs.Rectangle(-129.8,-227.6,313.7,308.8), new cjs.Rectangle(-129.8,-217.5,313.7,298.9), new cjs.Rectangle(-130.7,-216.3,314.5,298.8), new cjs.Rectangle(-131.8,-213.9,315.7,298.1), new cjs.Rectangle(-133.7,-209.9,317.5,296.7), new cjs.Rectangle(-135.9,-205.3,319.8,295.3), new cjs.Rectangle(-138,-200.8,321.9,294.3), new cjs.Rectangle(-139.8,-197,323.7,292.9), new cjs.Rectangle(-140.9,-194.6,324.8,292.2), new cjs.Rectangle(-141.3,-193.4,325.2,292), new cjs.Rectangle(-141.6,-203.3,325.5,302.2), new cjs.Rectangle(-141.5,-193.1,325.4,292), new cjs.Rectangle(-141.5,-193.2,325.4,292), new cjs.Rectangle(-141.5,-193.4,325.4,291.9), new cjs.Rectangle(-141.4,-193.7,325.3,291.8), new cjs.Rectangle(-141.2,-194.1,325.1,291.7), new cjs.Rectangle(-141.1,-194.6,325,291.5), new cjs.Rectangle(-141,-195.2,324.9,291.3), new cjs.Rectangle(-140.7,-195.9,324.5,291.1), new cjs.Rectangle(-140.6,-196.5,324.5,290.9), new cjs.Rectangle(-140.5,-196.9,324.4,290.8), new cjs.Rectangle(-140.4,-197.3,324.3,290.7), new cjs.Rectangle(-140.3,-197.5,324.2,290.6), new cjs.Rectangle(-140.2,-197.6,324.1,290.6), new cjs.Rectangle(-140.3,-207.8,324.2,300.7), new cjs.Rectangle(-140.2,-197.6,324.1,290.6), new cjs.Rectangle(-140.3,-197.6,324.2,290.6), new cjs.Rectangle(-140.3,-197.4,324.2,290.7), new cjs.Rectangle(-140.4,-197.1,324.3,290.8), new cjs.Rectangle(-140.6,-196.7,324.5,290.9), new cjs.Rectangle(-140.7,-196.1,324.6,291), new cjs.Rectangle(-140.8,-195.6,324.7,291.2), new cjs.Rectangle(-141,-194.9,324.9,291.4), new cjs.Rectangle(-141.2,-194.3,325.1,291.6), new cjs.Rectangle(-141.4,-193.9,325.3,291.8), new cjs.Rectangle(-141.5,-193.5,325.4,291.9), new cjs.Rectangle(-141.5,-193.3,325.4,292), new cjs.Rectangle(-141.5,-193.1,325.4,292), new cjs.Rectangle(-141.6,-203.3,325.5,302.2), new cjs.Rectangle(-141.5,-193.1,325.4,292), new cjs.Rectangle(-141.5,-193.2,325.4,292), new cjs.Rectangle(-141.5,-193.4,325.4,291.9), new cjs.Rectangle(-141.4,-193.7,325.3,291.8), new cjs.Rectangle(-141.2,-194.1,325.1,291.7), new cjs.Rectangle(-141.1,-194.6,325,291.5), new cjs.Rectangle(-141,-195.2,324.9,291.3), new cjs.Rectangle(-140.7,-195.9,324.5,291.1), new cjs.Rectangle(-140.6,-196.5,324.5,290.9), new cjs.Rectangle(-140.5,-196.9,324.4,290.8), new cjs.Rectangle(-140.4,-197.3,324.3,290.7), new cjs.Rectangle(-140.3,-197.5,324.2,290.6), new cjs.Rectangle(-140.2,-197.6,324.1,290.6), new cjs.Rectangle(-140.3,-207.8,324.2,300.7), new cjs.Rectangle(-140.2,-197.6,324.1,290.6), new cjs.Rectangle(-140.3,-197.6,324.2,290.6), new cjs.Rectangle(-140.3,-197.4,324.2,290.7), new cjs.Rectangle(-140.4,-197.1,324.3,290.8), new cjs.Rectangle(-140.6,-196.7,324.5,290.9), new cjs.Rectangle(-140.7,-196.1,324.6,291), new cjs.Rectangle(-140.8,-195.6,324.7,291.2), new cjs.Rectangle(-141,-194.9,324.9,291.4), new cjs.Rectangle(-141.2,-194.3,325.1,291.6), new cjs.Rectangle(-141.4,-193.9,325.3,291.8), new cjs.Rectangle(-141.5,-193.5,325.4,291.9), new cjs.Rectangle(-141.5,-193.3,325.4,292), new cjs.Rectangle(-141.5,-193.1,325.4,292), new cjs.Rectangle(-141.6,-203.3,325.5,302.2), new cjs.Rectangle(-141.7,-193.5,325.5,292.1), new cjs.Rectangle(-141.9,-195.1,325.8,292.2), new cjs.Rectangle(-142.4,-198.2,326.3,293.6), new cjs.Rectangle(-142.8,-200,326.7,293.7), new cjs.Rectangle(-143,-210.9,326.9,304.5), new cjs.Rectangle(-143.1,-197.8,327,294.4), new cjs.Rectangle(-143.3,-188.3,327.2,294.5), new cjs.Rectangle(-143.7,-172.2,327.5,295.3), new cjs.Rectangle(-144.4,-148.3,328.3,296.7), new cjs.Rectangle(-145.2,-114.9,329.1,298.2), new cjs.Rectangle(-146.5,-68.9,330.4,300.3), new cjs.Rectangle(-148.5,-9.7,332.4,313.3), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.loadingtext_english = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{english:0,portuguese:9,spanish:19});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10).call(this.frame_18).wait(9).call(this.frame_27).wait(1));

	// Layer 1
	this.instance = new lib.x_loading_english();
	this.instance.setTransform(-44.1,0);

	this.instance_1 = new lib.loading_dots();
	this.instance_1.setTransform(105.9,32.1,1,1,0,0,0,0,3.5);

	this.instance_2 = new lib.x_loading_portuguese();
	this.instance_2.setTransform(1.4,0);

	this.instance_3 = new lib.x_loading_spanish();
	this.instance_3.setTransform(-30.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:105.9}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:151.4}},{t:this.instance_2}]},9).to({state:[{t:this.instance_1,p:{x:119.5}},{t:this.instance_3}]},10).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.3,-35.5,285.9,78.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-195.1,-33.1,382,81), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-171.8,-33.9,327,80), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{complete:336});

	// timeline functions:
	this.frame_90 = function() {
		this.signal.emit("canExit");
	}
	this.frame_205 = function() {
		this.signal.emit("canExit");
	}
	this.frame_316 = function() {
		this.signal.emit("canExit");
	}
	this.frame_335 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_353 = function() {
		this.signal.emit("sound", "cinematic_whistle_1");
	}
	this.frame_402 = function() {
		this.signal.emit("sound", "cinematic_pop");
	}
	this.frame_447 = function() {
		this.signal.emit("sound", "cinematic_whistle_2");
	}
	this.frame_482 = function() {
		this.stop();
		this.signal.emit("exit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(115).call(this.frame_205).wait(111).call(this.frame_316).wait(19).call(this.frame_335).wait(18).call(this.frame_353).wait(49).call(this.frame_402).wait(45).call(this.frame_447).wait(35).call(this.frame_482).wait(1));

	// backy
	this.instance = new lib.x_blackie();
	this.instance.setTransform(399.3,223.8,12.426,7.027);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(463).to({_off:false},0).to({alpha:1},17).wait(3));

	// gancho_2
	this.instance_1 = new lib.gancho_2();
	this.instance_1.setTransform(406.6,154.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(402).to({_off:false},0).wait(1).to({y:156.7},0).wait(1).to({y:158.3},0).wait(1).to({y:159.5},0).wait(1).to({y:160.3},0).wait(1).to({y:160.7},0).wait(1).to({y:160.5},0).wait(1).to({y:160.2},0).wait(1).to({y:159.6},0).wait(1).to({y:158.8},0).wait(1).to({y:157.7},0).wait(1).to({y:156.3},0).wait(1).to({y:154.6},0).wait(1).to({y:154.1},0).wait(1).to({y:152.4},0).wait(1).to({y:149.5},0).wait(1).to({y:145.4},0).wait(1).to({y:139.9},0).wait(1).to({y:133.2},0).wait(1).to({y:125.6},0).wait(1).to({y:117.7},0).wait(1).to({y:110},0).wait(1).to({y:103.1},0).wait(1).to({y:97.6},0).wait(1).to({y:93.6},0).wait(1).to({y:91.3},0).wait(1).to({y:90.6},0).wait(20).to({y:90},0).wait(1).to({y:88.3},0).wait(1).to({y:85.4},0).wait(1).to({y:81.3},0).wait(1).to({y:76.1},0).wait(1).to({y:69.8},0).wait(1).to({y:62.2},0).wait(1).to({y:53.6},0).wait(1).to({y:43.7},0).wait(1).to({y:32.6},0).wait(1).to({y:20.3},0).wait(1).to({y:6.6},0).wait(1).to({y:-8.5},0).wait(1).to({y:-25},0).wait(1).to({y:-43.2},0).wait(1).to({y:-63.1},0).wait(1).to({y:-85.2},0).wait(1).to({y:-109.8},0).wait(1).to({y:-137.7},0).wait(17));

	// toy
	this.instance_2 = new lib.toy();
	this.instance_2.setTransform(402,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(403).to({regX:-3,regY:51,scaleY:1,skewX:0.5,x:399.5,y:213.4},0).wait(1).to({scaleY:0.99,skewX:0.8,x:399.9,y:213.6},0).wait(1).to({scaleY:0.99,skewX:1.1,x:400.3,y:213.8},0).wait(1).to({scaleY:0.99,skewX:1.3,x:400.5,y:214},0).wait(1).to({regX:0,regY:0,skewX:1.4,x:404.8,y:163.8},0).wait(1).to({regX:-3,regY:51,skewX:1.3,x:400.5,y:214},0).wait(1).to({scaleY:0.99,x:400.4,y:213.9},0).wait(1).to({scaleY:0.99,skewX:1.1,x:400.3,y:213.8},0).wait(1).to({scaleY:0.99,skewX:0.9,x:400,y:213.7},0).wait(1).to({scaleY:0.99,skewX:0.7,x:399.8,y:213.5},0).wait(1).to({scaleY:1,skewX:0.4,x:399.4,y:213.2},0).wait(1).to({regX:0,regY:0,scaleY:1,skewX:0,x:402,y:162},0).wait(1).to({regX:-3,regY:51,x:399,y:212.4},0).wait(1).to({y:210.8},0).wait(1).to({y:207.9},0).wait(1).to({y:203.7},0).wait(1).to({y:198.2},0).wait(1).to({y:191.6},0).wait(1).to({y:184},0).wait(1).to({y:176},0).wait(1).to({y:168.3},0).wait(1).to({y:161.5},0).wait(1).to({y:155.9},0).wait(1).to({y:152},0).wait(1).to({y:149.7},0).wait(1).to({regX:0,regY:0,x:402,y:98},0).wait(1).to({regX:-3,regY:51,rotation:-0.1,x:399.1,y:149},0).wait(1).to({rotation:-0.5,x:399.4},0).wait(1).to({rotation:-1.2,x:400.1},0).wait(1).to({rotation:-2.1,x:400.9},0).wait(1).to({rotation:-2.8,x:401.4,y:149.1},0).wait(1).to({regX:0,regY:0,rotation:-3,x:402,y:98},0).wait(1).to({regX:-3,regY:51,rotation:-2.8,x:401.4,y:149},0).wait(1).to({rotation:-2.4,x:401.1,y:148.8},0).wait(1).to({rotation:-1.7,x:400.5,y:148.6},0).wait(1).to({rotation:-0.8,x:399.6,y:148.1},0).wait(1).to({rotation:-0.2,x:399.1,y:147.8},0).wait(1).to({regX:0,regY:0,rotation:0,x:401.9,y:96.8},0).wait(8).to({regX:-3,regY:51,x:398.9,y:147.2},0).wait(1).to({y:145.4},0).wait(1).to({y:142.5},0).wait(1).to({y:138.5},0).wait(1).to({y:133.3},0).wait(1).to({y:126.9},0).wait(1).to({y:119.4},0).wait(1).to({y:110.7},0).wait(1).to({y:100.8},0).wait(1).to({y:89.8},0).wait(1).to({y:77.4},0).wait(1).to({y:63.7},0).wait(1).to({y:48.7},0).wait(1).to({y:32.2},0).wait(1).to({y:14},0).wait(1).to({y:-5.9},0).wait(1).to({y:-28},0).wait(1).to({y:-52.6},0).wait(1).to({regX:0,regY:0,x:401.9,y:-131.5},0).wait(17));

	// gancho
	this.instance_3 = new lib.gancho();
	this.instance_3.setTransform(405,-111.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(353).to({_off:false},0).wait(1).to({y:-104},0).wait(1).to({y:-96.4},0).wait(1).to({y:-89.1},0).wait(1).to({y:-82},0).wait(1).to({y:-75.2},0).wait(1).to({y:-68.7},0).wait(1).to({y:-62.3},0).wait(1).to({y:-56.2},0).wait(1).to({y:-50.3},0).wait(1).to({y:-44.7},0).wait(1).to({y:-39.2},0).wait(1).to({y:-33.9},0).wait(1).to({y:-28.9},0).wait(1).to({y:-24},0).wait(1).to({y:-19.3},0).wait(1).to({y:-14.8},0).wait(1).to({y:-10.5},0).wait(1).to({y:-6.4},0).wait(1).to({y:-2.4},0).wait(1).to({y:1.3},0).wait(1).to({y:4.9},0).wait(1).to({y:8.3},0).wait(1).to({y:11.5},0).wait(1).to({y:14.6},0).wait(1).to({y:17.4},0).wait(1).to({y:20.1},0).wait(1).to({y:22.6},0).wait(1).to({y:24.9},0).wait(1).to({y:27.1},0).wait(1).to({y:29},0).wait(1).to({y:30.8},0).wait(1).to({y:32.4},0).wait(1).to({y:33.8},0).wait(1).to({y:35.1},0).wait(1).to({y:36.1},0).wait(1).to({y:37},0).wait(1).to({y:37.6},0).wait(1).to({y:38.1},0).wait(1).to({y:38.4},0).wait(1).to({y:38.5},0).wait(5).to({y:37.4},0).wait(1).to({y:34.4},0).wait(1).to({y:33},0).wait(1).to({y:45.3},0).wait(1).to({y:59.4},0).wait(1).to({y:61.4},0).wait(1).to({y:63.1},0).wait(1).to({y:64.3},0).wait(1).to({y:65.1},0).wait(1).to({y:65.4},0).wait(1).to({y:65.3},0).wait(1).to({y:64.9},0).wait(1).to({y:64.3},0).wait(1).to({y:63.5},0).wait(1).to({y:62.4},0).wait(1).to({y:61.1},0).wait(1).to({y:59.4},0).wait(1).to({y:58.8},0).wait(1).to({y:57.2},0).wait(1).to({y:54.3},0).wait(1).to({y:50.1},0).wait(1).to({y:44.6},0).wait(1).to({y:38},0).wait(1).to({y:30.4},0).wait(1).to({y:22.4},0).wait(1).to({y:14.7},0).wait(1).to({y:7.9},0).wait(1).to({y:2.3},0).wait(1).to({y:-1.6},0).wait(1).to({y:-3.9},0).wait(1).to({y:-4.6},0).wait(20).to({y:-5.2},0).wait(1).to({y:-7},0).wait(1).to({y:-9.9},0).wait(1).to({y:-13.9},0).wait(1).to({y:-19.1},0).wait(1).to({y:-25.5},0).wait(1).to({y:-33},0).wait(1).to({y:-41.7},0).wait(1).to({y:-51.6},0).wait(1).to({y:-62.6},0).wait(1).to({y:-75},0).wait(1).to({y:-88.7},0).wait(1).to({y:-103.7},0).wait(1).to({y:-120.3},0).wait(1).to({y:-138.4},0).wait(1).to({y:-158.4},0).wait(1).to({y:-180.5},0).wait(1).to({y:-205.1},0).wait(1).to({y:-232.9},0).wait(17));

	// loading...
	this.loading = new lib.loadingtext_english();
	this.loading.setTransform(398.9,73.8);

	this.timeline.addTween(cjs.Tween.get(this.loading).wait(337).to({regX:-3.8,regY:6.1,x:395.1,y:80.2},0).wait(1).to({y:81.3},0).wait(1).to({y:83.3},0).wait(1).to({y:84.9},0).wait(1).to({regX:0,regY:0,x:398.9,y:79.3},0).wait(1).to({regX:-3.8,regY:6.1,x:395.1,y:83.3},0).wait(1).to({y:76.6},0).wait(1).to({y:64.4},0).wait(1).to({y:45.6},0).wait(1).to({y:19.1},0).wait(1).to({y:-16.4},0).wait(1).to({regX:0,regY:0,x:398.9,y:-67.2},0).wait(135));

	// clarence
	this.instance_4 = new lib.clarence_1();
	this.instance_4.setTransform(195.5,449.3,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},90).wait(25).to({_off:false,skewX:-133.3,skewY:46.7,x:780.6,y:13.4},0).to({_off:true},90).wait(21).to({_off:false,skewX:-18,skewY:162,x:770.4,y:422.4},0).to({_off:true},90).wait(167));

	// toyshadow
	this.instance_5 = new lib.toyshadow();
	this.instance_5.setTransform(405,275);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(415).to({alpha:0.988},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(60));

	// loading_bg.png
	this.instance_6 = new lib.loading_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(483));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,800,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-196.4,1032,646.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,800,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,935.6,667.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,800,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-22.5,800,472.5), new cjs.Rectangle(0,-58.1,800,508.1), rect=new cjs.Rectangle(0,-102.7,800,552.8), rect, rect, rect, rect, new cjs.Rectangle(0,-217.4,800,667.5), new cjs.Rectangle(0,-209.5,800,659.5), new cjs.Rectangle(0,-201.9,800,651.9), new cjs.Rectangle(0,-194.6,800,644.6), new cjs.Rectangle(0,-187.5,800,637.5), new cjs.Rectangle(0,-180.7,800,630.7), new cjs.Rectangle(0,-174.1,800,624.2), new cjs.Rectangle(0,-167.8,800,617.9), new cjs.Rectangle(0,-161.7,800,611.8), new cjs.Rectangle(0,-155.8,800,605.9), new cjs.Rectangle(0,-150.2,800,600.2), new cjs.Rectangle(0,-144.7,800,594.7), new cjs.Rectangle(0,-139.4,800,589.5), new cjs.Rectangle(0,-134.3,800,584.4), new cjs.Rectangle(0,-129.5,800,579.5), new cjs.Rectangle(0,-124.8,800,574.8), new cjs.Rectangle(0,-120.3,800,570.3), new cjs.Rectangle(0,-116,800,566), new cjs.Rectangle(0,-111.8,800,561.9), new cjs.Rectangle(0,-107.9,800,558), new cjs.Rectangle(0,-104.1,800,554.2), rect=new cjs.Rectangle(0,-102.7,800,552.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-103.1,800,553.2), new cjs.Rectangle(0,-107.1,800,557.1), new cjs.Rectangle(0,-109.4,800,559.4), rect=new cjs.Rectangle(0,-110.1,800,560.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-110.7,800,560.8), new cjs.Rectangle(0,-112.5,800,562.5), new cjs.Rectangle(0,-115.4,800,565.4), new cjs.Rectangle(0,-119.4,800,569.5), new cjs.Rectangle(0,-124.6,800,574.7), new cjs.Rectangle(0,-131,800,581), new cjs.Rectangle(0,-138.5,800,588.5), new cjs.Rectangle(0,-147.2,800,597.2), new cjs.Rectangle(0,-157,800,607.1), new cjs.Rectangle(0,-168.1,800,618.2), new cjs.Rectangle(0,-180.5,800,630.5), new cjs.Rectangle(0,-194.1,800,644.2), new cjs.Rectangle(0,-209.2,800,659.2), new cjs.Rectangle(0,-225.7,800,675.8), new cjs.Rectangle(0,-243.9,800,693.9), new cjs.Rectangle(-61.7,-263.9,919.5,747.3), new cjs.Rectangle(-61.9,-285.9,919.5,769.3), new cjs.Rectangle(-61.9,-310.5,919.5,794), rect=new cjs.Rectangle(-61.9,-338.4,919.5,821.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-61.7,-338.4,919.5,821.9), rect, rect];


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;
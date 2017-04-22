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



(lib.menu_balloon_cosin = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.menu_balloon_head = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.menu_balloon_string = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.menu_bat_body = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.menu_bat_wing1 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.menu_bat_wing2 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.menu_bg = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.menu_jeff_arm1 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.menu_jeff_arm2 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.menu_jeff_body = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.menu_jeff_hand = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.menu_jeff_head = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.menu_jeff_pupil = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.menu_jeff_sword = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.menu_pumpkin_1 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.menu_pumpkin_2 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.menu_pumpkin_antena = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.menu_title_english = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.menu_title_portuguese = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.menu_title_spanish = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.menu_title_usa = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.menu_tree_left = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.menu_tree_left_lights_1 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.menu_tree_left_lights_2 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.menu_tree_right = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.menu_tree_right_lights_1 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.menu_tree_right_lights_2 = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.menu_wonby = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.menu_wonby_over = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.x_button_base_2_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.x_button_base_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_2_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_highlight_2_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_highlight_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.x_button_top_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.x_flashgfx_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_fullscreen_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_musicOFF_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_musicON_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.x_icon_next_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.x_white_png = function() {
	this.spriteSheet = ss["mainmenu_atlas_"];
	this.gotoAndStop(40);
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


(lib.x_icon_next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_next_png();
	this.instance.setTransform(-22,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-26,54,56.1);
p.frameBounds = [rect];


(lib.x_icon_musicON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_musicON_png();
	this.instance.setTransform(-23,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-25,47.8,55.5);
p.frameBounds = [rect];


(lib.x_icon_musicOFF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_musicOFF_png();
	this.instance.setTransform(-22,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-25,46.8,54.8);
p.frameBounds = [rect];


(lib.x_icon_fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_icon_fullscreen_png();
	this.instance.setTransform(-26,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.3,-27.2,55.3,55.3);
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
	this.instance.setTransform(-39,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40,79.2,77.6);
p.frameBounds = [rect];


(lib.x_button_top_highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_top_highlight_png();
	this.instance.setTransform(-39,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40,79.2,77.6);
p.frameBounds = [rect];


(lib.x_button_top_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_top_2_png();
	this.instance.setTransform(-39,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40,79.2,77.6);
p.frameBounds = [rect];


(lib.x_button_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_top_png();
	this.instance.setTransform(-39,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40,79.2,77.6);
p.frameBounds = [rect];


(lib.x_button_base_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_base_2_png();
	this.instance.setTransform(-40,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-19.2,81.3,65.3);
p.frameBounds = [rect];


(lib.x_button_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.x_button_base_png();
	this.instance.setTransform(-40,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-19.2,81.3,65.3);
p.frameBounds = [rect];


(lib.wonbyover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_wonby_over();
	this.instance.setTransform(-42.7,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.7,-35.5,85,71);
p.frameBounds = [rect];


(lib.tree_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menu_tree_right_lights_2.png
	this.instance = new lib.menu_tree_right_lights_2();
	this.instance.setTransform(-246.9,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(16));

	// menu_tree_right_lights_1.png
	this.instance_1 = new lib.menu_tree_right_lights_1();
	this.instance_1.setTransform(-258.7,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(16));

	// menu_tree_right.png
	this.instance_2 = new lib.menu_tree_right();
	this.instance_2.setTransform(-388.1,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-388.1,-56,389,561);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tree_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menu_tree_left_lights_2.png
	this.instance = new lib.menu_tree_left_lights_2();
	this.instance.setTransform(0.9,37.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(15));

	// menu_tree_left_lights_1.png
	this.instance_1 = new lib.menu_tree_left_lights_1();
	this.instance_1.setTransform(-0.1,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},15).wait(15));

	// menu_tree_left.png
	this.instance_2 = new lib.menu_tree_left();
	this.instance_2.setTransform(0,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,-54.9,430.1,561);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-54.9,430,561), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{english:0,portuguese:9,spanish:19,usa:28});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(9).call(this.frame_28).wait(9));

	// Layer 1
	this.instance = new lib.menu_title_english();
	this.instance.setTransform(-287.8,-66);

	this.instance_1 = new lib.menu_title_portuguese();
	this.instance_1.setTransform(-286.7,-69.3);

	this.instance_2 = new lib.menu_title_spanish();
	this.instance_2.setTransform(-287.7,-72.8);

	this.instance_3 = new lib.menu_title_usa();
	this.instance_3.setTransform(-263.4,-42.5,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},9).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-287.8,-66,503,136);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-286.7,-69.3,546,123), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-287.7,-72.8,530,130), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-263.4,-42.5,302.4,82.8), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.menu_pumpkin_antena_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_pumpkin_antena();
	this.instance.setTransform(-9,-97.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-97.1,72,116);
p.frameBounds = [rect];


(lib.menu_pumpkin_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_pumpkin_2();
	this.instance.setTransform(-156.7,-100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.7,-100.3,178,134);
p.frameBounds = [rect];


(lib.menu_pumpkin_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_pumpkin_1();
	this.instance.setTransform(-135,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-58.5,270,117);
p.frameBounds = [rect];


(lib.menu_jeff_sword_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_jeff_sword();
	this.instance.setTransform(-180.9,-368);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.9,-368,494,475);
p.frameBounds = [rect];


(lib.menu_jeff_pupil_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_jeff_pupil();
	this.instance.setTransform(-13,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-12,26,24);
p.frameBounds = [rect];


(lib.menu_jeff_hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_jeff_hand();
	this.instance.setTransform(-54.2,-63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-63.7,76,86);
p.frameBounds = [rect];


(lib.menu_jeff_body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_jeff_body();
	this.instance.setTransform(-49.1,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-124,86,174);
p.frameBounds = [rect];


(lib.menu_jeff_arm2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_jeff_arm2();
	this.instance.setTransform(-154.1,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.1,-24,167,85);
p.frameBounds = [rect];


(lib.menu_jeff_arm1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_jeff_arm1();
	this.instance.setTransform(-178.3,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.3,-14.6,193,110);
p.frameBounds = [rect];


(lib.menu_bat_wing2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_bat_wing2();
	this.instance.setTransform(-52.2,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.2,-33.5,60,86);
p.frameBounds = [rect];


(lib.menu_bat_wing1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_bat_wing1();
	this.instance.setTransform(-10.4,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-39.1,83,87);
p.frameBounds = [rect];


(lib.menu_bat_body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_bat_body();
	this.instance.setTransform(-46,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-6.6,101,213);
p.frameBounds = [rect];


(lib.menu_balloon_string_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_balloon_string();
	this.instance.setTransform(-55,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-47,110,94);
p.frameBounds = [rect];


(lib.menu_balloon_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_balloon_head();
	this.instance.setTransform(-41.1,-76.2,1,1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.6,-76.2,135.3,152.5);
p.frameBounds = [rect];


(lib.menu_balloon_cosin_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_balloon_cosin();
	this.instance.setTransform(-11.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.5,-10,23,20);
p.frameBounds = [rect];


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,450);
p.frameBounds = [rect];


(lib.hitboxbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
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


(lib.pupilanimeta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_jeff_pupil_1();
	this.instance.setTransform(0,0,0.821,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.72,scaleY:0.72},4).to({scaleX:0.82,scaleY:0.82},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.6,-9.8,21.3,19.7);
p.frameBounds = [rect, new cjs.Rectangle(-10.3,-9.5,20.7,19.1), new cjs.Rectangle(-10,-9.2,20.1,18.5), new cjs.Rectangle(-9.7,-8.9,19.4,18), new cjs.Rectangle(-9.4,-8.6,18.8,17.3), new cjs.Rectangle(-9.7,-8.9,19.4,18), new cjs.Rectangle(-10,-9.2,20.1,18.5), new cjs.Rectangle(-10.3,-9.5,20.7,19.1), new cjs.Rectangle(-10.6,-9.8,21.3,19.7)];


(lib.pumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menu_pumpkin_2
	this.instance = new lib.menu_pumpkin_2_1();
	this.instance.setTransform(58.4,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.5},8).to({rotation:0},9).to({rotation:1.2},7).to({rotation:0},9).wait(8));

	// menu_pumpkin_1
	this.instance_1 = new lib.menu_pumpkin_1_1();
	this.instance_1.setTransform(-2.5,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:81.7},17).to({y:83.4},23).wait(1));

	// Layer 1
	this.instance_2 = new lib.menu_pumpkin_antena_1();
	this.instance_2.setTransform(60.9,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.7},8).to({rotation:4},12).to({rotation:-2.5},11).to({rotation:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.5,-112.1,270,254);
p.frameBounds = [rect, new cjs.Rectangle(-137.5,-112.5,270,254.3), new cjs.Rectangle(-137.5,-113,270,254.7), new cjs.Rectangle(-137.5,-113.5,270,255.1), new cjs.Rectangle(-137.5,-114,270,255.5), new cjs.Rectangle(-137.5,-114.5,270,255.9), new cjs.Rectangle(-137.5,-115,270,256.3), new cjs.Rectangle(-137.5,-115.3,270,256.5), new cjs.Rectangle(-137.5,-116,270,257.1), new cjs.Rectangle(-137.5,-115.3,270,256.3), new cjs.Rectangle(-137.5,-114.6,270,255.6), new cjs.Rectangle(-137.5,-114,270,254.9), new cjs.Rectangle(-137.5,-113.3,270,254.1), new cjs.Rectangle(-137.5,-112.5,270,253.1), rect=new cjs.Rectangle(-137.5,-112.2,270,252.7), rect, new cjs.Rectangle(-137.5,-112.3,270,252.7), new cjs.Rectangle(-137.5,-112.4,270,252.6), new cjs.Rectangle(-137.5,-112.4,270,252.7), new cjs.Rectangle(-137.5,-112.5,270,252.9), new cjs.Rectangle(-137.5,-112.5,270,253), new cjs.Rectangle(-137.5,-112.4,270,253), new cjs.Rectangle(-137.5,-112.5,270,253.1), new cjs.Rectangle(-137.5,-112.4,270,253.1), rect=new cjs.Rectangle(-137.5,-112.3,270,253.1), rect, new cjs.Rectangle(-137.5,-112.1,270,253), new cjs.Rectangle(-137.5,-112.1,270,253.1), new cjs.Rectangle(-137.5,-112.7,270,253.8), new cjs.Rectangle(-137.5,-113.5,270,254.6), new cjs.Rectangle(-137.5,-114,270,255.2), new cjs.Rectangle(-137.5,-114.7,270,256), new cjs.Rectangle(-137.5,-114.3,270,255.6), new cjs.Rectangle(-137.5,-114,270,255.4), new cjs.Rectangle(-137.5,-113.8,270,255.2), new cjs.Rectangle(-137.5,-113.5,270,255), new cjs.Rectangle(-137.5,-113.3,270,254.9), new cjs.Rectangle(-137.5,-113,270,254.7), new cjs.Rectangle(-137.5,-112.7,270,254.4), new cjs.Rectangle(-137.5,-112.4,270,254.2), new cjs.Rectangle(-137.5,-112.1,270,254)];


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
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:0.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.5,regY:-1.5,x:0.5,y:-1.1},0).wait(1).to({y:-0.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-38.2,81,84.3);
p.frameBounds = [rect, new cjs.Rectangle(-40,-38.3,81,84.4), new cjs.Rectangle(-40,-38.6,81,84.6), new cjs.Rectangle(-40,-39.1,81,85.2), new cjs.Rectangle(-40,-40,81,86), new cjs.Rectangle(-40,-39.2,81,85.2), new cjs.Rectangle(-40,-38.9,81,85), new cjs.Rectangle(-40,-39.2,81,85.2), rect=new cjs.Rectangle(-40,-40,81,86), rect, new cjs.Rectangle(-40,-39.6,81,85.7), new cjs.Rectangle(-40,-38.6,81,84.7), new cjs.Rectangle(-40,-38.2,81,84.3), rect=new cjs.Rectangle(-40,-36.8,81,82.9), rect, rect, rect, rect, rect, rect];


(lib.menu_jeff_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.pupilanimeta();
	this.instance.setTransform(-85.1,-88.1,0.812,0.812);

	this.instance_1 = new lib.pupilanimeta();
	this.instance_1.setTransform(9.2,-114.5,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.menu_jeff_head();
	this.instance_2.setTransform(-170.8,-234);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.8,-234,288,270);
p.frameBounds = [rect];


(lib.jeff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menu_jeff_hand
	this.instance = new lib.menu_jeff_hand_1();
	this.instance.setTransform(-56.4,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-16.3,regY:-20.8,rotation:0.1,x:-72.7,y:144.7},0).wait(1).to({rotation:0.4,x:-72.8,y:143.6},0).wait(1).to({rotation:1,x:-72.9,y:141.5},0).wait(1).to({rotation:1.9,x:-73.1,y:138.6},0).wait(1).to({rotation:2.7,x:-73.3,y:135.5},0).wait(1).to({rotation:3.4,x:-73.4,y:133.2},0).wait(1).to({rotation:3.9,x:-73.5,y:131.7},0).wait(1).to({rotation:4.1,y:130.9},0).wait(1).to({regX:0,regY:0,rotation:4.2,x:-58.8,y:152.6},0).wait(1).to({regX:-16.3,regY:-20.8,rotation:4.1,x:-73.5,y:130.9},0).wait(1).to({rotation:3.8,y:132.1},0).wait(1).to({rotation:3.2,x:-73.4,y:134.1},0).wait(1).to({rotation:2.3,x:-73.2,y:137},0).wait(1).to({rotation:1.5,x:-73,y:140},0).wait(1).to({rotation:0.8,x:-72.8,y:142.4},0).wait(1).to({rotation:0.3,y:143.9},0).wait(1).to({rotation:0.1,x:-72.7,y:144.8},0).wait(1).to({regX:0,regY:0,rotation:0,x:-56.4,y:165.8},0).wait(1));

	// menu_jeff_head
	this.instance_1 = new lib.menu_jeff_head_1();
	this.instance_1.setTransform(74.7,104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-26.8,regY:-99.1,rotation:0.1,x:48.1,y:5.4},0).wait(1).to({rotation:0.4,x:48.8,y:5.3},0).wait(1).to({rotation:0.8,x:50,y:5.1},0).wait(1).to({rotation:1.2,x:51,y:4.9},0).wait(1).to({rotation:1.4,x:51.5,y:4.8},0).wait(1).to({regX:0,regY:0,x:76,y:104.5},0).wait(1).to({regX:-26.8,regY:-99.1,x:51.7,y:4.8},0).wait(1).to({x:51.5},0).wait(1).to({rotation:1.3,x:51.2},0).wait(1).to({rotation:1.1,x:50.8,y:4.9},0).wait(1).to({rotation:0.9,x:50.2,y:5},0).wait(1).to({rotation:0.7,x:49.6,y:5.1},0).wait(1).to({rotation:0.4,x:49,y:5.2},0).wait(1).to({rotation:0.3,x:48.6,y:5.3},0).wait(1).to({rotation:0.1,x:48.3,y:5.4},0).wait(1).to({x:48.1},0).wait(1).to({rotation:0,x:47.9},0).wait(1).to({regX:0,regY:0,x:74.7,y:104.5},0).wait(1));

	// menu_jeff_arm1
	this.instance_2 = new lib.menu_jeff_arm1_1();
	this.instance_2.setTransform(117.5,122.4,1.011,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-81.8,regY:40.3,rotation:0.1,x:34.8,y:162.5},0).wait(1).to({rotation:0.4,x:34.5,y:162},0).wait(1).to({scaleX:1.01,rotation:1,x:34.1,y:161.1},0).wait(1).to({rotation:1.9,x:33.6,y:159.8},0).wait(1).to({scaleX:1.01,rotation:2.7,x:33,y:158.4},0).wait(1).to({rotation:3.4,x:32.6,y:157.3},0).wait(1).to({rotation:3.9,x:32.3,y:156.5},0).wait(1).to({rotation:4.1,x:32.2,y:156.2},0).wait(1).to({regX:0,regY:0,scaleX:1.01,rotation:4.2,x:117.8,y:122},0).wait(1).to({regX:-81.8,regY:40.3,scaleX:1.01,rotation:4.1,x:32.2,y:156.2},0).wait(1).to({rotation:3.8,x:32.4,y:156.7},0).wait(1).to({rotation:3.2,x:32.7,y:157.7},0).wait(1).to({scaleX:1.01,rotation:2.3,x:33.3,y:159},0).wait(1).to({rotation:1.5,x:33.9,y:160.4},0).wait(1).to({rotation:0.8,x:34.3,y:161.5},0).wait(1).to({scaleX:1.01,rotation:0.3,x:34.6,y:162.2},0).wait(1).to({rotation:0.1,x:34.8,y:162.5},0).wait(1).to({regX:0,regY:0,rotation:0,x:117.5,y:122.4},0).wait(1));

	// menu_jeff_body
	this.instance_3 = new lib.menu_jeff_body_1();
	this.instance_3.setTransform(108.1,218);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-6.1,regY:-37,x:102,y:180.9},0).wait(1).to({y:180.7},0).wait(1).to({y:180.4},0).wait(1).to({y:180},0).wait(1).to({y:179.5},0).wait(1).to({y:179.1},0).wait(1).to({y:178.7},0).wait(1).to({y:178.5},0).wait(1).to({y:178.4},0).wait(1).to({regX:0,regY:0,x:108.1,y:215.4},0).wait(1).to({regX:-6.1,regY:-37,x:102,y:178.4},0).wait(1).to({y:178.7},0).wait(1).to({y:179.2},0).wait(1).to({y:179.8},0).wait(1).to({y:180.3},0).wait(1).to({y:180.7},0).wait(1).to({y:180.9},0).wait(1).to({regX:0,regY:0,x:108.1,y:218},0).wait(1));

	// menu_jeff_arm2
	this.instance_4 = new lib.menu_jeff_arm2_1();
	this.instance_4.setTransform(72.6,146);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-70.6,regY:18.5,rotation:0.1,x:1.9,y:164.3},0).wait(1).to({rotation:0.4,x:1.7,y:163.6},0).wait(1).to({rotation:1,x:1.3,y:162.3},0).wait(1).to({rotation:1.9,x:0.9,y:160.5},0).wait(1).to({rotation:2.7,x:0.4,y:158.6},0).wait(1).to({rotation:3.4,x:0,y:157.1},0).wait(1).to({rotation:3.9,x:-0.3,y:156.1},0).wait(1).to({rotation:4.1,x:-0.4,y:155.6},0).wait(1).to({regX:0,regY:0,rotation:4.2,x:71.3,y:142.2},0).wait(1).to({regX:-70.6,regY:18.5,rotation:4.1,x:-0.4,y:155.7},0).wait(1).to({rotation:3.8,x:-0.2,y:156.4},0).wait(1).to({rotation:3.2,x:0.1,y:157.7},0).wait(1).to({rotation:2.3,x:0.6,y:159.5},0).wait(1).to({rotation:1.5,x:1.1,y:161.3},0).wait(1).to({rotation:0.8,x:1.5,y:162.8},0).wait(1).to({rotation:0.3,x:1.8,y:163.8},0).wait(1).to({rotation:0.1,x:2,y:164.3},0).wait(1).to({regX:0,regY:0,rotation:0,x:72.6,y:146},0).wait(1));

	// menu_jeff_sword
	this.instance_5 = new lib.menu_jeff_sword_1();
	this.instance_5.setTransform(-66.3,120.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:66.1,regY:-130.6,rotation:0.1,x:0,y:-10},0).wait(1).to({rotation:0.4,x:0.8,y:-10.6},0).wait(1).to({rotation:1,x:2.4,y:-11.9},0).wait(1).to({rotation:1.9,x:4.4,y:-13.7},0).wait(1).to({rotation:2.7,x:6.6,y:-15.5},0).wait(1).to({rotation:3.4,x:8.3,y:-16.9},0).wait(1).to({rotation:3.9,x:9.4,y:-17.7},0).wait(1).to({rotation:4.1,x:10,y:-18.2},0).wait(1).to({regX:0,regY:0,rotation:4.2,x:-65.4,y:107.1},0).wait(1).to({regX:66.1,regY:-130.6,rotation:4.1,x:9.9,y:-18.1},0).wait(1).to({rotation:3.8,x:9.1,y:-17.5},0).wait(1).to({rotation:3.2,x:7.7,y:-16.3},0).wait(1).to({rotation:2.3,x:5.6,y:-14.6},0).wait(1).to({rotation:1.5,x:3.4,y:-12.8},0).wait(1).to({rotation:0.8,x:1.7,y:-11.3},0).wait(1).to({rotation:0.3,x:0.6,y:-10.4},0).wait(1).to({rotation:0.1,x:0,y:-9.9},0).wait(1).to({regX:0,regY:0,rotation:0,x:-66.3,y:120.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-247.2,-247.2,494,515.2);
p.frameBounds = [rect, new cjs.Rectangle(-247.3,-247.5,494.2,515.5), new cjs.Rectangle(-247.6,-249.5,496.4,517.3), new cjs.Rectangle(-248.8,-253.6,502.3,521.1), new cjs.Rectangle(-250.1,-258.7,508.5,525.7), new cjs.Rectangle(-251.2,-263.9,514.7,530.4), new cjs.Rectangle(-252.2,-268.2,520.4,534.3), new cjs.Rectangle(-252.9,-271,524.2,536.8), new cjs.Rectangle(-253.3,-272.4,526.1,537.9), new cjs.Rectangle(-253.6,-273.2,527.5,538.7), new cjs.Rectangle(-253.3,-272.3,526,537.7), new cjs.Rectangle(-253.1,-270.6,524,536.1), new cjs.Rectangle(-252,-266.7,518.5,532.4), new cjs.Rectangle(-250.8,-261.7,512.4,527.8), new cjs.Rectangle(-249.3,-256,504.7,522.8), new cjs.Rectangle(-248.5,-252,500.2,519.4), new cjs.Rectangle(-247.7,-249,496.2,516.8), new cjs.Rectangle(-247.3,-247.5,494.2,515.5), new cjs.Rectangle(-247.2,-247.2,494,515.2)];


(lib.headballon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_balloon_head_1();
	this.instance.setTransform(0,0,1,1,-10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1},0).wait(2).to({scaleX:1,scaleY:1,y:0.1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,scaleY:1,y:0.2},0).wait(1).to({scaleX:1.01,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1,x:0.1,y:0.3},0).wait(1).to({scaleX:1.01,scaleY:1,y:0.4},0).wait(1).to({scaleX:1.02,scaleY:0.99,y:0.5},0).wait(1).to({scaleX:1.02,scaleY:0.99,y:0.6},0).wait(1).to({scaleX:1.02,scaleY:0.99,y:0.7},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:0.2,y:0.9},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:1},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:1.1},0).wait(1).to({scaleX:1.04,scaleY:0.98,y:1.2},0).wait(1).to({scaleX:1.05,scaleY:0.98,y:1.4},0).wait(1).to({scaleX:1.05,scaleY:0.98,x:0.3},0).wait(1).to({scaleX:1.05,scaleY:0.98,y:1.5},0).wait(1).to({scaleX:1.05,y:1.6},0).wait(1).to({scaleX:1.05,scaleY:0.98},0).wait(1).to({scaleX:1.06,y:1.7},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleX:1.06},0).wait(2).to({y:1.6},0).wait(2).to({scaleX:1.06},0).wait(1).to({scaleX:1.06,scaleY:0.98},0).wait(1).to({scaleX:1.05},0).wait(1).to({scaleX:1.05,scaleY:0.98,y:1.5},0).wait(1).to({scaleX:1.05},0).wait(1).to({scaleX:1.05,scaleY:0.98,y:1.4},0).wait(1).to({scaleX:1.05,scaleY:0.98,x:0.2},0).wait(1).to({scaleX:1.04,scaleY:0.98,y:1.3},0).wait(1).to({scaleX:1.04,scaleY:0.98,y:1.2},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:1.1},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:1},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:0.9},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:0.1,y:0.7},0).wait(1).to({scaleX:1.02,scaleY:0.99,y:0.6},0).wait(1).to({scaleX:1.02,scaleY:0.99,y:0.5},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:0.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:0.3},0).wait(1).to({scaleX:1.01,scaleY:1,x:0,y:0.2},0).wait(1).to({scaleX:1.01,y:0.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:0},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.1,-87,160.3,174.1);
p.frameBounds = [rect, new cjs.Rectangle(-57.1,-67.8,114.2,135.6), new cjs.Rectangle(-57.1,-67.7,114.3,135.6), new cjs.Rectangle(-57.2,-67.7,114.4,135.6), new cjs.Rectangle(-57.3,-67.6,114.5,135.5), new cjs.Rectangle(-57.3,-67.6,114.7,135.4), new cjs.Rectangle(-57.4,-67.5,115,135.3), new cjs.Rectangle(-57.5,-67.3,115.2,135.1), new cjs.Rectangle(-57.7,-67.1,115.6,135), new cjs.Rectangle(-57.9,-66.9,116,134.7), new cjs.Rectangle(-58.1,-66.7,116.5,134.5), new cjs.Rectangle(-58.4,-66.4,117.1,134.2), new cjs.Rectangle(-58.7,-66.2,117.7,133.9), new cjs.Rectangle(-58.9,-65.9,118.3,133.6), new cjs.Rectangle(-59.2,-65.5,118.9,133.3), new cjs.Rectangle(-59.6,-65.3,119.6,132.9), new cjs.Rectangle(-59.8,-65,120.1,132.6), new cjs.Rectangle(-60,-64.8,120.6,132.4), new cjs.Rectangle(-60.2,-64.6,121,132.1), new cjs.Rectangle(-60.4,-64.4,121.4,132), new cjs.Rectangle(-60.5,-64.3,121.7,131.8), new cjs.Rectangle(-60.6,-64.1,121.9,131.7), new cjs.Rectangle(-60.7,-64.1,122,131.7), new cjs.Rectangle(-60.7,-64,122.1,131.6), new cjs.Rectangle(-60.8,-64,122.2,131.6), new cjs.Rectangle(-83.3,-84.4,167.2,172.2), rect=new cjs.Rectangle(-60.8,-64,122.2,131.6), rect, new cjs.Rectangle(-60.7,-64.1,122.1,131.6), new cjs.Rectangle(-60.7,-64.1,122,131.7), new cjs.Rectangle(-60.6,-64.2,121.8,131.7), new cjs.Rectangle(-60.5,-64.3,121.7,131.8), new cjs.Rectangle(-60.4,-64.4,121.4,132), new cjs.Rectangle(-60.3,-64.5,121.2,132.1), new cjs.Rectangle(-60.1,-64.7,120.8,132.2), new cjs.Rectangle(-60,-64.8,120.5,132.5), new cjs.Rectangle(-59.8,-65,120,132.7), new cjs.Rectangle(-59.6,-65.3,119.6,132.9), new cjs.Rectangle(-59.3,-65.6,119,133.1), new cjs.Rectangle(-59,-65.8,118.5,133.5), new cjs.Rectangle(-58.7,-66.1,117.9,133.8), new cjs.Rectangle(-58.6,-66.4,117.4,134.1), new cjs.Rectangle(-58.3,-66.6,116.8,134.3), new cjs.Rectangle(-58,-66.8,116.3,134.6), new cjs.Rectangle(-57.8,-67,115.9,134.8), new cjs.Rectangle(-57.6,-67.2,115.5,135), new cjs.Rectangle(-57.5,-67.3,115.2,135.2), new cjs.Rectangle(-57.4,-67.5,114.9,135.3), new cjs.Rectangle(-57.3,-67.6,114.7,135.4), new cjs.Rectangle(-57.2,-67.7,114.5,135.5), new cjs.Rectangle(-57.2,-67.7,114.4,135.6), new cjs.Rectangle(-57.1,-67.7,114.3,135.6), new cjs.Rectangle(-57.1,-67.8,114.2,135.6), new cjs.Rectangle(-80.1,-87,160.3,174.1)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.5,regY:0.5,x:1.5,y:2.2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1.5,regY:0.5,x:1.5,y:1.3},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:1.5,regY:0.5,x:1.5,y:1.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1.5,regY:0.5,x:1.5,y:0.9},0).wait(1).to({y:1.8},0).wait(1).to({regX:0,regY:0,x:0},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:0.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.5,regY:-1.5,x:0.5,y:-1.1},0).wait(1).to({y:-0.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-38.2,81,84.3);
p.frameBounds = [rect, new cjs.Rectangle(-40,-38.3,81,84.4), new cjs.Rectangle(-40,-38.6,81,84.6), new cjs.Rectangle(-40,-39.1,81,85.2), new cjs.Rectangle(-40,-40,81,86), new cjs.Rectangle(-40,-39.2,81,85.2), new cjs.Rectangle(-40,-38.9,81,85), new cjs.Rectangle(-40,-39.2,81,85.2), rect=new cjs.Rectangle(-40,-40,81,86), rect, new cjs.Rectangle(-40,-39.6,81,85.7), new cjs.Rectangle(-40,-38.6,81,84.7), new cjs.Rectangle(-40,-38.2,81,84.3), rect=new cjs.Rectangle(-40,-36.8,81,82.9), rect, rect, rect, rect, rect, rect];


(lib.flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.x_flashgfx();
	this.instance.setTransform(399,220.1,13.159,7.52);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-20.5,842.2,481.3);
p.frameBounds = [rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1,regY:2,x:1,y:3.7},0).wait(1).to({y:3.4},0).wait(1).to({y:2.9},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1,regY:2,x:1,y:2.8},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:1,regY:2,x:1,y:2.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:1,regY:2,x:1,y:2.4},0).wait(1).to({y:3.3},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top_2();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight_2();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:0.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.5,regY:-1.5,x:0.5,y:-1.1},0).wait(1).to({y:-0.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base_2();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-38.2,81,84.3);
p.frameBounds = [rect, new cjs.Rectangle(-40,-38.3,81,84.4), new cjs.Rectangle(-40,-38.6,81,84.6), new cjs.Rectangle(-40,-39.1,81,85.2), new cjs.Rectangle(-40,-40,81,86), new cjs.Rectangle(-40,-39.2,81,85.2), new cjs.Rectangle(-40,-38.9,81,85), new cjs.Rectangle(-40,-39.2,81,85.2), rect=new cjs.Rectangle(-40,-40,81,86), rect, new cjs.Rectangle(-40,-39.6,81,85.7), new cjs.Rectangle(-40,-38.6,81,84.7), new cjs.Rectangle(-40,-38.2,81,84.3), rect=new cjs.Rectangle(-40,-36.8,81,82.9), rect, rect, rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:2.5,x:0.5,y:4.2},0).wait(1).to({y:3.9},0).wait(1).to({y:3.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.5,regY:2.5,x:0.5,y:3.3},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.5,regY:2.5,x:0.5,y:3.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.5,regY:2.5,x:0.5,y:2.9},0).wait(1).to({y:3.8},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).wait(1).to({y:3.2},0).wait(7));

	// top
	this.instance_1 = new lib.x_button_top();
	this.instance_1.setTransform(0,1.8);

	this.instance_2 = new lib.x_button_top_highlight();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:0.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:1.1},0).wait(1).to({regX:0.5,regY:-1.5,x:0.5,y:-0.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:0.5,regY:-1.5,x:0.5,y:-1.1},0).wait(1).to({y:-0.2},0).wait(1).to({regX:0,regY:0,x:0,y:1.8},0).to({_off:true},1).wait(7));

	// base
	this.instance_3 = new lib.x_button_base();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hitbox
	this.instance_4 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-38.2,81,84.3);
p.frameBounds = [rect, new cjs.Rectangle(-40,-38.3,81,84.4), new cjs.Rectangle(-40,-38.6,81,84.6), new cjs.Rectangle(-40,-39.1,81,85.2), new cjs.Rectangle(-40,-40,81,86), new cjs.Rectangle(-40,-39.2,81,85.2), new cjs.Rectangle(-40,-38.9,81,85), new cjs.Rectangle(-40,-39.2,81,85.2), rect=new cjs.Rectangle(-40,-40,81,86), rect, new cjs.Rectangle(-40,-39.6,81,85.7), new cjs.Rectangle(-40,-38.6,81,84.7), new cjs.Rectangle(-40,-38.2,81,84.3), rect=new cjs.Rectangle(-40,-36.8,81,82.9), rect, rect, rect, rect, rect, rect];


(lib.CreditsBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":6,"down":12,disabled:19});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(6).call(this.frame_11).wait(7).call(this.frame_18).wait(6).call(this.frame_24).wait(1));

	// Layer 3
	this.instance = new lib.wonbyover();
	this.instance.setTransform(-1.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:1},5).to({_off:true},8).wait(6));

	// Layer 2
	this.instance_1 = new lib.menu_wonby();
	this.instance_1.setTransform(-45.5,-32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},19).wait(6));

	// hitbox
	this.instance_2 = new lib.hitboxbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-32.8,85.9,86);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect];


(lib.bat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menu_bat_wing1
	this.instance = new lib.menu_bat_wing1_1();
	this.instance.setTransform(46.2,141.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:31,regY:4.4,rotation:-0.1,x:77.2,y:146.2},0).wait(1).to({rotation:-0.2,y:146.4},0).wait(1).to({rotation:-0.6,x:77.3,y:146.8},0).wait(1).to({rotation:-1.1,y:147.4},0).wait(1).to({rotation:-1.9,x:77.4,y:148.3},0).wait(1).to({rotation:-2.9,y:149.4},0).wait(1).to({rotation:-4,y:150.7},0).wait(1).to({rotation:-5,x:77.5,y:151.8},0).wait(1).to({rotation:-5.8,y:152.7},0).wait(1).to({rotation:-6.4,y:153.3},0).wait(1).to({rotation:-6.7,y:153.6},0).wait(1).to({rotation:-6.9,y:153.9},0).wait(1).to({regX:0,regY:0,rotation:-7,x:46.2,y:153.4},0).wait(1).to({regX:31,regY:4.4,rotation:-6.9,x:77.5,y:153.9},0).wait(1).to({rotation:-6.8,y:153.7},0).wait(1).to({rotation:-6.6,y:153.5},0).wait(1).to({rotation:-6.3,y:153.1},0).wait(1).to({rotation:-5.8,y:152.7},0).wait(1).to({rotation:-5.2,y:152},0).wait(1).to({rotation:-4.4,y:151.1},0).wait(1).to({rotation:-3.5,x:77.4,y:150.1},0).wait(1).to({rotation:-2.6,y:149.1},0).wait(1).to({rotation:-1.8,y:148.2},0).wait(1).to({rotation:-1.2,x:77.3,y:147.5},0).wait(1).to({rotation:-0.7,y:146.9},0).wait(1).to({rotation:-0.4,y:146.6},0).wait(1).to({rotation:-0.2,x:77.2,y:146.3},0).wait(1).to({rotation:0,y:146.2},0).wait(1).to({regX:0,regY:0,x:46.2,y:141.8},0).wait(1));

	// menu_bat_body
	this.instance_1 = new lib.menu_bat_body_1();
	this.instance_1.setTransform(-0.9,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:4.4,regY:99.9,x:3.5,y:104.6},0).wait(1).to({y:104.9},0).wait(1).to({y:105.5},0).wait(1).to({y:106.4},0).wait(1).to({y:107.7},0).wait(1).to({y:109.4},0).wait(1).to({y:111.2},0).wait(1).to({y:112.9},0).wait(1).to({y:114.2},0).wait(1).to({y:115.2},0).wait(1).to({y:115.7},0).wait(1).to({y:116.1},0).wait(1).to({regX:0,regY:0,x:-0.9,y:16.3},0).wait(1).to({regX:4.4,regY:99.9,x:3.5,y:116.1},0).wait(1).to({y:115.9},0).wait(1).to({y:115.5},0).wait(1).to({y:115},0).wait(1).to({y:114.2},0).wait(1).to({y:113.2},0).wait(1).to({y:111.9},0).wait(1).to({y:110.4},0).wait(1).to({y:108.9},0).wait(1).to({y:107.6},0).wait(1).to({y:106.6},0).wait(1).to({y:105.7},0).wait(1).to({y:105.2},0).wait(1).to({y:104.8},0).wait(1).to({y:104.6},0).wait(1).to({regX:0,regY:0,x:-0.9,y:4.7},0).wait(1));

	// menu_bat_wing2
	this.instance_2 = new lib.menu_bat_wing2_1();
	this.instance_2.setTransform(-35.1,138.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-22.2,regY:9.5,rotation:0.1,x:-57.3,y:147.6},0).wait(1).to({rotation:0.3,y:147.8},0).wait(1).to({rotation:0.8,x:-57.4,y:148.2},0).wait(1).to({rotation:1.5,x:-57.5,y:148.8},0).wait(1).to({rotation:2.5,x:-57.7,y:149.8},0).wait(1).to({rotation:3.8,x:-57.9,y:150.9},0).wait(1).to({rotation:5.3,x:-58.1,y:152.1},0).wait(1).to({rotation:6.6,x:-58.2,y:153.3},0).wait(1).to({rotation:7.7,x:-58.3,y:154.2},0).wait(1).to({rotation:8.4,x:-58.4,y:154.8},0).wait(1).to({rotation:8.9,x:-58.5,y:155.2},0).wait(1).to({rotation:9.2,y:155.4},0).wait(1).to({regX:0,regY:0,x:-35.1,y:149.7},0).wait(1).to({regX:-22.2,regY:9.5,x:-58.5,y:155.4},0).wait(1).to({rotation:9,y:155.3},0).wait(1).to({rotation:8.7,y:155},0).wait(1).to({rotation:8.3,x:-58.4,y:154.7},0).wait(1).to({rotation:7.7,x:-58.3,y:154.2},0).wait(1).to({rotation:6.9,y:153.5},0).wait(1).to({rotation:5.8,x:-58.1,y:152.6},0).wait(1).to({rotation:4.7,x:-58,y:151.6},0).wait(1).to({rotation:3.5,x:-57.8,y:150.6},0).wait(1).to({rotation:2.4,x:-57.7,y:149.7},0).wait(1).to({rotation:1.6,x:-57.5,y:149},0).wait(1).to({rotation:1,x:-57.4,y:148.4},0).wait(1).to({rotation:0.5,y:148},0).wait(1).to({rotation:0.2,x:-57.3,y:147.7},0).wait(1).to({rotation:0,y:147.6},0).wait(1).to({regX:0,regY:0,x:-35.1,y:138.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.3,-1.9,206.1,213);
p.frameBounds = [rect, new cjs.Rectangle(-87.3,-1.8,206.1,213), new cjs.Rectangle(-87.5,-1.5,206.4,213), new cjs.Rectangle(-88,-1,207.2,213), new cjs.Rectangle(-88.5,-0.1,208.1,213), new cjs.Rectangle(-89.5,1.2,209.8,213), new cjs.Rectangle(-90.6,2.9,211.7,213), new cjs.Rectangle(-91.8,4.7,213.7,213), new cjs.Rectangle(-92.9,6.4,215.6,213), new cjs.Rectangle(-93.7,7.7,216.9,213), new cjs.Rectangle(-94.3,8.7,217.8,213), new cjs.Rectangle(-94.6,9.3,218.4,213), new cjs.Rectangle(-94.9,9.6,218.9,213), new cjs.Rectangle(-95,9.7,219,213), new cjs.Rectangle(-94.8,9.6,218.8,213), new cjs.Rectangle(-94.9,9.4,218.8,213), new cjs.Rectangle(-94.4,9.1,218.2,213), new cjs.Rectangle(-94.3,8.5,217.9,213), new cjs.Rectangle(-93.7,7.7,216.9,213), new cjs.Rectangle(-93.1,6.7,215.7,213), new cjs.Rectangle(-92.3,5.4,214.6,213), new cjs.Rectangle(-91.2,3.9,212.7,213), new cjs.Rectangle(-90.1,2.5,210.9,213), new cjs.Rectangle(-89.3,1.1,209.5,213), new cjs.Rectangle(-88.7,0.1,208.4,213), new cjs.Rectangle(-88,-0.7,207.2,213), new cjs.Rectangle(-87.5,-1.3,206.5,213), new cjs.Rectangle(-87.3,-1.7,206.1,213), new cjs.Rectangle(-87.2,-1.9,206,213), new cjs.Rectangle(-87.3,-1.9,206.1,213)];


(lib.balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// menu_balloon_head
	this.instance = new lib.headballon();
	this.instance.setTransform(4,-41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:0.4,x:4.3,y:-41.3},0).wait(1).to({y:-41.4},0).wait(1).to({y:-41.6},0).wait(1).to({y:-42},0).wait(1).to({y:-42.5},0).wait(1).to({y:-43.1},0).wait(1).to({y:-43.8},0).wait(1).to({y:-44.6},0).wait(1).to({y:-45.4},0).wait(1).to({y:-46.1},0).wait(1).to({y:-46.5},0).wait(1).to({y:-46.9},0).wait(1).to({y:-47},0).wait(1).to({regX:0,regY:0,x:4,y:-47.5},0).wait(1).to({regX:0.3,regY:0.4,x:4.3,y:-47.1},0).wait(1).to({y:-47},0).wait(1).to({y:-46.9},0).wait(1).to({y:-46.8},0).wait(1).to({y:-46.6},0).wait(1).to({y:-46.4},0).wait(1).to({y:-46.1},0).wait(1).to({y:-45.7},0).wait(1).to({y:-45.3},0).wait(1).to({y:-44.8},0).wait(1).to({y:-44.3},0).wait(1).to({y:-43.7},0).wait(1).to({y:-43.2},0).wait(1).to({y:-42.7},0).wait(1).to({y:-42.3},0).wait(1).to({y:-42},0).wait(1).to({y:-41.7},0).wait(1).to({y:-41.5},0).wait(1).to({y:-41.3},0).wait(2).to({regX:0,regY:0,x:4,y:-41.7},0).wait(1));

	// menu_balloon_cosin
	this.instance_1 = new lib.menu_balloon_cosin_1();
	this.instance_1.setTransform(24.9,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:24.8,y:23.4},0).wait(2).to({y:23.2},0).wait(1).to({y:23},0).wait(1).to({x:24.7,y:22.8},0).wait(1).to({x:24.6,y:22.4},0).wait(1).to({x:24.5,y:22},0).wait(1).to({x:24.4,y:21.5},0).wait(1).to({x:24.3,y:21.1},0).wait(1).to({x:24.2,y:20.7},0).wait(1).to({x:24.1,y:20.4},0).wait(1).to({y:20.2},0).wait(1).to({y:20.1},0).wait(4).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({y:20.5},0).wait(1).to({x:24.2,y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({x:24.3,y:21.1},0).wait(1).to({x:24.4,y:21.4},0).wait(1).to({y:21.7},0).wait(1).to({x:24.5,y:22},0).wait(1).to({x:24.6,y:22.3},0).wait(1).to({y:22.6},0).wait(1).to({x:24.7,y:22.8},0).wait(1).to({x:24.8,y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.3},0).wait(1).to({y:23.4},0).wait(2).to({x:24.9,y:23.5},0).wait(1));

	// menu_balloon_string
	this.instance_2 = new lib.menu_balloon_string_1();
	this.instance_2.setTransform(-4,65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-4.1,y:65.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:-4.2,y:65},0).wait(1).to({scaleX:1,scaleY:1.01,x:-4.3,y:64.8},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:-4.5,y:64.6},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:-4.7,y:64.4},0).wait(1).to({scaleX:0.98,scaleY:1.02,x:-4.9,y:64.1},0).wait(1).to({scaleX:0.98,scaleY:1.03,x:-5.2,y:63.7},0).wait(1).to({scaleX:0.97,scaleY:1.04,x:-5.5,y:63.4},0).wait(1).to({scaleX:0.97,scaleY:1.04,x:-5.7,y:63.1},0).wait(1).to({scaleX:0.97,scaleY:1.05,x:-5.9,y:62.9},0).wait(1).to({scaleX:0.96,scaleY:1.05,x:-6,y:62.7},0).wait(1).to({scaleX:0.96,scaleY:1.05,x:-6.1},0).wait(1).to({scaleX:0.96},0).wait(2).to({scaleX:0.96},0).wait(1).to({scaleY:1.05,x:-6},0).wait(1).to({scaleX:0.96,scaleY:1.05,y:62.8},0).wait(1).to({scaleX:0.97,scaleY:1.05,x:-5.9,y:62.9},0).wait(1).to({scaleX:0.97,scaleY:1.05,x:-5.8,y:63},0).wait(1).to({scaleX:0.97,scaleY:1.04,x:-5.7,y:63.1},0).wait(1).to({scaleX:0.97,scaleY:1.04,x:-5.6,y:63.2},0).wait(1).to({scaleX:0.97,scaleY:1.04,x:-5.5,y:63.4},0).wait(1).to({scaleX:0.98,scaleY:1.03,x:-5.3,y:63.6},0).wait(1).to({scaleX:0.98,scaleY:1.03,x:-5.1,y:63.9},0).wait(1).to({scaleX:0.98,scaleY:1.02,x:-4.9,y:64.1},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:-4.7,y:64.3},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:-4.6,y:64.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:-4.4,y:64.7},0).wait(1).to({scaleX:1,scaleY:1.01,x:-4.3,y:64.8},0).wait(1).to({scaleX:1,scaleY:1,x:-4.2,y:65},0).wait(1).to({scaleX:1,scaleY:1,x:-4.1,y:65.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({x:-4,y:65.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-128.7,160.3,240.9);
p.frameBounds = [rect, new cjs.Rectangle(-59,-109.4,120,221.7), new cjs.Rectangle(-59,-109.5,120,221.8), new cjs.Rectangle(-59,-109.8,120,222), new cjs.Rectangle(-59,-110.1,120,222.3), new cjs.Rectangle(-59,-110.6,119.9,222.8), new cjs.Rectangle(-59,-111.2,120,223.3), new cjs.Rectangle(-59,-111.9,120,224.1), new cjs.Rectangle(-59,-112.7,120,224.9), new cjs.Rectangle(-59,-113.5,120,225.8), new cjs.Rectangle(-59,-114.2,120,226.4), new cjs.Rectangle(-59,-114.7,119.9,226.9), new cjs.Rectangle(-59,-115,119.9,227.2), new cjs.Rectangle(-59,-115.2,120,227.3), new cjs.Rectangle(-76.1,-134.5,160.3,246.7), rect=new cjs.Rectangle(-59,-115.2,120,227.4), rect, new cjs.Rectangle(-59,-115.1,120,227.2), new cjs.Rectangle(-59,-114.9,120,227.2), new cjs.Rectangle(-59,-114.7,119.9,226.9), new cjs.Rectangle(-59,-114.5,120,226.7), new cjs.Rectangle(-59,-114.2,120,226.4), new cjs.Rectangle(-59,-113.8,119.9,226), new cjs.Rectangle(-58.9,-113.4,119.9,225.6), new cjs.Rectangle(-59,-112.9,120,225.2), new cjs.Rectangle(-59,-112.4,119.9,224.5), new cjs.Rectangle(-59,-111.9,119.9,224.1), new cjs.Rectangle(-59,-111.3,120,223.5), new cjs.Rectangle(-59,-110.8,120,223), new cjs.Rectangle(-59,-110.4,120,222.6), new cjs.Rectangle(-59,-110.1,120,222.2), new cjs.Rectangle(-59,-109.8,119.9,221.9), new cjs.Rectangle(-59,-109.6,120,221.8), new cjs.Rectangle(-59,-109.5,120,221.7), new cjs.Rectangle(-59,-109.4,120,221.6), new cjs.Rectangle(-76.1,-128.7,160.3,240.9)];


(lib.SoundBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.soundOn = new lib.button_music();

	this.timeline.addTween(cjs.Tween.get(this.soundOn).wait(1));

	// Layer 2
	this.soundOff = new lib.button_music_off();

	this.timeline.addTween(cjs.Tween.get(this.soundOff).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-38.2,81,84.3);
p.frameBounds = [rect];


(lib.MainMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":0,"out":44});

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
		this.signal.emit("ready");
	}
	this.frame_59 = function() {
		this.stop();
		this.signal.emit("exit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(16).call(this.frame_59).wait(1));

	// white
	this.instance = new lib.white();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(57).to({_off:false},0).wait(2));

	// flash
	this.instance_1 = new lib.flash();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.783},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.441},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.555},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.084},0).wait(1).to({alpha:0.021},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).wait(2).to({alpha:0.32},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.267},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.124},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.023},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(6).to({_off:false},0).wait(1).to({regX:399,regY:220.1,x:399,y:220.1,alpha:0.144},0).wait(1).to({alpha:0.269},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.387},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.285},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.335},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.822},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(2));

	// soundBtn
	this.soundBtn = new lib.SoundBtn();
	this.soundBtn.setTransform(892.1,39.6,0.5,0.5,0,0,0,-0.9,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.soundBtn).wait(6).to({x:899},0).wait(1).to({regX:0.5,regY:3,x:846.5,y:41.7},0).wait(1).to({x:809},0).wait(1).to({x:782.9},0).wait(1).to({x:765.7},0).wait(1).to({x:756.2},0).wait(1).to({regX:-0.9,regY:-1.2,x:752.5,y:39.6},0).wait(1).to({regX:0.5,regY:3,x:753.6,y:41.7},0).wait(1).to({x:755.1},0).wait(1).to({x:758},0).wait(1).to({x:761},0).wait(1).to({x:762.7},0).wait(1).to({regX:-0.9,regY:-1.2,x:762.5,y:39.6},0).wait(27).to({regX:0.5,regY:3,x:763.2,y:46.5},0).wait(1).to({regX:-0.9,regY:-1.2,x:762.5,y:49.6},0).wait(1).to({regX:0.5,regY:3,x:763.2,y:49},0).wait(1).to({y:40.4},0).wait(1).to({y:24.6},0).wait(1).to({y:-0.5},0).wait(1).to({regX:-0.9,regY:-1.2,x:762.5,y:-42.5},0).wait(9));

	// creditsBtn
	this.creditsBtn = new lib.CreditsBtn();
	this.creditsBtn.setTransform(791,215.6,1.119,1.119,0,0,0,-1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.creditsBtn).wait(2).to({regX:-2.6,regY:10.2,scaleX:1.09,scaleY:1.09,x:780.8,y:227.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:774.2,y:227.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:768.7,y:227.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:764.2,y:227},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:760.3,y:226.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:757,y:226.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:754.3,y:226.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:752.1,y:226.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:750.4,y:226.3},0).wait(1).to({scaleX:1,scaleY:1,x:749.2},0).wait(1).to({scaleX:1,scaleY:1,x:748.4},0).wait(1).to({regX:-0.9,regY:-1.2,scaleX:1,scaleY:1,x:749.9,y:214.9},0).wait(32).to({regX:-2.6,regY:10.2,scaleX:1,scaleY:1,x:748.5,y:226.4},0).wait(1).to({scaleX:1,scaleY:1,x:749.5,y:227},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:751,y:227.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:753,y:228.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:755.4,y:230.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:758.2,y:231.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:761.3,y:233.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:764.8,y:235.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:768.4,y:237.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:772.4,y:239.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:776.6,y:241.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:781.1,y:244.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:785.8,y:246.8},0).wait(1).to({regX:-1,regY:-1.2,scaleX:1.12,scaleY:1.12,x:792.6,y:236.8},0).wait(2));

	// fullscreenBtn
	this.fullscreenBtn = new lib.FullscreenBtn();
	this.fullscreenBtn.setTransform(1101.8,39.6,0.5,0.5,0,0,0,-0.9,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.fullscreenBtn).wait(9).to({x:1108.7},0).wait(1).to({regX:0.5,regY:3,x:1056.2,y:41.7},0).wait(1).to({x:1018.7},0).wait(1).to({x:992.6},0).wait(1).to({x:975.4},0).wait(1).to({x:965.9},0).wait(1).to({regX:-0.9,regY:-1.2,x:962.2,y:39.6},0).wait(1).to({regX:0.5,regY:3,x:963.3,y:41.7},0).wait(1).to({x:964.8},0).wait(1).to({x:967.7},0).wait(1).to({x:970.7},0).wait(1).to({x:972.4},0).wait(1).to({regX:-0.9,regY:-1.2,x:972.2,y:39.6},0).wait(24).to({regX:0.5,regY:3,x:972.9,y:46.5},0).wait(1).to({regX:-0.9,regY:-1.2,x:972.2,y:49.6},0).wait(1).to({regX:0.5,regY:3,x:972.9,y:49},0).wait(1).to({y:40.4},0).wait(1).to({y:24.6},0).wait(1).to({y:-0.5},0).wait(1).to({regX:-0.9,regY:-1.2,x:972.2,y:-42.5},0).wait(9));

	// playBtn
	this.playBtn = new lib.NextButton();
	this.playBtn.setTransform(741.7,504.4,1,1,0,0,0,1.5,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.playBtn).wait(13).to({y:499.5},0).wait(1).to({regX:0.5,regY:3,x:740.7,y:455.8},0).wait(1).to({y:422.1},0).wait(1).to({y:398.5},0).wait(1).to({y:383.1},0).wait(1).to({y:374.5},0).wait(1).to({regX:1.5,regY:-1.2,x:741.7,y:367.6},0).wait(1).to({regX:0.5,regY:3,x:740.7,y:373.1},0).wait(1).to({y:377.8},0).wait(1).to({y:385.2},0).wait(1).to({y:390.4},0).wait(1).to({regX:1.5,regY:-1.2,x:741.7,y:387.6},0).wait(21).to({regX:0.5,regY:3,x:740.7,y:387},0).wait(1).to({regX:1.5,regY:-1.2,x:741.7,y:377.6},0).wait(1).to({regX:0.5,regY:3,x:740.7,y:385.2},0).wait(1).to({y:396.1},0).wait(1).to({y:416.1},0).wait(1).to({y:448},0).wait(1).to({regX:1.5,regY:-1.2,x:741.7,y:494.5},0).wait(9));

	// title
	this.title = new lib.title();
	this.title.setTransform(296.5,-42.4,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(5).to({regX:-14.3,regY:-1.5,scaleX:1.02,scaleY:1.02,x:282.3,y:-27.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:282.7,y:-14.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:283,y:-2.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:283.2,y:7.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:283.5,y:17},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:283.7,y:25.1},0).wait(1).to({scaleX:1,scaleY:1,x:283.9,y:32.1},0).wait(1).to({scaleX:1,scaleY:1,x:284,y:37.9},0).wait(1).to({scaleX:1,scaleY:1,x:284.2,y:42.7},0).wait(1).to({scaleX:1,scaleY:1,x:284.3,y:46.3},0).wait(1).to({scaleX:1,scaleY:1,y:48.5},0).wait(1).to({regX:0,regY:0,x:298.7,y:50.8},0).wait(29).to({regX:-14.3,regY:-1.5,x:284.4,y:49.3},0).wait(1).to({scaleX:1,scaleY:1,x:284.3},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:284.2},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:284.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:284},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:283.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:283.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:283.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:283.6,y:49.2},0).wait(1).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,x:298.7,y:50.8},0).wait(2));

	// jeff
	this.instance_2 = new lib.jeff();
	this.instance_2.setTransform(249.6,225.7,1.103,1.103);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({regX:10.1,regY:-2.7,scaleX:1.09,scaleY:1.09,x:261.1,y:222.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:261.4,y:222.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:261.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:261.9,y:222.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:262.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:262.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:262.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:262.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:223},0).wait(1).to({scaleX:1,scaleY:1,x:262.8},0).wait(1).to({scaleX:1,scaleY:1,x:262.9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:252.8,y:225.7},0).wait(32).to({regX:10.1,regY:-2.7,scaleX:1,scaleY:1,x:262.9,y:223},0).wait(1).to({scaleX:1,scaleY:1,x:262.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:262.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:262.6,y:222.9},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:262.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:262.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:262.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:261.9,y:222.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:261.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:261.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:261.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:261,y:222.7},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:249.6,y:225.7},0).wait(2));

	// tree_left
	this.instance_3 = new lib.tree_left();
	this.instance_3.setTransform(-47.5,-26.7,1.119,1.119);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({regX:214.9,regY:225.6,scaleX:1.1,scaleY:1.1,x:196.7,y:225.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:200},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:202.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:205.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:207.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:209.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:210.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:212.3,y:225.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:213.4,y:225.7},0).wait(1).to({scaleX:1,scaleY:1,x:214.2,y:225.6},0).wait(1).to({scaleX:1,scaleY:1,x:214.7,y:225.7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(32).to({regX:214.9,regY:225.6,scaleX:1,scaleY:1,x:214.8,y:225.8},0).wait(1).to({scaleX:1,scaleY:1,x:214.2,y:226.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:213.4,y:227.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:212.4,y:229.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:211.2,y:231.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:209.7,y:233.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:208.1,y:235.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:206.3,y:238.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:204.5,y:241.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:202.4,y:244.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:200.2,y:247.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:197.9,y:251},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:195.4,y:254.6},0).wait(1).to({regX:0,regY:0,scaleX:1.12,scaleY:1.12,x:-47.5,y:6},0).wait(2));

	// tree_right
	this.instance_4 = new lib.tree_right();
	this.instance_4.setTransform(847.5,-26.7,1.119,1.119);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({regX:-193.7,regY:224.4,scaleX:1.1,scaleY:1.1,x:626.5,y:224.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:623},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:619.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:617.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:614.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:612.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:610.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:609.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:608,y:224.5},0).wait(1).to({scaleX:1,scaleY:1,x:607.1,y:224.4},0).wait(1).to({scaleX:1,scaleY:1,x:606.5,y:224.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:800,y:0},0).wait(32).to({regX:-193.7,regY:224.4,scaleX:1,scaleY:1,x:606.5,y:224.6},0).wait(1).to({scaleX:1,scaleY:1,x:607.1,y:225.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:608,y:226},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:609.1,y:227},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:610.5,y:228.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:612.1,y:229.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:613.9,y:231.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:615.9,y:233.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:618,y:235.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:620.3,y:237.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:622.7,y:239.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:625.3,y:242},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:628,y:244.5},0).wait(1).to({regX:0,regY:0,scaleX:1.12,scaleY:1.12,x:847.5,y:-3.9},0).wait(2));

	// balloon
	this.instance_5 = new lib.balloon();
	this.instance_5.setTransform(65.7,295.8,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({regX:4.3,regY:-11.2,scaleX:0.94,scaleY:0.94,x:75.4,y:285},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:80.2,y:284.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:84.3,y:284.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:87.9,y:284.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:91.2,y:283.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:94,y:283.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:96.5,y:283.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:98.6,y:283.4},0).wait(1).to({scaleX:1,scaleY:1,x:100.3,y:283.3},0).wait(1).to({scaleX:1,scaleY:1,x:101.5,y:283.2},0).wait(1).to({scaleX:1,scaleY:1,x:102.3,y:283.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:98.3,y:294.3},0).wait(32).to({regX:4.3,regY:-11.2,scaleX:1,scaleY:1,x:102.3,y:283.1},0).wait(1).to({scaleX:1,scaleY:1,x:101.6,y:283.2},0).wait(1).to({scaleX:1,scaleY:1,x:100.4,y:283.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:98.8,y:283.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:97,y:283.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:94.8,y:283.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:92.4,y:283.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:89.8,y:284},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:86.9,y:284.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:83.8,y:284.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:80.5,y:284.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:77.1,y:284.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:73.5,y:285.1},0).wait(1).to({regX:0,regY:0,scaleX:0.93,scaleY:0.93,x:65.7,y:295.8},0).wait(2));

	// bat
	this.instance_6 = new lib.bat();
	this.instance_6.setTransform(554.9,12.1,1.023,1.023);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({regX:14.5,regY:110.4,scaleX:1.02,scaleY:1.02,x:566.2,y:126.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:563.3,y:127.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:560.8,y:128.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:558.5,y:129.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:556.5,y:130.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:554.8,y:131.2},0).wait(1).to({scaleX:1,scaleY:1,x:553.3,y:131.8},0).wait(1).to({scaleX:1,scaleY:1,x:552.1,y:132.3},0).wait(1).to({scaleX:1,scaleY:1,x:551,y:132.8},0).wait(1).to({scaleX:1,scaleY:1,x:550.2,y:133.1},0).wait(1).to({scaleX:1,scaleY:1,x:549.8,y:133.3},0).wait(1).to({regX:0,regY:0,x:535.1,y:23},0).wait(32).to({regX:14.5,regY:110.4,scaleX:1,scaleY:1,x:549.7,y:133.3},0).wait(1).to({scaleX:1,scaleY:1,x:549.9},0).wait(1).to({scaleX:1,scaleY:1,x:550.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:550.6,y:133.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:551.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:551.7,y:133},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:552.4,y:132.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:553,y:132.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:553.8,y:132.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:554.7,y:132.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:555.5,y:132.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:556.4,y:132},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:557.4,y:131.9},0).wait(1).to({regX:0,regY:0,scaleX:0.93,scaleY:0.93,x:545,y:28.9},0).wait(2));

	// pumpkin
	this.instance_7 = new lib.pumpkin();
	this.instance_7.setTransform(569.8,340.1,0.957,0.957);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({regX:-2.5,regY:12.9,scaleX:0.97,scaleY:0.97,x:563.7,y:352.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:560.5,y:351.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:557.8,y:351.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:555.5,y:351.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:553.4,y:351.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:551.5,y:351},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:549.9,y:350.9},0).wait(1).to({scaleX:1,scaleY:1,x:548.5,y:350.7},0).wait(1).to({scaleX:1,scaleY:1,x:547.4,y:350.6},0).wait(1).to({scaleX:1,scaleY:1,x:546.6},0).wait(1).to({scaleX:1,scaleY:1,x:546.1,y:350.5},0).wait(1).to({regX:0,regY:0,x:548.4,y:337.6},0).wait(32).to({regX:-2.5,regY:12.9,x:546.1,y:350.5},0).wait(1).to({scaleX:1,scaleY:1,x:546.6,y:350.6},0).wait(1).to({scaleX:1,scaleY:1,x:547.3},0).wait(1).to({scaleX:1,scaleY:1,x:548.4,y:350.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:549.6,y:350.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:551,y:350.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:552.6,y:351.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:554.3,y:351.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:556.2,y:351.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:558.2,y:351.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:560.3,y:351.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:562.6,y:351.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:564.9,y:352.2},0).wait(1).to({regX:0,regY:0,scaleX:0.96,scaleY:0.96,x:569.8,y:340.1},0).wait(2));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.setTransform(-8.7,-4.9,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({regX:400,regY:225,scaleX:1.02,scaleY:1.02,x:400,y:225.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:225},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:225.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:225},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:225.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:400.1,y:225},0).wait(1).to({scaleX:1,scaleY:1,x:400,y:225.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(32).to({regX:400,regY:225,x:400,y:225.1},0).wait(1).to({scaleX:1,scaleY:1,y:225},0).wait(1).to({x:400.1,y:225.1},0).wait(1).to({scaleX:1,scaleY:1,y:225},0).wait(1).to({scaleX:1,scaleY:1,y:225.1},0).wait(1).to({scaleX:1,scaleY:1,x:400,y:225},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:400.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:400,y:225.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:225},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:400.1,y:225.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:225},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1.02,x:-8.7,y:-4.9},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.6,-109.9,1170.4,661.5);
p.frameBounds = [rect, rect, new cjs.Rectangle(-39.3,-109.9,1162.1,661.5), new cjs.Rectangle(-32.5,-109.9,1155.3,661.5), new cjs.Rectangle(-26.5,-109.9,1149.3,661.5), new cjs.Rectangle(-22.1,-93.4,1144.9,645), new cjs.Rectangle(-22.1,-79.7,1144.9,631.3), new cjs.Rectangle(-22.1,-67.8,1144.9,619.3), new cjs.Rectangle(-22.1,-62.3,1144.9,613.8), new cjs.Rectangle(-22.1,-60.1,1151.8,611.7), new cjs.Rectangle(-22.1,-58.4,1098.6,609.9), new cjs.Rectangle(-22.1,-57.1,1061.1,608.7), new cjs.Rectangle(-22.1,-56.4,1034.9,607.9), new cjs.Rectangle(-22.1,-56,1017.8,602.7), new cjs.Rectangle(-22.1,-56,1008.2,562.2), new cjs.Rectangle(-22.1,-56,1005.2,562.2), new cjs.Rectangle(-22.1,-56,1005.7,562.2), new cjs.Rectangle(-22.1,-56,1007.2,562.2), new cjs.Rectangle(-22.1,-56,1010,562.2), new cjs.Rectangle(-22.1,-56,1013,562.2), new cjs.Rectangle(-22.1,-56,1014.7,562.2), rect=new cjs.Rectangle(-22.1,-56,1015.2,562.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.1,-56,993.2,562.2), rect, rect, rect, rect, rect, new cjs.Rectangle(-22.1,-56,1015.2,562.2), new cjs.Rectangle(-22.1,-56.1,1015.2,562.8), new cjs.Rectangle(-22.1,-56.3,1015.2,564.6), new cjs.Rectangle(-22.1,-56.7,1015.2,567.3), new cjs.Rectangle(-22.1,-57.2,1015.2,571), new cjs.Rectangle(-22.1,-57.9,1015.2,575.3), new cjs.Rectangle(-22.1,-58.5,1015.2,580.3), rect=new cjs.Rectangle(-22.1,-61.1,1015.2,602.8), rect, new cjs.Rectangle(-22.8,-61.1,1015.9,602.8), new cjs.Rectangle(-27.2,-62.1,1020.3,605.9), new cjs.Rectangle(-31.9,-63.1,1025.1,613.5), new cjs.Rectangle(-36.9,-64.2,1030,621.5), new cjs.Rectangle(-42.1,-65.4,1035.3,630), rect=new cjs.Rectangle(-47.6,-66.6,1040.8,638.8), rect];


// stage content:



(lib.mainmenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;
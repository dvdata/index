/*global screenflow, console, */
/*jslint bitwise: true */
var wonbats = wonbats || {};
var game = game || {};

(function () {
    'use strict';

    function SmartButton(target, click) {
        this.clickCallback = click;
        this.target = target;
        this.target.interactive = true;
        this.target.buttonMode = true;
        this.target.mouseover = this.mouseover.bind(this);
        this.target.mouseout = this.mouseout.bind(this);
        this.target.mousedown = this.mousedown.bind(this);
        this.target.mouseup = this.mouseup.bind(this);
        this.target.touchstart = this.touchstart.bind(this);
        /*this.target.click = this.click.bind(this);
        this.target.touchend = this.touchend.bind(this);
        this.target.tap = this.tap.bind(this);*/
        
    }
    
    SmartButton.prototype.mouseover = function (mouseData) {
        //console.log("MOUSE OVER!");
        this.target.gotoAndPlay("over");
        game.soundManager.playSfx("btn_rollover");
    };

    SmartButton.prototype.mouseout = function (mouseData) {
        //console.log("MOUSE OUT!");
        this.target.gotoAndPlay("out");
    };

    SmartButton.prototype.mousedown = function (mouseData) {
        //console.log("MOUSE DOWN!");
        this.target.gotoAndPlay("down");
        game.soundManager.playSfx("btn_click");
        if (this.clickCallback) {
            console.log("click");
            this.clickCallback.call(this);
        }
    };

    SmartButton.prototype.mouseup = function (mouseData) {
        //console.log("MOUSE UP!");
        this.target.gotoAndPlay("out");
    };

    SmartButton.prototype.click = function (mouseData) {
        console.log("CLICK!");
    };

    SmartButton.prototype.touchstart = function (touchData) {
        //console.log("TOUCH START!");
        this.mousedown();
        this.target.gotoAndPlay("out");
    };

    SmartButton.prototype.touchend = function (touchData) {
        //console.log("TOUCH END!");
        this.mouseout();
    };

    SmartButton.prototype.tap = function (touchData) {
        //console.log("TAP!");
        this.target.gotoAndPlay("out");
        game.soundManager.playSfx("btn_click");
    };
    
    SmartButton.prototype.on = function (event, callback) {
        this.target.on(event, callback);
    };
    
    SmartButton.prototype.setEnable = function (value) {
        this.target.interactive = value;
    };
    
    SmartButton.prototype.setVisible = function (value) {
        this.target.visible = value;
    };
    
    SmartButton.prototype.dispose = function () {
        this.target.setInteractive(false);
    };
    wonbats.SmartButton = SmartButton;
}());
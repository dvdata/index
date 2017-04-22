/*global screenflow, console, pixiflash_lib, signaljs, createjs*/
var game = game || {};
var images = images || {};
var ss = ss || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Intro() {
        screenflow.Screen.call(this);
    }

    Intro.prototype = Object.create(screenflow.Screen.prototype);
    Intro.prototype.constructor = Intro;

    Intro.prototype.enter = function (name) {
        screenflow.Screen.prototype.enter.call(this, name);
        this.view = new pixiflash_lib.CinematicIntro();
        this.view.signal = new signaljs.Signal();
        this.view.signal.add(this.onSignal.bind(this));
        this.addButton("skip", this.view.skipBtn, this.onMouseDown.bind(this));
        //this.view.mousedown = this.onMouseDown.bind(this);
        this.asset.addChild(this.view);
        this.enableInput(true);
    };

    Intro.prototype.onKeyDown = function (e) {
        if (e.keyCode === 13) {
            this.buttons.skip.mousedown.call(this.buttons.skip);
        }
    };

    Intro.prototype.onMouseDown = function () {
        this.enableInput(false);
        this.transitionSignal.emit(this.name, "exit");
    };

    Intro.prototype.onSignal = function (message, data) {
        if (message === "exit") {
            this.transitionSignal.emit(this.name, "exit");
        } else if (message === "sound") {
            console.log("sound", data);
            game.soundManager.playSfx(data);
        }
    };

    Intro.prototype.exit = function () {
        this.view.signal.clear();
        this.view.signal = null;
        this.view.mousedown = null;
        screenflow.Screen.prototype.exit.call(this, name);
    };

    game.screens.Intro = Intro;
}());

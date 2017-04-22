/*global screenflow, console, pixiflash_lib, signaljs, createjs*/
var game = game || {};
var images = images || {};
var ss = ss || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Credits() {
        screenflow.Screen.call(this);
    }

    Credits.prototype = Object.create(screenflow.Screen.prototype);
    Credits.prototype.constructor = Credits;

    Credits.prototype.enter = function (name) {
        screenflow.Screen.prototype.enter.call(this, name);
        this.view = new pixiflash_lib.Credits();
        this.view.signal = new signaljs.Signal();
        this.view.signal.add(this.onSignal.bind(this));
        this.addButton("home", this.view, this.onMouseDown.bind(this));
        this.asset.addChild(this.view);
        game.soundManager.getSound("music_ingame_1").volume = 0;
        game.soundManager.play("cinematic_credits");
    };

    Credits.prototype.onMouseDown = function () {
        this.enableInput(false);
        this.transitionSignal.emit(this.name, "exit");
    };

    Credits.prototype.onSignal = function (message) {
        if (message === "exit") {
            this.transitionSignal.emit(this.name, "exit");
        }
    };

    Credits.prototype.exit = function () {
        game.soundManager.stop("cinematic_credits");
        this.view.signal.clear();
        this.view.signal = null;
        this.view.mousedown = null;
        screenflow.Screen.prototype.exit.call(this, name);
    };

    game.screens.Credits = Credits;
}());

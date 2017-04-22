/*global screenflow, console, pixiflash_lib, signaljs, createjs*/
var game = game || {};
var images = images || {};
var ss = ss || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Ending() {
        screenflow.Screen.call(this);
    }

    Ending.prototype = Object.create(screenflow.Screen.prototype);
    Ending.prototype.constructor = Ending;

    Ending.prototype.enter = function (name) {
        screenflow.Screen.prototype.enter.call(this, name);
        this.view = new pixiflash_lib.CinematicOutro();
        this.view.signal = new signaljs.Signal();
        this.view.signal.add(this.onSignal.bind(this));
        this.addButton("home", this.view.homeBtn, this.onMouseDown.bind(this));
        this.asset.addChild(this.view);
        game.soundManager.playSfx("thunder");
    };

    /*Ending.prototype.onKeyDown = function (e) {
        if (e.keyCode === 13) {
            this.buttons.home.mousedown.call(this.buttons.home);
        }
    };*/

    Ending.prototype.onMouseDown = function () {
        this.enableInput(false);
        this.transitionSignal.emit(this.name, "exit");
    };

    Ending.prototype.onSignal = function (message, data) {
        if (message === "exit") {
            this.transitionSignal.emit(this.name, "exit");
        } else if (message === "sound") {
            game.soundManager.playSfx(data);
        } else if (message === "music") {
            game.soundManager.play(data);
            game.soundManager.getSound(data).volume = 0;
            game.soundManager.restoreVolume(data, 1000);
        }
    };

    Ending.prototype.exit = function () {
        game.soundManager.stop("cinematic_credits");
        game.soundManager.stop("cinematic_win");
        this.view.signal.clear();
        this.view.signal = null;
        this.view.mousedown = null;
        screenflow.Screen.prototype.exit.call(this, name);
    };

    game.screens.Ending = Ending;
}());

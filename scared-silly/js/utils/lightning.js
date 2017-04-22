/*global console, signaljs, createjs, PIXI */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function Lightning(width, height, color) {
        PIXI.Graphics.call(this);
        this.signal = new signaljs.Signal();
        this.beginFill(color);
        this.drawRect(0, 0, width, height);
        this.endFill();
        this.cacheAsBitmap = true;
    }
    Lightning.prototype = Object.create(PIXI.Graphics.prototype);
    Lightning.prototype.constructor = Lightning;

    Lightning.prototype.start = function (wait, duration) {
        this.show();
        createjs.Tween.removeTweens(this);
        createjs.Tween.get(this)
            .wait(wait)
            .call(this.playSound.bind(this))
            .to({
                alpha: 0
            }, duration, createjs.Ease.bounceInOut).call(this.onFlashEnd.bind(this));
    };

    Lightning.prototype.loop = function (initialWait, wait, duration) {
        //console.log(initialWait, wait, duration);
        createjs.Tween.removeTweens(this);
        createjs.Tween.get(this)
            .wait(initialWait)
            .wait(wait[0] + ((wait[1] - wait[0]) * Math.random()))
            .call(this.show.bind(this))
            .call(this.playSound.bind(this))
            .to({
                alpha: 0
            }, duration, createjs.Ease.bounceInOut).call(this.loopEnd.bind(this, wait, duration));
    };

    Lightning.prototype.loopEnd = function (wait, duration) {
        this.visible = false;
        this.alpha = 1;
        this.loop(0, wait, duration);
    };

    Lightning.prototype.show = function () {
        this.visible = true;
        this.alpha = 1;
    };

    Lightning.prototype.playSound = function () {
        game.soundManager.playSfx("thunder");
    };

    Lightning.prototype.onFlashEnd = function () {
        this.visible = false;
        this.signal.emit();
    };

    Lightning.prototype.stop = function () {
        createjs.Tween.removeTweens(this);
        this.visible = false;
    };

    Lightning.prototype.dispose = function () {
        game.soundManager.stop("thunder");
        createjs.Tween.removeTweens(this);
        this.clear();
        this.cacheAsBitmap = null;
        this.signal.clear();
        this.signal = null;
    };

    game.Lightning = Lightning;
}());

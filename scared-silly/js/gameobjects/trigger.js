/*global console, createjs, libassets */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function Trigger(gid, col, row, asset, config, animationConfig) {
        game.GameObjectMC.call(this, gid, col, row, asset, config, animationConfig);

        this.enabled = false;
        /*this.trigger = false;*/

    }
    Trigger.prototype = Object.create(game.GameObjectMC.prototype);
    Trigger.prototype.constructor = Trigger;

    Trigger.prototype.init = function () {
        game.GameObject.prototype.init.call(this);
        this.gotoAndStop({
            label: "unpressed"
        });
    };

    Trigger.prototype.overlap = function (other) {
        //this.trigger = true;
        this.enabled = true;
        this.maskBits = game.config.collisionBits.NOTHING;
        if (this.config.overlap) {
            this.playSound(this.config.overlap.sound);
        }
        this.gotoAndStop({
            label: "pressed"
        });
    };

    Trigger.prototype.canTrigger = function () {
        return this.enabled;
    };

    Trigger.prototype.disable = function () {
        this.enabled = false;
        //this.trigger = false;
    };

    game.Trigger = Trigger;
}());

/*global console, createjs, libassets */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function Blocker(gid, col, row, asset, config, isOpen, animationConfig) {
        game.GameObjectMC.call(this, gid, col, row, asset, config, animationConfig);
        this.disableCount = 0;

        this.isOpen = isOpen;
    }
    Blocker.prototype = Object.create(game.GameObjectMC.prototype);
    Blocker.prototype.constructor = Blocker;

    Blocker.prototype.init = function () {
        game.GameObjectMC.prototype.init.call(this);
        //this.asset.gotoAndStop("idle");
    };

    Blocker.prototype.addDisableCount = function () {
        this.disableCount += 1;
        //console.log("adding disable count: " + this.disableCount);
    };

    Blocker.prototype.minusDisableCount = function () {
        this.disableCount -= 1;
        //console.log("adding disable count: " + this.disableCount);
        if (this.disableCount === 0) {
            return true;
        }
        //console.log("adding disable count: " + this.disableCount);
        return false;
    };

    Blocker.prototype.toggle = function () {
        if (this.isOpen) {
            this.enable();
            this.playSound("gate_up");
        } else {
            this.disable();
            this.playSound("gate_down");
        }
    };

    Blocker.prototype.disable = function (startStopped) {
        this.blockerMaskBits = this.maskBits;
        this.maskBits = game.config.collisionBits.NOTHING;
        this.isOpen = true;
        if (startStopped) {
            this.gotoAndStop({
                label: "open"
            });
        } else {
            this.gotoAndStop({
                label: "down"
            });
        }
    };

    Blocker.prototype.enable = function (startStopped) {
        this.maskBits = this.blockerMaskBits;
        this.isOpen = false;
        if (startStopped) {
            this.gotoAndStop({
                label: "closed"
            });
        } else {
            this.gotoAndStop({
                label: "up"
            });
        }
    };

    Blocker.prototype.collide = function (other, direction) {
        //console.log("collide");
    };

    game.Blocker = Blocker;
}());

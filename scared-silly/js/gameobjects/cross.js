/*global console, createjs, libassets */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function Cross(gid, col, row, asset, animationConfig, isTop) {
        game.GameObjectMC.call(this, gid, col, row, asset, undefined, animationConfig);
        this.enemy = undefined;
        this.isTop = isTop;
    }
    Cross.prototype = Object.create(game.GameObjectMC.prototype);
    Cross.prototype.constructor = Cross;

    Cross.prototype.reset = function (col, row) {
        game.GameObjectMC.prototype.reset.call(this, col, row);
        this.enemy = undefined;
        this.asset.visible = true;
        this.gotoAndStop({
            label: "on"
        });
    };

    Cross.prototype.onAssetSignal = function () {
        var args = arguments;
        game.GameObject.prototype.onAssetSignal.call(this, args);
        if (args[0] === "animationFinished") {
            if (args[1] === "on") {
                this.gotoAndStop({
                    label: "idle"
                });
            } else if (args[1] === "off") {
                this.asset.visible = false;
            }
        }
    };

    Cross.prototype.disable = function () {
        game.GameObject.prototype.disable.call(this);
        if (this.alive) {
            this.alive = false;
            this.enemy = undefined;
            if (this.currentAnimation !== "off") {
                this.gotoAndStop({
                    label: "off"
                });
            }
        }
    };

    Cross.prototype.dispose = function () {
        this.enemy = null;
        game.GameObjectMC.prototype.dispose.call(this);
    };

    game.Cross = Cross;
}());

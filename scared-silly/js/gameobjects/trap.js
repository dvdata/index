/*global console, createjs, libassets */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function Trap(gid, col, row, asset, config, animationConfig) {
        game.GameObjectMC.call(this, gid, col, row, asset, config, animationConfig);
    }
    Trap.prototype = Object.create(game.GameObjectMC.prototype);
    Trap.prototype.constructor = Trap;

    Trap.prototype.overlap = function (other) {
        game.GameObject.prototype.overlap.call(this, other);
        if (this.config.turns[this.currentTurn].damage) {
            other.collide(this);
        }
    };

    Trap.prototype.onTurnEnd = function () {
        game.GameObject.prototype.onTurnEnd.call(this);
        this.overlapCheck.emit(this);
    };

    game.Trap = Trap;
}());

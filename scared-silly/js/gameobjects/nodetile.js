/*global console, createjs, libassets */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function NodeTile(gid, col, row, asset, config, animationConfig) {
        game.GameObjectMC.call(this, gid, col, row, asset, config, animationConfig);
        this.nodeUp = undefined;
        this.nodeDown = undefined;
        this.nodeLeft = undefined;
        this.nodeRight = undefined;
        this.nodeGid = undefined;
    }
    NodeTile.prototype = Object.create(game.GameObjectMC.prototype);
    NodeTile.prototype.constructor = NodeTile;

    NodeTile.prototype.update = function (dt) {
        game.GameObjectMC.prototype.update.call(this, dt);
    };

    NodeTile.prototype.dispose = function () {
        game.GameObject.prototype.dispose.call(this);
        this.nodeUp = null;
        this.nodeLeft = null;
        this.nodeRight = null;
        this.nodeGid = null;
    };

    game.NodeTile = NodeTile;
}());

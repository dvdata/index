/*global console, createjs, libassets, signaljs */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function Enemy(gid, col, row, asset, config, animationConfig) {
        game.BasePlayer.call(this, gid, col, row, asset, config, animationConfig);
    }
    Enemy.prototype = Object.create(game.BasePlayer.prototype);
    Enemy.prototype.constructor = Enemy;

    Enemy.prototype.move = function (direction) {
        if (direction !== this.previousDirection && this.config.rotate) {
            this.rotate(direction);
        } else {
            game.BasePlayer.prototype.move.call(this, direction);
        }
    };

    Enemy.prototype.hasToRotate = function (direction) {
        return (direction !== this.previousDirection && this.config.rotate);
    };

    Enemy.prototype.rotate = function (direction) {
        var vertical = [game.config.directions.DOWN, game.config.directions.UP],
            horizontal = [game.config.directions.RIGHT, game.config.directions.LEFT],
            //lookDir,
            previousDirection = this.previousDirection,
            from,
            to;
        if (direction === game.config.directions.DOWN) {
            if (this.previousDirection === game.config.directions.LEFT || this.previousDirection === game.config.directions.RIGHT) {
                this.previousDirection = direction;
            } else if (this.previousDirection === game.config.directions.UP) {
                //lookDir = game.WMath.randomFromArray(horizontal);
                this.previousDirection = game.WMath.randomFromArray(horizontal);
            }
        } else if (direction === game.config.directions.UP) {
            if (this.previousDirection === game.config.directions.LEFT || this.previousDirection === game.config.directions.RIGHT) {
                this.previousDirection = direction;
            } else if (this.previousDirection === game.config.directions.DOWN) {
                //lookDir = game.WMath.randomFromArray(horizontal);
                this.previousDirection = game.WMath.randomFromArray(horizontal);
            }
        } else if (direction === game.config.directions.LEFT) {
            if (this.previousDirection === game.config.directions.UP || this.previousDirection === game.config.directions.DOWN) {
                this.previousDirection = direction;
            } else if (this.previousDirection === game.config.directions.RIGHT) {
                //lookDir = game.WMath.randomFromArray(vertical);
                this.previousDirection = game.WMath.randomFromArray(vertical);
            }
        } else if (direction === game.config.directions.RIGHT) {
            if (this.previousDirection === game.config.directions.UP || this.previousDirection === game.config.directions.DOWN) {
                this.previousDirection = direction;
            } else if (this.previousDirection === game.config.directions.LEFT) {
                //lookDir = game.WMath.randomFromArray(vertical);
                this.previousDirection = game.WMath.randomFromArray(vertical);
            }
        }
        from = this.getDirectionString(previousDirection);
        to = this.getDirectionString(this.previousDirection);
        //console.log(this.config.rotate.anims[from + "_to_" + to].label, from + "_to_" + to);
        this.gotoAndStop(this.config.rotate.anims[from + "_to_" + to]);
        this.onTurnEnd();
    };

    Enemy.prototype.hit = function (other, direction) { //after we have enemies with attack anim, this overrides original method
        game.BasePlayer.prototype.hit.call(this, other, direction);
        this.bounce(direction);
        //this.onTurnEnd();
    };

    Enemy.prototype.collide = function (other, direction) {
        if (other instanceof game.Enemy) {
            return;
        }
        game.BasePlayer.prototype.collide.call(this, other, direction);
    };

    Enemy.prototype.updateLook = function (data) {
        if (this.gid === game.config.SKULL && (data instanceof game.Player)) {
            var diff = data.col - this.col;
            if (diff < 0) {
                this.asset.scaleX = -1;
            } else if (diff > 0) {
                this.asset.scaleX = 1;
            }
            //console.log(diff);
        } else if (this.gid === game.config.PIG && data && !(data instanceof game.Player)) {
            //console.log(data, this.getDirectionString(data));
            this.previousDirection = data;
            this.gotoAndStop({
                label: this.getDirectionString(data) + "_idle"
            });
        }
    };

    game.Enemy = Enemy;
}());

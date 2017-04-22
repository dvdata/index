/*global console, createjs, libassets */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function GameObjectMC(gid, col, row, asset, config, animationConfig) {
        this.animations = animationConfig.labels;
        this.currentAnimation = "";

        game.GameObject.call(this, gid, col, row, asset, config);

        this.asset.animationSpeed = animationConfig.settings.animationSpeed || 1;
        this.asset.anchor.x = animationConfig.settings.anchor.x || 0;
        this.asset.anchor.y = animationConfig.settings.anchor.y || 0;
        this.asset.loop = false;
    }
    GameObjectMC.prototype = Object.create(game.GameObject.prototype);
    GameObjectMC.prototype.constructor = GameObjectMC;

    GameObjectMC.prototype.gotoAndStop = function (config) {
        this.currentAnimation = config.label;

        this.animationFinished = false;
        this.currentAnimConfig = config;
        if (config) {
            if (config.scaleX) {
                this.asset.scale.x = config.scaleX;
            }
        }

        this.asset.gotoAndPlay(this.animations[this.currentAnimation].from);
    };

    GameObjectMC.prototype.update = function (dt) {
        this.asset.x = this.col * game.config.TILE_WIDTH + this.offset.x;
        this.asset.y = this.row * game.config.TILE_HEIGHT + this.offset.y;
        this.isStruck = false;

        if (this.currentAnimation !== "") {
            if (this.asset.playing) {
                this.asset.update(dt * 25);

                if (this.asset.currentFrame >= this.animations[this.currentAnimation].to) {
                    if (this.animations[this.currentAnimation].event) {
                        this.asset.signal.emit(this.animations[this.currentAnimation].event, this.currentAnimation);
                    }

                    if (this.animations[this.currentAnimation].next) {
                        this.gotoAndStop({
                            label: this.animations[this.currentAnimation].next
                        });
                    } else {
                        this.asset.gotoAndStop(this.animations[this.currentAnimation].to);
                    }
                }
            }
        }
    };

    game.GameObjectMC = GameObjectMC;
}());

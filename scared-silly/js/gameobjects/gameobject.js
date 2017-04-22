/*global console, createjs, libassets, PIXI, signaljs */
/*jslint bitwise: true*/

var game = game || {};

(function () {
    'use strict';

    function GameObject(gid, col, row, asset, config) {
        this.gid = gid;
        this.asset = asset || undefined;
        this.config = config;
        this.overlapCheck = new signaljs.Signal();
        this.reset(col, row);
        if (asset) {
            this.asset.gameObject = this;
            //            this.asset.framerate = game.config.FPS;;
            this.asset.on("added", this.init.bind(this));
            this.asset.signal = new signaljs.Signal();
            this.asset.signal.add(this.onAssetSignal.bind(this));
        }
    }

    GameObject.prototype.init = function () {
        this.asset.off("added");
    };

    GameObject.prototype.reset = function (col, row) {
        this.col = col;
        this.row = row;
        this.kill = false; //for removal purposes
        this.alive = true; //for pool purposes
        this.maskBits = 0;
        this.categoryBits = 0;
        this.isSensor = (this.config === undefined || this.config.sensor === undefined) ? false : this.config.sensor;
        this.hp = (this.config === undefined || this.config.hp === undefined) ? 1 : this.config.hp;
        this.ap = (this.config === undefined || this.config.ap === undefined) ? 0 : this.config.ap;
        this.offset = (this.config === undefined || this.config.offset === undefined) ? {
            x: 0,
            y: 0
        } : this.config.offset;
        this.inTurn = false;
        this.isStruck = false;
        this.currentTurn = 0;
        this.children = [];
        this.currentAnimConfig = undefined;
        this.animationFinished = false;
        this.cameraShake = undefined;
        this.isInsideCamera = false;
        if (this.asset) { //FIX: due the removeChild breaking up children timeline
            this.asset.visible = true;
        }
        this.onTurnStart();
        this.onTurnEnd();
        this.update(1);
    };

    GameObject.prototype.getAttackPower = function () {
        return this.ap;
    };

    GameObject.prototype.collide = function (other, direction) {
        //console.log("collide");
        this.healPowerMinus(other.getAttackPower());
    };

    GameObject.prototype.overlap = function (other) {
        //console.log("overlap " + other);
    };

    GameObject.prototype.hit = function (other, direction) {
        //console.log("hit");
    };

    GameObject.prototype.hasToRotate = function (direction) {
        return false;
    };

    GameObject.prototype.healPowerMinus = function (attackPower) {
        if (attackPower === undefined) {
            return;
        }
        this.hp -= Math.abs(attackPower);
        this.hp = game.WMath.clamp(this.hp, 0, this.hp);
        //console.log("hp: " + this.hp);
        if (this.hp === 0) {
            this.die();
        }
    };

    GameObject.prototype.die = function () {
        this.playSound(this.config.dead.sound);
        this.maskBits = game.config.collisionBits.NOTHING;
        this.collisionBits = game.config.collisionBits.NOTHING;
        this.kill = true;
        this.cameraShake = this.config.dead.shake;
    };

    GameObject.prototype.onDeadAnimationEnd = function () {
        this.kill = true;
        console.log("called at dead animation end");
    };

    GameObject.prototype.onTurnEnd = function () {
        var turnConfig;
        this.inTurn = false;
        if (this.config && this.config.turns) {
            this.currentTurn += 1;
            if (this.currentTurn >= this.config.turns.length) {
                this.currentTurn = 0;
            }
        }
    };

    GameObject.prototype.onTurnStart = function () {
        var turnConfig,
            i,
            j,
            method,
            args;
        this.inTurn = true;
        if (this.config && this.config.turns) {
            turnConfig = this.config.turns[this.currentTurn];
            if (turnConfig.call) {
                for (i = 0; i < turnConfig.call.length; i += 1) {
                    method = turnConfig.call[i][0];
                    args = turnConfig.call[i][1];
                    this[method](args);
                }
            }
        }
        //console.log("on turn start");
    };

    GameObject.prototype.canMove = function () {
        if (this.config.turns !== undefined && this.config.turns[this.currentTurn].canMove !== undefined) {
            return this.config.turns[this.currentTurn].canMove;
        }
        return true;
    };

    GameObject.prototype.isDead = function () {
        return this.hp <= 0;
    };

    GameObject.prototype.update = function (dt) {
        this.asset.x = this.col * game.config.TILE_WIDTH + this.offset.x;
        this.asset.y = this.row * game.config.TILE_HEIGHT + this.offset.y;
        this.isStruck = false;
    };

    GameObject.prototype.gotoAndStop = function (config) {
        //console.log(config.label);
        this.animationFinished = false;
        this.asset.gotoAndStop(config.label);
        this.resetTimeline(this.asset);
        this.currentAnimConfig = config;
        if (config) {
            if (config.scaleX) {
                this.asset.scaleX = config.scaleX;
            }
        }
    };

    GameObject.prototype.resetTimeline = function (asset) {
        var i = 0,
            child;

        for (i = 0; i < asset.children.length; i += 1) {
            child = asset.children[i];
            if (child && child.gotoAndPlay) {
                child.gotoAndPlay(0);
                this.resetTimeline(child);
            }
        }
    };

    GameObject.prototype.addDisableCount = function () {};

    GameObject.prototype.minusDisableCount = function () {};

    GameObject.prototype.disable = function () {};

    GameObject.prototype.getDirectionString = function (direction) {
        if (direction === game.config.directions.UP) {
            return "up";
        } else if (direction === game.config.directions.DOWN) {
            return "down";
        } else if (direction === game.config.directions.LEFT) {
            return "left";
        } else if (direction === game.config.directions.RIGHT) {
            return "right";
        }
        return undefined;
    };

    GameObject.prototype.onAssetSignal = function () {
        //console.log(Array.from(arguments));
    };

    GameObject.prototype.playSound = function (id, volume) {
        //console.log("play sound: ", id, volume);
        if (id && this.isInsideCamera) {
            game.soundManager.playSfx(id, volume);
        }
    };

    GameObject.prototype.dispose = function () {
        console.log("disposing: ", this.constructor.name);
        this.overlapCheck.clear();
        this.overlapCheck = null;
        if (this.asset) {
            this.asset.signal.clear();
            this.asset.signal = null;
            this.asset.gameObject = null;
        }
        if (this.children) {
            this.children.length = 0;
        }
        this.children = null;
    };
    game.GameObject = GameObject;
}());

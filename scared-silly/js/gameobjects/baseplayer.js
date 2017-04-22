/*global console, signaljs, createjs, PIXI */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function BasePlayer(gid, col, row, asset, config, animationConfig) {
        this.moveCheck = new signaljs.Signal();
        game.GameObjectMC.call(this, gid, col, row, asset, config, animationConfig);
    }
    BasePlayer.prototype = Object.create(game.GameObjectMC.prototype);
    BasePlayer.prototype.constructor = BasePlayer;

    BasePlayer.prototype.reset = function (col, row) {
        this.direction = game.config.directions.NONE;
        this.inputDirection = game.config.directions.NONE;
        this.moveDelay = 0;
        this.maxDelay = 0;
        this.diffCol = 0;
        this.diffRow = 0;
        this.delay = 0;
        this.moving = false;
        this.moveList = [];
        this.previousDirection = (this.config === undefined || this.config.direction === undefined) ? game.config.directions.DOWN : this.config.direction;
        this.gotoAndStop({
            label: 0
        });
        game.GameObjectMC.prototype.reset.call(this, col, row);
        //console.log(this.debugView);
    };

    BasePlayer.prototype.move = function (direction) {
        if (this.direction === game.config.directions.NONE) {
            var nextCol = this.col,
                nextRow = this.row,
                moveConfig;
            if (direction === game.config.directions.LEFT) {
                nextCol = this.col - this.config.move.step;
            } else if (direction === game.config.directions.RIGHT) {
                nextCol = this.col + this.config.move.step;
            } else if (direction === game.config.directions.UP) {
                nextRow = this.row - this.config.move.step;
            } else if (direction === game.config.directions.DOWN) {
                nextRow = this.row + this.config.move.step;
            }
            this.direction = direction;
            this.moveList = [{
                col: nextCol,
                row: nextRow
            }];
            moveConfig = this.config.move;
            this.maxDelay = moveConfig.delay;
            this.moveDelay = this.maxDelay;
            this.moving = true;
            this.moveAnimation(moveConfig, direction);
            this.playSound(this.config.move.sound);
        }
        this.previousDirection = direction;
    };

    BasePlayer.prototype.moveAnimation = function (config, direction) {
        if (config) {
            this.gotoAndStop(config.anims[this.getDirectionString(direction)]);
        }
    };

    BasePlayer.prototype.bounce = function (direction) {
        if (this.direction === game.config.directions.NONE) {
            var nextCol = this.col,
                nextRow = this.row,
                bounceConfig;
            if (direction === game.config.directions.LEFT) {
                nextCol = this.col - this.config.bounce.step;
            } else if (direction === game.config.directions.RIGHT) {
                nextCol = this.col + this.config.bounce.step;
            } else if (direction === game.config.directions.UP) {
                nextRow = this.row - this.config.bounce.step;
            } else if (direction === game.config.directions.DOWN) {
                nextRow = this.row + this.config.bounce.step;
            }
            bounceConfig = this.config.bounce;

            if (!bounceConfig) {
                window.alert("missing BOUNCE CONFIG in " + this.constructor.name);
            }
            this.direction = direction;
            this.previousDirection = direction;
            this.moveList = [{
                col: nextCol,
                row: nextRow
            }, {
                col: this.col,
                row: this.row
            }];
            this.maxDelay = bounceConfig.delay;
            this.moveDelay = this.maxDelay;
            this.gotoAndStop(bounceConfig.anims[this.getDirectionString(direction)]);
            this.playSound(bounceConfig.sound);
        }
    };

    BasePlayer.prototype.warning = function () {
        //console.log("warning: ", this.config.warning.anims[this.getDirectionString(this.previousDirection)]);
        this.gotoAndStop(this.config.warning.anims[this.getDirectionString(this.previousDirection)]);
    };

    BasePlayer.prototype.update = function (dt) {
        var child,
            nextMove,
            animEndsTurn = false;
        game.GameObjectMC.prototype.update.call(this, dt);

        this.reachsTheTile = false;

        if (this.direction !== game.config.directions.NONE) {
            nextMove = this.moveList[0];
            this.moveDelay -= dt;
            this.moveDelay = Math.max(0, this.moveDelay);

            if (this.moveDelay === 0) {
                this.reachsTheTile = true;
                this.col = nextMove.col;
                this.row = nextMove.row;
                this.moveDelay = this.maxDelay;
                this.moveList.splice(0, 1);
                if (this.moveList.length === 0) {
                    this.direction = game.config.directions.NONE;
                    //this.overlapCheck.emit(this);
                    animEndsTurn = this.currentAnimConfig.endTurn;
                    if (!animEndsTurn && this.moving) { //Turn finished only when player moves
                        this.onTurnEnd();
                        //this.inTurn = false;
                    }
                    this.moving = false;
                } else {
                    nextMove = this.moveList[0];
                    if (nextMove.col > this.col) {
                        this.direction = game.config.directions.RIGHT;
                    } else if (nextMove.col < this.col) {
                        this.direction = game.config.directions.LEFT;
                    } else if (nextMove.row > this.row) {
                        this.direction = game.config.directions.DOWN;
                    } else if (nextMove.row < this.row) {
                        this.direction = game.config.directions.UP;
                    }
                }
            }

            this.diffCol = (nextMove.col - this.col) * (1 - this.moveDelay / this.maxDelay);
            this.diffRow = (nextMove.row - this.row) * (1 - this.moveDelay / this.maxDelay);
            this.col += this.diffCol;
            this.row += this.diffRow;
        }

        this.onAnimationFinished();
    };

    BasePlayer.prototype.hit = function (other, direction) {
        var hitConfig = this.config.attack;
        if (other.gid === game.config.DOOR) {
            this.bounce(direction);
            return;
        }
        if (hitConfig) {
            this.gotoAndStop(this.config.attack.anims[this.getDirectionString(direction)]);
            other.isStruck = true;
            this.playSound(hitConfig.sound);
        }
        this.previousDirection = direction;
        game.GameObjectMC.prototype.hit.call(this, other, direction);
    };

    BasePlayer.prototype.onTurnEnd = function () {
        this.moving = false;
        game.GameObjectMC.prototype.onTurnEnd.call(this);
        this.overlapCheck.emit(this);
    };

    BasePlayer.prototype.onTurnStart = function () {
        game.GameObjectMC.prototype.onTurnStart.call(this);
    };

    BasePlayer.prototype.tryToMove = function (direction) {
        this.moveCheck.emit(this, direction);
    };

    BasePlayer.prototype.onAnimationFinished = function () {
        if (this.animationFinished && (this.currentAnimConfig.label === this.currentAnimation) && !this.moving) {
            this.animationFinished = false;
            if (this.currentAnimConfig.endTurn) {
                this.onTurnEnd();
            }
            if (this.currentAnimConfig.playAtEnd) {
                this.gotoAndStop({
                    label: this.currentAnimConfig.playAtEnd.concat()
                });
            }
            if (this.currentAnimConfig.callAtEnd) {
                this[this.currentAnimConfig.callAtEnd]();
            }
        }
    };

    BasePlayer.prototype.onAssetSignal = function () {
        var args = arguments;
        game.GameObjectMC.prototype.onAssetSignal.call(this, args);
        if (args[0] === "animationFinished") {
            this.animationFinished = true;
        }
    };

    BasePlayer.prototype.die = function () {

        if (this.config.dead) {
            this.playSound(this.config.dead.sound);
            this.cameraShake = this.config.dead.shake;
            this.maskBits = game.config.collisionBits.NOTHING;
            this.collisionBits = game.config.collisionBits.NOTHING;
            this.gotoAndStop(this.config.dead);
        } else {
            game.GameObjectMC.prototype.die.call(this);
        }
    };

    BasePlayer.prototype.dispose = function () {
        game.GameObjectMC.prototype.dispose.call(this);
        this.moveCheck.clear();
        this.moveCheck = null;
        this.moveList.length = 0;
        this.moveList = null;
    };

    game.BasePlayer = BasePlayer;
}());

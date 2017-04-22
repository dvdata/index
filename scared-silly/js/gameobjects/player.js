/*global console, createjs, libassets, signaljs */
/*jslint bitwise: true */

var game = game || {};

(function () {
    'use strict';

    function Player(gid, col, row, asset, config, animationConfig, interactiveLayer) {
        game.BasePlayer.call(this, gid, col, row, asset, config, animationConfig);
        this.interactiveLayer = interactiveLayer;
    }
    Player.prototype = Object.create(game.BasePlayer.prototype);
    Player.prototype.constructor = Player;

    Player.prototype.reset = function (col, row) {
        this.inputPos = {
            x: 0,
            y: 0
        };
        this.locked = false;
        this.pressed = false;
        this.swiped = false;
        this.inputEnabled = true;
        this.reachExit = false;
        this.automoveDirection = game.config.directions.NONE;
        this.moveStep = game.config.directions.RIGHT;
        this.keys = {};
        this.keys[this.config.input.LEFT] = false;
        this.keys[this.config.input.RIGHT] = false;
        this.keys[this.config.input.UP] = false;
        this.keys[this.config.input.DOWN] = false;
        this.winLabel = "win";
        game.BasePlayer.prototype.reset.call(this, col, row);
    };

    Player.prototype.init = function () {
        game.BasePlayer.prototype.init.call(this);
        /*this.interactiveLayer.mousedown = this.onMouseDown.bind(this);
        this.interactiveLayer.mousemove = this.onMouseMove.bind(this);
        this.interactiveLayer.mouseup = this.onMouseUp.bind(this);
        this.interactiveLayer.mouseupoutside = this.onMouseUp.bind(this);*/
        this.interactiveLayer.touchstart = this.onMouseDown.bind(this);
        this.interactiveLayer.touchmove = this.onMouseMove.bind(this);
        this.interactiveLayer.touchend = this.onMouseUp.bind(this);
        this.interactiveLayer.touchendoutside = this.onMouseUp.bind(this);
        window.onkeydown = this.onKeyDown.bind(this);
        window.onkeyup = this.onKeyUp.bind(this);
    };

    Player.prototype.onTurnEnd = function () {
        this.inputEnabled = false;
        game.BasePlayer.prototype.onTurnEnd.call(this);
    };

    Player.prototype.onTurnStart = function () {
        this.inputEnabled = true;
        game.BasePlayer.prototype.onTurnStart.call(this);
    };

    Player.prototype.bounce = function (direction) {
        this.inputEnabled = true;
        game.BasePlayer.prototype.bounce.call(this, direction);
    };

    Player.prototype.move = function (direction) {
        if (this.direction === game.config.directions.NONE) {
            this.inputEnabled = false;
        }
        //this.gotoAndStop(this.config.move.anims[this.getDirectionString(direction)].label);
        game.BasePlayer.prototype.move.call(this, direction);
    };

    Player.prototype.moveAnimation = function (config, direction) {
        var steps = config.anims[this.getDirectionString(direction)].steps;
        //console.log(steps[this.getDirectionString(this.moveStep)]);
        this.gotoAndStop(steps[this.getDirectionString(this.moveStep)]);
        this.moveStep = (this.moveStep === game.config.directions.RIGHT) ? game.config.directions.LEFT : game.config.directions.RIGHT;
        //console.log(this.getDirectionString(this.moveStep));
    };

    Player.prototype.onKeyDown = function (e) {
        e.preventDefault();
        //console.log("keydown: ", this.keys[e.keyCode], this.inputEnabled);
        if (this.keys[e.keyCode] !== undefined) {
            this.keys[e.keyCode] = true;
        }
        if (!this.inputEnabled || this.locked || !this.inTurn) {
            return;
        }
        /*if (this.pressed === true) {
            return;
        }*/
        this.pressed = true;

    };

    Player.prototype.onKeyUp = function (e) {
        e.preventDefault();
        this.pressed = false;
        this.swiped = false;
        if (this.keys[e.keyCode] !== undefined) {
            this.keys[e.keyCode] = false;
        }
        //console.log("keyup: ", this.keys[e.keyCode]);
        this.automoveDirection = game.config.directions.NONE;
    };

    Player.prototype.onMouseDown = function (e) {
        console.log("mouse down", this.inputEnabled, this.locked, this.inTurn);
        if (this.inputEnabled === false || this.locked === true || !this.inTurn) {
            return;
        }
        if (!this.pressed) {
            this.pressed = true;
            this.inputPos.x = e.data.global.x;
            this.inputPos.y = e.data.global.y;
        }
    };

    Player.prototype.onMouseMove = function (e) {
        if (this.inputEnabled === false || this.locked === true || !this.inTurn) {
            return;
        }
        var diffX = e.data.global.x - this.inputPos.x,
            diffY = e.data.global.y - this.inputPos.y;
        if (this.automoveDirection === game.config.directions.NONE && this.pressed && !this.swiped) {
            if (diffX >= this.config.input.SWIPE_DISTANCE) {
                this.automoveDirection = game.config.directions.RIGHT;
            } else if (diffX <= -this.config.input.SWIPE_DISTANCE) {
                this.automoveDirection = game.config.directions.LEFT;
            } else if (diffY >= this.config.input.SWIPE_DISTANCE) {
                this.automoveDirection = game.config.directions.DOWN;
            } else if (diffY <= -this.config.input.SWIPE_DISTANCE) {
                this.automoveDirection = game.config.directions.UP;
            }
        }
    };

    Player.prototype.onMouseUp = function (e) {
        this.pressed = false;
        this.swiped = false;
        this.automoveDirection = game.config.directions.NONE;
        console.log("mouse up");
    };

    Player.prototype.tryToMove = function (direction) {
        if (this.inputEnabled && !this.locked && this.inTurn) {
            game.BasePlayer.prototype.tryToMove.call(this, direction);
        }
        this.swiped = true;
    };

    Player.prototype.overlap = function (other) {
        if (other.gid === game.config.EXIT_FINAL) {
            this.winLabel = "win_final";
            console.log(this.asset);
            other.gid = game.config.EXIT;
        }
        if (other.gid === game.config.EXIT) {
            console.log("Player overlaps EXIT");
            other.hp = 0;
            other.kill = true;
            this.reachExit = true;
        }
    };

    Player.prototype.lock = function () {
        this.locked = true;
    };

    Player.prototype.unlock = function () {
        this.locked = false;
    };

    Player.prototype.hit = function (other, direction) {
        this.inputEnabled = false;
        game.BasePlayer.prototype.hit.call(this, other, direction);
    };

    Player.prototype.die = function () {
        this.locked = true;
        game.BasePlayer.prototype.die.call(this);
    };

    Player.prototype.update = function (dt) {
        if (this.keys[this.config.input.LEFT]) {
            this.automoveDirection = game.config.directions.LEFT;
        }
        if (this.keys[this.config.input.DOWN]) {
            this.automoveDirection = game.config.directions.DOWN;
        }
        if (this.keys[this.config.input.RIGHT]) {
            this.automoveDirection = game.config.directions.RIGHT;
        }
        if (this.keys[this.config.input.UP]) {
            this.automoveDirection = game.config.directions.UP;
        }
        if (this.automoveDirection !== game.config.directions.NONE) {
            this.tryToMove(this.automoveDirection);
        }
        game.BasePlayer.prototype.update.call(this, dt);
    };

    Player.prototype.win = function () {
        this.lock();
        this.gotoAndStop({
            label: this.winLabel
        });
    };

    Player.prototype.dispose = function () {
        game.BasePlayer.prototype.dispose.call(this);
        /*this.interactiveLayer.mousedown = undefined;
        this.interactiveLayer.mousemove = undefined;
        this.interactiveLayer.mouseup = undefined;
        this.interactiveLayer.mouseupoutside = undefined;*/
        this.interactiveLayer.touchstart = null;
        this.interactiveLayer.touchmove = null;
        this.interactiveLayer.touchend = null;
        this.interactiveLayer.touchendoutside = null;
        this.interactiveLayer = null;
        window.onkeydown = null;
        window.onkeyup = null;
        this.inputPos = null;
        this.keys = null;
        this.winLabel = null;
    };

    game.Player = Player;
}());

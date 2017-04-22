/*global signaljs, console, PIXI, wonbats, WMath*/
var wonbats = wonbats || {};
var game = game || {};

(function () {
    'use strict';

    function Camera(x, y, width, height, roomWidth, roomHeight, container) {
        PIXI.Rectangle.call(this, x, y, width, height);
        this.container = container;
        this.roomWidth = roomWidth;
        this.roomHeight = roomHeight;
        this.fxShakeIntensity = 0.0;
        this.fxShakeDuration = 0.0;
        this.fxShakeOffset = {
            x: 0,
            y: 0
        };
        this.fxShakeDirection = 0;
        this.target = undefined;
        this.primaryTarget = undefined;
        this.finalSequenceCallback = [];
        this.sequence = [];
        this.targetInside = undefined;
        this.speed = 0;
        this.previousPos = {
            x: 0,
            y: 0
        };
        this.resetSpeed();
    }

    Camera.prototype = Object.create(PIXI.Rectangle.prototype);
    Camera.prototype.contructor = Camera;

    Camera.prototype.setTarget = function (target, instantLock) {
        this.target = target;
        this.primaryTarget = target;
        if (instantLock) {
            this.speed = 1;
            this.update(1);
            this.resetSpeed();
        }
    };

    Camera.prototype.makeSequence = function (sequence, finalCallback) {
        console.log("adding sequence");
        this.sequence.push(sequence);
        console.log("sequence ", this.sequence.length);
        if (finalCallback) {
            this.finalSequenceCallback.push(finalCallback);
        }
    };

    Camera.prototype.update = function (dt) {

        var distanceX = 0,
            distanceY = 0,
            newTarget,
            newSpeed,
            mainSeq,
            secondarySeq,
            inside,
            i = 0,
            j = 0;

        if (this.target) {
            distanceX = (this.target.asset.x - (this.x + (this.width / 2))); //.toFixed(3);
            distanceY = (this.target.asset.y - (this.y + (this.height / 2))); //.toFixed(3);
        }

        this.x += distanceX * this.speed;
        this.y += distanceY * this.speed;

        if ((this.fxShakeOffset.x !== 0) || (this.fxShakeOffset.y !== 0)) {
            this.x = this.x + this.fxShakeOffset.x;
            this.y = this.y + this.fxShakeOffset.y;
        }
        //---Old clamp code
        this.x = game.WMath.clamp(this.x, this.fxShakeOffset.x - (game.config.TILE_WIDTH / 2), this.roomWidth - this.width + this.fxShakeOffset.x - (game.config.TILE_WIDTH / 2));
        this.y = game.WMath.clamp(this.y, this.fxShakeOffset.y - (game.config.TILE_HEIGHT / 2), this.roomHeight - this.height + this.fxShakeOffset.y - (game.config.TILE_HEIGHT / 2));
        //---Old clamp code

        //---did this to avoid clamp unwanted effect
        /*this.x = game.WMath.clamp(this.x, this.fxShakeOffset.x - (this.width / 2), this.roomWidth + (this.width / 2) + this.fxShakeOffset.x);
        this.y = game.WMath.clamp(this.y, this.fxShakeOffset.y - (this.height / 2), this.roomHeight + (this.height / 2) + this.fxShakeOffset.y);*/
        //---did this to avoid clamp unwanted effect

        this.container.x = -this.x;
        this.container.y = -this.y;

        if (this.fxShakeDuration > 0) {
            this.fxShakeDuration -= dt;
            if (this.fxShakeDuration <= 0) {
                this.fxShakeOffset.x = 0;
                this.fxShakeOffset.y = 0;
            } else {
                if ((this.fxShakeDirection === game.config.camera.SHAKE_BOTH_AXES) || (this.fxShakeDirection === game.config.camera.SHAKE_HORIZONTAL_ONLY)) {
                    this.fxShakeOffset.x = (Math.random() * this.fxShakeIntensity * this.width * 2 - this.fxShakeIntensity * this.width);
                }
                if ((this.fxShakeDirection === game.config.camera.SHAKE_BOTH_AXES) || (this.fxShakeDirection === game.config.camera.SHAKE_VERTICAL_ONLY)) {
                    this.fxShakeOffset.y = (Math.random() * this.fxShakeIntensity * this.height * 2 - this.fxShakeIntensity * this.height);
                }
            }
        }

        if (this.sequence.length > 0) {
            mainSeq = this.sequence[0];
            secondarySeq = mainSeq[0];
            if (mainSeq.length > 0) {
                if (secondarySeq.wait) {
                    if (secondarySeq.wait > 0) {
                        secondarySeq.wait -= dt;
                    } else {
                        mainSeq.splice(0, 1);
                    }
                } else if (secondarySeq.target) {
                    newTarget = secondarySeq.target;
                    newSpeed = secondarySeq.speed;
                    distanceX = this.x - this.previousPos.x;
                    distanceY = this.y - this.previousPos.y;
                    if (this.targetInside === undefined) {
                        this.targetInside = false; //this.isInside(newTarget);
                    }
                    if ((Math.abs(distanceX) <= 3 && Math.abs(distanceY) <= 3) && (this.targetInside === true || (this.target.isInsideCamera && newTarget === this.target))) {
                        //console.log("reached target");
                        this.targetInside = undefined;
                        mainSeq.splice(0, 1);
                    }
                    if (this.targetInside === false && newTarget !== this.target) {
                        this.target = newTarget;
                    }
                    if (newSpeed && newSpeed !== this.speed) {
                        this.speed = newSpeed;
                    }
                } else if (secondarySeq.callback) {
                    for (i = 0; i < secondarySeq.callback.length; i += 1) {
                        console.log(secondarySeq.callback[i]());
                    }
                    mainSeq.splice(0, 1);
                }
            } else {
                this.sequence.splice(0, 1);
                //console.log("sequences left: ", this.sequence.length);
                if (this.sequence.length === 0) {
                    if (!this.primaryTarget.isInsideCamera) {
                        //console.log("final sequence, make sequence");
                        this.sequence.push([{
                            target: this.primaryTarget,
                            speed: 0.1
                        }]);
                    } else {
                        //console.log("final sequence, no sequence");
                        this.resetSpeed();
                        this.target = this.primaryTarget;
                        for (j = this.finalSequenceCallback.length - 1; j > -1; j -= 1) {
                            this.finalSequenceCallback[j]();
                            this.finalSequenceCallback.splice(j, 1);
                        }
                    }
                }
            }
        }
        this.previousPos.x = this.x;
        this.previousPos.y = this.y;
    };

    Camera.prototype.shake = function (intensity, duration, force, direction) {
        if (!intensity) {
            intensity = 0.05;
        }
        if (!duration) {
            duration = 0.5;
        }
        if (!force) {
            force = true;
        }
        if (!direction) {
            direction = game.config.camera.SHAKE_BOTH_AXES;
        }
        if (!force && ((this.fxShakeOffset.x !== 0) || (this.fxShakeOffset.y !== 0))) {
            return;
        }
        this.fxShakeIntensity = intensity;
        this.fxShakeDuration = duration;
        this.fxShakeDirection = direction;
        this.fxShakeOffset.x = 0;
        this.fxShakeOffset.y = 0;
    };

    Camera.prototype.isInside = function (view) {

        var viewX,
            viewY,
            camX = this.x + (this.width / 2),
            camY = this.y + (this.height / 2),
            distance;
        if (view.anchor) {
            viewX = view.x - (view.anchor.x * view.width) + (view.width / 2);
            viewY = view.y - (view.anchor.y * view.height) + (view.height / 2);
        } else {
            viewX = view.x;
            viewY = view.y;
        }
        distance = Math.sqrt(Math.pow((viewX - camX), 2) + Math.pow((viewY - camY), 2));
        return distance < game.config.camera.DRAW_DISTANCE;
    };

    Camera.prototype.resetSpeed = function () {
        this.speed = JSON.parse(JSON.stringify(game.config.camera.SPEED));
    };

    Camera.prototype.dispose = function () {
        this.container = null;
        this.fxShakeOffset = null;
        this.target = null;
        this.primaryTarget = null;
        this.finalSequenceCallback.length = 0;
        this.finalSequenceCallback = null;
        this.sequence.length = 0;
        this.sequence = null;
    };

    wonbats.Camera = Camera;
}());

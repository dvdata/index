/*global createjs, console*/
var wonbats = wonbats || {};
var game = game || {};

(function () {
    'use strict';

    function SoundManager() {
        this.sounds = {};
    }

    SoundManager.prototype.load = function () {
        if (!createjs.Sound.initializeDefaultPlugins()) {
            console.log("this browser doesn't support sound");
            return;
        }
        createjs.Sound.muted = JSON.parse(localStorage.getItem("mute"));
        console.log("createjs.Sound.muted: " + createjs.Sound.muted);
    };

    SoundManager.prototype.play = function (id, volume) {
        var i,
            instance,
            config = game.config.sound.manifest;
        if (this.sounds[id] === undefined || this.sounds[id] === null) {
            console.log(id + " sound not pooled");
            instance = createjs.Sound.play(id);
            console.log(id + ": " + instance.playState);
            if (instance === null || instance === undefined || instance.playState === createjs.Sound.PLAY_FAILED) {
                console.log("resource " + id + " doesn't exist");
            } else {
                this.sounds[id] = instance;
            }
        }

        if (this.sounds[id] !== undefined && this.sounds[id] !== null) {
            this.sounds[id].play();
            for (i = 0; i < config.length; i += 1) {
                if (config[i].id === id) {
                    this.sounds[id].volume = config[i].volume;
                    if (volume !== undefined) {
                        this.sounds[id].volume = volume;
                    }
                    this.sounds[id].loop = config[i].loop;
                    break;
                }
            }
        }
    };

    SoundManager.prototype.playSfx = function (id, volume) {
        if (this.sounds[id] !== undefined && this.sounds[id] !== null) {
            this.sounds[id].stop();
        }
        this.play(id, volume);
    };

    SoundManager.prototype.restoreVolume = function (id, duration) {
        var i,
            config = game.config.sound.manifest;
        if (this.sounds[id] !== undefined && this.sounds[id] !== null) {
            for (i = 0; i < config.length; i += 1) {
                if (config[i].id === id) {
                    if (duration) {
                        createjs.Tween.get(this.sounds[id]).to({
                            volume: config[i].volume
                        }, duration);
                    } else {
                        this.sounds[id].volume = config[i].volume;
                    }
                    break;
                }
            }
        }
    };

    SoundManager.prototype.getSound = function (id) {
        return this.sounds[id];
    };

    SoundManager.prototype.mute = function () {
        createjs.Sound.muted = true;
    };

    SoundManager.prototype.unMute = function () {
        createjs.Sound.muted = false;
    };

    SoundManager.prototype.switchMute = function () {
        if (createjs.Sound.muted) {
            this.unMute();
        } else {
            this.mute();
        }
        localStorage.setItem("mute", JSON.stringify(createjs.Sound.muted));
    };

    SoundManager.prototype.isMuted = function () {
        return createjs.Sound.muted;
    };

    SoundManager.prototype.stop = function (id) {
        if (this.sounds[id] !== undefined && this.sounds[id] !== null) {
            this.sounds[id].stop();
        }
    };

    SoundManager.prototype.stopAll = function () {
        var id;
        for (id in this.sounds) {
            if (this.sounds[id] !== undefined && this.sounds[id] !== null) {
                this.sounds[id].stop();
            }
        }
    };
    wonbats.SoundManager = SoundManager;
}());

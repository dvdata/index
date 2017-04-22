/*global screenflow, console, pixiflash_lib, signaljs, createjs*/
var game = game || {};
var images = images || {};
var ss = ss || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function LevelSelection() {
        screenflow.Screen.call(this);
    }

    LevelSelection.prototype = Object.create(screenflow.Screen.prototype);
    LevelSelection.prototype.constructor = LevelSelection;

    LevelSelection.prototype.enter = function (name) {
        screenflow.Screen.prototype.enter.call(this, name);

        var i;

        this.toScreen = "";
        this.view = new pixiflash_lib.LevelSelection();
        //        this.view.framerate = game.config.FPS;
        this.asset.addChild(this.view);
        this.selectedLevel = undefined;
        this.nextLevelData = undefined;
        this.levelsPerBlock = 13;
        this.levelsButtons = [];
        this.page = 1;
        this.totalPages = 1;
        this.keys = {
            38: false, //UP
            40: false, //DOWN
            37: false, //LEFT
            39: false //RIGHT
        };

        this.view.signal = new signaljs.Signal();
        this.view.signal.add(this.onSignal.bind(this));

        this.addButton("soundOn", this.view.soundBtn.soundOn);
        this.addButton("soundOff", this.view.soundBtn.soundOff);
        this.addButton("sound", this.view.soundBtn, this.onSound.bind(this));
        this.addButton("fullscreen", this.view.fullscreenBtn, this.onFullscreen.bind(this));
        this.addButton("home", this.view.homeBtn, this.onReturnToHome.bind(this));
        this.enableKeyboard(true);
        this.updateSoundButton();
        this.setLevels();
        game.soundManager.restoreVolume("music_ingame_1", 2000);
        createjs.Tween.get(game.soundManager.getSound("music_ingame_2")).to({
            volume: 0
        }, 2000);
        game.soundManager.playSfx("intro");
    };

    LevelSelection.prototype.onKeyDown = function (e) {
        var keys = [38, 40, 37, 39],
            index,
            otherKeyPressed = false;
        if (e.keyCode === 13) { //ENTER
            console.log("enter");
            this.levelsButtons[this.selectedLevel - 1].mousedown.call(this.levelsButtons[this.selectedLevel - 1]);
            return;
        }
        for (index = 0; index < keys.length; index += 1) {
            if (this.keys[keys[index]]) {
                otherKeyPressed = true;
            }
        }
        if (!this.keys[e.keyCode] && !otherKeyPressed) {
            this.keys[e.keyCode] = true;
            if (e.keyCode === 40 || e.keyCode === 37) {
                this.selectedLevel -= 1;
            } else if (e.keyCode === 38 || e.keyCode === 39) {
                this.selectedLevel += 1;
            }
            this.selectedLevel = game.WMath.clamp(this.selectedLevel, 1, JSON.parse(localStorage.getItem("levels")).length);
        }
    };

    LevelSelection.prototype.onKeyUp = function (e) {
        if (this.keys[e.keyCode]) {
            this.keys[e.keyCode] = false;
        }
    };

    LevelSelection.prototype.onReturnToHome = function (e) {
        this.toScreen = "mainmenu";
        createjs.Tween.removeAllTweens();
        this.enableInput(false);
        this.view.gotoAndPlay("out");
    };

    LevelSelection.prototype.onFullscreen = function (e) {
        game.toggleFullScreen();
    };

    LevelSelection.prototype.onSound = function (e) {
        game.soundManager.switchMute();
        this.updateSoundButton();
    };

    LevelSelection.prototype.updateSoundButton = function () {
        if (game.soundManager.isMuted()) {
            this.view.soundBtn.soundOff.visible = true;
            this.view.soundBtn.soundOn.visible = false;
        } else {
            this.view.soundBtn.soundOff.visible = false;
            this.view.soundBtn.soundOn.visible = true;
        }
    };

    LevelSelection.prototype.setLevels = function () {
        var i,
            s,
            levelFile,
            buttonAsset,
            index,
            savedLevels = JSON.parse(localStorage.getItem("levels"));
        for (i = 0; i < this.levelsPerBlock - 1; i += 1) {
            index = (this.levelsPerBlock * (this.page - 1)) + i;
            levelFile = game.config.levels.manifest[index];
            buttonAsset = this.view["level" + (i + 1)];

            if (levelFile) {
                if (savedLevels !== undefined && savedLevels[index] !== undefined) {
                    //console.log(savedLevels[index]);
                    this.levelsButtons.push(this.addButton("level" + (i + 1), buttonAsset,
                        this.onLevelSelect.bind(this, {
                            levelIndex: index,
                            levelFile: levelFile
                        })));
                    if (savedLevels[index] === 1) { //this means animation must be executed
                        this.enableInput(false);
                        buttonAsset.scaleX = buttonAsset.scaleY = 1.5;
                        buttonAsset.alpha = 0;
                        createjs.Tween.get(buttonAsset)
                            .wait(1300)
                            .to({
                                alpha: 1
                            }, 300)
                            .to({
                                scaleX: 1,
                                scaleY: 1
                            }, 300, createjs.Ease.sineIn)
                            .call(this.levelUnlockFinished.bind(this, index));
                    }
                    this.selectedLevel = i + 1;
                } else {
                    buttonAsset.visible = false;
                }
            }
        }
    };

    LevelSelection.prototype.levelUnlockFinished = function (index) {
        this.enableInput(true);
        var savedLevels = JSON.parse(localStorage.getItem("levels"));
        savedLevels[index] = 0;
        localStorage.setItem("levels", JSON.stringify(savedLevels));
        game.soundManager.playSfx("cinematic_pop");
    };

    LevelSelection.prototype.onSignal = function (type) {
        if (type === "exit") {
            if (this.toScreen === "level") {
                this.transitionSignal.emit(this.name, this.toScreen, this.nextLevelData.levelIndex, this.nextLevelData.levelFile);
            } else if (this.toScreen === "mainmenu") {
                this.transitionSignal.emit(this.name, this.toScreen);
            }
        }
    };

    LevelSelection.prototype.onLevelSelect = function (data) {
        this.toScreen = "level";
        createjs.Tween.removeAllTweens();
        this.enableInput(false);
        this.view.gotoAndPlay("out");
        this.nextLevelData = data;
    };

    LevelSelection.prototype.update = function (dt) {
        var i;
        if (this.selectedLevel && this.view["level" + this.selectedLevel] && this.view["level" + this.selectedLevel].postit && this.view["level" + this.selectedLevel].postit.currentLabel !== "on") {
            //console.log("current label: ", this.view["level" + this.selectedLevel].postit.currentLabel);
            this.view["level" + this.selectedLevel].postit.gotoAndStop("on");
        } else {
            for (i = 1; i < this.levelsPerBlock; i += 1) {
                if (this.selectedLevel !== i) {
                    this.view["level" + i].postit.gotoAndStop("off");
                }
            }
        }
    };

    LevelSelection.prototype.exit = function (name) {
        this.view.signal.clear();
        this.view.signal = null;
        this.nextLevelData = null;
        this.levelsButtons.length = 0;
        this.levelsButtons = null;
        this.keys = null;
        this.selectedLevel = null;
        screenflow.Screen.prototype.exit.call(this, name);
    };

    game.screens.LevelSelection = LevelSelection;
}());

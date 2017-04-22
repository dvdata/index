/*global screenflow, signaljs, pixiflash_lib, PIXI*/
var game = game || {};
var images = images || {};
var ss = ss || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function MainMenu() {
        screenflow.Screen.call(this);
    }

    MainMenu.prototype = Object.create(screenflow.Screen.prototype);
    MainMenu.prototype.constructor = MainMenu;

    MainMenu.prototype.enter = function (name) {
        screenflow.Screen.prototype.enter.call(this, name);
        this.exitType = "";
        this.view = new pixiflash_lib.MainMenu();
        this.view.signal = new signaljs.Signal();
        this.view.signal.add(this.onSignal.bind(this));
        this.asset.addChild(this.view);


        if (!game.soundManager.getSound("music_ingame_1")) {
            game.soundManager.stopAll();
            game.soundManager.play("music_ingame_1");
            game.soundManager.getSound("music_ingame_1").volume = 0;
        }
        if (!game.soundManager.getSound("music_ingame_2")) {
            game.soundManager.play("music_ingame_2");
        }
        game.soundManager.getSound("music_ingame_2").volume = 0;
        game.soundManager.restoreVolume("music_ingame_1", 1000);

        game.soundManager.playSfx("intro");

        this.versionText = new PIXI.Text("v." + game.config.version, {
            font: "normal 8px Consolas",
            align: "left",
            fill: '#C96D14'
        });
        this.versionText.x = 0;
        this.versionText.y = 450 - this.versionText.height;
        this.view.addChild(this.versionText);

        this.updateSoundButton();
    };

    MainMenu.prototype.update = function () {
        if (this.view.title.currentLabel !== game.config.language) {
            this.view.title.gotoAndStop(game.config.language);
        }
    };

    MainMenu.prototype.onSignal = function (type) {
        if (type === "ready") {
            //this.view.title.gotoAndStop(game.config.language);
            this.addButton("play", this.view.playBtn, this.onPlay.bind(this));
            this.addButton("soundOn", this.view.soundBtn.soundOn);
            this.addButton("soundOff", this.view.soundBtn.soundOff);
            this.addButton("sound", this.view.soundBtn, this.onSound.bind(this));
            this.addButton("credits", this.view.creditsBtn, this.onCredits.bind(this));
            this.addButton("fullscreen", this.view.fullscreenBtn, this.onFullscreen.bind(this));
            this.enableKeyboard(true);
        } else if (type === "exit") {
            this.transitionSignal.emit(this.name, this.exitType);
        }
    };

    MainMenu.prototype.onKeyDown = function (e) {
        if (e.keyCode === 13) {
            this.buttons.play.mousedown.call(this.buttons.play);
        }
    };

    MainMenu.prototype.onCredits = function (e) {
        this.exitType = "credits";
        this.view.gotoAndPlay("out");
        this.enableInput(false);
    };

    MainMenu.prototype.onFullscreen = function (e) {
        game.toggleFullScreen();
    };

    MainMenu.prototype.onSound = function (e) {
        game.soundManager.switchMute();
        this.updateSoundButton();
    };

    MainMenu.prototype.updateSoundButton = function () {
        if (game.soundManager.isMuted()) {
            this.view.soundBtn.soundOff.visible = true;
            this.view.soundBtn.soundOn.visible = false;
        } else {
            this.view.soundBtn.soundOff.visible = false;
            this.view.soundBtn.soundOn.visible = true;
        }
    };

    MainMenu.prototype.onPlay = function (e) {
        this.exitType = "exit";
        this.view.gotoAndPlay("out");
        this.enableInput(false);
    };

    MainMenu.prototype.exit = function (name) {
        this.view.signal.clear();
        this.view.signal = undefined;
        screenflow.Screen.prototype.exit.call(this, name);
    };

    game.screens.MainMenu = MainMenu;
}());

/*global screenflow, PIXI, pixiflash, console, $, pixiflash_lib, createjs, signaljs*/
var game = game || {};
var images = images || {};
var ss = ss || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Preloader() {
        screenflow.Screen.call(this);
    }

    Preloader.prototype = Object.create(screenflow.Screen.prototype);
    Preloader.prototype.constructor = Preloader;

    Preloader.prototype.enter = function (name) {
        screenflow.Screen.prototype.enter.call(this, name);

        var i,
            file,
            path = game.config.loadingspritesheets.path;

        this.totalFiles = 0;
        this.loadedFiles = 0;
        this.subLoadCounter = [0, 0];
        this.loader = PIXI.loader;
        this.totalFiles += 2; //preload spritesheet + tp spritesheets
        this.totalFiles += game.config.spritesheets.manifest.length;
        this.totalFiles += game.config.sound.manifest.length;
        this.totalFiles += game.config.levels.manifest.length;
        for (i = 0; i < game.config.loadingspritesheets.manifest.length; i += 1) {
            file = game.config.loadingspritesheets.manifest[i];
            this.loadJSON(game.config.loadingspritesheets.path + file.src, this.onSpriteSheetLoadImage.bind(this, path, this.onPreloadComplete.bind(this)));

        }
    };

    Preloader.prototype.allAtlasLoaded = function (data) {
        console.log("all tp atlas loaded");
        this.loadedFiles += 1;
        this.loader.off("complete", this.allAtlasLoaded, this);
        this.loadSecondaryAtlasses();
    };

    Preloader.prototype.loadJSON = function loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.responseText) {
                success(JSON.parse(xhr.responseText));
            } else {
                if (error) {
                    error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    };

    Preloader.prototype.onSpriteSheetLoadImage = function (path, callback, data) {
        var i;
        for (i = 0; i < data.images.length; i += 1) {
            data.images[i] = data.images[i].substring(data.images[i].lastIndexOf("/") + 1, data.images[i].length);
            data.images[i] = path + data.images[i];
        }
        pixiflash.SpriteSheet.fromData(data, callback);
    };

    Preloader.prototype.onPreloadComplete = function () {
        this.view = new pixiflash_lib.Loading();
        this.view.signal = new signaljs.Signal();
        this.view.signal.add(this.onSignal.bind(this));
        this.asset.addChild(this.view);

        this.loadedFiles += 1;
        this.loader.add("tp/all-0.json");
        this.loader.add("tp/players-0.json");
        this.loader.add("tp/players-1.json");
        this.loader.add("tp/players-2.json");
        this.loader.on("complete", this.allAtlasLoaded, this);
        this.loader.load();
    };

    Preloader.prototype.loadSecondaryAtlasses = function () {
        var i,
            file,
            path = game.config.spritesheets.path;

        this.subLoadCounter = [0, game.config.spritesheets.manifest.length];
        for (i = 0; i < game.config.spritesheets.manifest.length; i += 1) {
            file = game.config.spritesheets.manifest[i];
            this.loadJSON(game.config.spritesheets.path + file.src, this.onSpriteSheetLoadImage.bind(this, path, this.onSpritesheetLoadComplete.bind(this)));
        }
    };

    Preloader.prototype.onSpritesheetLoadComplete = function (data) {
        var i,
            file,
            path = game.config.sound.path;
        this.loadedFiles += 1;
        this.subLoadCounter[0] += 1;
        console.log(this.subLoadCounter);
        if (this.subLoadCounter[0] === this.subLoadCounter[1]) {
            this.subLoadCounter = [0, game.config.sound.manifest.length];
            createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
            createjs.Sound.alternateExtensions = ["ogg"];
            createjs.Sound.on("fileload", this.soundLoaded, this);
            createjs.Sound.registerSounds(game.config.sound); //Register all audio*/
        }
    };

    Preloader.prototype.soundLoaded = function (data) {
        console.log("loaded sound: " + data.id);
        this.loadedFiles += 1;
        this.subLoadCounter[0] += 1;
        if (this.subLoadCounter[0] === this.subLoadCounter[1]) {
            createjs.Sound.removeAllEventListeners("fileload");
            console.log("all sounds loaded");
            var i,
                path = game.config.levels.path,
                file;
            for (i = 0; i < game.config.levels.manifest.length; i += 1) {
                file = game.config.levels.manifest[i];
                this.loader.add(file, path + file + ".json").on("complete", this.levelLoaded.bind(this));
            }
            this.loader.load();
            this.subLoadCounter.lenth = 0;
        }
    };

    Preloader.prototype.levelLoaded = function () {
        this.loadedFiles += 1;
    };

    Preloader.prototype.onSignal = function (message, data) {
        //console.log(message);
        if (message === "canExit" && (this.loadedFiles === this.totalFiles)) {
            this.view.gotoAndPlay("complete");
            game.soundManager.load();
        } else if (message === "exit") {
            this.transitionSignal.emit(this.name, "exit");
        } else if (message === "sound") {
            game.soundManager.playSfx(data);
        }
    };

    Preloader.prototype.update = function (dt) {
        if (game.config && (this.view && (this.view.loading.currentLabel !== game.config.language))) {
            this.view.loading.gotoAndStop(game.config.language);
        }
        //console.log(this.loadedFiles + " / " + this.totalFiles);
    };

    Preloader.prototype.exit = function (name) {
        this.subLoadCounter.length = 0;
        this.loader = null;
        this.view.signal.clear();
        this.view.signal = null;
        screenflow.Screen.prototype.exit.call(this, name);
    };

    game.screens.Preloader = Preloader;
}());

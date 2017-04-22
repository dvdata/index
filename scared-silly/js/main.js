/*global PIXI, createjs, console, requestAnimationFrame, FPSMeter, screenflow, wonbats, Element*/

var game = game || {};
// Safari, in Private Browsing Mode, looks like it supports localStorage but all calls to setItem
// throw QuotaExceededError. We're going to detect this and just silently drop any calls to setItem
// to avoid the entire page breaking, without having to do a check at each usage of Storage.
if (typeof localStorage === 'object') {
    try {
        localStorage.setItem('localStorage', 1);
        localStorage.removeItem('localStorage');
    } catch (e) {
        Storage.prototype.dict = {};
        Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function (k, v) {
            this.dict[k] = v;
        };
        Storage.prototype.getItem = function (k) {
            return this.dict[k];
        };
        console.log('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
    }
}
(function () {
    'use strict';

    function Main() {

        this.last = Date.now();
        this.slow = 1; // slow motion scaling factor
        this.fps = game.config.FPS;
        this.step = 1 / this.fps;

        var rendererOptions = {
            antialiasing: true,
            transparent: false,
            resolution: window.devicePixelRatio,
            autoResize: true,
            view: document.getElementById("gamecanvas"),
            backgroundColor: 0x000000
        };

        PIXI.ticker.shared.autoStart = false;
        PIXI.ticker.shared.stop();
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(this.fps);
        createjs.Ticker.addEventListener("tick", this.frame.bind(this));

        this.GAME_WIDTH = 800;
        this.GAME_HEIGHT = 450;
        // create a renderer instance.
        this.renderer = PIXI.autoDetectRenderer(this.GAME_WIDTH, this.GAME_HEIGHT, rendererOptions);
        PIXI.ticker.shared.stop();

        var canvas = this.renderer.view;

        setInterval(function () {
            window.focus();
        }, 1000);

        // The stage is essentially a display list of all game objects
        // for Pixi to render; it's used in resize(), so it must exist
        this.stage = new PIXI.Container();

        // Size the renderer to fill the screen
        if (game.config.debug.resize) {
            this.resize();
        }
        // add the renderer view element to the DOM
        document.body.appendChild(this.renderer.view);

        // Listen for and adapt to changes to the screen size, e.g.,
        // user changing the window or rotating their device
        if (game.config.debug.resize) {
            window.addEventListener("resize", this.resize.bind(this));
        }

        if (game.config.FPS_METER) {
            this.meter = new FPSMeter();
        }

        //------------------SAVE CONFIGURATION---------------------------------
        if (localStorage.getItem("levels") === null || localStorage.getItem("levels") === undefined) {
            localStorage.setItem("levels", JSON.stringify([0]));
            console.log("creating save for levels: " + localStorage.levels);
        }

        if (localStorage.getItem("mute") === null || localStorage.getItem("mute") === undefined) {
            localStorage.setItem("mute", JSON.stringify(false));
            if (game.config.cheats !== undefined) {
                if (game.config.cheats.mute) {
                    localStorage.setItem("mute", JSON.stringify(game.config.cheats.mute));
                }
            }
            console.log("creating save for mute: " + localStorage.mute);
        }
        game.soundManager = new wonbats.SoundManager();
        game.WMath = new wonbats.WMath();
        game.WObjects = new wonbats.WObjects();
        this.unlockAllLevels();

        this.screenFlow = new screenflow.Manager(game.config.screens, this.stage, this.GAME_WIDTH, this.GAME_HEIGHT);
        this.screenFlow.start("preloader");
    }

    Main.prototype.unlockAllLevels = function () { //CHEAT
        var unlock = false,
            levels,
            diff,
            i;
        if (game.config.cheats !== undefined) {
            unlock = game.config.cheats.unlockAllLevels;
            if (unlock) {
                levels = JSON.parse(localStorage.getItem("levels"));
                diff = game.config.levels.manifest.length - levels.length;
                if (levels.length < game.config.levels.manifest.length) {
                    for (i = 0; i < diff; i += 1) {
                        levels.push(0);
                    }
                    localStorage.setItem("levels", JSON.stringify(levels));
                    console.log("unlockAllLevels cheat activated!!!");
                    console.log("unlocked " + diff + " new levels!!!");
                }
            }
        }
    };

    Main.prototype.frame = function (event) {
        this.fixedUpdate(this.step * this.slow);
        PIXI.ticker.shared.update((this.step * this.slow) * 1000);
        this.update(this.step * this.slow);
    };

    Main.prototype.fixedUpdate = function (fdt) {
        this.screenFlow.update(fdt);
    };

    Main.prototype.update = function (dt) {
        if (game.config.FPS_METER) {
            this.meter.tickStart();
        }

        this.renderer.render(this.stage);

        if (game.config.FPS_METER) {
            this.meter.tick();
        }
    };

    Main.prototype.resize = function () {
        // Determine which screen dimension is most constrained
        var ratio = Math.min(window.innerWidth / this.GAME_WIDTH,
            window.innerHeight / this.GAME_HEIGHT);

        // Scale the view appropriately to fill that dimension
        this.stage.scale.x = this.stage.scale.y = ratio;

        // Update the renderer dimensions
        this.renderer.resize(Math.ceil(this.GAME_WIDTH * ratio),
            Math.ceil(this.GAME_HEIGHT * ratio));
        //console.log("resize");
    };

    game.Main = Main;

    function toggleFullScreen() {
        if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    game.toggleFullScreen = toggleFullScreen;
}());

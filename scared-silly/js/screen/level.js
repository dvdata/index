/*global screenflow, console, PIXI, createjs, wonbats, pixiflash_lib, signaljs */
/*jslint bitwise: true */
var game = game || {};
var images = images || {};
var ss = ss || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Level() {
        screenflow.Screen.call(this);
    }

    Level.prototype = Object.create(screenflow.Screen.prototype);
    Level.prototype.constructor = Level;

    Level.prototype.enter = function (name, levelIndex, levelDataId, reset) {
        screenflow.Screen.prototype.enter.call(this, name);
        var i,
            rect,
            player,
            child,
            BackgroundClass;

        this.levelIndex = levelIndex;
        this.levelDataId = levelDataId;
        this.levelData = PIXI.loader.resources[levelDataId].data;
        this.isLastLevel = levelIndex === (game.config.levels.manifest.length - 1);
        this.gameobjectFactory = new wonbats.GameObjectFactory();

        this.gameObjectContainer = new PIXI.Container();
        this.envContainter = new PIXI.ParticleContainer();
        this.gameContainer = new PIXI.Container();

        if (this.levelData.properties && this.levelData.properties.inside) {
            this.backgroundContainer = new PIXI.extras.TilingSprite(PIXI.Texture.fromFrame("Background_Tile_Inside.png"), (this.levelData.width * this.levelData.tilewidth) + 128, (this.levelData.height * this.levelData.tileheight) + 128);
        } else {
            this.backgroundContainer = new PIXI.extras.TilingSprite(PIXI.Texture.fromFrame("Background_Tile_Outside.png"), (this.levelData.width * this.levelData.tilewidth) + 128, (this.levelData.height * this.levelData.tileheight) + 128);
        }

        this.asset.addChild(this.gameContainer);
        // OVERLAY
        this.overlay = new PIXI.Sprite(PIXI.Texture.fromFrame("Overlay.png"));
        this.overlay.anchor.x = this.overlay.anchor.y = 0.5;
        this.overlay.x = 400;
        this.overlay.y = 225;
        this.overlay.scale.x = this.overlay.scale.y = 1.1;
        this.asset.addChild(this.overlay);

        this.thunder = new game.Lightning(800, 450, "0x25FFC9");
        this.thunder.signal.add(this.onLightningOutSignal.bind(this));
        this.asset.addChild(this.thunder);
        this.thunder.start(500, 1000);

        if (this.backgroundContainer) {
            this.gameContainer.addChild(this.backgroundContainer);
            this.backgroundContainer.x = -64;
            this.backgroundContainer.y = -64;
        }
        this.gameContainer.addChild(this.gameObjectContainer);
        this.gameContainer.addChild(this.envContainter);

        this.createEmitters();

        //Interaction Layer
        this.interactionLayer = new PIXI.Graphics();
        this.interactionLayer.beginFill(0xff0000, 0);
        this.interactionLayer.drawRect(0, 0, 800, 480);
        this.interactionLayer.endFill();
        this.interactionLayer.cacheAsBitmap = true;
        this.interactionLayer.interactive = true;
        this.gameContainer.addChild(this.interactionLayer);
        //----------------
        this.board = new wonbats.Board(this.gameobjectFactory, this.gameObjectContainer);
        if (game.config.debug.pathfinding) {
            this.gameContainer.addChild(this.board.debugView); //ADDING DEBUG VIEW
        }
        this.parseLevel(this.levelData);
        this.parseDecorations(this.levelData.layers[this.levelData.layers.length - 1], this.levelData.tilesets[1], this.gameObjectContainer);

        this.camera = new wonbats.Camera(0, 0, 800, 480, this.levelData.width * this.levelData.tilewidth, this.levelData.height * this.levelData.tileheight, this.gameContainer);
        player = this.board.player = this.board.gameobjectFactory.getGameObjects(game.Player)[0];
        player.lock();
        this.camera.setTarget(player, true);

        /*this.jeffOverlay = new pixiflash_lib.OverlayJeff();
        this.jeffOverlay.x = -100;
        this.jeffOverlay.y = -190;
        this.jeffOverlay.alpha = 0.25;
        player.asset.addChild(this.jeffOverlay);*/
        //----------------
        this.hudContainer = new pixiflash_lib.HUD();
        this.asset.addChild(this.hudContainer);
        this.addButton("fullscreen", this.hudContainer.fullscreenBtn, this.onFullscreen.bind(this));
        this.addButton("exit", this.hudContainer.exitBtn, this.onExit.bind(this));
        this.hudContainer.gotoAndStop(0);
        this.initialPos = {
            jeff: {
                col: player.col,
                row: player.row
            },
            camera: {
                x: this.camera.x,
                y: this.camera.y
            }
        };


        this.tasks = [];
        if (reset) {
            game.soundManager.stop("music_ingame_1");
            game.soundManager.stop("music_ingame_2");
            game.soundManager.play("music_ingame_1");
            game.soundManager.getSound("music_ingame_1").volume = 0;
            game.soundManager.play("music_ingame_2");
            game.soundManager.getSound("music_ingame_2").volume = 0;
            game.soundManager.restoreVolume("music_ingame_1", 700);
            game.soundManager.restoreVolume("music_ingame_2", 700);

        } else {
            game.soundManager.restoreVolume("music_ingame_1", 2000);
            game.soundManager.restoreVolume("music_ingame_2", 2000);
            this.board.player.asset.alpha = 0;
            createjs.Tween.get(this.board.player.asset)
                .to({
                    alpha: 1
                }, 1000, createjs.Ease.sineIn);
        }
        if (this.backgroundContainer) {
            this.backgroundContainer.alpha = 0;
            createjs.Tween.get(this.backgroundContainer)
                .to({
                    alpha: 1
                }, 1000, createjs.Ease.sineIn);
        }
        for (i = 0; i < this.gameObjectContainer.children.length; i += 1) {
            child = this.gameObjectContainer.getChildAt(i);
            if (child !== player.asset) {
                child.alpha = 0;
                createjs.Tween.get(child)
                    .to({
                        alpha: 1
                    }, 1000, createjs.Ease.sineIn);
            }
        }
        this.backgroundDepthIndex = 0;
        this.backgroundSortOrder = [];

        if (this.levelData.properties && this.levelData.properties.rain) {
            game.soundManager.play("rain");
        }
    };

    Level.prototype.onLightningOutSignal = function () {
        //this.asset.removeChild(this.thunder);
        //this.thunder = null;
        this.thunder.signal.remove(this.onLightinOutSignal);
        this.hudContainer.gotoAndPlay("in");
        this.board.player.unlock();
        if (this.levelData.properties && this.levelData.properties.rain) {
            this.thunder.loop(6000, [6000, 8000], 300);
        }
    };

    Level.prototype.createEmitters = function () {
        // Particles
        //this.dustEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, [new pixiflash_lib.pig1().texture], game.config.particles.dust);
        var stepParticles,
            spawnParticles,
            tombstoneParticles,
            balloonParticles,
            batParticles,
            pumkinParticles;

        stepParticles = [
            PIXI.Texture.fromFrame("p_step_1.png"),
            PIXI.Texture.fromFrame("p_step_2.png"),
            PIXI.Texture.fromFrame("p_step_3.png")
        ];
        this.stepEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, stepParticles, game.config.particles.step);
        this.platformEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, stepParticles, game.config.particles.platform);

        spawnParticles = [
            PIXI.Texture.fromFrame("p_spawn_1.png"),
            PIXI.Texture.fromFrame("p_spawn_2.png"),
            PIXI.Texture.fromFrame("p_spawn_3.png"),
            PIXI.Texture.fromFrame("p_spawn_4.png")
        ];
        this.spawnEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, spawnParticles, game.config.particles.spawn);

        tombstoneParticles = [
            PIXI.Texture.fromFrame("p_tomb_1.png"),
            PIXI.Texture.fromFrame("p_tomb_2.png"),
            PIXI.Texture.fromFrame("p_tomb_3.png"),
            PIXI.Texture.fromFrame("p_tomb_4.png")
        ];
        this.tombstoneEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, tombstoneParticles, game.config.particles.dead);

        batParticles = [
            PIXI.Texture.fromFrame("p_bat_1.png"),
            PIXI.Texture.fromFrame("p_bat_2.png")
        ];
        this.batEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, batParticles, game.config.particles.dead);

        pumkinParticles = [
            PIXI.Texture.fromFrame("p_pumpkin_1.png"),
            PIXI.Texture.fromFrame("p_pumpkin_2.png"),
            PIXI.Texture.fromFrame("p_pumpkin_3.png"),
            PIXI.Texture.fromFrame("p_pumpkin_4.png")
        ];
        this.pumkinEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, pumkinParticles, game.config.particles.dead);

        balloonParticles = [
            PIXI.Texture.fromFrame("p_balloon_1.png"),
            PIXI.Texture.fromFrame("p_balloon_2.png")
        ];
        this.balloonEmitter = new PIXI.particles.Emitter(this.gameObjectContainer, balloonParticles, game.config.particles.dead);


        if (this.levelData.properties && this.levelData.properties.rain) {
            this.envEmitter = new PIXI.particles.Emitter(this.envContainter, [PIXI.Texture.fromFrame("p_rain_1.png")], game.config.particles.rain);
        } else {
            this.envEmitter = new PIXI.particles.Emitter(this.envContainter, [PIXI.Texture.fromFrame("p_fireflight_1.png")], game.config.particles.fireflight);
        }

    };

    Level.prototype.onFullscreen = function (e) {
        game.toggleFullScreen();
    };

    Level.prototype.onExit = function (e) {
        this.transitionSignal.emit(this.name, "exit");
    };

    Level.prototype.introFinished = function (e) {
        this.transition.removeAllEventListeners("finished");
        this.asset.removeChild(this.transition);
        console.log("intro finished");
    };

    Level.prototype.onSound = function (e) {
        game.soundManager.playSfx(e.soundId);
    };

    Level.prototype.parseLevel = function (levelData) {
        var i,
            j,
            gid,
            gameobject,
            col,
            row,
            nodeGid,
            floorTexture,
            line,
            lineLayer,
            lineInfo = {},
            disableObjects = [],
            props = [],
            propsRange = [2, 4];

        for (i = 0; i < levelData.layers[0].data.length; i += 1) {
            gid = levelData.layers[0].data[i];
            col = i % levelData.width;
            row = Math.floor(i / levelData.width);
            nodeGid = levelData.layers[1].data[i];
            //console.log("nodeGid: " + nodeGid);
            game.config.TILE_WIDTH = levelData.tilewidth;
            game.config.TILE_HEIGHT = levelData.tileheight;
            //Tiles
            gameobject = this.gameobjectFactory.create(gid, col, row, nodeGid);

            if (gameobject !== undefined) {
                //this.floorContainer.addChild(gameobject.asset);
                this.gameObjectContainer.addChild(gameobject.asset);
            }
            //BackgroundProps
            for (j = propsRange[0]; j < propsRange[1]; j += 1) {
                if (levelData.layers[j]) {
                    gid = levelData.layers[j].data[i];
                    gameobject = this.gameobjectFactory.create(gid, col, row);
                    if (gameobject) {
                        if (gameobject instanceof game.GameObject) {
                            props.push({
                                asset: gameobject.asset,
                                depth: j
                            });
                        } else {
                            props.push({
                                asset: gameobject,
                                depth: j
                            });
                        }
                    }
                }
            }
            //Game Objects
            gid = levelData.layers[propsRange[1]].data[i];
            gameobject = this.gameobjectFactory.create(gid, col, row, 0, this.interactionLayer);

            if (gameobject !== undefined) {
                //gameobject.gid = gid;
                this.gameObjectContainer.addChild(gameobject.asset);
                gameobject.children = this.getLinkedObjects(levelData, col, row, propsRange[1]);
                disableObjects = disableObjects.concat(this.setDisableCountToChildren(gameobject.children.concat()));
            }
        }
        //console.log("disableObjects: " + disableObjects.length);
        for (j = 0; j < disableObjects.length; j += 1) {
            this.gameobjectFactory.getGameObjectsByPosition(disableObjects[j].col, disableObjects[j].row)[0].addDisableCount();
        }
        props.sort(function (a, b) {
            return a.depth - b.depth;
        });
        for (j = 0; j < props.length; j += 1) {
            //this.floorContainer.addChild(props[j].asset);
            this.gameObjectContainer.addChild(props[j].asset);
        }
        this.board.setNodesNeighbors();
    };

    Level.prototype.parseDecorations = function (layer, tileset, container) {
        var i = 0,
            objects = layer.objects,
            gid = 0,
            decorationFrame = "",
            decoration = null,
            pivotFix = null;

        if (layer.name !== "top") {
            return;
        }

        for (i = 0; i < objects.length; i += 1) {
            gid = objects[i].gid - tileset.firstgid;
            decorationFrame = tileset.tiles[gid].image.split("/")[1].split(".")[0];
            if (decorationFrame === "Prop_Grass") {
                decorationFrame += "000" + Math.ceil(Math.random() * 6);
            }
            decorationFrame += ".png";

            decoration = new PIXI.Sprite.fromFrame(decorationFrame);
            decoration.x = objects[i].x + decoration.width / 2 - 32;
            decoration.y = objects[i].y - 32;
            decoration.anchor.x = 0.5;
            decoration.anchor.y = 1;

            container.addChild(decoration);
        }
    };

    Level.prototype.getLinkedObjects = function (levelData, col, row, layer) {
        var i = 0,
            lineLayer = layer + 1,
            nextLayer = lineLayer + 1,
            objects = [],
            line,
            lineInfo = {},
            gameobjectData = {};

        if (levelData.layers[lineLayer] && levelData.layers[lineLayer].name !== "top") {
            for (i = 0; i < levelData.layers[lineLayer].objects.length; i += 1) {
                line = levelData.layers[lineLayer].objects[i];
                lineInfo = {};
                lineInfo.col = Math.floor(line.x / 64);
                lineInfo.row = Math.floor(line.y / 64);
                lineInfo.targetCol = Math.floor((line.x + line.polyline[1].x) / 64);
                lineInfo.targetRow = Math.floor((line.y + line.polyline[1].y) / 64);

                if (col === lineInfo.col && row === lineInfo.row) {
                    gameobjectData = {};
                    gameobjectData.gid = levelData.layers[nextLayer].data[lineInfo.targetRow * levelData.width + lineInfo.targetCol];
                    gameobjectData.col = lineInfo.targetCol;
                    gameobjectData.row = lineInfo.targetRow;
                    gameobjectData.children = this.getLinkedObjects(levelData, gameobjectData.col, gameobjectData.row, nextLayer);
                    objects.push(gameobjectData);
                }
            }
        }

        return objects;
    };

    Level.prototype.setDisableCountToChildren = function (children) {
        var i,
            disableChildren = [],
            childrenToLoop = [];
        if (children) {
            while (children.length > 0) {
                //console.log("ELEMENTS TREE ", children);
                for (i = 0; i < children.length; i += 1) {
                    //console.log("child gid: " + children[i].gid);
                    if (children[i].gid === 0) {
                        //console.log("save object for later disable count add");
                        disableChildren.push(children[i]);
                    }
                    if (children[i].children && children[i].children.length > 0) {
                        //console.log("this child has " + children[i].children.length + " children");
                        childrenToLoop = childrenToLoop.concat(children[i].children.concat());
                    }
                }
                children.length = 0;
                children = childrenToLoop.concat();
                childrenToLoop.length = 0;
            }
        }
        return disableChildren;
    };

    Level.prototype.activateChildren = function (gameObject) {
        var children = gameObject.children,
            haveToDisable = false,
            gameObjectChild,
            i,
            task;
        if (children.length === 0) {
            return;
        }
        for (i = 0; i < children.length; i += 1) {
            if (children[i].gid === 0) {
                gameObjectChild = this.gameobjectFactory.getGameObjectsByPosition(children[i].col, children[i].row)[0];
                haveToDisable = gameObjectChild.minusDisableCount();
                if (haveToDisable === true) {
                    this.board.player.lock();
                    task = {
                        finished: false
                    };
                    this.camera.makeSequence(
                        [
                            {
                                wait: 0.1
                            },
                            {
                                target: gameObjectChild,
                                speed: 0.05
                            },
                            {
                                wait: 0.25
                            },
                            {
                                callback: [gameObjectChild.toggle.bind(gameObjectChild)]
                            },
                            {
                                wait: 0.5
                            }
                        ],
                        this.taskFinished.bind(this, task)
                    );
                    this.tasks.push(task);
                }
            } else {
                if (children[i]) {
                    this.board.player.lock();
                    if (children[i].gid === game.config.HIDDEN_BUTTON) {
                        this.tasks.push({
                            spawn: children[i]
                        });
                    } else {
                        if (i === 0) {
                            this.tasks.push({
                                wait: 0.5
                            });
                        }
                        this.tasks.push({
                            spawn: children[i]
                        });
                        this.tasks.push({
                            wait: 0.5
                        });
                    }
                }
            }
            task = undefined;
        }
        gameObject.children.length = 0;
    };

    Level.prototype.taskFinished = function (task) {
        task.finished = true;
    };

    Level.prototype.update = function (dt) {
        var i,
            distX,
            distY,
            gameObject,
            emitter;

        screenflow.Screen.prototype.update.call(this, dt);


        this.camera.update(dt);


        for (i = this.gameobjectFactory.gameObjects.length - 1; i > -1; i -= 1) {
            gameObject = this.gameobjectFactory.gameObjects[i];
            //gameObject.isInsideCamera = this.camera.cullingIsInside(gameObject.asset.cullingBox); //this.camera.isInside(gameObject);
            if (gameObject.isStruck) {
                emitter = null;

                if (gameObject.gid === game.config.SLIME) {
                    emitter = this.balloonEmitter;
                } else if (gameObject.gid === game.config.SKULL) {
                    emitter = this.batEmitter;
                } else if (gameObject.gid === game.config.PIG) {
                    emitter = this.pumkinEmitter;
                } else if (gameObject.gid === game.config.TOMBSTONE) {
                    emitter = this.tombstoneEmitter;
                }

                if (emitter) {
                    emitter.updateSpawnPos(gameObject.asset.x, gameObject.asset.y);
                    emitter.resetPositionTracking();
                    emitter.emit = true;
                }

            }

            gameObject.update(dt);
            if (gameObject.cameraShake) {
                this.camera.shake(gameObject.cameraShake[0], gameObject.cameraShake[1], gameObject.cameraShake[2], gameObject.cameraShake[3]);
                gameObject.cameraShake = undefined;
            }
            if ((gameObject.gid === game.config.BUTTON || gameObject.gid === game.config.HIDDEN_BUTTON) && gameObject.canTrigger()) {
                // PARTICLES
                this.platformEmitter.updateSpawnPos(gameObject.asset.x - 32, gameObject.asset.y - 16);
                this.platformEmitter.resetPositionTracking();
                this.platformEmitter.emit = true;

                this.activateChildren(gameObject);
                gameObject.disable();
            }

            if (gameObject.isDead()) {
                //this.board.disableCrosses(gameObject);
                this.activateChildren(gameObject);
            }

            if (gameObject.kill) {
                this.gameobjectFactory.recycle(gameObject);
                if (this.board.player === gameObject) {
                    this.board.player = undefined;
                }
            }
        }

        this.updateTasks(dt);

        //updateing interaction layer to catch mouse events to make the swipes work
        this.interactionLayer.x = this.camera.x;
        this.interactionLayer.y = this.camera.y;

        this.board.update(dt);

        this.spawnEmitter.update(dt);
        this.envEmitter.update(dt);
        this.stepEmitter.update(dt);
        this.platformEmitter.update(dt);
        this.tombstoneEmitter.update(dt);
        this.batEmitter.update(dt);
        this.pumkinEmitter.update(dt);
        this.balloonEmitter.update(dt);

        if (this.board.player && !this.levelEnd) {
            this.envEmitter.updateSpawnPos(this.board.player.asset.x - 640, this.board.player.asset.y - 512);
            this.stepEmitter.updateSpawnPos(this.board.player.asset.x, this.board.player.asset.y);

            if (this.board.player.moveDelay < this.board.player.maxDelay) {
                this.stepEmitter.emit = true;
            }

            if (this.board.player.isDead()) {
                this.tasks.length = 0;
                this.camera.sequence.length = 0;
                this.levelEnd = true;
                this.enableButtons(false);
                this.hudContainer.gotoAndPlay("out");
                createjs.Tween.get(game.soundManager.getSound("music_ingame_1")).to({
                    volume: 0
                }, 1000);
                createjs.Tween.get(game.soundManager.getSound("music_ingame_2")).to({
                    volume: 0
                }, 1000);
                game.soundManager.play("music_lose");
                createjs.Tween.get(this.gameContainer)
                    .wait(400)
                    .call(this.startEndSequence.bind(this));
            } else if (this.board.player.reachExit) {
                this.startWinSequence();
            }
        }

        this.orderView();
    };

    Level.prototype.startWinSequence = function () {
        var mergeDelay = 500,
            savedLevels;
        this.hudContainer.gotoAndPlay("out");
        createjs.Tween.get(game.soundManager.getSound("music_ingame_1"))
            .to({
                volume: 0
            }, mergeDelay);
        createjs.Tween.get(game.soundManager.getSound("music_ingame_2"))
            .to({
                volume: 0
            }, mergeDelay);
        game.soundManager.playSfx("music_win");
        game.soundManager.getSound("music_win").volume = 0;
        game.soundManager.restoreVolume("music_win", mergeDelay);
        this.levelEnd = true;
        this.enableButtons(false);
        this.board.player.win();
        savedLevels = JSON.parse(localStorage.getItem("levels"));
        if (this.isLastLevel) { //last level
            localStorage.setItem("levels", JSON.stringify(savedLevels)); //SAVING
        } else {
            if (savedLevels[this.levelIndex + 1] === undefined) { //creating save data for next level
                savedLevels[this.levelIndex + 1] = 1; //setting 1 to tell that it has to be unlocked
            }
            localStorage.setItem("levels", JSON.stringify(savedLevels)); //SAVING
        }
        createjs.Tween.get(this.asset)
            .wait(3000)
            .call(this.addLightIn.bind(this));
    };

    Level.prototype.addLightIn = function () {
        this.lightningIn = new pixiflash_lib.LightningIn();
        this.lightningIn.signal = new signaljs.Signal();
        this.lightningIn.signal.add(this.onLightningSignal.bind(this));
        this.asset.addChild(this.lightningIn);
    };

    Level.prototype.onLightningSignal = function () {
        this.lightningIn.signal.clear();
        this.lightningIn.signal = null;

        if (this.isLastLevel) {
            this.transitionSignal.emit(this.name, "ending");
        } else {
            this.transitionSignal.emit(this.name, "levelwon");
        }
    };

    Level.prototype.startEndSequence = function () {
        var i = 0 | 0,
            child;
        this.board.player.gotoAndStop({
            label: "die",
            scaleX: 1
        });
        createjs.Tween.get(this.envContainter)
            .wait(500)
            .to({
                alpha: 0
            }, 500);
        if (this.levelData.properties && this.levelData.properties.rain) {
            createjs.Tween.get(game.soundManager.getSound("rain"))
                .wait(500)
                .to({
                    volume: 0
                }, 500);
            this.thunder.stop();
        }
        this.board.player.playSound("jeff_death");
        if (this.backgroundContainer) {
            createjs.Tween.get(this.backgroundContainer)
                .wait(500)
                .to({
                    alpha: 0
                }, 500, createjs.Ease.sineOut);
        }
        for (i = 0; i < this.gameObjectContainer.children.length; i += 1) {
            child = this.gameObjectContainer.getChildAt(i);
            if (child !== this.board.player.asset) {
                createjs.Tween.get(child)
                    .wait(500)
                    .to({
                        alpha: 0
                    }, 500, createjs.Ease.sineOut);
            }
        }
        this.camera.setTarget(undefined);
        createjs.Tween.get(this.board.player)
            .wait(1500)
            .to({
                col: this.initialPos.jeff.col,
                row: this.initialPos.jeff.row
            }, 1000, createjs.Ease.sineInOut)
            .call(this.wakeUpJeff.bind(this, this.board.player));
        createjs.Tween.get(this.camera)
            .wait(1500)
            .to({
                x: this.initialPos.camera.x,
                y: this.initialPos.camera.y
            }, 1000, createjs.Ease.sineInOut);
    };

    Level.prototype.wakeUpJeff = function (jeff) {
        jeff.gotoAndStop({
            label: "wakeup"
        });
        jeff.asset.signal.add(this.onWakeUpEnd.bind(this, jeff));
    };

    Level.prototype.onWakeUpEnd = function () {
        var args = arguments,
            reset = true;
        if (args[1] === "animationFinished") {
            this.transitionSignal.emit(this.name, "levellose", this.levelIndex, this.levelDataId, reset);
        }
    };

    Level.prototype.updateTasks = function (dt) {
        var taskFinished = false,
            gameObject,
            task;
        if (this.tasks.length > 0) {
            task = this.tasks[0];
            if (task.finished) {
                taskFinished = true;

            } else if (task.wait) {
                task.wait -= dt;
                if (task.wait <= 0) {
                    taskFinished = true;
                }
            } else if (task.spawn) {
                gameObject = this.gameobjectFactory.create(task.spawn.gid, task.spawn.col, task.spawn.row, 0, this.interactionLayer);
                if (gameObject !== undefined) {
                    if (!gameObject.asset.parent) {
                        this.gameObjectContainer.addChild(gameObject.asset); //FIX: due to the removeChild breaking up children timeline
                    }

                    if (gameObject.gid !== game.config.BUTTON) {
                        game.soundManager.playSfx("spawn");
                        this.spawnEmitter.updateSpawnPos(gameObject.asset.x, gameObject.asset.y);
                        this.spawnEmitter.resetPositionTracking();
                        this.spawnEmitter.emit = true;
                    } else {
                        game.soundManager.playSfx("spawn");
                        this.platformEmitter.updateSpawnPos(gameObject.asset.x - 32, gameObject.asset.y - 16);
                        this.platformEmitter.resetPositionTracking();
                        this.platformEmitter.emit = true;
                    }

                    gameObject.children = task.spawn.children || [];
                }
                taskFinished = true;
            }
            //------task finished-----------
            if (taskFinished) {
                task = null;
                this.tasks.splice(0, 1);
            }
            //------all tasks done--------
            if (this.tasks.length === 0 && this.board.player) {
                console.log("all tasks finished");
                this.board.updateCrosses();
                this.board.player.unlock();
            }
        }
    };

    Level.prototype.orderView = function () {
        var i,
            j,
            gameObjects = [],
            bottomCrosses = [],
            topCrosses = [],
            child,
            totalObjects = 0,
            bottom = [[], [], []],
            backgroundDepthIndex,
            name;
        if (this.backgroundSortOrder.length === 0) {
            for (i = 0; i < this.gameObjectContainer.children.length; i += 1) {
                child = this.gameObjectContainer.children[i];
                //console.log("object.depthType: ", object.depthType);
                if (child.depthType === game.config.BOTTOM_1) {
                    bottom[0].push(child);
                } else if (child.depthType === game.config.BOTTOM_2) {
                    bottom[1].push(child);
                } else if (child.depthType === game.config.BOTTOM_3) {
                    bottom[2].push(child);
                }
            }
            bottom[0].sort(this.depthCompare.bind(this));
            bottom[1].sort(this.depthCompare.bind(this));
            bottom[2].sort(this.depthCompare.bind(this));
            for (i = 0; i < bottom[0].length; i += 1) {
                this.backgroundSortOrder.push(bottom[0][i]);
            }
            backgroundDepthIndex += bottom[0].length;
            for (i = 0; i < bottom[1].length; i += 1) {
                this.backgroundSortOrder.push(bottom[1][i]);
            }
            backgroundDepthIndex += bottom[1].length;
            for (i = 0; i < bottom[2].length; i += 1) {
                this.backgroundSortOrder.push(bottom[2][i]);
            }
        }
        //Culling setup & sort merged
        for (i = 0; i < this.gameObjectContainer.children.length; i += 1) {
            child = this.gameObjectContainer.children[i];

            if (i < this.backgroundSortOrder.length) {
                if (this.gameObjectContainer.getChildIndex(this.backgroundSortOrder[i]) !== i) {
                    this.gameObjectContainer.setChildIndex(this.backgroundSortOrder[i], i);
                }
            } else {
                if (child.visible && (child.depthType === game.config.CROSS_BOTTOM)) {
                    bottomCrosses.push(child);
                } else if (child.visible && (child.depthType === game.config.CROSS_TOP)) {
                    topCrosses.push(child);
                } else if (child.visible) {
                    gameObjects.push(child);
                }
            }
            if (child.gameObject) {
                if (!(child.gameObject instanceof game.Cross) && !child.gameObject.isDead()) {
                    child.gameObject.isInsideCamera = this.camera.isInside(child);
                    child.visible = child.gameObject.isInsideCamera;
                }
            } else if (!child.gameObject) {
                child.visible = this.camera.isInside(child);
            }
        }
        gameObjects.sort(this.depthCompare.bind(this));
        totalObjects += bottomCrosses.length;
        while (bottomCrosses.length > 0) {
            this.gameObjectContainer.setChildIndex(bottomCrosses[0], this.backgroundSortOrder.length + totalObjects - bottomCrosses.length);
            bottomCrosses.splice(0, 1);
        }
        totalObjects += gameObjects.length;
        while (gameObjects.length > 0) {
            this.gameObjectContainer.setChildIndex(gameObjects[0], this.backgroundSortOrder.length + totalObjects - gameObjects.length);
            gameObjects.splice(0, 1);
        }
        totalObjects += topCrosses.length;
        while (topCrosses.length > 0) {
            this.gameObjectContainer.setChildIndex(topCrosses[0], this.backgroundSortOrder.length + totalObjects - topCrosses.length);
            topCrosses.splice(0, 1);
        }
    };

    Level.prototype.depthCompare = function (a, b) {
        //if (!a.visible || !b.visible) return 0;

        if (a.y < b.y) {
            return -1;
        }
        if (a.y > b.y) {
            return 1;
        }
        if (a.x > b.x) {
            return 1;
        } else if (a.x < b.x) {
            return -1;
        }
    };

    Level.prototype.reset = function () {
        createjs.Tween.removeAllTweens();
        this.transitionSignal.emit(this.name, "reset", this.levelIndex, this.levelData, null, false, true);
    };

    Level.prototype.exitLevel = function () {
        createjs.Tween.removeAllTweens();
        this.asset.mouseEnabled = false;
    };

    Level.prototype.exit = function (name) {
        if (this.levelData.properties && this.levelData.properties.rain) {
            game.soundManager.stop("rain");
        }
        createjs.Tween.removeAllTweens();
        this.camera.dispose();
        this.camera = null;
        this.gameobjectFactory.dispose();
        this.gameobjectFactory = null;
        this.board.dispose();
        this.board = null;
        this.initialPos = null;
        this.backgroundContainer.destroy();
        this.backgroundContainer = null;
        this.interactionLayer.cacheAsBitmap = null;
        this.interactionLayer.destroy();
        this.interactionLayer = null;
        this.hudContainer = null;
        this.initialPos = null;
        this.tasks.length = 0;
        this.tasks = null;
        this.spawnEmitter.destroy();
        this.spawnEmitter = null;
        this.stepEmitter.destroy();
        this.stepEmitter = null;
        this.envEmitter.destroy();
        this.envEmitter = null;
        game.WObjects.loopAndDisposeContainer(this.gameObjectContainer);
        this.gameObjectContainer.destroy();
        this.gameObjectContainer = null;
        this.gameContainer.destroy();
        this.gameContainer = null;
        this.thunder.dispose();
        this.thunder = null;
        screenflow.Screen.prototype.exit.call(this, name);
    };

    game.screens.Level = Level;
}());

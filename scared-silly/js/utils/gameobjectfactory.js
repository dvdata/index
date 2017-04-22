/*global createjs, signaljs, console, pixiflash_lib, wonbats*/
/*jslint bitwise: true */

var wonbats = wonbats || {};
var game = game || {};

(function () {
    'use strict';

    function GameObjectFactory() {
        this.nodeTiles = [];
        this.gameObjects = [];
        this.pool = [];
        this.moveCheck = new signaljs.Signal();
        this.overlapCheck = new signaljs.Signal();
    }

    GameObjectFactory.prototype.create = function (gid, col, row, nodeGid, interactiveLayer) {
        var config = game.config;

        switch (gid) {
            case config.WALL_BACK_LEFT:
                return this.createProp(gid, col, row, "Floor_Props", 26, 30);
            case config.WALL_BACK_RIGHT:
                return this.createProp(gid, col, row, "Floor_Props", 31, 35);
            case config.WALL_BACK_CENTER:
                return this.createProp(gid, col, row, "Floor_Props", 21, 25);
            case config.PROP_BLOOD_1:
                return this.createProp(gid, col, row, "Floor_Props", 1, 1);
            case config.PROP_BLOOD_3:
                return this.createProp(gid, col, row, "Floor_Props", 3, 3);
            case config.PROP_BONE:
                return this.createProp(gid, col, row, "Floor_Props", 4, 7);
            case config.PROP_SPIDERWEB_LEFT:
                return this.createProp(gid, col, row, "Floor_Props", 8, 11);
            case config.PROP_SPIDERWEB_RIGHT:
                return this.createProp(gid, col, row, "Floor_Props", 12, 15);
            case config.PROP_SPIDERWEB_TILE:
                return this.createProp(gid, col, row, "Floor_Props", 16, 19);
            case config.PROP_SPRAY:
                return this.createProp(gid, col, row, "Floor_Props", 20, 20);

            case config.FLOOR_CONCRETE:
                return this.createFloor(gid, col, row, nodeGid);
            case config.JEFF:
                return this.createPlayer(gid, col, row, config.jeff, config.anims.jeff, interactiveLayer);
            case config.SKULL:
                return this.createEnemy(gid, col, row, config.skull, config.anims.bat);
            case config.PIG:
                return this.createEnemy(config.PIG, col, row, config.pig, config.anims.pumpkin, config.directions.DOWN);
            case config.PIG_LEFT:
                return this.createEnemy(config.PIG, col, row, config.pig, config.anims.pumpkin, config.directions.LEFT);
            case config.PIG_RIGHT:
                return this.createEnemy(config.PIG, col, row, config.pig, config.anims.pumpkin, config.directions.RIGHT);
            case config.PIG_UP:
                return this.createEnemy(config.PIG, col, row, config.pig, config.anims.pumpkin, config.directions.UP);
            case config.SLIME:
                return this.createEnemy(gid, col, row, config.slime, config.anims.balloon);
            case config.TOMBSTONE:
                return this.createBreakeableObject(gid, col, row, config.tombstone, config.anims.tombstone);
            case config.EXIT:
                return this.createExit(gid, col, row, config.exit, game.config.anims.goal);
            case config.EXIT_FINAL:
                return this.createExit(gid, col, row, config.exit, game.config.anims.goal_final);
            case config.BUTTON:
                return this.createTrigger(gid, col, row, config.button, config.anims.button);
            case config.HIDDEN_BUTTON:
                return this.createTrigger(gid, col, row, config.hidden_button, config.anims.button);

            case config.DOOR:
                return this.createBlocker(gid, col, row, config.blocker, false, config.anims.blocker);
            case config.OPEN_DOOR:
                return this.createBlocker(config.DOOR, col, row, config.blocker, true, config.anims.blocker);

            case config.TRAP_FIRE_A:
                return this.createTrap(config.TRAP_FIRE_A, col, row, config.trapfireA, config.anims.trap);
            case config.TRAP_FIRE_B:
                return this.createTrap(config.TRAP_FIRE_A, col, row, config.trapfireB, config.anims.trap);
            case config.TRAP_FIRE_C:
                return this.createTrap(config.TRAP_FIRE_A, col, row, config.trapfireC, config.anims.trap);
        }

        return undefined;
    };


    GameObjectFactory.prototype.getFrames = function (prefix, from, to) {
        if (!this.cachedFrames) {
            this.cachedFrames = {};
        }

        if (!this.cachedFrames[prefix]) {
            this.cachedFrames[prefix] = [];

            for (var i = from; i < (to + 1); i++) {
                this.cachedFrames[prefix].push(PIXI.Texture.fromFrame(prefix + ("0000" + i).slice(-4) + '.png'));
            }
        }

        return this.cachedFrames[prefix];
    };

    GameObjectFactory.prototype.createTrap = function (gid, col, row, config, animationConfig) {
        var movie = new PIXI.extras.MovieClip(this.getFrames(animationConfig.settings.framePrefix, animationConfig.settings.frameIndex.from, animationConfig.settings.frameIndex.to));

        var gameobject = new game.Trap(gid, col, row, movie, config, animationConfig),
            cb = game.config.collisionBits;

        gameobject.categoryBits = cb.TRAP;
        gameobject.maskBits = cb.PLAYER | cb.ENEMY;
        this.gameObjects.push(gameobject);
        //console.log("creating: ", game.WObjects.getClassName(gameobject));
        return gameobject;
    };

    GameObjectFactory.prototype.createTrigger = function (gid, col, row, config, animationConfig) {
        var movie = new PIXI.extras.MovieClip(this.getFrames(animationConfig.settings.framePrefix, animationConfig.settings.frameIndex.from, animationConfig.settings.frameIndex.to));

        var gameobject = new game.Trigger(gid, col, row, movie, config, animationConfig),
            cb = game.config.collisionBits;
        gameobject.categoryBits = cb.TRIGGER;
        gameobject.maskBits = cb.PLAYER; // | cb.ENEMY;
        this.gameObjects.push(gameobject);
        //console.log("creating: ", game.WObjects.getClassName(gameobject));
        return gameobject;
    };

    GameObjectFactory.prototype.createBlocker = function (gid, col, row, config, isOpen, animationConfig) {
        var movie = new PIXI.extras.MovieClip(this.getFrames(animationConfig.settings.framePrefix, animationConfig.settings.frameIndex.from, animationConfig.settings.frameIndex.to));

        var gameobject = new game.Blocker(gid, col, row, movie, config, isOpen, animationConfig),
            cb = game.config.collisionBits;

        gameobject.categoryBits = cb.TRIGGER;
        gameobject.maskBits = cb.PLAYER | cb.ENEMY;
        gameobject.blockerMaskBits = gameobject.maskBits;

        if (isOpen) {
            gameobject.disable(true);
        } else {
            gameobject.enable(true);
        }
        this.gameObjects.push(gameobject);
        //console.log("creating: ", game.WObjects.getClassName(gameobject));
        return gameobject;
    };

    GameObjectFactory.prototype.createExit = function (gid, col, row, config, animationConfig) {
        var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(animationConfig.settings.framePrefix + ".png"));

        var gameobject = new game.GameObjectMC(gid, col, row, sprite, config, animationConfig),
            cb = game.config.collisionBits;
        gameobject.categoryBits = cb.TRIGGER;
        gameobject.maskBits = cb.PLAYER;
        //console.log("creating: ", game.WObjects.getClassName(gameobject));
        this.gameObjects.push(gameobject);

        return gameobject;
    };

    GameObjectFactory.prototype.createPlayer = function (gid, col, row, config, animationConfig, interactiveLayer) {
        var movie = new PIXI.extras.MovieClip(this.getFrames(animationConfig.settings.framePrefix, animationConfig.settings.frameIndex.from, animationConfig.settings.frameIndex.to));

        var gameobject = new game.Player(gid, col, row, movie, config, animationConfig, interactiveLayer),
            cb = game.config.collisionBits;
        gameobject.moveCheck.add(this.tryToMove.bind(this));
        gameobject.overlapCheck.add(this.tryToOverlap.bind(this));
        gameobject.categoryBits = cb.PLAYER;
        gameobject.maskBits = cb.ENEMY | cb.DESTROYABLE | cb.TRIGGER | cb.TRAP;
        this.gameObjects.push(gameobject);

        return gameobject;
    };

    GameObjectFactory.prototype.createEnemy = function (gid, col, row, config, animationConfig, lookDir) {

        var gameobject = this.getFirstAvailable(gid),
            cb = game.config.collisionBits;
        if (!gameobject) {
            var movie = new PIXI.extras.MovieClip(this.getFrames(animationConfig.settings.framePrefix, animationConfig.settings.frameIndex.from, animationConfig.settings.frameIndex.to));

            gameobject = new game.Enemy(gid, col, row, movie, config, animationConfig);
            gameobject.moveCheck.add(this.tryToMove.bind(this));
            gameobject.overlapCheck.add(this.tryToOverlap.bind(this));
            console.log("creating: ", game.WObjects.getClassName(gameobject));
        } else {
            console.log("reset", game.WObjects.getClassName(gameobject));
            gameobject.reset(col, row);
        }
        if (lookDir) {
            gameobject.updateLook(lookDir);
        }
        gameobject.categoryBits = cb.ENEMY;
        gameobject.maskBits = cb.PLAYER | cb.TRAP; // | cb.TRIGGER; // | cb.ENEMY;
        this.gameObjects.push(gameobject);

        return gameobject;
    };

    GameObjectFactory.prototype.createBreakeableObject = function (gid, col, row, config, animationConfig) {
        var movie = new PIXI.extras.MovieClip(this.getFrames(animationConfig.settings.framePrefix, animationConfig.settings.frameIndex.from, animationConfig.settings.frameIndex.to));

        var gameobject = new game.GameObjectMC(gid, col, row, movie, config, animationConfig),
            cb = game.config.collisionBits;

        gameobject.asset.gotoAndStop(Math.floor(Math.random() * animationConfig.settings.frameIndex.to));
        gameobject.categoryBits = cb.DESTROYABLE;
        gameobject.maskBits = cb.PLAYER | cb.DESTROYABLE;
        gameobject.asset.tickChildren = false;
        gameobject.asset.tickEnabled = false;
        this.gameObjects.push(gameobject);

        return gameobject;
    };

    GameObjectFactory.prototype.createProp = function (gid, col, row, prefix, from, to) {
        var index = from + Math.floor(Math.random() * (to - from));
        var texture = PIXI.Texture.fromFrame(prefix + ("0000" + index).slice(-4) + '.png');
        var prop = new PIXI.Sprite(texture);
        prop.anchor.x = 0.5;
        prop.anchor.y = 0.5;

        if (gid === game.config.WALL_BACK_LEFT) {
            prop.depthType = game.config.BOTTOM_2;
        } else if (gid === game.config.WALL_BACK_CENTER) {
            prop.depthType = game.config.BOTTOM_2;
        } else if (gid === game.config.WALL_BACK_RIGHT) {
            prop.depthType = game.config.BOTTOM_2;
        } else {
            prop.depthType = game.config.BOTTOM_3;
        }

        prop.x = col * game.config.TILE_WIDTH;
        prop.y = row * game.config.TILE_HEIGHT;

        return prop;
    };

    GameObjectFactory.prototype.createFloor = function (gid, col, row, nodeGid) {
        var config = game.config,
            gameobject,
            nodeview = this.createNodeView(nodeGid);

        var concreteSettings = game.config.anims.concrete.settings;
        var textures = this.getFrames(concreteSettings.framePrefix, concreteSettings.frameIndex.from, concreteSettings.frameIndex.to);
        var sprite = new PIXI.Sprite(textures[Math.floor(Math.random() * textures.length)]);

        if (nodeview !== undefined) {
            gameobject = new game.NodeTile(gid, col, row, sprite, {}, game.config.anims.concrete);
            gameobject.nodeGid = nodeGid;
            if (config.SHOW_NODES === true) {
                gameobject.asset.addChild(nodeview);
            }
            this.nodeTiles.push(gameobject);
        } else {
            gameobject = new game.GameObjectMC(gid, col, row, sprite, {}, game.config.anims.concrete);
        }
        gameobject.asset.depthType = game.config.BOTTOM_1;

        //console.log("creating: ", game.WObjects.getClassName(gameobject));
        return gameobject;
    };

    GameObjectFactory.prototype.createNodeView = function (gid) {
        var config = game.config;
        return new PIXI.Container();
        
//        switch (gid) {
//            case config.FLOOR_LEFT:
//                return new pixiflash_lib.Floor_left();
//
//            case config.FLOOR_LEFT_RIGHT:
//                return new pixiflash_lib.Floor_left_right();
//
//            case config.FLOOR_LEFT_DOWN:
//                return new pixiflash_lib.Floor_left_down();
//
//            case config.FLOOR_LEFT_UP:
//                return new pixiflash_lib.Floor_left_up();
//
//            case config.FLOOR_LEFT_UP_DOWN:
//                return new pixiflash_lib.Floor_left_up_down();
//
//            case config.FLOOR_RIGHT:
//                return new pixiflash_lib.Floor_right();
//
//            case config.FLOOR_RIGHT_DOWN:
//                return new pixiflash_lib.Floor_right_down();
//
//            case config.FLOOR_RIGHT_UP:
//                return new pixiflash_lib.Floor_right_up();
//
//            case config.FLOOR_RIGHT_UP_DOWN:
//                return new pixiflash_lib.Floor_right_up_down();
//
//            case config.FLOOR_UP:
//                return new pixiflash_lib.Floor_up();
//
//            case config.FLOOR_UP_DOWN:
//                return new pixiflash_lib.Floor_up_down();
//
//            case config.FLOOR_DOWN:
//                return new pixiflash_lib.Floor_down();
//
//            case config.FLOOR_UP_DOWN_LEFT_RIGHT:
//                return new pixiflash_lib.Floor_up_down_left_right();
//
//            case config.FLOOR_UP_LEFT_RIGHT:
//                return new pixiflash_lib.Floor_up_left_right();
//
//            case config.FLOOR_DOWN_LEFT_RIGHT:
//                return new pixiflash_lib.Floor_down_left_right();
//        }
//
//        return undefined;
    };

    GameObjectFactory.prototype.tryToMove = function (gameobject, direction) {
        this.moveCheck.emit(gameobject, direction);
    };

    GameObjectFactory.prototype.tryToOverlap = function (gameobject, direction) {
        this.overlapCheck.emit(gameobject);
    };

    GameObjectFactory.prototype.getFirstAvailable = function (gid) {
        var i,
            result;
        for (i = 0; i < this.pool.length; i += 1) {
            if (this.pool[i].gid === gid && !this.pool[i].alive) {
                result = this.pool[i];
                this.pool.splice(i, 1);
                //console.log("removing from pool, we found an object");
                return result;
            }
        }
        return result;
    };

    GameObjectFactory.prototype.recycle = function (gameobject) {
        //console.log("recycling");
        gameobject.alive = false;
        //gameobject.asset.parent.removeChild(gameobject.asset);
        gameobject.asset.visible = false; //FIX: due to the removeChild breaking up children timeline
        this.gameObjects.splice(this.gameObjects.indexOf(gameobject), 1);
        this.pool.push(gameobject);
    };

    GameObjectFactory.prototype.getGameObjects = function (type) {
        var gobjs = [],
            i;
        for (i = 0; i < this.gameObjects.length; i += 1) {
            if (this.gameObjects[i] instanceof type) {
                gobjs.push(this.gameObjects[i]);
            }
        }
        return gobjs;
    };

    GameObjectFactory.prototype.getGameObjectsByPosition = function (col, row) {
        var gobjs = [],
            i;
        for (i = 0; i < this.gameObjects.length; i += 1) {
            if (this.gameObjects[i].col === col && this.gameObjects[i].row === row) {
                gobjs.push(this.gameObjects[i]);
            }
        }
        return gobjs;
    };

    GameObjectFactory.prototype.dispose = function () {
        console.log("---pool---");
        game.WObjects.loopAndDispose(this.pool);
        this.pool = null;
        console.log("---pool---");
        this.nodeTiles.length = 0;
        this.nodeTiles = null;
        this.gameObjects.length = 0;
        this.gameObjects = null;
        this.moveCheck.clear();
        this.moveCheck = null;
        this.overlapCheck.clear();
        this.overlapCheck = null;
    };

    wonbats.GameObjectFactory = GameObjectFactory;
}());

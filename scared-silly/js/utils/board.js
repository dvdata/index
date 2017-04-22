/*global signaljs, console, PIXI, pixiflash_lib*/
/*jslint bitwise: true */
var wonbats = wonbats || {};
var game = game || {};

(function () {
    'use strict';

    function Board(gameobjectfactory, crossContainer) {
        this.gameobjectFactory = gameobjectfactory;
        this.gameobjectFactory.moveCheck.add(this.moveCheck.bind(this));
        this.gameobjectFactory.overlapCheck.add(this.overlapCheck.bind(this));
        this.debugView = undefined;
        this.crossContainer = crossContainer;
        if (game.config.debug.pathfinding) {
            this.debugView = new PIXI.Container();
        }
        this.lastTurnWasPlayer = false;
        this.crosses = [];
        this.turnsElapsed = 0;
    }

    Board.prototype.moveCheck = function (gameobject, direction) { //COLLISION
        var i,
            tile,
            otherGameObject,
            posingTile,
            move = false,
            result,
            nodeTiles = this.gameobjectFactory.nodeTiles,
            gameObjects = this.gameobjectFactory.gameObjects,
            hasToRotate = gameobject.hasToRotate(direction);
        //console.log("hasToRotate: " + hasToRotate);
        for (i = 0; i < nodeTiles.length; i += 1) {
            tile = nodeTiles[i];
            if (gameobject.col === tile.col && gameobject.row === tile.row) { //emmiter is in tile
                posingTile = tile;
            }
        }
        if (posingTile !== undefined) {
            if (direction === game.config.directions.RIGHT) {
                if (posingTile.nodeRight !== undefined) {
                    move = true;
                }
            } else if (direction === game.config.directions.LEFT) {
                if (posingTile.nodeLeft !== undefined) {
                    move = true;
                }
            } else if (direction === game.config.directions.DOWN) {
                if (posingTile.nodeDown !== undefined) {
                    move = true;
                }
            } else if (direction === game.config.directions.UP) {
                if (posingTile.nodeUp !== undefined) {
                    move = true;
                }
            }
        }
        result = this.collides(direction, hasToRotate, gameobject, gameObjects);
        if (result && result[0].hit && result[0].otherGameObject !== undefined) {
            result[0].otherGameObject.collide(gameobject, direction);
            gameobject.hit(result[0].otherGameObject, direction);
        } else if (move) {
            gameobject.move(direction);
        } else {
            gameobject.bounce(direction);
        }
    };

    Board.prototype.overlapCheck = function (gameobject) { //COLLISION
        var i,
            gameObjects = this.gameobjectFactory.gameObjects,
            collides = false;
        for (i = 0; i < gameObjects.length; i += 1) {
            if (gameObjects[i] !== gameobject && gameObjects[i].isSensor === true) {
                collides = (gameobject.maskBits & gameObjects[i].categoryBits) !== 0 && (gameObjects[i].maskBits & gameobject.categoryBits) !== 0;
                if (collides && gameobject.col === gameObjects[i].col && gameobject.row === gameObjects[i].row) {
                    gameobject.overlap(gameObjects[i]);
                    gameObjects[i].overlap(gameobject);
                    break;
                }
            }
        }
    };

    Board.prototype.collides = function (direction, hasToRotate, gameobject, gameObjects) {
        var results = [],
            resultObject,
            collides = false,
            i;
        for (i = 0; i < gameObjects.length; i += 1) {
            if (gameObjects[i] !== gameobject && gameObjects[i].isSensor === false && !hasToRotate) {
                collides = (gameobject.maskBits & gameObjects[i].categoryBits) !== 0 && (gameObjects[i].maskBits & gameobject.categoryBits) !== 0;
                if (collides) {
                    if (direction === game.config.directions.RIGHT && gameobject.col + 1 === gameObjects[i].col && gameobject.row === gameObjects[i].row) {
                        resultObject = {};
                        resultObject.otherGameObject = gameObjects[i];
                        resultObject.hit = true;
                    } else if (direction === game.config.directions.LEFT && gameobject.col - 1 === gameObjects[i].col && gameobject.row === gameObjects[i].row) {
                        resultObject = {};
                        resultObject.otherGameObject = gameObjects[i];
                        resultObject.hit = true;
                    } else if (direction === game.config.directions.DOWN && gameobject.row + 1 === gameObjects[i].row && gameobject.col === gameObjects[i].col) {
                        resultObject = {};
                        resultObject.otherGameObject = gameObjects[i];
                        resultObject.hit = true;
                    } else if (direction === game.config.directions.UP && gameobject.row - 1 === gameObjects[i].row && gameobject.col === gameObjects[i].col) {
                        resultObject = {};
                        resultObject.otherGameObject = gameObjects[i];
                        resultObject.hit = true;
                    }
                }
            }
            if (resultObject) {
                results.push(resultObject);
            }
            resultObject = undefined;
        }
        if (results.length === 0) {
            results = undefined;
        }
        return results;
    };

    Board.prototype.playerTurnFinished = function (player) { //PATHFINDING
        var openList = [],
            closedList = [],
            nodes = [],
            usedTiles = [],
            neighbors = [],
            originalNodes = this.gameobjectFactory.nodeTiles,
            gameObjects = this.gameobjectFactory.gameObjects,
            enemies = this.gameobjectFactory.getGameObjects(game.Enemy),
            enemiesThatWillMove = [],
            tileNode,
            i,
            j,
            k,
            weightDistance = 15,
            startNode,
            endNode,
            lowerCostNode,
            tentativeGCost,
            debugItem,
            distanceToTarget,
            sharingNextPos = false,
            hasToRotate = false;
        if (game.config.debug.pathfinding) {
            for (i = this.debugView.children.length - 1; i > -1; i -= 1) { //clear debug view
                debugItem = this.debugView.getChildAt(i);
                debugItem.background.clear();
                this.debugView.removeChild(debugItem);
            }
        }
        for (i = 0; i < originalNodes.length; i += 1) { //Detecting occupied tiles
            tileNode = originalNodes[i];
            for (j = 0; j < gameObjects.length; j += 1) {
                if (gameObjects[j] !== player &&
                    !gameObjects[j].isSensor &&
                    !gameObjects[j].isDead() &&
                    gameObjects[j].maskBits !== game.config.collisionBits.NOTHING &&
                    (enemies.indexOf(gameObjects[j]) === -1) &&
                    tileNode.col === gameObjects[j].col &&
                    tileNode.row === gameObjects[j].row) {
                    usedTiles.push(tileNode);
                    break;
                }
            }
            if (usedTiles.indexOf(tileNode) === -1) { //ADDING non occupied tiles, setting scores related to player (only target for pathfinding in the game)
                tileNode = {
                    parent: undefined,
                    col: tileNode.col,
                    row: tileNode.row,
                    node: tileNode,
                    f: 0,
                    g: 1,
                    h: 0,
                    view: new PIXI.Container()
                };
                tileNode.h = this.calculateH(tileNode, player);
                tileNode.f = tileNode.g + tileNode.h;
                this.createTileDebugView(tileNode, weightDistance);
                nodes.push(tileNode);
                if (endNode === undefined && tileNode.col === player.col && tileNode.row === player.row) {
                    endNode = tileNode;
                    //console.log("end node");
                }
                tileNode = undefined;
            }
        }
        usedTiles = [];
        for (k = enemies.length - 1; k > -1; k -= 1) { //loop enemies
            if (enemies[k].isDead()) {
                continue;
            }
            enemies[k].onTurnStart();
            enemies[k].updateLook(player);
            for (i = 0; i < nodes.length; i += 1) {
                if (startNode === undefined && enemies[k].col === nodes[i].col && enemies[k].row === nodes[i].row) { //Retrieving start node
                    //console.log("start node");
                    startNode = nodes[i];
                    startNode.h = this.calculateH(startNode, player);
                    startNode.f = startNode.g + startNode.h;
                    //this.createTileDebugView(startNode, weightDistance);
                    break;
                }
            }
            openList.push(startNode);
            //console.log(startNode);
            while (openList.length !== 0) {
                lowerCostNode = this.getLowerFCostNode(openList);
                if (lowerCostNode === endNode || lowerCostNode === undefined) {
                    break;
                }
                openList.splice(openList.indexOf(lowerCostNode), 1);
                closedList.push(lowerCostNode);
                neighbors = this.getNeighbors(lowerCostNode, nodes);
                for (i = 0; i < neighbors.length; i += 1) {
                    if (closedList.indexOf(neighbors[i]) !== -1) {
                        continue;
                    }
                    tentativeGCost = lowerCostNode.g + 1;
                    if (openList.indexOf(neighbors[i]) === -1) {
                        openList.push(neighbors[i]);
                    } else if (tentativeGCost >= neighbors[i].g) {
                        continue;
                    }
                    neighbors[i].parent = lowerCostNode;
                    neighbors[i].g = tentativeGCost;
                    neighbors[i].f = neighbors[i].g + neighbors[i].h;
                    tentativeGCost = 0;
                }
                neighbors = [];
                tentativeGCost = 0;
            }
            if (endNode !== undefined) {
                closedList = this.reconstructPath(closedList, endNode);
                if (game.config.debug.pathfinding) {
                    this.debugView.cacheAsBitmap = false;
                }
                for (i = 0; i < closedList.length; i += 1) {
                    if (game.config.debug.pathfinding && closedList[i].view !== undefined) {
                        closedList[i].view.background.clear();
                        closedList[i].view.background.lineStyle(1, 0x00ff00);
                        closedList[i].view.background.beginFill(0x00ff00, 0.3);
                        closedList[i].view.background.drawRect(-game.config.TILE_WIDTH / 2, -game.config.TILE_HEIGHT / 2,
                            game.config.TILE_WIDTH,
                            game.config.TILE_HEIGHT);
                        closedList[i].view.background.endFill();
                    }
                }
            }
            if (game.config.debug.pathfinding) {
                for (i = 0; i < nodes.length; i += 1) {
                    if (nodes[i].view !== undefined) {
                        nodes[i].view.f.text = "F:" + nodes[i].f;
                        nodes[i].view.g.text = "G:" + nodes[i].g;
                        nodes[i].view.h.text = "H:" + nodes[i].h;
                    }
                }
            }
            if (closedList.length > 0 && enemies[k].canMove()) {
                distanceToTarget = closedList.length;
                closedList.splice(2, closedList.length - 1);
                enemiesThatWillMove.push({
                    enemy: enemies[k],
                    distanceToTarget: distanceToTarget,
                    actualNode: closedList[0],
                    nextNode: closedList[1]
                });
            } else if (!enemies[k].canMove()) {
                enemies[k].onTurnEnd();
            } else {
                enemies[k].onTurnEnd();
            }
            usedTiles.push({
                enemy: enemies[k],
                col: enemies[k].col,
                row: enemies[k].row
            });
            startNode = undefined;
            closedList.length = 0;
            openList.length = 0;
        }
        enemiesThatWillMove.sort(function (a, b) {
            return a.distanceToTarget - b.distanceToTarget;
        }).reverse();
        for (i = enemiesThatWillMove.length - 1; i > -1; i -= 1) {
            //console.log("distance to target: " + enemiesThatWillMove[i].distanceToTarget);
            hasToRotate = enemiesThatWillMove[i].enemy.hasToRotate(this.calculateDirection(enemiesThatWillMove[i].nextNode, enemiesThatWillMove[i].enemy));
            sharingNextPos = false;
            if (this.player && this.player.kill) {
                enemiesThatWillMove[i].enemy.onTurnEnd();
                return;
            }
            for (k = 0; k < enemiesThatWillMove.length; k += 1) {
                if (player.isDead()) {
                    return;
                }
                if (enemiesThatWillMove[i].enemy !== enemiesThatWillMove[k].enemy && enemiesThatWillMove[i].nextNode === enemiesThatWillMove[k].nextNode) {
                    sharingNextPos = true;
                }
            }
            if (sharingNextPos === true && !this.isTileOccupied(usedTiles, enemiesThatWillMove[i]) && !hasToRotate) {
                this.removeOcuppiedTile(usedTiles, enemiesThatWillMove[i]);
                usedTiles.push({
                    enemy: enemiesThatWillMove[i].enemy,
                    col: enemiesThatWillMove[i].nextNode.col,
                    row: enemiesThatWillMove[i].nextNode.row
                });
                enemiesThatWillMove[i].enemy.tryToMove(this.calculateDirection(enemiesThatWillMove[i].nextNode, enemiesThatWillMove[i].enemy));
            } else if (!this.isTileOccupied(usedTiles, enemiesThatWillMove[i]) && !hasToRotate) {
                this.removeOcuppiedTile(usedTiles, enemiesThatWillMove[i]);
                usedTiles.push({
                    enemy: enemiesThatWillMove[i].enemy,
                    col: enemiesThatWillMove[i].nextNode.col,
                    row: enemiesThatWillMove[i].nextNode.row
                });
                enemiesThatWillMove[i].enemy.tryToMove(this.calculateDirection(enemiesThatWillMove[i].nextNode, enemiesThatWillMove[i].enemy));
            } else if (hasToRotate) {
                enemiesThatWillMove[i].enemy.tryToMove(this.calculateDirection(enemiesThatWillMove[i].nextNode, enemiesThatWillMove[i].enemy));
                enemiesThatWillMove.splice(i, 1);
            } else {
                enemiesThatWillMove[i].enemy.onTurnEnd();
                enemiesThatWillMove.splice(i, 1);
            }
        }

        if (game.config.debug.pathfinding) {
            this.debugView.cacheAsBitmap = true;
        }
    };

    Board.prototype.removeOcuppiedTile = function (array, enemyData) {
        var i;
        for (i = array.length - 1; i > -1; i -= 1) {
            if (array[i].enemy === enemyData.enemy && array[i].col === enemyData.actualNode.col && array[i].row === enemyData.actualNode.row) {
                array.splice(i, 1);
            }
        }
    };

    Board.prototype.isTileOccupied = function (array, enemyData) {
        var i;
        for (i = 0; i < array.length; i += 1) {
            if (array[i].enemy !== enemyData.enemy && array[i].col === enemyData.nextNode.col && array[i].row === enemyData.nextNode.row) {
                return true;
            }
        }
        return false;
    };

    Board.prototype.playerTurnStart = function (player) { //PATHFINDING
        player.onTurnStart();
        this.updateCrosses();
    };

    Board.prototype.updateCrosses = function () {
        //show crosses where player can be killed by enemies or hazards
        var badGameObjects = this.gameobjectFactory.getGameObjects(game.Enemy), //TODO: get hazards too
            allGameObjects = this.gameobjectFactory.gameObjects, //TODO: get hazards too
            nodeTiles = this.gameobjectFactory.nodeTiles,
            player = this.gameobjectFactory.getGameObjects(game.Player)[0],
            collides,
            diffCol,
            diffRow,
            i,
            j,
            //message,
            crossBottom,
            crossTop,
            crossInBoard = false,
            tempCrosses = [],
            distanceToShowCross = 999; //original value: 2
        for (i = this.crosses.length - 1; i > -1; i -= 1) { //setting alive = false, to all crosses
            this.crosses[i].disable();
        }
        for (i = 0; i < badGameObjects.length; i += 1) {
            if (badGameObjects[i] !== player && !badGameObjects[i].isDead()) {
                if (badGameObjects[i].canMove()) {
                    diffCol = player.col - badGameObjects[i].col;
                    diffRow = player.row - badGameObjects[i].row;
                    if (diffCol <= distanceToShowCross && diffCol >= -distanceToShowCross && diffRow <= distanceToShowCross && diffRow >= -distanceToShowCross) {
                        if (!badGameObjects[i].hasToRotate(game.config.directions.LEFT)) {
                            //message = "player at left";
                            tempCrosses.push({
                                col: badGameObjects[i].col - 1,
                                row: badGameObjects[i].row,
                                enemy: badGameObjects[i]
                            });
                        }
                        if (!badGameObjects[i].hasToRotate(game.config.directions.RIGHT)) {
                            //message = "player at right";
                            tempCrosses.push({
                                col: badGameObjects[i].col + 1,
                                row: badGameObjects[i].row,
                                enemy: badGameObjects[i]
                            });
                        }
                        if (!badGameObjects[i].hasToRotate(game.config.directions.DOWN)) {
                            //message = "player at down";
                            tempCrosses.push({
                                col: badGameObjects[i].col,
                                row: badGameObjects[i].row + 1,
                                enemy: badGameObjects[i]
                            });
                        }
                        if (!badGameObjects[i].hasToRotate(game.config.directions.UP)) {
                            //message = "player at up";
                            tempCrosses.push({
                                col: badGameObjects[i].col,
                                row: badGameObjects[i].row - 1,
                                enemy: badGameObjects[i]
                            });
                        }
                    }
                }
            }
        }

        for (i = tempCrosses.length - 1; i > -1; i -= 1) {
            for (j = tempCrosses.length - 1; j > -1; j -= 1) {
                if (tempCrosses[i] !== undefined) {
                    if (tempCrosses[i] !== tempCrosses[j] && tempCrosses[i].col === tempCrosses[j].col && tempCrosses[i].row === tempCrosses[j].row) { //Check against other crosses
                        tempCrosses.splice(i, 1);
                        //console.log("cross on occupied by other cross");
                        break;
                    }
                }
            }
            if (tempCrosses[i] !== undefined) { //Check against nodetiles
                crossInBoard = false;
                for (j = nodeTiles.length - 1; j > -1; j -= 1) {
                    if (tempCrosses[i].col === nodeTiles[j].col && tempCrosses[i].row === nodeTiles[j].row) {
                        crossInBoard = true;
                        break;
                    }
                }
                if (!crossInBoard) {
                    tempCrosses.splice(i, 1);
                    //console.log("cross outside the board");
                }
            }
            if (tempCrosses[i] !== undefined) { //Check against other game objects
                for (j = allGameObjects.length - 1; j > -1; j -= 1) {
                    if (!(allGameObjects[j] instanceof game.Player) &&
                        !(allGameObjects[j] instanceof game.Blocker && allGameObjects[j].isOpen) &&
                        !(allGameObjects[j] instanceof game.Trigger) &&
                        !(allGameObjects[j] instanceof game.Trap) &&
                        !((allGameObjects[j] instanceof game.Enemy) && allGameObjects[j].isDead()) &&
                        tempCrosses[i].col === allGameObjects[j].col &&
                        tempCrosses[i].row === allGameObjects[j].row) {
                        tempCrosses.splice(i, 1);
                        //console.log("cross overlaping object");
                        break;
                    }
                }
            }
        }
        for (i = this.crossContainer.children.length - 1; i > -1; i -= 1) {
            var usingCross = false;
            for (j = tempCrosses.length - 1; j > -1; j -= 1) {
                if (this.crossContainer.children[i].gameObject && (this.crossContainer.children[i].gameObject instanceof game.Cross) && this.crossContainer.children[i].gameObject.alive && this.crossContainer.children[i].gameObject.col === tempCrosses[j].col && this.crossContainer.children[i].gameObject.row === tempCrosses[j].row) {
                    usingCross = true;
                    tempCrosses.splice(j, 1);
                    //console.log("removed already used cross");
                    break;
                }
            }
        }
        for (i = tempCrosses.length - 1; i > -1; i -= 1) {
            crossBottom = this.getCross(tempCrosses[i].col, tempCrosses[i].row, tempCrosses[i].enemy, false);
            crossTop = this.getCross(tempCrosses[i].col, tempCrosses[i].row, tempCrosses[i].enemy, true);
            if (this.crossContainer.children.indexOf(crossBottom.asset) === -1) {
                this.crossContainer.addChild(crossBottom.asset);
                crossBottom.asset.depthType = game.config.CROSS_BOTTOM;
            }
            if (this.crossContainer.children.indexOf(crossTop.asset) === -1) {
                this.crossContainer.addChild(crossTop.asset);
                crossTop.asset.depthType = game.config.CROSS_TOP;
            }
        }
    };

    Board.prototype.getCross = function (col, row, enemy, isTop) {
        var cross,
            i,
            crossConfig = isTop ? game.config.anims.cross_top : game.config.anims.cross_bottom,
            frames;

        for (i = this.crosses.length - 1; i > -1; i -= 1) {
            cross = this.crosses[i];
            if (cross.isTop === isTop && !cross.alive) {
                cross.reset(col, row);
                cross.enemy = enemy;
                return cross;
            }
            cross = undefined;
        }

        frames = this.gameobjectFactory.getFrames(crossConfig.settings.framePrefix, crossConfig.settings.frameIndex.from, crossConfig.settings.frameIndex.to);

        cross = new game.Cross(0, 0, 0, new PIXI.extras.MovieClip(frames), crossConfig, isTop);
        cross.reset(col, row);
        cross.enemy = enemy;
        this.crosses.push(cross);
        //console.log("creating cross");
        return cross;
    };

    Board.prototype.calculateDirection = function (nodeA, nodeB) { //TURNS
        var horizontal = nodeA.col - nodeB.col,
            vertical = nodeA.row - nodeB.row,
            direction;
        if (horizontal === 1) {
            direction = game.config.directions.RIGHT;
        } else if (horizontal === -1) {
            direction = game.config.directions.LEFT;
        } else if (vertical === 1) {
            direction = game.config.directions.DOWN;
        } else if (vertical === -1) {
            direction = game.config.directions.UP;
        }

        return direction;
    };

    Board.prototype.calculateH = function (nodeA, nodeB) { //PATHFINDING
        return Math.ceil(Math.sqrt((nodeA.col - nodeB.col) * (nodeA.col - nodeB.col) + (nodeA.row - nodeB.row) * (nodeA.row - nodeB.row)));
    };

    Board.prototype.getLowerFCostNode = function (openList) { //PATHFINDING
        openList.sort(function (a, b) {
            return a.f - b.f;
        });
        return openList[0];
    };

    Board.prototype.reconstructPath = function (closedList, endNode) { //PATHFINDING
        var parent = endNode.parent,
            i,
            node;
        for (i = closedList.length - 1; i > -1; i -= 1) {
            node = closedList[i];
            if (node !== parent) {
                closedList.splice(closedList.indexOf(node), 1);
            } else {
                parent = node.parent;
            }
        }
        if (closedList.length > 0) {
            closedList.push(endNode);
        }
        return closedList;
    };

    Board.prototype.getNeighbors = function (tile, nodes) { //PATHFINDING
        var neighbors = [],
            i;
        for (i = 0; i < nodes.length; i += 1) {
            if (tile.node.nodeLeft !== undefined && (nodes[i].col === tile.node.nodeLeft.col && nodes[i].row === tile.node.nodeLeft.row)) {
                neighbors.push(nodes[i]);
            } else if (tile.node.nodeRight !== undefined && (nodes[i].col === tile.node.nodeRight.col && nodes[i].row === tile.node.nodeRight.row)) {
                neighbors.push(nodes[i]);
            } else if (tile.node.nodeUp !== undefined && (nodes[i].col === tile.node.nodeUp.col && nodes[i].row === tile.node.nodeUp.row)) {
                neighbors.push(nodes[i]);
            } else if (tile.node.nodeDown !== undefined && (nodes[i].col === tile.node.nodeDown.col && nodes[i].row === tile.node.nodeDown.row)) {
                neighbors.push(nodes[i]);
            }
        }
        neighbors.sort(function (a, b) {
            return a.f - b.f;
        });
        return neighbors;
    };

    Board.prototype.setNodesNeighbors = function () { //PATHFINDING
        var tile,
            nodeDown,
            nodeLeft,
            nodeRight,
            nodeUp,
            i,
            j,
            config = game.config,
            nodeTiles = this.gameobjectFactory.nodeTiles;

        for (i = 0; i < nodeTiles.length; i += 1) {
            tile = nodeTiles[i];
            for (j = 0; j < nodeTiles.length; j += 1) {
                if (tile !== nodeTiles[j]) {
                    if (tile.col === (nodeTiles[j].col - 1) && tile.row === nodeTiles[j].row) { //RIGHT Neighbor
                        nodeRight = nodeTiles[j];
                    } else if (tile.col === (nodeTiles[j].col + 1) && tile.row === nodeTiles[j].row) { //LEFT Neighbor
                        nodeLeft = nodeTiles[j];
                    } else if (tile.col === nodeTiles[j].col && tile.row === (nodeTiles[j].row - 1)) { //DOWN Neighbor
                        nodeDown = nodeTiles[j];
                    } else if (tile.col === nodeTiles[j].col && tile.row === (nodeTiles[j].row + 1)) { //UP Neighbor
                        nodeUp = nodeTiles[j];
                    }
                }
            }
            switch (tile.nodeGid) {

                case config.FLOOR_LEFT:
                    tile.nodeLeft = nodeLeft;
                    break;

                case config.FLOOR_LEFT_RIGHT:
                    tile.nodeLeft = nodeLeft;
                    tile.nodeRight = nodeRight;
                    break;

                case config.FLOOR_LEFT_DOWN:
                    tile.nodeLeft = nodeLeft;
                    tile.nodeDown = nodeDown;
                    break;

                case config.FLOOR_LEFT_UP:
                    tile.nodeLeft = nodeLeft;
                    tile.nodeUp = nodeUp;
                    break;

                case config.FLOOR_LEFT_UP_DOWN:
                    tile.nodeUp = nodeUp;
                    tile.nodeDown = nodeDown;
                    tile.nodeLeft = nodeLeft;
                    break;

                case config.FLOOR_RIGHT:
                    tile.nodeRight = nodeRight;
                    break;

                case config.FLOOR_RIGHT_DOWN:
                    tile.nodeRight = nodeRight;
                    tile.nodeDown = nodeDown;
                    break;

                case config.FLOOR_RIGHT_UP:
                    tile.nodeRight = nodeRight;
                    tile.nodeUp = nodeUp;
                    break;

                case config.FLOOR_RIGHT_UP_DOWN:
                    tile.nodeRight = nodeRight;
                    tile.nodeUp = nodeUp;
                    tile.nodeDown = nodeDown;
                    break;

                case config.FLOOR_UP:
                    tile.nodeUp = nodeUp;
                    break;

                case config.FLOOR_UP_DOWN:
                    tile.nodeUp = nodeUp;
                    tile.nodeDown = nodeDown;
                    break;

                case config.FLOOR_DOWN:
                    tile.nodeDown = nodeDown;
                    break;

                case config.FLOOR_UP_DOWN_LEFT_RIGHT:
                    tile.nodeRight = nodeRight;
                    tile.nodeUp = nodeUp;
                    tile.nodeDown = nodeDown;
                    tile.nodeLeft = nodeLeft;
                    break;

                case config.FLOOR_UP_LEFT_RIGHT:
                    tile.nodeRight = nodeRight;
                    tile.nodeUp = nodeUp;
                    tile.nodeLeft = nodeLeft;
                    break;

                case config.FLOOR_DOWN_LEFT_RIGHT:
                    tile.nodeRight = nodeRight;
                    tile.nodeDown = nodeDown;
                    tile.nodeLeft = nodeLeft;
                    break;

            }
            nodeLeft = undefined;
            nodeRight = undefined;
            nodeUp = undefined;
            nodeDown = undefined;
        }
    };

    Board.prototype.update = function (dt) {
        var i,
            gameObject,
            othersInTurn = false,
            traps = this.gameobjectFactory.getGameObjects(game.Trap),
            enemies = this.gameobjectFactory.getGameObjects(game.Enemy);

        for (i = 0; i < this.crosses.length; i++) {
            this.crosses[i].update(dt);
        }

        if (this.player.inTurn) {
            this.lastTurnWasPlayer = true;
        } else if (this.lastTurnWasPlayer) {
            this.lastTurnWasPlayer = false;
            //console.log("player turn finished");
            this.playerTurnFinished(this.player);
            for (i = 0; i < traps.length; i += 1) {
                traps[i].onTurnStart();
            }
            this.turnsElapsed += 1;
        } else {
            for (i = enemies.length - 1; i > -1; i -= 1) {
                gameObject = enemies[i];
                if (gameObject.inTurn && !othersInTurn) {
                    othersInTurn = true;
                }
            }
            if (!othersInTurn) {
                if (this.turnsElapsed > 0) {
                    for (i = 0; i < traps.length; i += 1) {
                        //traps[i].onTurnStart();
                        traps[i].onTurnEnd();
                    }
                }
                this.playerTurnStart(this.player);
            }
        }
    };

    Board.prototype.createTileDebugView = function (tile, weightDistance) {
        if (game.config.debug.pathfinding) {
            //BACKGROUND
            tile.view.background = new PIXI.Graphics();
            tile.view.background.lineStyle(1, 0xff0000);
            tile.view.background.beginFill(0xff0000, 0.3);
            tile.view.background.drawRect(-game.config.TILE_WIDTH / 2, -game.config.TILE_HEIGHT / 2,
                game.config.TILE_WIDTH,
                game.config.TILE_HEIGHT);
            tile.view.background.endFill();
            tile.view.addChild(tile.view.background);
            tile.view.x = tile.col * game.config.TILE_WIDTH;
            tile.view.y = tile.row * game.config.TILE_HEIGHT;
            //G
            tile.view.g = new PIXI.Text("G:" + tile.g, {
                font: '14px Arial',
                fill: 0xffffff,
                align: 'center'
            });
            tile.view.g.x = tile.view.background.x - (tile.view.g.width / 2) - weightDistance;
            tile.view.g.y = tile.view.background.y - (tile.view.g.height / 2) + weightDistance;
            //tileNode.view.g.visible = false;
            tile.view.addChild(tile.view.g);
            //F
            tile.view.f = new PIXI.Text("F:" + tile.f, {
                font: '14px Arial',
                fill: 0xffffff,
                align: 'center'
            });
            tile.view.f.x = tile.view.background.x - (tile.view.f.width / 2) - weightDistance;
            tile.view.f.y = tile.view.background.y - (tile.view.f.height / 2) - weightDistance;
            //tileNode.view.f.visible = false;
            tile.view.addChild(tile.view.f);
            //H
            tile.view.h = new PIXI.Text("H:" + tile.h, {
                font: '14px Arial',
                fill: 0xffffff,
                align: 'center'
            });
            tile.view.h.x = tile.view.background.x - (tile.view.h.width / 2) + weightDistance;
            tile.view.h.y = tile.view.background.y - (tile.view.h.height / 2) + weightDistance;
            tile.view.addChild(tile.view.h);
            //
            this.debugView.addChild(tile.view);
        }
    };

    Board.prototype.disableCrosses = function (gameObject) {
        var i;
        for (i = 0; i < this.crosses.length; i += 1) {
            if (this.crosses[i].alive && this.crosses[i].enemy === gameObject) {
                this.crosses[i].disable();
            }
        }
    };

    Board.prototype.dispose = function () {
        this.gameobjectFactory = null;
        this.debugView = null;
        game.WObjects.loopAndDispose(this.crosses);
        this.crosses = null;
    };

    wonbats.Board = Board;
}());

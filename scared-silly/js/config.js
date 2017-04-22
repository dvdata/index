var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.version = "1.0.2"; // [major].[minor].[release] // 1.0.0 = GOLD // 0.1.0 = BETA // 0.0.1 = ALPHA

    game.config.language = "usa";
    //"english" //"spanish" //"portuguese"

    game.config.FPS = 30;
    game.config.FPS_METER = false;
    game.config.SHOW_NODES = false; //switch to show nodes in tiles
    game.config.TILE_WIDTH = 0;
    game.config.TILE_HEIGHT = 0;
    // ------------------------------------------------------------------------
    // Z-Order
    // ------------------------------------------------------------------------
    game.config.BOTTOM_1 = 0;
    game.config.BOTTOM_2 = 1;
    game.config.BOTTOM_3 = 2;
    game.config.CROSS_BOTTOM = 3;
    game.config.SORT = 4;
    game.config.CROSS_TOP = 5;
    // ------------------------------------------------------------------------
    // GameObjects
    // ------------------------------------------------------------------------
    game.config.FLOOR_LEFT = 1;
    game.config.FLOOR_LEFT_RIGHT = 2;
    game.config.FLOOR_LEFT_DOWN = 3;
    game.config.FLOOR_LEFT_UP = 4;
    game.config.FLOOR_LEFT_UP_DOWN = 5;
    game.config.FLOOR_RIGHT = 6;
    game.config.FLOOR_RIGHT_DOWN = 7;
    game.config.FLOOR_RIGHT_UP = 8;
    game.config.FLOOR_RIGHT_UP_DOWN = 9;
    game.config.FLOOR_UP = 10;
    game.config.FLOOR_UP_DOWN = 11;
    game.config.FLOOR_UP_LEFT_RIGHT = 12;
    game.config.FLOOR_DOWN = 13;
    game.config.FLOOR_DOWN_LEFT_RIGHT = 14;
    game.config.FLOOR_UP_DOWN_LEFT_RIGHT = 15;

    game.config.FLOOR_CONCRETE = 16;

    game.config.JEFF = 21;
    game.config.SKULL = 22;
    game.config.PIG = 23;
    game.config.SLIME = 24;
    game.config.PIG_LEFT = 25;
    game.config.PIG_RIGHT = 26;
    game.config.PIG_UP = 27;
    //saving slots for more enemies
    game.config.TOMBSTONE = 31;
    game.config.EXIT = 36;
    game.config.BUTTON = 37;
    game.config.DOOR = 38;
    game.config.HIDDEN_BUTTON = 39;
    game.config.OPEN_DOOR = 40;
    //Walls
    game.config.WALL_BACK_LEFT = 41;
    game.config.WALL_BACK_CENTER = 42;
    game.config.WALL_BACK_RIGHT = 43;
    //Props
    game.config.PROP_SPRAY = 51;
    game.config.PROP_BLOOD_3 = 52;
    game.config.PROP_BLOOD_1 = 53;
    game.config.PROP_BONE = 54;
    game.config.PROP_SPIDERWEB_LEFT = 56;
    game.config.PROP_SPIDERWEB_TILE = 57;
    game.config.PROP_SPIDERWEB_RIGHT = 58;

    //Traps
    game.config.TRAP_FIRE_A = 61;
    game.config.TRAP_FIRE_B = 62;
    game.config.TRAP_FIRE_C = 63;
    //Goal Final
    game.config.EXIT_FINAL = 64;

    // ------------------------------------------------------------------------
    // Directions
    // ------------------------------------------------------------------------
    game.config.directions = {
        LEFT: -1,
        RIGHT: 1,
        UP: -2,
        DOWN: 2,
        NONE: 0
    };
    // ------------------------------------------------------------------------
    // Collision Masks
    // ------------------------------------------------------------------------
    game.config.collisionBits = {
        NOTHING: 0,
        PLAYER: 1,
        ENEMY: 2,
        DESTROYABLE: 4,
        TRIGGER: 8,
        TRAP: 16
            //OTHER = 16;
    };
    // ------------------------------------------------------------------------
    // Player
    // ------------------------------------------------------------------------
    game.config.jeff = {
        ap: 1,
        hp: 1,
        //automovePress: 0.3,
        move: {
            delay: 0.3, //delay for movement
            step: 1, //tiles per step
            sound: "jeff_step",
            anims: {
                down: {
                    steps: {
                        left: {
                            label: "down_move_1",
                            playAtEnd: "down_idle",
                            scaleX: 1
                        },
                        right: {
                            label: "down_move_2",
                            playAtEnd: "down_idle",
                            scaleX: 1
                        }
                    }
                },
                up: {
                    steps: {
                        left: {
                            label: "up_move_1",
                            playAtEnd: "up_idle",
                            scaleX: 1
                        },
                        right: {
                            label: "up_move_2",
                            playAtEnd: "up_idle",
                            scaleX: 1
                        }
                    }
                },
                left: {
                    steps: {
                        left: {
                            label: "side_move_1",
                            playAtEnd: "side_idle",
                            scaleX: -1
                        },
                        right: {
                            label: "side_move_2",
                            playAtEnd: "side_idle",
                            scaleX: -1
                        }
                    }
                },
                right: {
                    steps: {
                        left: {
                            label: "side_move_1",
                            playAtEnd: "side_idle",
                            scaleX: 1
                        },
                        right: {
                            label: "side_move_2",
                            playAtEnd: "side_idle",
                            scaleX: 1
                        }
                    }
                }
            }
        },
        bounce: {
            delay: 0.2, //delay for movement
            step: 0.25, //tiles per step
            anims: {
                left: {
                    label: "side_idle",
                    scaleX: -1
                },
                right: {
                    label: "side_idle",
                    scaleX: 1
                },
                up: {
                    label: "up_idle",
                    scaleX: 1
                },
                down: {
                    label: "down_idle",
                    scaleX: 1
                }
            }
        },
        attack: {
            sound: "jeff_attack",
            anims: {
                left: {
                    label: "side_attack",
                    playAtEnd: "side_idle",
                    scaleX: -1,
                    endTurn: true
                },
                right: {
                    label: "side_attack",
                    playAtEnd: "side_idle",
                    scaleX: 1,
                    endTurn: true

                },
                up: {
                    label: "up_attack",
                    playAtEnd: "up_idle",
                    endTurn: true,
                    scaleX: 1
                },
                down: {
                    label: "down_attack",
                    playAtEnd: "down_idle",
                    endTurn: true,
                    scaleX: 1
                }
            }
        },
        dead: {
            label: "down_idle"
        },
        input: {
            SWIPE_DISTANCE: 50,
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40

        }
    };
    // ------------------------------------------------------------------------
    // Simple Enemy (Skull)
    // ------------------------------------------------------------------------
    game.config.skull = {
        ap: 1,
        hp: 1,
        move: {
            delay: 0.15, //delay for movement
            step: 1, //tiles per step
            anims: {
                left: {
                    label: "walk",
                    playAtEnd: "idle",
                    scaleX: -1
                },
                right: {
                    label: "walk",
                    playAtEnd: "idle",
                    scaleX: 1
                },
                up: {
                    label: "walk",
                    playAtEnd: "idle"
                },
                down: {
                    label: "walk",
                    playAtEnd: "idle"
                }
            },
            sound: "bat_moves"
        },
        bounce: {
            delay: 0.2, //delay for movement
            step: 0.5, //tiles per step
            anims: {
                left: {
                    label: "walk",
                    scaleX: -1,
                    playAtEnd: "idle"
                },
                right: {
                    label: "walk",
                    scaleX: 1,
                    playAtEnd: "idle"
                },
                up: {
                    label: "walk",
                    playAtEnd: "idle"
                },
                down: {
                    label: "walk",
                    playAtEnd: "idle"
                }
            },
            sound: "enemy_attack"
        },
        dead: {
            sound: "bat_death",
            label: "die",
            callAtEnd: "onDeadAnimationEnd",
            shake: [0.005, 0.2] //intensity, duration, force, direction
        }
    };
    // ------------------------------------------------------------------------
    // Rotation Enemy (Pig)
    // ------------------------------------------------------------------------
    game.config.pig = {
        ap: 1,
        hp: 1,
        move: {
            delay: 0.15, //delay for movement
            step: 1, //tiles per step
            anims: {
                left: {
                    label: "left_move",
                    playAtEnd: "left_idle"
                },
                right: {
                    label: "right_move",
                    playAtEnd: "right_idle"
                },
                up: {
                    label: "up_move",
                    playAtEnd: "up_idle"
                },
                down: {
                    label: "down_move",
                    playAtEnd: "down_idle"
                }
            },
            sound: "pumpkin_moves"
        },
        bounce: {
            delay: 0.2, //delay for movement
            step: 0.5, //tiles per step
            anims: {
                left: {
                    label: "left_move",
                    playAtEnd: "left_idle"
                },
                right: {
                    label: "right_move",
                    playAtEnd: "right_idle"
                },
                up: {
                    label: "up_move",
                    playAtEnd: "up_idle"
                },
                down: {
                    label: "down_move",
                    playAtEnd: "down_idle"
                }
            },
            sound: "enemy_attack"
        },
        rotate: {
            anims: {
                left_to_up: {
                    label: "left_to_up",
                    playAtEnd: "up_idle"
                },
                left_to_down: {
                    label: "left_to_down",
                    playAtEnd: "down_idle"
                },
                right_to_down: {
                    label: "right_to_down",
                    playAtEnd: "down_idle"
                },
                right_to_up: {
                    label: "right_to_up",
                    playAtEnd: "up_idle"
                },
                up_to_right: {
                    label: "up_to_right",
                    playAtEnd: "right_idle"
                },
                up_to_left: {
                    label: "up_to_left",
                    playAtEnd: "left_idle"
                },
                down_to_right: {
                    label: "down_to_right",
                    playAtEnd: "right_idle"
                },
                down_to_left: {
                    label: "down_to_left",
                    playAtEnd: "left_idle"
                }
            }
        },
        dead: {
            sound: "pumpkin_death",
            label: "die",
            callAtEnd: "onDeadAnimationEnd",
            shake: [0.005, 0.2] //intensity, duration, force, direction
        }
    };
    // ------------------------------------------------------------------------
    // Slime Enemy (Slime)
    // ------------------------------------------------------------------------
    game.config.slime = {
        ap: 1,
        hp: 1,
        turns: [
            {
                call: [
                    ["gotoAndStop", {
                        label: "idle"
                    }]
                ]
            },
            {
                call: [
                    ["warning"]
                ],
                canMove: false
            }
        ],
        move: {
            delay: 0.15, //delay for movement
            step: 1, //tiles per step
            anims: {
                left: {
                    label: "idle",
                    scaleX: -1
                },
                right: {
                    label: "idle",
                    scaleX: 1
                },
                up: {
                    label: "idle"
                },
                down: {
                    label: "idle"
                }
            },
            sound: "balloon_moves"
        },
        bounce: {
            delay: 0.2, //delay for movement
            step: 0.5, //tiles per step
            anims: {
                left: {
                    label: "idle",
                    scaleX: -1
                },
                right: {
                    label: "idle",
                    scaleX: 1
                },
                up: {
                    label: "idle"
                },
                down: {
                    label: "idle"
                }
            },
            sound: "enemy_attack"
        },
        warning: {
            anims: {
                left: {
                    label: "warning",
                    scaleX: -1
                },
                right: {
                    label: "warning",
                    scaleX: 1
                },
                up: {
                    label: "warning"
                },
                down: {
                    label: "warning"
                }
            }
        },
        dead: {
            sound: "balloon_death",
            label: "dead",
            callAtEnd: "onDeadAnimationEnd",
            shake: [0.005, 0.2] //intensity, duration, force, direction
        }
    };
    // ------------------------------------------------------------------------
    // Tombstone
    // ------------------------------------------------------------------------
    game.config.tombstone = {
        hp: 1,
        dead: {
            sound: "tombstone_break",
            shake: [0.005, 0.2] //intensity, duration, force, direction
        }
    };
    // ------------------------------------------------------------------------
    // Exit
    // ------------------------------------------------------------------------
    game.config.exit = {
        offset: {
            x: 0,
            y: -32
        },
        sensor: true
    };
    // ------------------------------------------------------------------------
    // Button
    // ------------------------------------------------------------------------
    game.config.button = {
        overlap: {
            sound: "button_press"
        },
        offset: {
            x: 0,
            y: -32
        },
        sensor: true
    };
    // ------------------------------------------------------------------------
    // Hidden Button
    // ------------------------------------------------------------------------
    game.config.hidden_button = {
        sensor: true
    };
    // ------------------------------------------------------------------------
    // Blocker
    // ------------------------------------------------------------------------
    game.config.blocker = {
        offset: {
            x: 0,
            y: -32
        }
    };
    // ------------------------------------------------------------------------
    // FireTrap
    // ------------------------------------------------------------------------
    game.config.trapfireA = {
        offset: {
            x: 0,
            y: -32
        },
        sensor: true,
        ap: 1,
        turns: [
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn1"
                    }]
                ]
            },
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn2"
                    }]
                ]
            },
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn3"
                    }],
                    ["playSound", "claw_attack"]
                ],
                damage: true
            }
        ]
    };
    game.config.trapfireB = {
        offset: {
            x: 0,
            y: -32
        },
        sensor: true,
        ap: 1,
        turns: [
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn2"
                    }]
                ]
            },
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn3"
                    }],
                    ["playSound", "claw_attack"]
                ],
                damage: true
            },
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn1"
                    }]
                ]
            }
        ]
    };
    game.config.trapfireC = {
        offset: {
            x: 0,
            y: -32
        },
        sensor: true,
        ap: 1,
        turns: [
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn3"
                    }],
                    ["playSound", "claw_attack"]
                ],
                damage: true
            },
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn1"
                    }]
                ]
            },
            {
                call: [
                    ["gotoAndStop", {
                        label: "turn2"
                    }]
                ]
            }
        ]
    };
    // ------------------------------------------------------------------------
    // Camera
    // ------------------------------------------------------------------------
    game.config.camera = {
        SHAKE_BOTH_AXES: 0,
        SHAKE_HORIZONTAL_ONLY: 1,
        SHAKE_VERTICAL_ONLY: 2,
        SPEED: 0.05,
        DRAW_DISTANCE: 550
    };
    // ------------------------------------------------------------------------
    // Pathfinding
    // ------------------------------------------------------------------------
    game.config.debug = {
        pathfinding: false,
        resize: true
    };
    // ------------------------------------------------------------------------
    // Screens
    // ------------------------------------------------------------------------
    game.config.screens = {
        preloader: {
            screenClass: game.screens.Preloader,
            stack: false,
            events: {
                exit: "intro"
                    //exit: "ending"
            }
        },
        intro: {
            screenClass: game.screens.Intro,
            stack: false,
            events: {
                exit: "mainmenu"
            }
        },
        mainmenu: {
            screenClass: game.screens.MainMenu,
            stack: false,
            events: {
                exit: "levelselection",
                credits: "credits"
            }
        },
        levelselection: {
            screenClass: game.screens.LevelSelection,
            stack: false,
            events: {
                level: "level",
                mainmenu: "mainmenu"
            }
        },
        level: {
            screenClass: game.screens.Level,
            stack: false,
            events: {
                exit: "levelselection",
                levelwon: "levelselection",
                levellose: "level",
                ending: "ending"
            }
        },
        ending: {
            screenClass: game.screens.Ending,
            stack: false,
            events: {
                exit: "mainmenu"
            }
        },
        credits: {
            screenClass: game.screens.Credits,
            stack: false,
            events: {
                exit: "mainmenu"
            }
        }
    };

    // ------------------------------------------------------------------------
    // Spritesheets
    // ------------------------------------------------------------------------
    game.config.loadingspritesheets = {
        path: "lib_assets/images/",
        manifest: [
            {
                src: "loading_atlas_.json",
                id: "loading_atlas_"
            }
        ]
    };

    game.config.spritesheets = {
        path: "lib_assets/images/",
        manifest: [
            {
                src: "cinematics_atlas_.json",
                id: "cinematics_atlas_"
            },
            {
                src: "mainmenu_atlas_.json",
                id: "mainmenu_atlas_"
            },
            {
                src: "levelselection_atlas_.json",
                id: "levelselection_atlas_"
            },
            {
                src: "hud_atlas_.json",
                id: "hud_atlas_"
            },
            {
                src: "credits_atlas_.json",
                id: "credits_atlas_"
            }
        ]
    };

    // ------------------------------------------------------------------------
    // Levels
    // ------------------------------------------------------------------------
    game.config.levels = {
        path: "lib_assets/levels/",
        manifest: [
            "room_1",
            "room_2",
            "room_5",
            "room_7",
            "room_4",
            "room_8",
            "room_9",
            "room_12",
            "room_3",
            "room_6",
            "room_11",
            "room_10"
        ]
    };
    // ------------------------------------------------------------------------
    // Cheats
    // ------------------------------------------------------------------------
    game.config.cheats = {
        unlockAllLevels: false
    };
}());

var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';

    game.config.anims = {};

    game.config.anims.jeff = {
        settings: {
            framePrefix: "jeff",
            frameIndex: {
                from: 1,
                to: 511
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        labels: {
            0: {
                from: 0,
                to: 88,
                next: "down_idle"
            },
            down_idle: {
                from: 0,
                to: 88,
                next: "down_idle"
            },
            side_idle: {
                from: 89,
                to: 187,
                next: "side_idle"
            },
            up_idle: {
                from: 188,
                to: 201,
                next: "up_idle"
            },
            down_attack: {
                from: 202,
                to: 213,
                event: "animationFinished"
            },
            side_attack: {
                from: 214,
                to: 225,
                event: "animationFinished"
            },
            up_attack: {
                from: 226,
                to: 237,
                event: "animationFinished"
            },
            die: {
                from: 238,
                to: 250,
                next: "die_loop"
            },
            die_loop: {
                from: 251,
                to: 277,
                next: "die_loop"
            },
            wakeup: {
                from: 278,
                to: 353,
                event: "animationFinished"
            },
            down_move_1: {
                from: 354,
                to: 368,
                event: "animationFinished"
            },
            down_move_2: {
                from: 369,
                to: 382,
                event: "animationFinished"
            },
            side_move_1: {
                from: 383,
                to: 398,
                event: "animationFinished"
            },
            side_move_2: {
                from: 399,
                to: 414,
                event: "animationFinished"
            },
            up_move_1: {
                from: 415,
                to: 429,
                event: "animationFinished"
            },
            up_move_2: {
                from: 430,
                to: 444,
                event: "animationFinished"
            },
            win: {
                from: 445,
                to: 457,
                next: "win_loop"
            },
            win_loop: {
                from: 458,
                to: 477,
                next: "win_loop"
            },
            win_final: {
                from: 478,
                to: 490,
                next: "win_final_loop"
            },
            win_final_loop: {
                from: 491,
                to: 510,
                next: "win_final_loop"
            },
        },
    };

    game.config.anims.pumpkin = {
        settings: {
            framePrefix: "Pumpkin",
            frameIndex: {
                from: 1,
                to: 283
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        labels: {
            0: {
                from: 0,
                to: 15,
                next: "down_idle"
            },
            down_idle: {
                from: 0,
                to: 15,
                next: "down_idle"
            },
            right_idle: {
                from: 16,
                to: 31,
                next: "right_idle"
            },
            left_idle: {
                from: 32,
                to: 47,
                next: "left_idle"
            },
            up_idle: {
                from: 48,
                to: 63,
                next: "up_idle"
            },
            down_move: {
                from: 64,
                to: 79,
                event: "animationFinished"
            },
            right_move: {
                from: 80,
                to: 95,
                event: "animationFinished"
            },
            left_move: {
                from: 96,
                to: 111,
                event: "animationFinished"
            },
            up_move: {
                from: 112,
                to: 127,
                event: "animationFinished"
            },
            down_to_right: {
                from: 128,
                to: 145,
                event: "animationFinished"
            },
            down_to_left: {
                from: 146,
                to: 163,
                event: "animationFinished"
            },
            up_to_right: {
                from: 164,
                to: 179,
                event: "animationFinished"
            },
            up_to_left: {
                from: 180,
                to: 195,
                event: "animationFinished"
            },
            right_to_up: {
                from: 196,
                to: 212,
                event: "animationFinished"
            },
            left_to_up: {
                from: 213,
                to: 229,
                event: "animationFinished"
            },
            right_to_down: {
                from: 230,
                to: 245,
                event: "animationFinished"
            },
            left_to_down: {
                from: 246,
                to: 261,
                event: "animationFinished"
            },
            die: {
                from: 262,
                to: 282,
                event: "animationFinished"
            },
        },
    };

    game.config.anims.balloon = {
        settings: {
            framePrefix: "balloon",
            frameIndex: {
                from: 1,
                to: 166
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        labels: {
            0: {
                from: 0,
                to: 32,
                next: "idle_loop"
            },
            idle: {
                from: 0,
                to: 32,
                next: "idle_loop"
            },
            idle_loop: {
                from: 33,
                to: 82,
            },
            warning: {
                from: 83,
                to: 105,
                next: "warning_loop"
            },
            warning_loop: {
                from: 106,
                to: 143,
            },
            dead: {
                from: 144,
                to: 166,
                event: "animationFinished"
            },
        },
    };

    game.config.anims.bat = {
        settings: {
            framePrefix: "bat",
            frameIndex: {
                from: 1,
                to: 77
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        labels: {
            0: {
                from: 0,
                to: 29,
                next: "idle"
            },
            idle: {
                from: 0,
                to: 29,
                next: "idle"
            },
            walk: {
                from: 30,
                to: 43,
                event: "animationFinished"
            },
            die: {
                from: 44,
                to: 76,
                event: "animationFinished"
            },
        },
    };

    game.config.anims.button = {
        settings: {
            framePrefix: "button",
            frameIndex: {
                from: 1,
                to: 36
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        labels: {
            unpressed: {
                from: 0,
                to: 30,
            },
            pressed: {
                from: 31,
                to: 35,
            },
        },
    };

    game.config.anims.cross_top = {
        settings: {
            framePrefix: "cross_top",
            frameIndex: {
                from: 1,
                to: 47
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        labels: {
            idle: {
                from: 0,
                to: 29,
                next: "idle"
            },
            on: {
                from: 30,
                to: 39,
                event: "animationFinished"
            },
            off: {
                from: 40,
                to: 46,
                event: "animationFinished"
            },
        },
    };

    game.config.anims.cross_bottom = {
        settings: {
            framePrefix: "cross_bottom",
            frameIndex: {
                from: 1,
                to: 47
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        labels: {
            idle: {
                from: 0,
                to: 29,
                next: "idle"
            },
            on: {
                from: 30,
                to: 39,
                event: "animationFinished"
            },
            off: {
                from: 40,
                to: 46,
                event: "animationFinished"
            },
        },
    };

    game.config.anims.trap = {
        settings: {
            framePrefix: "zombie",
            frameIndex: {
                from: 1,
                to: 75
            },
            animationSpeed: 1,
            anchor: {
                x: 0.48,
                y: 0.49
            }
        },
        labels: {
            turn1: {
                from: 0,
                to: 0
            },
            turn2: {
                from: 1,
                to: 21,
                next: "turn2loop"
            },
            turn2loop: {
                from: 22,
                to: 41,
                next: "turn2loop"
            },
            turn3: {
                from: 42,
                to: 74,
                next: "turn1"
            },
        },
    };

    game.config.anims.blocker = {
        settings: {
            framePrefix: "blocker",
            frameIndex: {
                from: 1,
                to: 31
            },
            animationSpeed: 1,
            anchor: {
                x: 0.44,
                y: 0.43
            }
        },
        labels: {
            open: {
                from: 0,
                to: 0,
            },
            up: {
                from: 0,
                to: 20,
            },
            closed: {
                from: 21,
                to: 21,
            },
            down: {
                from: 21,
                to: 30,
            },
        },
    };

    game.config.anims.tombstone = {
        settings: {
            framePrefix: "tombstone",
            frameIndex: {
                from: 1,
                to: 8
            },
            animationSpeed: 1,
            anchor: {
                x: 0.43,
                y: 0.65
            }
        },
        labels: {
            idle: {
                from: 0,
                to: 7,
            }
        },
    };

    game.config.anims.goal = {
        settings: {
            framePrefix: "Goal",
            frameIndex: {
                from: 1,
                to: 1
            },
            animationSpeed: 1,
            anchor: {
                x: 0.5,
                y: -1.1,
            }
        },
        labels: {
            idle: {
                from: 0,
                to: 0,
            }
        },
    };

    game.config.anims.goal_final = {
        settings: {
            framePrefix: "GoalFinal",
            frameIndex: {
                from: 1,
                to: 1
            },
            animationSpeed: 1,
            anchor: {
                x: 0.4,
                y: 0
            }
        },
        labels: {
            idle: {
                from: 0,
                to: 0,
            }
        },
    };

    game.config.anims.concrete = {
        settings: {
            framePrefix: "concrete",
            frameIndex: {
                from: 1,
                to: 4
            },
            animationSpeed: 1,
            anchor: {
                x: 0.50,
                y: 0.35
            }
        }
    };
}());

var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    // ------------------------------------------------------------------------
    // Particles
    // ------------------------------------------------------------------------
    game.config.particles = {
        dust: {
            "alpha": {
                "start": 1,
                "end": 0.18
            },
            "scale": {
                "start": 0.1,
                "end": 1.2
            },
            "color": {
                "start": "fffefe",
                "end": "ffffff"
            },
            "speed": {
                "start": 700,
                "end": 50
            },
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "rotationSpeed": {
                "min": 0,
                "max": 200
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.7
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.1,
            "maxParticles": 100,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "point"
        },
        spawn: {
            "alpha": {
                "start": 0.9,
                "end": 0
            },
            "scale": {
                "start": 2,
                "end": 1,
                "minimumScaleMultiplier": 0.8
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 50,
                "end": 0
            },
            "acceleration": {
                "x": 0,
                "y": -600
            },
            "startRotation": {
                "min": 180,
                "max": 360
            },
            "rotationSpeed": {
                "min": 0,
                "max": 200
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.5
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.1,
            "maxParticles": 50,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 60
            }
        },
        fireflight: {
            "alpha": {
                "start": 0.85,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 1,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffff00"
            },
            "speed": {
                "start": 10,
                "end": 10
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.5,
                "max": 0.6
            },
            "blendMode": "add",
            "frequency": 0.2,
            "emitterLifetime": -1,
            "maxParticles": 1000,
            "pos": {
                "x": -640,
                "y": -512
            },
            "addAtBack": true,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 1280,
                "h": 1024
            }
        },
        break: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 0.5,
                "end": 1,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 400,
                "end": 100
            },
            "acceleration": {
                "x": 0,
                "y": 1000
            },
            "startRotation": {
                "min": 200,
                "max": 340
            },
            "rotationSpeed": {
                "min": 0,
                "max": 40
            },
            "lifetime": {
                "min": 0.5,
                "max": 0.7
            },
            "blendMode": "normal",
            "frequency": 0.008,
            "emitterLifetime": 0.15,
            "maxParticles": 15,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 64,
                "h": 96
            }
        },
        step: {
            "alpha": {
                "start": 0.25,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 2,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 60,
                "end": 110
            },
            "acceleration": {
                "x": 0,
                "y": 120
            },
            "startRotation": {
                "min": -75,
                "max": -105
            },
            "rotationSpeed": {
                "min": 0,
                "max": 40
            },
            "lifetime": {
                "min": 0.5,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.008,
            "emitterLifetime": 0.05,
            "maxParticles": 50,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "point"
        },
        dead: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.75,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 500,
                "end": 0
            },
            "acceleration": {
                "x": 0,
                "y": 1200
            },
            "startRotation": {
                "min": -60,
                "max": -120
            },
            "rotationSpeed": {
                "min": 0,
                "max": 100
            },
            "lifetime": {
                "min": 0.4,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.01,
            "maxParticles": 50,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 32,
                "h": 32
            }
        },
        platform: {
            "alpha": {
                "start": 1,
                "end": 0.14
            },
            "scale": {
                "start": 3,
                "end": 1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 50,
                "end": 0
            },
            "acceleration": {
                "x": 0,
                "y": -150
            },
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "rotationSpeed": {
                "min": 90,
                "max": 115
            },
            "lifetime": {
                "min": 0.5,
                "max": 0.7
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.13,
            "maxParticles": 15,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 64,
                "h": 64
            }
        },
        rain: {
            "alpha": {
                "start": 0.5,
                "end": 0.5
            },
            "scale": {
                "start": 0.5,
                "end": 0.5,
                "minimumScaleMultiplier": 2
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 1000,
                "end": 1000
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "startRotation": {
                "min": 95,
                "max": 100
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 1,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.004,
            "emitterLifetime": -1,
            "maxParticles": 500,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 1600,
                "h": 600
            }
        }
    };
}());

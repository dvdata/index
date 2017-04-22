/*global createjs, signaljs, console, pixiflash_lib*/
/*jslint bitwise: true */
var wonbats = wonbats || {};
var game = game || {};

(function () {
    'use strict';

    function WMath() {
    }
    
    WMath.prototype.clamp = function (a, min, max) {
        return Math.max(Math.min(a, max), min);
    };
    
    WMath.prototype.degreesToRadians = function (degrees) {
        return degrees * (Math.PI / 180);
    };
    
    WMath.prototype.randomFromArray = function (array) {
        var randomIndex = Math.floor(array.length * Math.random());
        return array[randomIndex];
    };
    
    wonbats.WMath = WMath;
}());
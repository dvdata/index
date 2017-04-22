/*global createjs, signaljs, console*/
/*jslint bitwise: true */
var wonbats = wonbats || {};
var game = game || {};

(function () {
    'use strict';

    function WObjects() {}

    WObjects.prototype.loopAndDispose = function (array) {
        var i;
        console.log("length: ", array.length);
        for (i = array.length - 1; i > -1; i -= 1) {
            if (array[i].dispose) {
                array[i].dispose();
            }
            array.splice(i, 1);
        }
    };

    WObjects.prototype.loopAndDisposeContainer = function (container) {
        var i;
        console.log("length: ", container.children.length);
        for (i = container.children.length - 1; i > -1; i -= 1) {
            if (container.children[i].gameObject && container.children[i].gameObject.dispose) {
                container.children[i].gameObject.dispose();
            }
        }
    };

    WObjects.prototype.getClassName = function (object) {
        return object.constructor.name;
    };

    wonbats.WObjects = WObjects;
}());

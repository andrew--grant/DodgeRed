'use strict';

var DiscGroup = function (game) {
    Phaser.Group.call(this, game);
    this.game = game;
};

DiscGroup.prototype = Object.create(Phaser.Group.prototype);
DiscGroup.prototype.constructor = DiscGroup;

//DiscGroup.prototype.update = function () {
//    Note: this overrides the update
//    method of the whole group if used
//}


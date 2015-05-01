'use strict';

var Trail = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'trail');
    this.game = game;
    this.anchor.setTo(0.5, 0.5);
    this.exists = true;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
};

Trail.prototype = Object.create(Phaser.Sprite.prototype);

Trail.prototype.constructor = Trail;

Trail.prototype.update = function () {
};

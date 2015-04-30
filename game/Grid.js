'use strict';

var Grid = function (x, y, key) {
    Phaser.Sprite.call(this, config.game, x, y, key);
    this.game = config.game;
    game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);

};

Grid.prototype = Object.create(Phaser.Sprite.prototype);
Grid.prototype.constructor = Grid;
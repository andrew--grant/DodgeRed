'use strict';

var Collect = function (x, y) {
    Phaser.Sprite.call(this, config.game, x, y, config.sprites.collect.key);
    this.game = config.game;
    game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);
};

Collect.prototype = Object.create(Phaser.Sprite.prototype);
Collect.prototype.constructor = Collect;


Collect.prototype.update = function (spriteRef, tweenProps) {
    this.angle += 2;
};

Collect.prototype.playCollisionAnimation = function (spriteRef, tweenProps) {
    // todo: implement
};
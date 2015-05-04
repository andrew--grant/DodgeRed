'use strict';

var Collect = function (x, y, playerDisc) {
    Phaser.Sprite.call(this, config.game, x, y, config.sprites.collect.key);
    this.game = config.game;
    this.playerDisc = playerDisc;
    this.game.physics.arcade.enable(this);
    this.scale.setTo(0);
    game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);
};

Collect.prototype = Object.create(Phaser.Sprite.prototype);
Collect.prototype.constructor = Collect;


Collect.prototype.update = function (spriteRef, tweenProps) {
    this.angle += 2;
    if (this.scale.x < 1) {
        this.scale.setTo(this.scale.x + .2, this.scale.y + .2);
    }
    this.game.physics.arcade.overlap(this, this.playerDisc, function () {
        console.log("player disc to collect overlap");
        // todo: remove collect from game when hit
    });
};


'use strict';

var Disc = function (game, x, y, trailManager) {
    Phaser.Sprite.call(this, game, x, y, config.sprites.disc.key);
    this.trailManager = trailManager;
    this.game = game;
    this.startTrailCounterLoop();
    this.anchor.setTo(0.5, 0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.num = -1;
    this.lastUsed = 0;
};

Disc.prototype = Object.create(Phaser.Sprite.prototype);
Disc.prototype.constructor = Disc;

Disc.prototype.update = function () {
    if (this.num % 2 == 0 && this.num != this.lastUsed) {
        this.trailManager.add(this.x, this.y);
        this.lastUsed = this.num;
    }
};

Disc.prototype.startTrailCounterLoop = function () {
    this.timerLoop = this.game.time.events.loop(50, function () {
        this.num += 1 ;
    }, this);
};

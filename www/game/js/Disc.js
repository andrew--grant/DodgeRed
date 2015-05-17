'use strict';

var Disc = function (game, x, y, trailManager, playerDisc) {
    Phaser.Sprite.call(this, game, x, y, Main.Config.sprites.disc.key);
    this.game.physics.arcade.enable(this);
    this.playerDisc = playerDisc;
    this.trailManager = trailManager;
    this.playerDisc = playerDisc;
    this.game = game;
    this.startTrailCounterLoop();
    this.scale.set(.6, .6);
    this.anchor.setTo(0.5, 0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.num = -1;
    this.lastUsed = 0;
    this.self = self;
};

Disc.prototype = Object.create(Phaser.Sprite.prototype);
Disc.prototype.constructor = Disc;

Disc.prototype.update = function () {
    if (this.num % 2 == 0 && this.num != this.lastUsed) {
        this.trailManager.add(this.x, this.y);
        this.lastUsed = this.num;
    }
    var self = this;
    this.game.physics.arcade.overlap(this, this.playerDisc, function () {
        //self.game.state.start('gameOver');
    });
};

Disc.prototype.startTrailCounterLoop = function () {
    this.timerLoop = this.game.time.events.loop(50, function () {
        this.num += 1;
    }, this);
};

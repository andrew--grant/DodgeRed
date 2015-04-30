'use strict';

var Disc = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'disc');
    this.game = game;
    this.anchor.setTo(0.5, 0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    this.events.onOutOfBounds.add(this.destroy, this);

    this.num = -1;
    this.lastUsed = 0;
    this.startTrailLoop();

};

Disc.prototype = Object.create(Phaser.Sprite.prototype);

Disc.prototype.constructor = Disc;

Disc.prototype.update = function () {

    if (this.num % 2 == 0 && this.num != this.lastUsed) {
        this.lastUsed = this.num;
        var trailSprite = this.game.add.sprite(this.x, this.y, 'disc');
        trailSprite.anchor.setTo(0.5, 0.5);
        trailSprite.scale.setTo(.2);
        trailSprite.alpha = .2;
        this.game.add.tween(trailSprite)
            .to({alpha: 0}, 1400, Phaser.Easing.Linear.None, true);
    }
}

Disc.prototype.startTrailLoop = function () {
    //this.num = -1;
    this.timerLoop = this.game.time.events.loop(75, function () {
        this.num++;
    }, this);
}

Disc.prototype.destroy = function () {
    //this.game.time.events.remove(this.timerLoop);
    console.log("been killed");
}

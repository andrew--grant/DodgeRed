'use strict';

var PlayerDisc = function (x, y) {
    Phaser.Sprite.call(this, config.game, x, y, config.sprites.playerDisc.key);
    this.game.physics.arcade.enable(this);
    //this.body.immovable = true;
    this.game = config.game;
    game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);
    this.scale.set(.8, .8);
    this.inputDisabled = false;
    this.leftMostMove = config.gridSpawnLocations[0][0];
    this.rightMostMove = config.gridSpawnLocations[5][0];
    this.topMostMove = config.gridSpawnLocations[0][1];
    this.bottomMostMove = config.gridSpawnLocations[7][1];
    var self = this;
    this.game.input.keyboard.onDownCallback = function (e) {
        self.move(e, self);
    }
};

PlayerDisc.prototype = Object.create(Phaser.Sprite.prototype);
PlayerDisc.prototype.constructor = PlayerDisc;

PlayerDisc.prototype.update = function () {
    // todo: test for collisions here
    // (should work now physics enabled!)
};

PlayerDisc.prototype.doTween = function (spriteRef, tweenProps) {
    var self = this;
    if (!self.inputDisabled) {
        self.inputDisabled = true;
        var moveTween = game.add.tween(spriteRef);
        moveTween.to(tweenProps, 200).onComplete.add(function () {
            self.inputDisabled = false;
        });
        moveTween.easing(Phaser.Easing.Back.Out);
        moveTween.start();
    }
};

PlayerDisc.prototype.move = function (key, spriteRef) {
    var moveDist = 100;
    switch (key.keyCode) {
        case Phaser.Keyboard.LEFT:
            if (!(spriteRef.x == this.leftMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x - moveDist});
            }
            break;
        case Phaser.Keyboard.RIGHT :
            if (!(spriteRef.x == this.rightMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x + moveDist});
            }
            break;
        case Phaser.Keyboard.UP:
            if (!(spriteRef.y == this.topMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y - moveDist});
            }
            break;
        case Phaser.Keyboard.DOWN :
            if (!(spriteRef.y == this.bottomMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y + moveDist});
            }
            break;
    }
};
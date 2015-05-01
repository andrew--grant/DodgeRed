'use strict';

var PlayerDisc = function (x, y, key) {

    Phaser.Sprite.call(this, config.game, x, y, key);
    this.game = config.game;
    game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);
    this.scale.set(.8,.8);
    this.inputDisabled = false;

    var self = this;
    this.game.input.keyboard.onDownCallback = function (e) {
        self.move(e, self);
    }
};

PlayerDisc.prototype = Object.create(Phaser.Sprite.prototype);
PlayerDisc.prototype.constructor = PlayerDisc;

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
            if (!(spriteRef.x == 300)) {
                this.doTween(spriteRef, {x: spriteRef.x - moveDist});
            }
            break;
        case Phaser.Keyboard.RIGHT :
            if (!(spriteRef.x == 500)) {
                this.doTween(spriteRef, {x: spriteRef.x + moveDist});
            }
            break;
        case Phaser.Keyboard.UP:
            if (!(spriteRef.y == 650)) {
                this.doTween(spriteRef, {y: spriteRef.y - moveDist});
            }
            break;
        case Phaser.Keyboard.DOWN :
            if (!(spriteRef.y == 850)) {
                this.doTween(spriteRef, {y: spriteRef.y + moveDist});
            }
            break;
    }
};
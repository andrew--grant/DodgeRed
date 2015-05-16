'use strict';

var PlayerDisc = function (x, y, game, score) {
    Phaser.Sprite.call(this, game, x, y, Main.Config.sprites.playerDisc.key);
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.score = score;
    this.game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);
    this.scale.set(.8, .8);
    this.inputDisabled = false;
    this.leftMostMove = Main.Config.collectSpawnLocations[0][0];
    this.rightMostMove = Main.Config.collectSpawnLocations[5][0];
    this.topMostMove = Main.Config.collectSpawnLocations[0][1];
    this.bottomMostMove = Main.Config.collectSpawnLocations[7][1];
    var self = this;
    this.game.input.keyboard.onDownCallback = function (e) {
        self.move(e, self);
    };
    Main.hammer.get('swipe').set({direction: Hammer.DIRECTION_ALL, threshold:500, velocity:150});
    Main.hammer.on("swipeleft swiperight swipeup swipedown", function (evt) {
        self.swiped(evt, self);
    });
};

PlayerDisc.prototype = Object.create(Phaser.Sprite.prototype);
PlayerDisc.prototype.constructor = PlayerDisc;

PlayerDisc.prototype.update = function () {
};

PlayerDisc.prototype.doTween = function (spriteRef, tweenProps) {
    var self = this;
    if (!self.inputDisabled) {
        self.inputDisabled = true;
        var moveTween = this.game.add.tween(spriteRef);// todo: beware of the 'Uncaught TypeError: Cannot read property 'add' of null' error
        moveTween.to(tweenProps, 200).onComplete.add(function () {
            self.inputDisabled = false;
        });
        moveTween.easing(Phaser.Easing.Back.Out);
        moveTween.start();
    }
};

PlayerDisc.prototype.swiped = function (evt, spriteRef) {
    console.log("xxxxxxx " + evt.type + " " + evt.target + " " + spriteRef.x + "/" + spriteRef.y);
    var moveDist = 100;
    switch (evt.type) {
        case "swipeleft":
            if (!(spriteRef.x == this.leftMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x - moveDist});
            }
            break;
        case "swiperight" :
            if (!(spriteRef.x == this.rightMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x + moveDist});
            }
            break;
        case "swipeup":
            if (!(spriteRef.y == this.topMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y - moveDist});
            }
            break;
        case "swipedown" :
            if (!(spriteRef.y == this.bottomMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y + moveDist});
            }
            break;
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
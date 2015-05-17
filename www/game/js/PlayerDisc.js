'use strict';

var PlayerDisc = function (x, y, game, score) {
    Phaser.Sprite.call(this, game, x, y, Main.Config.sprites.playerDisc.key);
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.score = score;
    this.game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);
    this.scale.set(.4, .4);
    this.inputDisabled = false;
    this.leftMostMove = Main.Config.collectSpawnLocations[0][0];
    this.rightMostMove = Main.Config.collectSpawnLocations[5][0];
    this.topMostMove = Main.Config.collectSpawnLocations[0][1];
    this.bottomMostMove = Main.Config.collectSpawnLocations[7][1];
    var self = this;
    this.game.input.keyboard.onDownCallback = function (e) {
        self.move(e, self);
    };
    //Main.hammer.get('swipe').set({direction: Hammer.DIRECTION_ALL, threshold:0, velocity:0.05});
    //Main.hammer.on("swipeleft swiperight swipeup swipedown", function (evt) {
    //    self.swiped(evt, self);
    //});
    Main.hammer.get('pan').set({direction: Hammer.DIRECTION_ALL});
    Main.hammer.on("panstart", function (evt) {
        self.panned(evt.direction, self);
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

PlayerDisc.prototype.panned = function (direction, spriteRef) {
    // left 2, right 4, up 8, down 16
    console.log("dir " + direction);
    switch (direction) {
        case 2:
            if (!(spriteRef.x == this.leftMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x - Main.Config.moveDistance});
            }
            break;
        case 4 :
            if (!(spriteRef.x == this.rightMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x + Main.Config.moveDistance});
            }
            break;
        case 8:
            if (!(spriteRef.y == this.topMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y - Main.Config.moveDistance});
            }
            break;
        case 16 :
            if (!(spriteRef.y == this.bottomMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y + Main.Config.moveDistance});
            }
            break;
    }

};

PlayerDisc.prototype.move = function (key, spriteRef) {
    switch (key.keyCode) {
        case Phaser.Keyboard.LEFT:
            if (!(spriteRef.x == this.leftMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x - Main.Config.moveDistance});
            }
            break;
        case Phaser.Keyboard.RIGHT :
            if (!(spriteRef.x == this.rightMostMove)) {
                this.doTween(spriteRef, {x: spriteRef.x + Main.Config.moveDistance});
            }
            break;
        case Phaser.Keyboard.UP:
            if (!(spriteRef.y == this.topMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y - Main.Config.moveDistance});
            }
            break;
        case Phaser.Keyboard.DOWN :
            if (!(spriteRef.y == this.bottomMostMove)) {
                this.doTween(spriteRef, {y: spriteRef.y + Main.Config.moveDistance});
            }
            break;
    }
};
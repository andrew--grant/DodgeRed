'use strict';

var Disc = function (x, y, key) {
    Phaser.Sprite.call(this, config.game, x, y, key);
    this.game = config.game;
    game.add.existing(this);
    //game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.setTo(0.5, 0.5);

    // cannot move if trying to
    // go out of the grid area
    //this.canMove = true;

    var self = this;
    this.game.input.keyboard.onDownCallback = function (e) {
        self.move(e.keyCode, self);
    }


};

Disc.prototype = Object.create(Phaser.Sprite.prototype);
Disc.prototype.constructor = Disc;

Disc.prototype.create = function () {


};

Disc.prototype.update = function () {

};

Disc.prototype.move = function (direction, spriteRef) {

    // http://phaser.io/docs/2.3.0/Phaser.Easing.html

    var moveDistance = 100;

    switch (direction) {
        case 37: //"left"
            var tween1 = game.add.tween(spriteRef);
            tween1.to({x: 400}, 250).onComplete.add(function () {
                console.log("onComplete");
            });
            tween1.easing(Phaser.Easing.Bounce.Out)
            tween1.start();
            break;
        case 39 : // "right"
            console.log("direction right " + spriteRef.x);
            var tween1 = game.add.tween(spriteRef);
            tween1.to({x: 500}, 250).onComplete.add(function () {
                console.log("onComplete");
            });
            tween1.easing(Phaser.Easing.Bounce.Out)
            tween1.start();
            break;
        case 38: // "up"
            console.log("direction up");
            break;
        case 40 : // "down"
            console.log("direction down");
            break;
    }

};
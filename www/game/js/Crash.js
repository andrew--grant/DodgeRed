'use strict';

var Crash = function (game, disc, playerDisc) {
    this.game = game;
    this.playerDisc = playerDisc;
    this.disc = disc;
};


Crash.prototype.show = function () {
    var numFragments = 10;
    var gravity = 250;
    var timeToLive = 5000;
    var posOffScreen = -100
    var tweenDuration = 150;
    var scaleFactor = .6;
    var easing = "Linear";
    console.log(this);
    this.playerDisc.stop();
    var self = this;
    this.playerDisc.explode(function () {
        var t1 = game.add.tween(self.playerDisc);
        t1.to({alpha: 0}, tweenDuration, easing, false);
        t1.start();
        var t2 = game.add.tween(self.playerDisc.scale);
        t2.to({
            x: scaleFactor,
            y: scaleFactor
        }, tweenDuration, easing, false);
        t2.start();
        t2.onComplete.add(function () {
            self.playerDisc.destroy();
        });
        var playerDiscEmitter = game.add.emitter(self.playerDisc.x, self.playerDisc.y, numFragments);
        playerDiscEmitter.makeParticles(Main.Config.sprites.emitWhite.key);
        playerDiscEmitter.gravity = gravity;
        playerDiscEmitter.start(true, timeToLive, null, numFragments);
    });
    this.disc.stop();
    this.disc.explode(function () {
            var t1 = game.add.tween(self.disc);
            t1.to({alpha: 0}, tweenDuration, easing, false);
            t1.start();
            var t2 = game.add.tween(self.disc.scale);
            t2.to({
                x: scaleFactor,
                y: scaleFactor
            }, tweenDuration, easing, false);
            t2.start();
            t2.onComplete.add(function () {
                self.disc.destroy();
            });
            var discEmitter = game.add.emitter(self.disc.x, self.disc.y, numFragments);
            discEmitter.makeParticles(Main.Config.sprites.emitBlack.key);
            discEmitter.gravity = gravity;
            discEmitter.start(true, timeToLive, null, numFragments);
            var timer = game.time.events.add(3000, function () {
                self.text = game.add.text(game.world.centerX, game.world.centerY - 600, "Game Over\nPlay Again?", {
                    font: "60px " + Main.Config.fontFace,
                    fill: Main.Config.fontColor,
                    align: "center"
                });
                self.text.anchor.setTo(0.5);
                self.text.inputEnabled = true;
                self.text.events.onInputDown.add(function () {
                    game.state.start('game');
                }, this);


            });
        }
    );
};
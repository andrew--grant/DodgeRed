'use strict';

var CollectActions = function (game) {
    Phaser.Text.call(this, game, 250, 400, "",
        {font: "110px Revalia", fill: "#fff200", align: "center"});
    this.game = game;
    this.anchor.setTo(0.5, 0.5);
    this.game.add.existing(this);
    this.executingPopover = false;
    this.stopped = false;
    this.collectTween = this.game.add.tween(this);
};

CollectActions.prototype = Object.create(Phaser.Text.prototype);
CollectActions.prototype.constructor = CollectActions;

CollectActions.prototype.showPointsAndAnimate = function (pointsEarned, collectObj, collectManager, callback) {
    this.text = "+" + pointsEarned;
    this.x = collectObj.x;
    this.y = collectObj.y - 50;
    var self = this;
    if (!self.executingPopover) {
        self.executingPopover = true;
        collectObj.play('collectanim', 20, false, true);
        callback(pointsEarned);
        self.collectTween.to({y: this.y - 30}, 150, "Linear", false)
            .to({alpha: 0}, 350, "Linear", false);
        self.collectTween.start();
        self.collectTween.onComplete.add(function () {
            // wait a moment, spawn another
            game.time.events.add(500, function () {
                if (!self.stopped) {
                    collectManager.start();
                }
            }, this);
            self.executingPopover = false;
        });
    }
};

CollectActions.prototype.stop = function () {
    this.stopped = true;

}
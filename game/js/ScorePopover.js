'use strict';

var ScorePopover = function () {
    // http://support.ludei.com/hc/communities/public/questions/200706898-Problem-with-custom-fonts
    // http://blog.ludei.com/managing-fonts-in-cocoonjs-1-3/
    Phaser.Text.call(this, config.game, 250, 400, "",
        {font: "55px Arial", fill: "#fff200", align: "center"});
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
    this.executingPopover = false;
    // todo: combine with score obj and use aggregation instead of inheritance?
};

ScorePopover.prototype = Object.create(Phaser.Text.prototype);
ScorePopover.prototype.constructor = ScorePopover;

ScorePopover.prototype.popInOut = function (pointsEarned, x, y) {
    this.text = "+" + pointsEarned;
    this.x = x;
    this.y = y -50;
    var self = this;
    if(!self.executingPopover ){
        self.executingPopover = true;
        var tween = game.add.tween(this)
            .to({y: this.y - 30}, 250, "Linear", false)
            .to({alpha: 0}, 350, "Linear", false).start();
        tween.onComplete.add(function () {
            self.executingPopover = false;
        });
    }


};


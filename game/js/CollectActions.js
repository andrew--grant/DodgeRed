'use strict';

var CollectActions = function () {
    // http://support.ludei.com/hc/communities/public/questions/200706898-Problem-with-custom-fonts
    // http://blog.ludei.com/managing-fonts-in-cocoonjs-1-3/
    Phaser.Text.call(this, config.game, 250, 400, "",
        {font: "55px Revalia", fill: "#fff200", align: "center"});
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
    this.executingPopover = false;
};

CollectActions.prototype = Object.create(Phaser.Text.prototype);
CollectActions.prototype.constructor = CollectActions;

CollectActions.prototype.showPointsAndAnimate = function (pointsEarned, collectObj, callback) {
    this.text = "+" + pointsEarned;
    this.x = collectObj.x;
    this.y = collectObj.y -50;
    var self = this;
    if(!self.executingPopover ){
        self.executingPopover = true;
        collectObj.play('collectanim', 20, false, true);
        callback(pointsEarned);
        var tween = game.add.tween(this)
            .to({y: this.y - 30}, 250, "Linear", false)
            .to({alpha: 0}, 350, "Linear", false).start();
        tween.onComplete.add(function () {
            self.executingPopover = false;
        });
    }
};


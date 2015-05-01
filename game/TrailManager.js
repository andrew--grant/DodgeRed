var TrailManager = function () {
    this.game = config.game;
    this.trailGroup = this.game.add.group();
    console.log("inside TrailManager constructor");
};

TrailManager.prototype.add = function (x, y) {
    var trailSprite = this.getFromGroup();
    trailSprite.x = x;
    trailSprite.y = y;
    trailSprite.exists = true;
    trailSprite.anchor.setTo(0.5, 0.5);
    trailSprite.alpha = .2;
    var tween = this.game.add.tween(trailSprite)
        .to({alpha: 0}, 1400, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(function(){trailSprite.exists = false;}, this)
    console.log("this.trailGroup.total = " + this.trailGroup.total);
};

TrailManager.prototype.getFromGroup = function () {
    var trail = this.trailGroup.getFirstExists(false);
    if (trail == null) {
        trail = new Trail(this.game, -100, -100);
        this.trailGroup.add(trail);
        console.log("created a Trail xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        return trail;
    }
    console.log("recycled a Trail");
    return trail;
};
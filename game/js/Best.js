'use strict';

var Best = function () {
    // http://support.ludei.com/hc/communities/public/questions/200706898-Problem-with-custom-fonts
    // http://blog.ludei.com/managing-fonts-in-cocoonjs-1-3/
    this.bestScore = 0;
    this.bestScoreLabel = "Best: ";
    Phaser.Text.call(this, config.game, 900, 100, this.bestScoreLabel + " " + this.bestScore,
        {font: "50px Revalia", fill: "#fff200", align: "center"});
    game.add.existing(this);
};

Best.prototype = Object.create(Phaser.Text.prototype);
Best.prototype.constructor = Best;

Best.prototype.updateScore = function (score) {
    this.bestScore += score;
    this.text = this.bestScoreLabel + this.bestScore;
};

Best.prototype.update = function () {
};

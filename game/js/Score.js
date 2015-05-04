'use strict';

var Score = function () {
    // http://support.ludei.com/hc/communities/public/questions/200706898-Problem-with-custom-fonts
    // http://blog.ludei.com/managing-fonts-in-cocoonjs-1-3/
    this.currentScore = 0;
    this.scoreLabel = "Score: ";
    Phaser.Text.call(this, config.game, 50, 100, this.scoreLabel + " " + this.currentScore,
        {font: "65px Arial", fill: "#4422ff", align: "center"});
    game.add.existing(this);
};

Score.prototype = Object.create(Phaser.Text.prototype);
Score.prototype.constructor = Score;

Score.prototype.updateScore = function (score) {
    this.currentScore += score;
    this.text = this.scoreLabel + " " + this.currentScore;
};

Score.prototype.update = function () {
};

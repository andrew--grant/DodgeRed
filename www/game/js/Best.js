'use strict';

var Best = function (game) {
    this.bestScore = 0;
    this.bestScoreLabel = "Best: ";
    Phaser.Text.call(this, game, 50, 100, this.bestScoreLabel + this.bestScore,
        {font: "50px " + Main.Config.fontFace, fill: Main.Config.fontColor, align: "center"});
    this.game.add.existing(this);
};

Best.prototype = Object.create(Phaser.Text.prototype);
Best.prototype.constructor = Best;

Best.prototype.updateScore = function (score) {
    this.bestScore += score;
    this.text = this.bestScoreLabel + this.bestScore;
};

Best.prototype.update = function () {
};

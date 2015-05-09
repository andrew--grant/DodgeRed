'use strict';

var Score = function (game) {
    this.game = game;
    this.score = 0;
    this.scoreLabel = "Score: ";
    Phaser.Text.call(this, game, 50, 100, this.scoreLabel + " " + this.score,
        {font: "50px " + Main.Config.fontFace, fill: Main.Config.fontColor, align: "center"});
    this.game.add.existing(this);
};

Score.prototype = Object.create(Phaser.Text.prototype);
Score.prototype.constructor = Score;

Score.prototype.updateScore = function (score) {
    this.score += score;
    this.text = this.scoreLabel + this.score;
};

Score.prototype.update = function () {
};

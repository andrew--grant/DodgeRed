'use strict';

var Score = function (game) {
    this.game = game;
    this.score = 0;
    this.scoreLabel = "Score: ";
    Phaser.Text.call(this, game, 50, 100, this.scoreLabel + " " + this.score,
        {font: "50px Revalia", fill: "#fff200", align: "center"});
    this.game.add.existing(this);
    //todo: for text, may need to respond to events and then create these objects (score, best etc)
};

Score.prototype = Object.create(Phaser.Text.prototype);
Score.prototype.constructor = Score;

Score.prototype.updateScore = function (score) {
    this.score += score;
    this.text = this.scoreLabel + this.score;
};

Score.prototype.update = function () {
};

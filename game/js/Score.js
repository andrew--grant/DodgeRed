'use strict';

var Score = function () {
    // http://support.ludei.com/hc/communities/public/questions/200706898-Problem-with-custom-fonts
    // http://blog.ludei.com/managing-fonts-in-cocoonjs-1-3/
    this.score = 0;
    this.scoreLabel = "Score: ";
    Phaser.Text.call(this, config.game, 50, 100, this.scoreLabel + " " + this.score,
        {font: "50px Revalia", fill: "#fff200", align: "center"});
    game.add.existing(this);
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

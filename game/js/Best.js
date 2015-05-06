'use strict';

var Best = function () {
    // http://support.ludei.com/hc/communities/public/questions/200706898-Problem-with-custom-fonts
    // http://blog.ludei.com/managing-fonts-in-cocoonjs-1-3/
    this.currentScore = 0;
    this.scoreLabel = "Best: ";
    Phaser.Text.call(this, config.game, 900, 100, this.scoreLabel + " " + this.currentScore,
        {font: "50px Revalia", fill: "#fff200", align: "center"});
    game.add.existing(this);

    //todo: add 'Best' score to the right
};

Best.prototype = Object.create(Phaser.Text.prototype);
Best.prototype.constructor = Best;

Best.prototype.updateScore = function (score) {
    this.currentScore += score;
    this.text = this.scoreLabel + this.currentScore;
};

Best.prototype.update = function () {
};

'use strict';

var BackgroundGradient = function (game) {
    this.game = game;
    var h = this.game.height;
    var w = this.game.width;
    this.bmp = this.game.add.bitmapData(w, h);
    var grd = this.bmp.context.createLinearGradient(0, 0, 0, 800);
    grd.addColorStop(0, "#0054a6");
    grd.addColorStop(1, "#66ccff");

    this.bmp.context.fillStyle = grd;
    this.bmp.context.fillRect(0, 0, w, h);
};

BackgroundGradient.prototype.add = function () {
    var bmpSprite = this.game.add.sprite(0, 0, this.bmp);
    bmpSprite.alpha = 0;
    this.game.add.tween(bmpSprite).to({alpha: 1}, 1000).start();
};


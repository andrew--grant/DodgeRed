'use strict';

var Nimble = function (game, playerDisc) {
    this.playerDisc = playerDisc;
    this.game = game;
    this.timer = null;
    this.messageOverlay = null;
};

Nimble.prototype.constructor = Nimble;

Nimble.prototype.startNimble = function (seconds) {
    this.playerDisc.scaleForNimble();
    this.playerDisc.swooshSound = Main.swooshNimble;
    var cnt = seconds;
    var msg = "ride like the wind!\n";
    this.messageOverlay = new MessageOverlay(this.game, 0x0054a6, 0, 1500, game.width, 400, 110, 90, 90);
    this.messageOverlay.addTextContent(msg + cnt--, null);
    var myLoop = this.game.time.events.loop(1000, function () {
        if (cnt != seconds) {
            this.messageOverlay.updateTextContent(msg + cnt--);
        }
        if (cnt == -1) {
            this.endNimble();
            this.game.time.events.remove(myLoop);
        }
    }, this);
};

Nimble.prototype.endNimble = function () {
    this.playerDisc.scaleForNormal();
    this.playerDisc.swooshSound = Main.swoosh;
    this.messageOverlay.removeOverlay();
};


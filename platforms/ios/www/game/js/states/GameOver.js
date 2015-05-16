Main.GameOver = function (game) {
    this.game = game;
};

Main.GameOver.prototype = {

    create: function () {
        var bgGradient = new BackgroundGradient(this.game, "#0054a6", "#66ccff");
        bgGradient.add();
        this.text = game.add.text(game.world.centerX, game.world.centerY, "Game Over\nPlay Again?", {
            font: "90px " + Main.Config.fontFace,
            fill: Main.Config.fontColor,
            align: "center"
        });
        this.text.anchor.setTo(0.5);
        this.text.inputEnabled = true;
        this.text.events.onInputDown.add(function () {
            this.state.start('game');
        }, this);
    }
};
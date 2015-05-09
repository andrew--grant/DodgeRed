Main.Menu = function (game) {
    this.game = game;
};

Main.Menu.prototype = {

    create: function () {
        var bgGradient = new BackgroundGradient(this.game);
        bgGradient.add();
        // todo: start button for now, extend menu later
        this.text = game.add.text(game.world.centerX, game.world.centerY, "Start Game", {
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
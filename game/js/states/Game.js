Main.Game = function (game) {
    this.game = game;
};

Main.Game.prototype = {

    create: function () {
        //game.time.advancedTiming = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        var bgGradient = new BackgroundGradient(this.game);
        bgGradient.add();
        var grid = new Grid(this.game.stage.width / 2, this.game.stage.height / 2, this.game);
        grid.add();
        var score = new Score(this.game);
        var playerDisc = new PlayerDisc(this.game.stage.width / 2, this.game.stage.height / 2, this.game ,score);
        var discManager = new DiscManager(playerDisc, this.game);
        discManager.startAttacking();
        new CollectManager(playerDisc, this.game).start();
        var best = new Best(this.game);

    },

    update: function () {
        //console.log("game.time.fps: " + game.time.fps);
    }

};


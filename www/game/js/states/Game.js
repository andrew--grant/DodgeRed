Main.Game = function (game) {
    this.game = game;
};

Main.Game.prototype = {

    // todo: shorter trails
    // todo: score anim??
    // todo: ai tweaks
    // todo: remove top status bar on ios
    // todo: make bigger grid area and sprites
    // todo: start and game over effects
    // todo: performance honing
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var bgGradient = new BackgroundGradient(this.game, "#0054a6", "#66ccff");
        bgGradient.add();
        var grid = new Grid(this.game.stage.width / 2, this.game.stage.height / 2, this.game);
        grid.add();
        var score = new Score(this.game);
        var best = new Best(this.game);
        var playerDisc = new PlayerDisc(this.game.stage.width / 2, this.game.stage.height / 2, this.game, score);
        var discManager = new DiscManager(playerDisc, this.game);
        //discManager.startAttacking();
        var discLoop = new DiscLoop(this.game, discManager, score);
        discLoop.start();
        new CollectManager(playerDisc, this.game).start();
    }
};


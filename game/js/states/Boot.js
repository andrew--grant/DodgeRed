var Main = {}

Main.Boot = function (game) {
    this.game = game;
    console.log("game: " + game);
};

Main.Boot.prototype = {
    preload: function () {
        config = Configuration(this.game);// todo: attach this to Main, so we can do Main.Config
        this.game.load.script('webfont', 'lib/webfontloader.js');
        WebFontConfig = {
            custom: {
                families: ['Revalia'],
                urls: ['game/assets/fonts.css']
            }
        };
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.stage.backgroundColor = config.colors.backgroundColor;
        this.game.load.image(config.sprites.playerDisc.key, config.sprites.playerDisc.path);
        this.game.load.image(config.sprites.disc.key, config.sprites.disc.path);
        this.game.load.image(config.sprites.grid.key, config.sprites.grid.path);
        this.game.load.image(config.sprites.trail.key, config.sprites.trail.path);
        this.game.load.spritesheet(config.sprites.collect.key, config.sprites.collect.path, 100, 100);
//            var hammer = new Hammer(this.game.canvas);
//            hammer.get('pan').set({direction: Hammer.DIRECTION_ALL});
//            hammer.on("swipeleft swiperight swipeup swipedown", function (ev) {
//                console.log("ev " + ev.type);
//            });
    },

    create: function () {
        this.game.state.start('game');
    }
};
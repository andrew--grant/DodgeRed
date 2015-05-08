Main.Preloader = function (game) {
    this.game = game;
};

Main.Preloader.prototype = {
    preload: function () {

        this.load.onLoadComplete.addOnce(function () {
            this.ready = true;
        }, this);
        // load the loading screen sprites - a blank bar and a blue bar
        this.bck = this.add.sprite(this.world.centerX, this.world.centerY, Main.Config.sprites.loadingBackground.key);
        this.bck.anchor.setTo(0.5, 0.5);
        //this.bck.scale.setTo(0.5, 0.5);
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, Main.Config.sprites.loadingBar.key);
        //this.preloadBar.anchor.setTo(0, 0.5);
        //this.preloadBar.scale.setTo(0.5, 1);
        //this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;

        // this statement sets the blue bar to represent
        // the actual percentage of data loaded
        this.load.setPreloadSprite(this.preloadBar, 0);

        // load all the required assets in the game - sprites, music, fonts,etc
        this.game.load.script('webfont', 'lib/webfontloader.js');
        WebFontConfig = {
            custom: {
                families: ['Revalia'],
                urls: ['game/assets/fonts.css']
            }
        };
        this.game.load.image(Main.Config.sprites.playerDisc.key, Main.Config.sprites.playerDisc.path);
        this.game.load.image(Main.Config.sprites.disc.key, Main.Config.sprites.disc.path);
        this.game.load.image(Main.Config.sprites.grid.key, Main.Config.sprites.grid.path);
        this.game.load.image(Main.Config.sprites.trail.key, Main.Config.sprites.trail.path);
        this.game.load.image('dasd', 'http://www.charlesproxy.com/');
        this.game.load.spritesheet(Main.Config.sprites.collect.key, Main.Config.sprites.collect.path, 100, 100);

    },

    update: function () {
        //if (this.cache.isSoundDecoded('music') && this.ready == false) {
        if (this.ready) {
            this.state.start('game');
        }

    }

};


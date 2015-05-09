Main.Preloader = function (game) {
    this.game = game;
};

Main.fontsReady = false;

Main.Preloader.prototype = {
    preload: function () {


    },

    create: function () {
        game.load.onLoadStart.add(this.loadStart, this);
        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.onLoadComplete.add(this.loadComplete, this);
        this.start();
    },

    start: function () {
        this.game.load.image(Main.Config.sprites.playerDisc.key, Main.Config.sprites.playerDisc.path);
        //this.game.load.image('block', 'http://localhost:8888/');
        this.game.load.image(Main.Config.sprites.disc.key, Main.Config.sprites.disc.path);
        this.game.load.image(Main.Config.sprites.grid.key, Main.Config.sprites.grid.path);
        this.game.load.image(Main.Config.sprites.trail.key, Main.Config.sprites.trail.path);
        this.game.load.spritesheet(Main.Config.sprites.collect.key, Main.Config.sprites.collect.path, 100, 100);
        this.game.load.script('webfont', 'lib/webfontloader.js');
        WebFontConfig = {
            custom: {
                families: ['Revalia'],
                urls: ['game/assets/fonts.css']
            },
            active: function () {
                Main.fontsReady = true;
            }
        };
        this.game.load.start();
    },

    loadStart: function () {
        console.log("loadStart");
    },

    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
        console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles + " status is " + success);
    },

    loadComplete: function () {
        console.log("progress: " + this.game.load.progress);
        // wait for for fonts to be active
        // (the loader loads the script only)
        game.time.events.loop(500, function () {
            if (Main.fontsReady) {
               this.state.start('menu');
            }
        }, this);


    }
};

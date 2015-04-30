var DiscManager = function () {

    this.game = config.game;
    this.discGroup = new DiscGroup(this.game);
    this.padding = 20;//-155;
    this.colWidth = 155 + this.padding;


    this.yCenter = this.game.height / 2;
    this.yLeft = this.yCenter - this.colWidth;
    this.yRight = this.yCenter + this.colWidth;
    this.xCenter = this.game.width / 2;
    this.xLeft = this.xCenter - this.colWidth;
    this.xRight = this.xCenter + this.colWidth;


    for (var i = 0; i < 15; i++) {
        var d = new Disc(this.game, -100, -100);
        d.exists = false;
        this.discGroup.add(d);
        this.game.physics.arcade.enable(d);
        d.body.velocity.y = 500;
    }

    this.game.time.events.loop(2000, function () {
        var disc = this.discGroup.getFirstExists(false);
        this.game.physics.arcade.enable(disc);
        disc.exists = true;
        //disc.startTrailLoop();
        disc.x = this.game.width / 2;
        disc.y = 200;
        disc.body.velocity.y = 500;
    }, this);

}

DiscManager.prototype.addDiscs = function () {

    this.discGroup.forEach(function (item) {
        //this.game.physics.arcade.enable(item);
        //item.body.velocity.x = 325;
    }, this);

}
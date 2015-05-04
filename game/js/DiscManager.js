var DiscManager = function () {
    this.game = config.game;
    this.discGroup = this.game.add.group();
    this.trailManager = new TrailManager();// todo: one only, make singleton access?
    this.padding = 20;//-155;
    this.colWidth = 155 + this.padding;
    this.yCenter = this.game.height / 2;
    this.yLeft = this.yCenter - this.colWidth;
    this.yRight = this.yCenter + this.colWidth;
    this.xCenter = this.game.width / 2;
    this.xLeft = this.xCenter - this.colWidth;
    this.xRight = this.xCenter + this.colWidth;
};

DiscManager.prototype.startAttacking = function () {
    this.game.time.events.loop(2000, function () {
        var disc = this.getFromGroup();
        this.game.physics.arcade.enable(disc);
        disc.exists = true;
        this.game.physics.arcade.enable(disc);
        disc.body.velocity.y = 400;
        //disc.tint = config.colors.discTint;
        disc.x = this.game.width / 2;
        disc.y = -50;
    }, this);
};

DiscManager.prototype.getFromGroup = function () {
    var disc = this.discGroup.getFirstExists(false);
    if (disc === null) {
        disc = new Disc(this.game, -100, -100, this.trailManager);
        this.discGroup.add(disc);
        return disc;
    }
    return disc;
};
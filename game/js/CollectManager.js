var CollectManager = function () {
    this.game = config.game;
};

CollectManager.prototype.startAttacking = function () {
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

CollectManager.prototype.spawn = function () {

};
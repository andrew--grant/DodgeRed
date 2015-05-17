var CollectManager = function (playerDisc, game) {
    this.game = game;
    this.playerDisc = playerDisc;
    this.waitTime = 3000;
    this.lastSpawnPos = [0, 0];
};

CollectManager.prototype.getRandomPosition = function () {
    var centerx = this.game.width / 2;
    var centery = this.game.height / 2;
    var gridSpawnLocations =
        [
            [centerx - Main.Config.moveDistance, centery - Main.Config.moveDistance],
            [centerx, centery - Main.Config.moveDistance],
            [centerx + Main.Config.moveDistance, centery - Main.Config.moveDistance],
            [centerx - Main.Config.moveDistance, centery],
            [centerx, centery],
            [centerx + Main.Config.moveDistance, centery],
            [centerx - Main.Config.moveDistance, centery + Main.Config.moveDistance],
            [centerx, centery + Main.Config.moveDistance],
            [centerx + Main.Config.moveDistance, centery + Main.Config.moveDistance]
        ];
    return Main.Config.collectSpawnLocations[this.game.rnd.integerInRange(0, 8)]
};

CollectManager.prototype.start = function () {
    var pos = this.getRandomPosition();
    console.log(pos);
    if (pos[0] == this.lastSpawnPos[0] && pos[1] == this.lastSpawnPos[1]) {
        // random location same as last, lets
        // avoid a respawn in the same location
        console.log("tried a second time, and used..");
        var newPos = this.getRandomPosition();
        console.log(newPos);
        new Collect(newPos[0], newPos[1], this);
        this.lastSpawnPos = pos;
        return;
    }
    this.lastSpawnPos = pos;
    new Collect(pos[0], pos[1], this);
};


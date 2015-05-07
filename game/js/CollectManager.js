var CollectManager = function (playerDisc, game) {
    this.game = game;
    this.playerDisc = playerDisc;
    this.waitTime = 3000;
};

CollectManager.prototype.getRandomPosition = function () {
    var centerx = this.game.width / 2;
    var centery = this.game.height / 2;
    var gridSpawnLocations =
        [
            [centerx - 100, centery - 100],
            [centerx, centery - 100],
            [centerx + 100, centery - 100],
            [centerx - 100, centery],
            [centerx, centery],
            [centerx + 100, centery],
            [centerx - 100, centery + 100],
            [centerx, centery + 100],
            [centerx + 100, centery + 100]
        ];
    return config.gridSpawnLocations[ this.game.rnd.integerInRange(0, 8)]
};

CollectManager.prototype.start = function () {
    //todo: on a timer, or there till collected?
    this.game.time.events.loop(this.waitTime, function () {
        var pos = this.getRandomPosition();
        new Collect(pos[0], pos[1], this.playerDisc, this.game);
    }, this);
};


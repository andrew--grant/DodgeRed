var CollectManager = function (playerDisc, game) {
    this.game = game;
    this.playerDisc = playerDisc;
    this.waitTime = 3000;
    this.lastSpawnPos = [0, 0];
    this.collect = null;
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

    var pos = null;
    if (this.playerDisc.score.getScore() == 0) {
        pos = [771, 1104]; // todo: consider alternate start pos, eg; random but not centre
    } else {
        pos = this.getRandomPosition();
    }

    for (var i = 0; i < 100; i++) {
        if (pos[0] == this.lastSpawnPos[0] && pos[1] == this.lastSpawnPos[1]) {
            pos = this.getRandomPosition();
            console.log("pos " + pos);
        }
        else {
            this.collect = new Collect(pos[0], pos[1], this);
            this.lastSpawnPos = pos;
            break;
        }
    }
    this.lastSpawnPos = pos;
};

CollectManager.prototype.stop = function () {
    this.collect.stop();
};
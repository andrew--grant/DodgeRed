'use strict';

var DiscLoop = function (game, discManager) {
    this.loopDuration = 2000;
    this.speed = 600;
    this.game = game;
    this.discManager = discManager;

    // general positions to base lanes upon
    var centerLaneTop = {x: this.game.width / 2, y: 0},
        centerLaneBottom = {x: this.game.width / 2, y: this.game.height},
        centerLaneLeft = {x: 0, y: this.game.height / 2},
        centerLaneRight = {x: this.game.width, y: this.game.width};


    // When its time to spawn we need to know where
    // to spawn from and what direction to travel in
    this.lanes = [
        // 3 lanes spawning from the left
        {spawnx: 0, spawny: 0, velocity: 0},
        {spawnx: centerLaneLeft.x, spawny: centerLaneLeft.y, velocity: {x: this.speed, y: 0}},
        {spawnx: 0, spawny: 0, velocity: 0},
        // 3 lanes spawning from the right
        {spawnx: 0, spawny: 0, velocity: 0},
        {spawnx: 0, spawny: 0, velocity: 0},
        {spawnx: 0, spawny: 0, velocity: 0},
        // 3 lanes spawning from the top
        {spawnx: 0, spawny: 0, velocity: 0},
        {spawnx: centerLaneTop.x, spawny: centerLaneTop.y, velocity: {x: 0, y: this.speed}},
        {spawnx: 0, spawny: 0, velocity: 0},
        // 3 lanes spawning from the bottom
        {spawnx: 0, spawny: 0, velocity: 0},
        {spawnx: 0, spawny: 0, velocity: 0},
        {spawnx: 0, spawny: 0, velocity: 0}
    ];


};

DiscLoop.prototype.start = function () {
    this.game.time.events.loop(this.loopDuration, function () {
        var disc = this.discManager.getFromGroup();
        disc.exists = true;
        disc.body.velocity.x = this.lanes[1].velocity.x;
        disc.body.velocity.y = this.lanes[1].velocity.y;
        disc.x = this.lanes[1].spawnx;
        disc.y = this.lanes[1].spawny;

        var disc2 = this.discManager.getFromGroup();
        disc2.exists = true;
        disc2.body.velocity.x = this.lanes[7].velocity.x;
        disc2.body.velocity.y = this.lanes[7].velocity.y;
        disc2.x = this.lanes[7].spawnx;
        disc2.y = this.lanes[7].spawny;

    }, this);
};

DiscLoop.prototype.findNextSpawnLane = function () {

};
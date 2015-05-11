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
        {spawnx: centerLaneLeft.x, spawny: centerLaneLeft.y - 100, velocity: {x: this.speed, y: 0}},
        {spawnx: centerLaneLeft.x, spawny: centerLaneLeft.y, velocity: {x: this.speed, y: 0}},
        {spawnx: centerLaneLeft.x, spawny: centerLaneLeft.y + 100, velocity: {x: this.speed, y: 0}},
        // 3 lanes spawning from the right
        {spawnx: centerLaneRight.x, spawny: centerLaneLeft.y - 100, velocity: {x: -this.speed, y: 0}},
        {spawnx: centerLaneRight.x, spawny: centerLaneLeft.y, velocity: {x: -this.speed, y: 0}},
        {spawnx: centerLaneRight.x, spawny: centerLaneLeft.y + 100, velocity: {x: -this.speed, y: 0}},
        // 3 lanes spawning from the top
        {spawnx: centerLaneTop.x + 100, spawny: centerLaneTop.y, velocity: {x: 0, y: this.speed}},
        {spawnx: centerLaneTop.x, spawny: centerLaneTop.y, velocity: {x: 0, y: this.speed}},
        {spawnx: centerLaneTop.x - 100, spawny: centerLaneTop.y, velocity: {x: 0, y: this.speed}},
        // 3 lanes spawning from the bottom
        {spawnx: centerLaneBottom.x + 100, spawny: centerLaneBottom.y, velocity: {x: 0, y: -this.speed}},
        {spawnx: centerLaneBottom.x, spawny: centerLaneBottom.y, velocity: {x: 0, y: -this.speed}},
        {spawnx: centerLaneBottom.x - 100, spawny: centerLaneBottom.y, velocity: {x: 0, y: -this.speed}},
    ];


};

DiscLoop.prototype.start = function () {
    this.game.time.events.loop(this.loopDuration, function () {


       //  Left to Right
        var disc0 = this.discManager.getFromGroup();
        disc0.exists = true;
        disc0.body.velocity.x = this.lanes[0].velocity.x;
        disc0.body.velocity.y = this.lanes[0].velocity.y;
        disc0.x = this.lanes[0].spawnx;
        disc0.y = this.lanes[0].spawny;


        var disc1 = this.discManager.getFromGroup();
        disc1.exists = true;
        disc1.body.velocity.x = this.lanes[1].velocity.x;
        disc1.body.velocity.y = this.lanes[1].velocity.y;
        disc1.x = this.lanes[1].spawnx;
        disc1.y = this.lanes[1].spawny;


        var disc2 = this.discManager.getFromGroup();
        disc2.exists = true;
        disc2.body.velocity.x = this.lanes[2].velocity.x;
        disc2.body.velocity.y = this.lanes[2].velocity.y;
        disc2.x = this.lanes[2].spawnx;
        disc2.y = this.lanes[2].spawny;

        //Right to Left
        var disc3 = this.discManager.getFromGroup();
        disc3.exists = true;
        disc3.body.velocity.x = this.lanes[3].velocity.x;
        disc3.body.velocity.y = this.lanes[3].velocity.y;
        disc3.x = this.lanes[3].spawnx;
        disc3.y = this.lanes[3].spawny;

        var disc4 = this.discManager.getFromGroup();
        disc4.exists = true;
        disc4.body.velocity.x = this.lanes[4].velocity.x;
        disc4.body.velocity.y = this.lanes[4].velocity.y;
        disc4.x = this.lanes[4].spawnx;
        disc4.y = this.lanes[4].spawny;

        var disc5 = this.discManager.getFromGroup();
        disc5.exists = true;
        disc5.body.velocity.x = this.lanes[5].velocity.x;
        disc5.body.velocity.y = this.lanes[5].velocity.y;
        disc5.x = this.lanes[5].spawnx;
        disc5.y = this.lanes[5].spawny;

        // Top to Bottom
        var disc6 = this.discManager.getFromGroup();
        disc6.exists = true;
        disc6.body.velocity.x = this.lanes[6].velocity.x;
        disc6.body.velocity.y = this.lanes[6].velocity.y;
        disc6.x = this.lanes[6].spawnx;
        disc6.y = this.lanes[6].spawny;


        var disc7 = this.discManager.getFromGroup();
        disc7.exists = true;
        disc7.body.velocity.x = this.lanes[7].velocity.x;
        disc7.body.velocity.y = this.lanes[7].velocity.y;
        disc7.x = this.lanes[7].spawnx;
        disc7.y = this.lanes[7].spawny;

        var disc8 = this.discManager.getFromGroup();
        disc8.exists = true;
        disc8.body.velocity.x = this.lanes[8].velocity.x;
        disc8.body.velocity.y = this.lanes[8].velocity.y;
        disc8.x = this.lanes[8].spawnx;
        disc8.y = this.lanes[8].spawny;


        //  Bottom to Top
        var disc9 = this.discManager.getFromGroup();
        disc9.exists = true;
        disc9.body.velocity.x = this.lanes[9].velocity.x;
        disc9.body.velocity.y = this.lanes[9].velocity.y;
        disc9.x = this.lanes[9].spawnx;
        disc9.y = this.lanes[9].spawny;


        var disc10 = this.discManager.getFromGroup();
        disc10.exists = true;
        disc10.body.velocity.x = this.lanes[10].velocity.x;
        disc10.body.velocity.y = this.lanes[10].velocity.y;
        disc10.x = this.lanes[10].spawnx;
        disc10.y = this.lanes[10].spawny;

        var disc11 = this.discManager.getFromGroup();
        disc11.exists = true;
        disc11.body.velocity.x = this.lanes[11].velocity.x;
        disc11.body.velocity.y = this.lanes[11].velocity.y;
        disc11.x = this.lanes[11].spawnx;
        disc11.y = this.lanes[11].spawny;

    }, this);
};

DiscLoop.prototype.findNextSpawnLane = function () {

};
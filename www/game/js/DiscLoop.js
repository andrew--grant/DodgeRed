'use strict';

var DiscLoop = function (game, discManager, score) {
    this.loopDuration = 2000;
    this.speed = 650;
    this.speedIncrease = 40;
    this.greaterThan = 5;
    this.game = game;
    this.discManager = discManager;
    this.score = score;
    this.difficultyLevel = 1;
    this.spawnDelay = 1000;
    this.lastScoreLoggedInLoop = 0;

    // general positions to base lanes upon
    var centerLaneTop = {x: this.game.width / 2, y: 0},
        centerLaneBottom = {x: this.game.width / 2, y: this.game.height},
        centerLaneLeft = {x: 0, y: this.game.height / 2},
        centerLaneRight = {x: this.game.width, y: this.game.width};

    // When its time to spawn we need to know where
    // to spawn from and what direction to travel in
    this.lanes = [
        // 3 lanes spawning from the left
        {
            spawnx: centerLaneLeft.x,
            spawny: centerLaneLeft.y - Main.Config.moveDistance,
            velocity: {x: this.speed, y: 0, applySpeedTo: 'x', negative: false}
        },
        {
            spawnx: centerLaneLeft.x,
            spawny: centerLaneLeft.y,
            velocity: {applySpeedTo: 'x', negative: false}
        },
        {
            spawnx: centerLaneLeft.x,
            spawny: centerLaneLeft.y + Main.Config.moveDistance,
            velocity: {applySpeedTo: 'x', negative: false}
        },
        // 3 lanes spawning from the right
        {
            spawnx: centerLaneRight.x,
            spawny: centerLaneLeft.y - Main.Config.moveDistance,
            velocity: {applySpeedTo: 'x', negative: true}
        },
        {
            spawnx: centerLaneRight.x,
            spawny: centerLaneLeft.y,
            velocity: {applySpeedTo: 'x', negative: true}
        },
        {
            spawnx: centerLaneRight.x,
            spawny: centerLaneLeft.y + Main.Config.moveDistance,
            velocity: {applySpeedTo: 'x', negative: true}
        },
        // 3 lanes spawning from the top
        {
            spawnx: centerLaneTop.x + Main.Config.moveDistance,
            spawny: centerLaneTop.y,
            velocity: {applySpeedTo: 'y', negative: false}
        },
        {
            spawnx: centerLaneTop.x,
            spawny: centerLaneTop.y,
            velocity: {applySpeedTo: 'y', negative: false}
        },
        {
            spawnx: centerLaneTop.x - Main.Config.moveDistance,
            spawny: centerLaneTop.y,
            velocity: {applySpeedTo: 'y', negative: false}
        },
        // 3 lanes spawning from the bottom
        {
            spawnx: centerLaneBottom.x + Main.Config.moveDistance,
            spawny: centerLaneBottom.y,
            velocity: {applySpeedTo: 'y', negative: true}
        },
        {
            spawnx: centerLaneBottom.x,
            spawny: centerLaneBottom.y,
            velocity: {applySpeedTo: 'y', negative: true}
        },
        {
            spawnx: centerLaneBottom.x - Main.Config.moveDistance,
            spawny: centerLaneBottom.y,
            velocity: {applySpeedTo: 'y', negative: true}
        },
    ];
};

DiscLoop.prototype.start = function () {
    // todo: investigate best way to speed up the loop
    this.game.time.events.loop(this.loopDuration, function () {

        // Difficulty:
        // Decrease greater than odds
        // increase speed (gradually over the 3 disc spawn points)
        // increase loop duration
        // decrease spawn delays
        // send random fast discs

        var score = this.score.getScore();
        if (score % 10 === 0 && score > 0) {
            if (this.lastScoreLoggedInLoop !== score) {
                this.speed += this.speedIncrease;
                if (this.greaterThan > 0) {
                    this.greaterThan -= 1;
                    this.spawnDelay -= 10;
                    this.difficultyLevel += 1;
                    console.log("dificulty level is: " + this.difficultyLevel);
                }
                this.lastScoreLoggedInLoop = score;
            }
        }

        var randomLane = this.game.rnd.integerInRange(0, 11);
        var disc = this.discManager.getFromGroup();
        disc.exists = true;
        if (this.lanes[randomLane].velocity.applySpeedTo == "x") {
            this.lanes[randomLane].velocity.negative == true ?
                disc.body.velocity.x = -this.speed : disc.body.velocity.x = this.speed;
            disc.body.velocity.y = 0;
        } else {
            this.lanes[randomLane].velocity.negative == true ?
                disc.body.velocity.y = -this.speed : disc.body.velocity.y = this.speed;
            disc.body.velocity.x = 0;
        }
        disc.x = this.lanes[randomLane].spawnx;
        disc.y = this.lanes[randomLane].spawny;


        var timer = game.time.events.add(this.spawnDelay, function () {
            var rand2 = this.game.rnd.integerInRange(0, 10) >= this.greaterThan;
            if (rand2) {
                randomLane = this.game.rnd.integerInRange(0, 11);
                var disc2 = this.discManager.getFromGroup();
                disc2.exists = true;
                if (this.lanes[randomLane].velocity.applySpeedTo == "x") {
                    this.lanes[randomLane].velocity.negative == true ?
                        disc2.body.velocity.x = -this.speed : disc2.body.velocity.x = this.speed;
                    disc2.body.velocity.y = 0;
                } else {
                    this.lanes[randomLane].velocity.negative == true ?
                        disc2.body.velocity.y = -this.speed : disc2.body.velocity.y = this.speed;
                    disc2.body.velocity.x = 0;
                }
                disc2.x = this.lanes[randomLane].spawnx;
                disc2.y = this.lanes[randomLane].spawny;
            }
        }, this);

        var timer = game.time.events.add(this.spawnDelay + 250, function () {
            var rand3 = this.game.rnd.integerInRange(0, 10) >= this.greaterThan;
            if (rand3 && this.difficultyLevel > 3) {
                randomLane = this.game.rnd.integerInRange(0, 11);
                var disc3 = this.discManager.getFromGroup();
                disc3.exists = true;
                if (this.lanes[randomLane].velocity.applySpeedTo == "x") {
                    this.lanes[randomLane].velocity.negative == true ?
                        disc3.body.velocity.x = -this.speed : disc3.body.velocity.x = this.speed;
                    disc3.body.velocity.y = 0;
                } else {
                    this.lanes[randomLane].velocity.negative == true ?
                        disc3.body.velocity.y = -this.speed : disc3.body.velocity.y = this.speed;
                    disc3.body.velocity.x = 0;
                }
                disc3.x = this.lanes[randomLane].spawnx;
                disc3.y = this.lanes[randomLane].spawny;

            }
        }, this);


        //var timer = game.time.events.add(this.spawnDelay + 400, function () {
        //    var rand4 = this.game.rnd.integerInRange(0, 10) >= this.greaterThan;
        //    if (rand4) {
        //        randomLane = this.game.rnd.integerInRange(0, 11);
        //        var disc4 = this.discManager.getFromGroup();
        //        disc4.exists = true;
        //        if (this.lanes[randomLane].velocity.applySpeedTo == "x") {
        //            this.lanes[randomLane].velocity.negative == true ?
        //                disc4.body.velocity.x = -this.speed : disc4.body.velocity.x = this.speed;
        //            disc4.body.velocity.y = 0;
        //        } else {
        //            this.lanes[randomLane].velocity.negative == true ?
        //                disc4.body.velocity.y = -this.speed : disc4.body.velocity.y = this.speed;
        //            disc4.body.velocity.x = 0;
        //        }
        //        disc4.x = this.lanes[randomLane].spawnx;
        //        disc4.y = this.lanes[randomLane].spawny;
        //
        //    }
        //}, this);


        // low chance fast disc
        // ....


    }, this);
};

DiscLoop.prototype.findNextSpawnLane = function () {

};

DiscLoop.prototype.allAtOnce = function () {
    // todo: just a demo, can remove

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
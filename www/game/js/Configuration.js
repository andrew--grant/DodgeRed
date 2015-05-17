var Configuration = function (game, moveDistance) {
    this.game = game;
    return {
        sprites: {
            playerDisc: {
                key: 'playerDisc',
                path: 'game/assets/player-disc.png'
            },
            disc: {
                key: 'disc',
                path: 'game/assets/disc.png'
            },
            grid: {
                key: 'grid',
                path: 'game/assets/grid.png'
            },
            trail: {
                key: 'trail',
                path: 'game/assets/trail.png'
            },
            collect: {
                key: 'collect',
                path: 'game/assets/collect-spritesheet.png'
            },
            loadingBar: {
                key: 'loadingBar',
                path: 'game/assets/loading-bar.png'
            },
            loadingBackground: {
                key: 'loadingBackground',
                path: 'game/assets/loading-background.png'
            }
        },
        backgroundColor: 0xffffff,
        fontColor: "#fff200",
        fontFace: "Revalia",
        moveDistance: moveDistance,
        collectSpawnLocations: [
            [this.game.width / 2 - moveDistance, this.game.height / 2 - moveDistance],
            [this.game.width / 2, this.game.height / 2 - moveDistance],
            [this.game.width / 2 + moveDistance, this.game.height / 2 - moveDistance],
            [this.game.width / 2 - moveDistance, this.game.height / 2],
            [this.game.width / 2, this.game.height / 2],
            [this.game.width / 2 + moveDistance, this.game.height / 2],
            [this.game.width / 2 - moveDistance, this.game.height / 2 + moveDistance],
            [this.game.width / 2, this.game.height / 2 + moveDistance],
            [this.game.width / 2 + moveDistance, this.game.height / 2 + moveDistance]
        ]
    };
};

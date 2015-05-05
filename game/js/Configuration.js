var Configuration = function (game) {
    console.log(game);
    return {
        game: game,
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
            }
        },
        colors: {
            backgroundColor: 0xffffff
        },
        gridSpawnLocations: [
            [game.width / 2 - 100, game.height / 2 - 100],
            [game.width / 2, game.height / 2 - 100],
            [game.width / 2 + 100, game.height / 2 - 100],
            [game.width / 2 - 100, game.height / 2],
            [game.width / 2, game.height / 2],
            [game.width / 2 + 100, game.height / 2],
            [game.width / 2 - 100, game.height / 2 + 100],
            [game.width / 2, game.height / 2 + 100],
            [game.width / 2 + 100, game.height / 2 + 100]
        ]
    };
};

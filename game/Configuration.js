var Configuration = function (game) {
    return {
        game: game,
        sprites: {
            playerDisc: {
                key: 'playerDisc',
                path: 'assets/player-disc.png'
            },
            disc: {
                key: 'disc',
                path: 'assets/disc.png'
            },
            grid: {
                key: 'grid',
                path: 'assets/grid.png'
            },
            trail: {
                key: 'trail',
                path: 'assets/trail.png'
            }
        },
        colors: {
            backgroundColor: 0xffffff
        },
        totalDiscSprites: 35
    };
};

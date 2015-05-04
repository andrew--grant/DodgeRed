var Configuration = function (game) {
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
                path: 'game/assets/collect.png'
            }
        },
        colors: {
            backgroundColor: 0xffffff
        }
    };
};

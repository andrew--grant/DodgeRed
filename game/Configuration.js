var Configuration = function (game) {
    return {
        game: game,
        paths: {
            disc: 'assets/disc.png',
            grid: 'assets/grid.png',
            trail: 'assets/trail.png'
        },
        colors: {
            backgroundColor: 0xffffff,
            discTint: 0x222222
        },
        totalDiscSprites: 35
    };
};

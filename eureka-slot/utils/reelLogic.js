export function generateSpin(symbols) {
    const reels = [];
    for (let i = 0; i < 5; i++) {
        const column = [];
        for (let j = 0; j < 3; j++) {
            column.push(Phaser.Utils.Array.GetRandom(symbols));
        }
        reels.push(column);
    }
    return reels;
}

export function evaluateWin(grid, paylines) {
    let totalWin = 0;
    paylines.forEach(line => {
        const firstSymbol = grid[0][line[0]];
        if (firstSymbol === 'STAR') return;
        let count = 1;
        for (let i = 1; i < line.length; i++) {
            const symbol = grid[i][line[i]];
            if (symbol === firstSymbol) {
                count++;
            } else {
                break;
            }
        }
        if (count >= 3) {
            totalWin += count; // simple win calculation
        }
    });
    return totalWin;
}

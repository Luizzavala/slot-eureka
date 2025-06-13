export function generateSpin(symbols, rng, reels = 5, rows = 3) {
    const grid = [];
    for (let i = 0; i < reels; i++) {
        const column = [];
        for (let j = 0; j < rows; j++) {
            const index = Math.floor(rng() * symbols.length);
            column.push(symbols[index]);
        }
        grid.push(column);
    }
    return grid;
}

export function evaluateWin(grid, paylines) {
    let totalWin = 0;
    paylines.forEach((line) => {
        const first = grid[0][line[0]];
        if (first === 'STAR') return;
        let count = 1;
        for (let i = 1; i < line.length; i++) {
            const symbol = grid[i][line[i]];
            if (symbol === first) {
                count++;
            } else {
                break;
            }
        }
        if (count >= 3) {
            totalWin += count;
        }
    });
    return totalWin;
}

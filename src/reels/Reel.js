import Symbol from '../symbols/Symbol.js';

export default class Reel {
    constructor(scene, x, symbols) {
        this.scene = scene;
        this.position = x;
        this.symbols = [];
        for (let i = 0; i < 3; i++) {
            const tex = Phaser.Utils.Array.GetRandom(symbols);
            const symbol = new Symbol(scene, x, 150 + i * 110, tex);
            this.symbols.push(symbol);
        }
    }

    spin(results, index, tweenManager) {
        const column = this.symbols;
        for (let i = 0; i < column.length; i++) {
            const sprite = column[i];
            const newTex = results[index][i];
            tweenManager.add({
                targets: sprite,
                y: sprite.y + 150,
                duration: 300,
                onComplete: () => {
                    sprite.setTexture(newTex);
                    sprite.y -= 150;
                }
            });
        }
    }

    getGridSymbols() {
        return this.symbols.map((s) => s.texture.key);
    }
}

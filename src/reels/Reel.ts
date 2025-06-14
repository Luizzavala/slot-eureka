import Phaser from 'phaser';
import Symbol from '../symbols/Symbol';

export default class Reel {
    private scene: Phaser.Scene;
    private position: number;
    private symbols: Symbol[];

    constructor(scene: Phaser.Scene, x: number, symbols: string[]) {
        this.scene = scene;
        this.position = x;
        this.symbols = [];
        for (let i = 0; i < 3; i++) {
            const tex = Phaser.Utils.Array.GetRandom(symbols);
            const symbol = new Symbol(scene, x, 150 + i * 110, tex);
            this.symbols.push(symbol);
        }
    }

    spin(results: string[][], index: number, tweenManager: Phaser.Tweens.TweenManager): void {
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

    getGridSymbols(): string[] {
        return this.symbols.map((s) => s.texture.key);
    }
}

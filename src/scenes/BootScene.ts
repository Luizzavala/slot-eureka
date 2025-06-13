interface PlaceholderSymbol {
    key: string;
    color: number;
    label: string;
}

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Here we could preload assets if we had real graphics or sounds
    }

    create(): void {
        // Generate placeholder textures for symbols
        const symbols: PlaceholderSymbol[] = [
            { key: 'CHERRY', color: 0xff0000, label: 'C' },
            { key: 'LEMON', color: 0xffff00, label: 'L' },
            { key: 'ORANGE', color: 0xffa500, label: 'O' },
            { key: 'GRAPE', color: 0x800080, label: 'G' },
            { key: 'WATERMELON', color: 0x00ff00, label: 'W' },
            { key: 'BELL', color: 0xffd700, label: 'B' },
            { key: 'STAR', color: 0xffffff, label: '*' },
            { key: 'SEVEN', color: 0xff0000, label: '7' }
        ];

        symbols.forEach(({ key, color, label }): void => {
            const g = this.add.graphics();
            g.fillStyle(color, 1);
            g.fillRect(0, 0, 100, 100);

            const text = this.add.text(50, 50, label, {
                font: '64px Arial',
                color: '#000'
            }).setOrigin(0.5);

            const rt = this.add.renderTexture(0, 0, 100, 100);
            rt.draw(g);
            rt.draw(text);
            rt.saveTexture(key);

            g.destroy();
            text.destroy();
            rt.destroy();
        });

        this.scene.start('GameScene');
    }
}

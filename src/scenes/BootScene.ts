import Phaser from 'phaser';

interface PlaceholderSymbol {
    key: string;
    color: number;
    label: string;
}

export default class BootScene extends Phaser.Scene {
    private progressBar!: any;
    private progressBox!: any;

    constructor() {
        super('BootScene');
    }

    preload(): void {
        this.createLoadingGraphics();

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
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width='100' height='100' fill='#${color.toString(16).padStart(6, '0')}'/><text x='50' y='70' font-family='Arial' font-size='64' text-anchor='middle' fill='#000'>${label}</text></svg>`;
            const url = 'data:image/svg+xml,' + encodeURIComponent(svg);
            this.load.image(key, url);
        });

        this.load.on('progress', this.updateProgressBar, this);
        this.load.on('complete', this.destroyLoadingGraphics, this);
    }

    create(): void {
        this.scene.start('GameScene');
    }

    private createLoadingGraphics(): void {
        this.progressBox = this.add.graphics();
        this.progressBox.fillStyle(0x222222, 0.8);
        this.progressBox.fillRect(240, 270, 320, 30);

        this.progressBar = this.add.graphics();
    }

    private updateProgressBar(value: number): void {
        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(240, 270, 320 * value, 30);
    }

    private destroyLoadingGraphics(): void {
        this.progressBar.destroy();
        this.progressBox.destroy();
    }
}

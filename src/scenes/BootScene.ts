import Phaser from 'phaser';

interface SymbolAsset {
    key: string;
    svg: string;
}

export default class BootScene extends Phaser.Scene {
    private progressBar!: any;
    private progressBox!: any;

    constructor() {
        super('BootScene');
    }

    preload(): void {
        this.createLoadingGraphics();

        const symbols: SymbolAsset[] = [
            {
                key: 'CHERRY',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="40" cy="60" r="15" fill="#ff4d4d" />
  <circle cx="60" cy="60" r="15" fill="#ff4d4d" />
  <path d="M50 45 v-20" stroke="#008000" stroke-width="4" />
  <path d="M50 25 C45 15,55 15,50 25" stroke="#008000" stroke-width="4" fill="none" />
</svg>`
            },
            {
                key: 'LEMON',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <ellipse cx="50" cy="50" rx="25" ry="15" fill="#fff44f" />
</svg>`
            },
            {
                key: 'ORANGE',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="20" fill="#ffa500" />
</svg>`
            },
            {
                key: 'GRAPE',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="40" r="10" fill="#8a2be2" />
  <circle cx="40" cy="50" r="10" fill="#8a2be2" />
  <circle cx="60" cy="50" r="10" fill="#8a2be2" />
  <circle cx="50" cy="60" r="10" fill="#8a2be2" />
</svg>`
            },
            {
                key: 'WATERMELON',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <ellipse cx="50" cy="55" rx="25" ry="15" fill="#00a859" />
  <ellipse cx="50" cy="55" rx="20" ry="10" fill="#ff3366" />
</svg>`
            },
            {
                key: 'BELL',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <path d="M50 30 C70 30,70 60,50 60 C30 60,30 30,50 30 Z" fill="#ffd700" />
  <rect x="45" y="60" width="10" height="10" fill="#ffd700" />
</svg>`
            },
            {
                key: 'STAR',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <polygon points="50,15 61,40 88,40 66,58 74,85 50,70 26,85 34,58 12,40 39,40"  fill="#fff14f" />
</svg>`
            },
            {
                key: 'SEVEN',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <text x="50" y="70" font-family="Arial" font-size="70" text-anchor="middle" fill="#ff0000">7</text>
</svg>`
            }
        ];

        symbols.forEach(({ key, svg }): void => {
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

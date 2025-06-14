import Phaser from 'phaser';
import GameManager from '../GameManager';
import config from '../config/gameConfig';

export default class GameScene extends Phaser.Scene {
    private manager!: GameManager;

    constructor() {
        super('GameScene');
    }

    create(): void {
        this.manager = new GameManager(this, config);
        this.add.rectangle(400, 300, 800, 600, 0x1a1a2d);
        const frame = this.add.graphics();
        frame.lineStyle(8, 0xffd700);
        frame.strokeRect(80, 40, 640, 520);

        const spinBtn = this.add.rectangle(700, 520, 120, 50, 0xff4444)
            .setInteractive()
            .setStrokeStyle(2, 0xffffff);
        this.add.text(700, 520, 'GIRAR', { font: '24px Arial', color: '#fff' }).setOrigin(0.5);
        spinBtn.on('pointerdown', () => {
            this.manager.spin();
        });

        const maxBetBtn = this.add.rectangle(560, 520, 120, 50, 0x4444ff)
            .setInteractive()
            .setStrokeStyle(2, 0xffffff);
        this.add.text(560, 520, 'APUESTA MAX', { font: '18px Arial', color: '#fff' }).setOrigin(0.5);
        maxBetBtn.on('pointerdown', () => {
            this.manager.setBetPerLine(5);
        });
    }
}

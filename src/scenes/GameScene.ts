import GameManager from '../GameManager.js';
import config from '../config/gameConfig.js';

export default class GameScene extends Phaser.Scene {
    private manager!: GameManager;

    constructor() {
        super('GameScene');
    }

    create(): void {
        this.manager = new GameManager(this, config);

        const spinBtn = this.add.rectangle(700, 500, 80, 40, 0x00ff00).setInteractive();
        this.add.text(700, 500, 'SPIN', { font: '20px Arial', color: '#000' }).setOrigin(0.5);
        spinBtn.on('pointerdown', () => {
            this.manager.spin();
        });
    }
}

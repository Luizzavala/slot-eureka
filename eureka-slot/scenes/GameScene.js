import paylines from '../config/paylines.js';
import { generateSpin, evaluateWin } from '../utils/reelLogic.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        this.reels = [];
        this.symbols = ['CHERRY', 'LEMON', 'ORANGE', 'GRAPE', 'WATERMELON', 'BELL', 'STAR', 'SEVEN'];
        this.balance = 1000;
        this.betPerLine = 1;
    }

    create() {
        this.createUI();
        this.createReels();
        this.updateBalanceText();
    }

    createUI() {
        this.balanceText = this.add.text(10, 10, '', { font: '20px Arial', color: '#fff' });
        this.winText = this.add.text(10, 40, '', { font: '20px Arial', color: '#fff' });

        const spinBtn = this.add.rectangle(700, 500, 80, 40, 0x00ff00).setInteractive();
        this.add.text(700, 500, 'SPIN', { font: '20px Arial', color: '#000' }).setOrigin(0.5);
        spinBtn.on('pointerdown', () => {
            if (!this.spinning) {
                this.spin();
            }
        });
    }

    createReels() {
        const startX = 150;
        for (let i = 0; i < 5; i++) {
            const column = [];
            for (let j = 0; j < 3; j++) {
                const symbol = this.add.image(startX + i * 110, 150 + j * 110, Phaser.Utils.Array.GetRandom(this.symbols));
                column.push(symbol);
            }
            this.reels.push(column);
        }
    }

    spin() {
        if (this.balance < this.betPerLine * paylines.length) {
            return;
        }
        this.spinning = true;
        this.balance -= this.betPerLine * paylines.length;
        this.updateBalanceText();

        const results = generateSpin(this.symbols);
        const tweens = [];
        for (let i = 0; i < this.reels.length; i++) {
            const column = this.reels[i];
            for (let j = 0; j < column.length; j++) {
                const symbol = column[j];
                const newTexture = results[i][j];
                tweens.push(this.tweens.add({
                    targets: symbol,
                    y: symbol.y + 150,
                    duration: 300,
                    onComplete: () => {
                        symbol.setTexture(newTexture);
                        symbol.y -= 150;
                    }
                }));
            }
        }

        this.time.delayedCall(350, () => {
            const win = evaluateWin(results, paylines);
            this.balance += win * this.betPerLine;
            this.winText.setText('Win: ' + win);
            this.updateBalanceText();
            this.spinning = false;
        });
    }

    updateBalanceText() {
        this.balanceText.setText('Credits: ' + this.balance);
    }
}

import { generateSpin, evaluateWin } from './utils/reelLogic.js';
import paylines from './utils/paylines.js';
import { mulberry32 } from './utils/rng.js';
import Reel from './reels/Reel.js';
import BalanceDisplay from './ui/BalanceDisplay.js';

export default class GameManager {
    constructor(scene, config) {
        this.scene = scene;
        this.symbols = config.symbols;
        this.balance = config.startingBalance;
        this.betPerLine = 1;
        this.rng = mulberry32(config.seed || Date.now());
        this.reels = [];
        this.ui = new BalanceDisplay(scene, 10, 10);
        this.createReels();
        this.ui.setBalance(this.balance);
    }

    createReels() {
        const startX = 150;
        for (let i = 0; i < 5; i++) {
            const reel = new Reel(this.scene, startX + i * 110, this.symbols);
            this.reels.push(reel);
        }
    }

    spin() {
        if (this.balance < this.betPerLine * paylines.length) {
            return;
        }
        this.balance -= this.betPerLine * paylines.length;
        this.ui.setBalance(this.balance);
        const results = generateSpin(this.symbols, this.rng);
        for (let i = 0; i < this.reels.length; i++) {
            this.reels[i].spin(results, i, this.scene.tweens);
        }
        this.scene.time.delayedCall(350, () => {
            const win = evaluateWin(results, paylines);
            this.balance += win * this.betPerLine;
            this.ui.setWin(win);
            this.ui.setBalance(this.balance);
        });
    }
}

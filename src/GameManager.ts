import Phaser from 'phaser';
import { generateSpin, evaluateWin } from './utils/reelLogic';
import paylines from './utils/paylines';
import { mulberry32 } from './utils/rng';
import Reel from './gameobjects/Reel';
import BalanceDisplay from './components/BalanceDisplay';

interface GameConfig {
    symbols: string[];
    startingBalance: number;
    seed?: number;
}

export default class GameManager {
    private scene: Phaser.Scene;
    private symbols: string[];
    private balance: number;
    private betPerLine: number;
    private rng: () => number;
    private reels: Reel[];
    private ui: BalanceDisplay;

    constructor(scene: Phaser.Scene, config: GameConfig) {
        this.scene = scene;
        this.symbols = config.symbols;
        this.balance = config.startingBalance;
        this.betPerLine = 1;
        this.rng = mulberry32(config.seed || Date.now());
        this.reels = [];
        this.ui = new BalanceDisplay(scene, 10, 10);
        this.createReels();
        this.ui.setBalance(this.balance);
        this.ui.setBet(this.betPerLine);
    }

    private createReels(): void {
        const startX = 150;
        for (let i = 0; i < 5; i++) {
            const reel = new Reel(this.scene, startX + i * 110, this.symbols);
            this.reels.push(reel);
        }
    }

    spin(): void {
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

    setBetPerLine(value: number): void {
        this.betPerLine = value;
        this.ui.setBet(this.betPerLine);
    }
}

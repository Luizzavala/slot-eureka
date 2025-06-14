import Phaser from 'phaser';

export default class BalanceDisplay {
    private scene: Phaser.Scene;
    private balanceText: Phaser.GameObjects.Text;
    private winText: Phaser.GameObjects.Text;
    private betText: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene = scene;
        this.balanceText = scene.add.text(x, y, '', { font: '26px Arial', color: '#fff' });
        this.winText = scene.add.text(x, y + 40, '', { font: '26px Arial', color: '#fff' });
        this.betText = scene.add.text(x, y + 80, '', { font: '26px Arial', color: '#fff' });
    }

    setBalance(balance: number): void {
        this.balanceText.setText('Credits: ' + balance);
    }

    setWin(win: number): void {
        this.winText.setText('Win: ' + win);
    }

    setBet(bet: number): void {
        this.betText.setText('Bet: ' + bet);
    }
}

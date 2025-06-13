export default class BalanceDisplay {
    constructor(scene, x, y) {
        this.scene = scene;
        this.balanceText = scene.add.text(x, y, '', { font: '20px Arial', color: '#fff' });
        this.winText = scene.add.text(x, y + 30, '', { font: '20px Arial', color: '#fff' });
    }

    setBalance(balance) {
        this.balanceText.setText('Credits: ' + balance);
    }

    setWin(win) {
        this.winText.setText('Win: ' + win);
    }
}

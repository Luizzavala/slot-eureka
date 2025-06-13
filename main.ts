import BootScene from './src/scenes/BootScene.js';
import GameScene from './src/scenes/GameScene.js';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: [BootScene, GameScene]
};

new Phaser.Game(config);

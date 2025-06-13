declare namespace Phaser {
    const AUTO: any;
    class Game {
        constructor(config: any);
    }
    class Scene {
        constructor(...args: any[]);
        [key: string]: any;
    }
    namespace GameObjects {
        class Image {
            constructor(...args: any[]);
            [key: string]: any;
        }
        class Text {
            constructor(...args: any[]);
            [key: string]: any;
        }
    }
    namespace Tweens {
        class TweenManager {
            [key: string]: any;
        }
    }
    namespace Utils {
        namespace Array {
            function GetRandom<T>(array: T[]): T;
        }
    }
    namespace Types {
        namespace Core {
            interface GameConfig {
                [key: string]: any;
            }
        }
    }
}

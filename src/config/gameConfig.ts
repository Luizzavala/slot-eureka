export interface GameConfigData {
    symbols: string[];
    payouts: Record<string, number>;
    paylines: number;
    rtp: number;
    startingBalance: number;
}

const config: GameConfigData = {
    symbols: ['CHERRY', 'LEMON', 'ORANGE', 'GRAPE', 'WATERMELON', 'BELL', 'STAR', 'SEVEN'],
    payouts: {},
    paylines: 25,
    rtp: 0.96,
    startingBalance: 1000,
};

export default config;

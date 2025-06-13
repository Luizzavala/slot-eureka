import { test } from 'node:test';
import assert from 'assert';
import { generateSpin, evaluateWin } from '../dist/src/utils/reelLogic.js';
import { mulberry32 } from '../dist/src/utils/rng.js';
import paylines from '../dist/src/utils/paylines.js';

const symbols = ['A', 'B', 'C'];

test('generateSpin creates grid', () => {
  const spin = generateSpin(symbols, mulberry32(1), 2, 2);
  assert.equal(spin.length, 2);
  assert.equal(spin[0].length, 2);
});

test('evaluateWin counts matches', () => {
  const grid = [
    ['A', 'A', 'B'],
    ['A', 'A', 'B'],
    ['A', 'A', 'B'],
    ['A', 'A', 'B'],
    ['A', 'A', 'B'],
  ];
  const win = evaluateWin(grid, [[0,0,0,0,0]]);
  assert.equal(win, 5);
});

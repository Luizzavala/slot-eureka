import { test } from 'node:test';
import assert from 'assert';
import { generateSpin, evaluateWin } from '../dist/src/utils/reelLogic.js';
import { mulberry32 } from '../dist/src/utils/rng.js';
import paylines from '../dist/src/utils/paylines.js';

const symbols = ['A', 'B', 'C', 'D'];

// Ensure spins are deterministic when using the same seed
test('generateSpin deterministic with fixed seed', () => {
  const spin1 = generateSpin(symbols, mulberry32(1), 2, 3);
  const spin2 = generateSpin(symbols, mulberry32(1), 2, 3);
  assert.deepStrictEqual(spin1, spin2);
});

// Validate that evaluateWin sums wins across multiple paylines
test('evaluateWin sums wins across paylines', () => {
  const grid = [
    ['A', 'A', 'A'],
    ['A', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
    ['A', 'A', 'A'],
  ];
  const lines = paylines.slice(0, 3); // horizontal lines
  const win = evaluateWin(grid, lines);
  assert.equal(win, 9);
});

// STAR symbol in first position should give no win
test('evaluateWin ignores STAR starts', () => {
  const grid = Array.from({ length: 5 }, () => Array(3).fill('STAR'));
  const win = evaluateWin(grid, [[0, 0, 0, 0, 0]]);
  assert.equal(win, 0);
});

// Require at least three matching symbols
test('evaluateWin requires three consecutive symbols', () => {
  const grid = [
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
    ['B', 'B', 'C'],
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
  ];
  const win = evaluateWin(grid, [[0, 0, 0, 0, 0]]);
  assert.equal(win, 0);
});

// RNG should produce repeatable values
test('mulberry32 deterministic first value', () => {
  const rngA = mulberry32(1);
  const rngB = mulberry32(1);
  assert.equal(rngA(), rngB());
});

// RNG values must be between 0 and 1
test('mulberry32 values in range', () => {
  const rng = mulberry32(5);
  for (let i = 0; i < 5; i++) {
    const v = rng();
    assert.ok(v >= 0 && v < 1);
  }
});

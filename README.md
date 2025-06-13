# Eureka Slot

Base skeleton for a classic 5x3 slot machine built with Phaser 3.

## Getting Started

1. **Install dependencies** (only necessary if you want to rebuild the TypeScript sources)

   ```bash
   npm install
   ```

2. **Build the project**

   ```bash
   npm run build
   ```

   This compiles the TypeScript files in `src/` into JavaScript.

3. **Launch the game**

   Open `index.html` in a modern browser. The game renders a placeholder set of
   symbols and provides a single _SPIN_ button to play.

## Repository Structure

- `src/` – TypeScript source files for the game logic, scenes and utility
  functions.
- `tests/` – small test suite executed with Node's built‑in test runner.

## Running Tests

Execute the unit tests with:

```bash
npm test
```

The script builds the project and then runs all files in `tests/` using
`node --test`.

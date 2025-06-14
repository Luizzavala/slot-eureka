# Eureka Slot

Base skeleton for a classic 5x3 slot machine built with Phaser 3 and bundled
using Vite.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm run dev
   ```

   Vite will serve the game at `http://localhost:5173`.

3. **Create a production build**

 ```bash
  npm run build
  ```

The Vite configuration compresses image assets and separates third-party
libraries into a dedicated `vendor` chunk for faster loading.

## Repository Structure

- `src/` – TypeScript source files.
  - `scenes/` – different Phaser scenes.
  - `gameobjects/` – reusable game object classes like reels and symbols.
  - `components/` – UI components such as the balance display.
  - `utils/` – generic helper functions.
  - `config/` – game configuration data.
- `tests/` – small test suite executed with Node's built‑in test runner.

## Running Tests

Execute the unit tests with:

```bash
npm test
```

The script builds the project and then runs all files in `tests/` using
`node --test`.

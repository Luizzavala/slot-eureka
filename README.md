# Eureka Slot

Eureka Slot es un esqueleto base para una máquina tragamonedas 5x3 desarrollada
con Phaser 3 y empaquetada con Vite.

## Arquitectura del Juego

El código se organiza en escenas y objetos de juego:

- **BootScene** genera las texturas de ejemplo y redirige a la escena
  principal.
- **GameScene** contiene la lógica del juego y crea un `GameManager`.
- **GameManager** controla el saldo, los carretes y evalúa las combinaciones.
- **Reel** y **Symbol** representan los carretes y sus símbolos.
- Los utilitarios en `utils/` generan las tiradas y calculan los premios.

## Configuración del Entorno de Desarrollo

Requiere Node.js 18 o superior. Para instalar las dependencias y ejecutar el
servidor de desarrollo:

```bash
npm install
npm run dev
```

El juego se servirá en `http://localhost:5173`. Para crear una build de
producción:

```bash
npm run build
```

La optimización de imágenes se realiza con el plugin `vite-imagetools`, que
procesa los archivos durante la fase de build.

El repositorio incluye configuración de **ESLint** y **Prettier** para mantener
un estilo de código consistente. Puedes ejecutarlos manualmente con los
scripts `npm run lint` y `npm run format`.

## Scripts Disponibles

- `npm run dev` &ndash; Arranca Vite en modo desarrollo con recarga en caliente.
- `npm run build` &ndash; Genera la versión optimizada en `dist/`.
- `npm run preview` &ndash; Sirve la build de producción de forma local.
- `npm run compile` &ndash; Compila los archivos TypeScript a JavaScript.
- `npm test` &ndash; Compila el proyecto y ejecuta la suite de pruebas.
- `npm run lint` &ndash; Ejecuta ESLint sobre los archivos de `src/` y `tests/`.
- `npm run format` &ndash; Aplica Prettier a todo el repositorio.

## Estructura del Repositorio

- `src/` &ndash; Código fuente en TypeScript.
  - `scenes/` &ndash; Escenas de Phaser.
  - `gameobjects/` &ndash; Objetos del juego como carretes y símbolos.
  - `components/` &ndash; Componentes de UI como el indicador de saldo.
  - `utils/` &ndash; Funciones auxiliares y lógica de juego.
  - `config/` &ndash; Datos de configuración de la partida.
- `tests/` &ndash; Pequeña suite de pruebas con el runner nativo de Node.

## Ejecutar Pruebas

Para lanzar la suite de pruebas:

```bash
npm test
```

El comando compila el código y luego ejecuta los archivos de `tests/` mediante
`node --test`.

## Cómo Contribuir

1. Realiza un fork del repositorio y crea una rama para tu aporte.
2. Asegúrate de que `npm test` pasa antes de abrir una PR.
3. Describe claramente el cambio propuesto y cualquier información relevante.

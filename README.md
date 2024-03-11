# Orion Theme

Modern theme for vscode, focused on cleanness and customizability, built on
`Radix Colors`' palette.

## Gallery

### Rust (mint)

![Rust (mint)](assets/screenshots/rust-mint.png)

### TypeScript (indigo)

![TypeScript (indigo)](assets/screenshots/typescript-indigo.png)

### TypeScript React (plum)

![TypeScript React (plum)](assets/screenshots/typescriptreact-plum.png)

## Design Philosophy

1. Every color should be used purposively.
2. Flat UI make its space look larger.
3. Richer syntax highlight color is better.
4. Should be customizable.

## Getting Started

### Install from VSCode Marketplace

https://marketplace.visualstudio.com/items?itemName=SaiYs.orion-vscode

### Build from source

1. Clone the repository

   ```sh
   gh repo clone SaiYs/Orion
   ```

2. Build the extension

   ```sh
   deno task build
   ```

   Then, `orion.vsix` is generated in the project's root.

3. Install the VSIX file

   ```sh
   code --install-extension orion.vsix
   ```

   Alternatively, you can also choose `Extensions: Install from VSIX...` from
   command palette in VSCode, and select `orion.vsix` to install.

## Preference

### `orion-vscode.accentColor`

#### default: `indigo`

Pick your favorite color from the colorful palette by `Radix Colors`.

### `orion-vscode.neutralGray`

#### default: `false`

By default, saturated grayscale colors from `Radix Colors` are used. If you
prefer desaturated grayscale colors, you can disable it and use neutral gray
colors.

## Language support

- Rust
- JavaScript
- TypeScript
- JavaScript React
- TypeScript React
- HTML
- CSS
- JSON
- TOML
- YAML
- Markdown

You don't find your one? Issue or PRs are welcome!

## Inspirated by

Orion is made from lots of inspiration by others' themes and library. Thanks for
great works.

- [vscode(Deno binding)](https://github.com/narumincho/vscode)

- [Night Wolf](https://github.com/mao-santaella-rs/NightWolfTheme)
- [Catppuccin](https://github.com/catppuccin/vscode)
- [One Hunter Theme](https://github.com/Railly/one-hunter-vscode)

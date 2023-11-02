# Orion Theme

A constomizable vscode theme, built on `Deno` and `Radix Colors`.

## Design Philosophy

1. Every color should be used purposively.
2. Flat UI make its space look larger.
3. Richer syntax highlight color is better.
4. Should be customizable.

## Installation

1. Clone repository

   ```sh
   gh repo clone SaiYs/Orion
   ```

2. Build with the command

   ```sh
   deno task build
   ```

   Then, `orion.vsix` is generated in the project's root.

3. Install VSIX file

   ```sh
   code --install-extension orion.vsix
   ```

   Alternatively, you can also choose `Extensions: Install from VSIX...` from
   command palette in VSCode, and select `orion.vsix` to install.

## Configuration

TODO: description of configuration

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

## Gallery

TODO: Add screenshots

## Inspirated by

Orion is made from lots of inspiration by others' themes. Thanks for great
works.

- [Night Wolf](https://github.com/mao-santaella-rs/NightWolfTheme)
- [Catppuccin](https://github.com/catppuccin/vscode)
- [One Hunter Theme](https://github.com/Railly/one-hunter-vscode)

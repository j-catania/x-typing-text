# Typing Text Webcomponent
TODO: Write a project description

![StencilJS Build](https://github.com/Juu-/x-typing-text/workflows/Build%20StencilJS/badge.svg)
<span class="badge-npmversion"><a href="https://npmjs.org/package/x-typing-text" title="View this project on NPM"><img src="https://img.shields.io/npm/v/x-typing-text.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/x-typing-text" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/x-typing-text.svg" alt="NPM downloads" /></a></span>
<span class="badge-badge"><a href="https://david-dm.org/Juu-/x-typing-text" title="David Dependencies Badge"><img src="https://david-dm.org/Juu-/x-typing-text/status.svg" alt="David Dependencies Badge" /></a></span>
<span class="badge-badge"><a href="https://david-dm.org/Juu-/x-typing-text?type=dev" title="David Dev Dependencies Badge"><img src="https://david-dm.org/Juu-/x-typing-text/dev-status.svg" alt="David Dev Dependencies Badge" /></a></span>
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/x-typing-text)

## Example
<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/x-typing-text@0.1.1/dist/x-typing-text/x-typing-text.esm.js"></script>
    <script nomodule src="https://unpkg.com/x-typing-text@0.1.1/dist/x-typing-text/x-typing-text.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<x-typing-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut">
</x-typing-text>
```

## Installation
```
npm i x-typing-text
```

or, import in HTML file

```html
<script type="module" src="https://unpkg.com/x-typing-text@0.1.1/dist/x-typing-text/x-typing-text.esm.js"></script>
<script nomodule src="https://unpkg.com/x-typing-text@0.1.1/dist/x-typing-text/x-typing-text.js"></script>
```

## Usage
```html
<x-typing-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
               waiting-time="500"
               delay="1000">
</x-typing-text>
```
### Properties
| Property | type | Description | Default |
| --- | --- | --- | --- |
| `text` | string | The text who will be typing |  |
| `waiting-time` | number | The delay between each characters  | 500 |
| `delay` | number | The delay to start typing | 0 |

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## History
TODO: Write history
## Credits
TODO: Write credits
## License
TODO: Write license

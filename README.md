# Bootstrap 5 Modal Close on Back Button

A lightweight JavaScript utility that enhances Bootstrap 5 modals to close modals when browser back button is pressed.

It can be used in combination with: [modal dynamic](https://github.com/FranBar1966/bootstrap-5-modal-dynamic)

## Features

- **Close a bootstrap modal with back button**
- No dependencies other than Bootstrap 5
- Lightweight (~1KB minified)
- No additional configuration needed - works out of the box!

## Installation

### Via CDN

```html
<script src="https://cdn.jsdelivr.net/gh/FranBar1966/bootstrap-5-modal-close-on-back@master/src/modal-close-on-back.min.js"></script>
```

### Download

Download the script from GitHub repository: [close on back button](https://github.com/FranBar1966/bootstrap-5-modal-close-on-back) and include in your HTML:

```html
<script src="path/to/modal-close-on-back.min.js"></script>
```

## Usage

Simply include the script after Bootstrap 5 - no additional configuration needed. You can add the script to your current html without making any changes at all.

### See: [DEMO](https://franbar1966.github.io/bootstrap-5-modal-dynamic/example/)

### Modal example

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample" >
    Open modal
</button>

<div class="modal fade" id="modalExample" tabindex="-1" aria-labelledby="modalExampleLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalExampleLabel">Close modal on back button</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                You can click the Back Button to close this modal.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/gh/FranBar1966/bootstrap-5-modal-close-on-back@master/src/modal-close-on-back.min.js"></script>
```

## License

The MIT License (MIT)

Copyright © 2025 github.com/FranBar1966

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

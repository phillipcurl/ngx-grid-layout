# ngx-grid-layout
[![Build Status](https://travis-ci.org/phillipcurl/ngx-grid-layout.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-grid-layout)
[![codecov](https://codecov.io/gh/phillipcurl/ngx-grid-layout/branch/master/graph/badge.svg)](https://codecov.io/gh/phillipcurl/ngx-grid-layout)
[![npm version](https://badge.fury.io/js/ngx-grid-layout.svg)](http://badge.fury.io/js/ngx-grid-layout)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-grid-layout/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-grid-layout?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-grid-layout.svg)](https://github.com/phillipcurl/ngx-grid-layout/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-grid-layout.svg)](https://github.com/phillipcurl/ngx-grid-layout/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-grid-layout/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-grid-layout/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular component Layout engine using CSS Grid Layout

## Installation

Install through npm:
```
npm install --save ngx-grid-layout
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxGridLayoutModule } from 'ngx-grid-layout';

@NgModule({
  imports: [
    NgxGridLayoutModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-grid-layout/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-grid-layout/bundles/ngx-grid-layout.umd.js"></script>
<script>
    // everything is exported ngxGridLayout namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://phillipcurl.github.io/ngx-grid-layout/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT

# MSW React Native Wrapper

A convenient wrapper for MSW (Mock Service Worker) with React Native support.

## Features

- Dynamic Mock Scenarios
- Seamless react native integration
- In-place database store with read/write access.

## Pre-requisites

1. Add the following plugins to babel.config.js:

```js
'@babel/plugin-transform-flow-strip-types',
['@babel/plugin-transform-private-methods', { loose: true }],
```

2. In your entry file, add `import 'msw-rn-wrapper';`

## Installation

```sh
npm install msw-rn-wrapper
or
yarn add msw-rn-wrapper
```

## Usage

```js
import { MSWProvider } from 'msw-rn-wrapper';

<MSWProvider enabled={true}>
  {' '}
  // Should be enabled based on env // ...
</MSWProvider>;
```

To activate the mock service worker during development, use `⌃⌘Z` and select `View MSW Settings`.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Written for use by [@PLT (PrettyLittleThing)]('https://www.prettylittlething.com/').

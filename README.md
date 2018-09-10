# overdub
[![Build Status](https://travis-ci.org/splayd/overdub.svg?branch=master)](https://travis-ci.org/splayd/overdub)

Add full ES.Next support to Node.js

## Usage
Install [overdub](https://yarnpkg.com/en/package/overdub)
by running:

```sh
yarn add --dev overdub
```

Import `overdub/register` from the `node` CLI or from a test runner. For
example:

```sh
node -r overdub/register
```

Support for all standardized ECMAScript features is provided via Babel. React
and Flow syntax is also supported.

Stack traces for `async` functions, which are
[not currently supported](https://github.com/nodejs/node/issues/11865) in
Node.js, are provided via
[`trace`](https://github.com/AndreasMadsen/trace#readme).

For test runners and other CLI tools that require users to specify a Babel
config, reuse the `overdub` Babel config like so:

```json
{
  "extends": "overdub/babel"
}
```

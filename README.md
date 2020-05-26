# commitlint-plugin-references

A `commitlint` rule for conditionally requiring references in commit messages for given types.

> Forked from https://github.com/episerver/commitlint-plugin-references
> But since it seems not be maintained. So I forked it and make a new package.

## Installation

**yarn**
```sh
yarn add --dev commitlint-plugin-references
```

**npm**
```sh
npm install --save-dev commitlint-plugin-references
```

## Usage

To configure that references should never be empty for `fix` and `feat`. It is also possible to specify the issue prefix in `parserPreset`, the default value is `#`.

```js
module.exports = {
    plugins: [
        "references"
    ],
    rules: {
        "references-empty-enum": [
            2,
            "never",
            [
                "fix",
                "feat"
            ]
        ]
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ["ABC-"]
        }
    }
};
```

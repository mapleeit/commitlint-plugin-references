# @episerver/commitlint-plugin-references

A `commitlint` rule for conditionally requiring references in commit messages for given types.

## Installation

**yarn**
```sh
yarn add --dev @episerver/commitlint-plugin-references
```

**npm**
```sh
npm install --save-dev @episerver/commitlint-plugin-references
```

## Usage

To configure that references should never be empty for `fix` and `feat`. It is also possible to specify the issue prefix in `parserPreset`, the default value is `#`.

```js
module.exports = {
    plugins: [
        "@episerver/references"
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

# open.string-case

Dependency-free string case conversion between camel, Pascal, kebab, snake, and title case.

## Install

```bash
npm install @journey-to-code/open-string-case
```

## Usage

```js
import { camelCase, kebabCase, snakeCase, pascalCase, titleCase } from "@journey-to-code/open-string-case";
camelCase("hello-world"); // "helloWorld"
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT

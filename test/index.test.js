import test from "node:test";
import assert from "node:assert/strict";
import { splitWords, camelCase, pascalCase, kebabCase, snakeCase, titleCase } from "../src/index.js";

test("splits common identifier styles", () => {
  assert.deepEqual(splitWords("helloWorld_API-value"), ["hello", "World", "API", "value"]);
});
test("converts cases", () => {
  assert.equal(camelCase("hello world"), "helloWorld");
  assert.equal(pascalCase("hello-world"), "HelloWorld");
  assert.equal(kebabCase("HelloWorld"), "hello-world");
  assert.equal(snakeCase("Hello World"), "hello_world");
  assert.equal(titleCase("hello_world"), "Hello World");
});
test("rejects non-strings", () => assert.throws(() => camelCase(42), TypeError));

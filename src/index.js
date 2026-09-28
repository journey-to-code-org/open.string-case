function assertString(value) {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
}

export function splitWords(value) {
  assertString(value);
  return value
    .trim()
    .replace(/([a-z0-9])([A-Z])/gu, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/gu, "$1 $2")
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
}

export function camelCase(value) {
  const words = splitWords(value);
  return words.map((w, i) => i === 0 ? w.toLocaleLowerCase() :
    w.charAt(0).toLocaleUpperCase() + w.slice(1).toLocaleLowerCase()).join("");
}

export function pascalCase(value) {
  return splitWords(value)
    .map(w => w.charAt(0).toLocaleUpperCase() + w.slice(1).toLocaleLowerCase())
    .join("");
}

export function kebabCase(value) {
  return splitWords(value).map(w => w.toLocaleLowerCase()).join("-");
}

export function snakeCase(value) {
  return splitWords(value).map(w => w.toLocaleLowerCase()).join("_");
}

export function titleCase(value) {
  return splitWords(value)
    .map(w => w.charAt(0).toLocaleUpperCase() + w.slice(1).toLocaleLowerCase())
    .join(" ");
}

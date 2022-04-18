const { stringify } = require("javascript-stringify");
const { writeFileSync } = require("fs");
const { resolve, join } = require("path");
const { writeJsonSync, readJsonSync } = require("fs-extra");

const schemaFile = join(__dirname, "../schema.json");
const schema = readJsonSync(schemaFile);

writeFileSync(
  resolve(__dirname, "../src/schema.ts"),
  `export const schema = ${stringify(schema)}`
);

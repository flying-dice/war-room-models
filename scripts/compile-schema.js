const { stringify } = require("javascript-stringify");
const { writeFileSync } = require("fs");
const { resolve } = require("path");

const schema = require("../schema.json");

writeFileSync(
  resolve(__dirname, "../schema.js"),
  `export default ${stringify(schema)}`
);

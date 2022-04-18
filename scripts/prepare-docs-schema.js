const { join, dirname } = require("path");
const { ensureDir, writeJsonSync } = require("fs-extra");

const dest = join(__dirname, "../", ".schema", "models.schema.json");

ensureDir(dirname(dest));

let schema = require("../schema.json");



schema = {
  title: "War Room Models",
  description: "All War Room Data Models",
  ...schema,
};

writeJsonSync(dest, schema);

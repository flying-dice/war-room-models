const { join, dirname } = require("path");
const { ensureDir, writeJsonSync, readJsonSync } = require("fs-extra");

const schemaFile = join(__dirname, "../schema.json");
const dest = join(__dirname, "../", ".schema", "models.schema.json");

ensureDir(dirname(dest));

let schema = readJsonSync(schemaFile);

schema = {
  title: "War Room Models",
  description: "All War Room Data Models",
  ...schema,
};

writeJsonSync(dest, schema);

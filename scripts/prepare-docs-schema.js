const { join, dirname } = require("path");
const { ensureDir, writeJsonSync } = require("fs-extra");

const dest = join(__dirname, "../", ".schema", "models.schema.json")

ensureDir(dirname(dest));

let schema = require("../schema.json");

schema = JSON.parse(JSON.stringify(schema).replaceAll("#/definitions", "./models.schema.json/#/definitions"))

writeJsonSync(dest, schema)
import isPort from "validator/lib/isPort";
import isSemVer from "validator/lib/isSemVer";
import isISO31661Alpha2 from "validator/lib/isISO31661Alpha2";
import isISO8601 from "validator/lib/isISO8601";

export const formats = [
  {
    name: "port",
    type: "number",
    validate: (it) => isPort(`${it}`),
  },
  {
    name: "semver",
    type: "string",
    validate: (it) => isSemVer(`${it}`),
  },
  {
    name: "iso-31661-alpha-2",
    type: "string",
    validate: (it) => isISO31661Alpha2(it.split("-")[0]),
  },
  {
    name: "iso-8601",
    type: "string",
    validate: (it) => isISO8601(it)
  }
];

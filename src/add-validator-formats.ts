import Ajv from "ajv";
import {formats} from "./formats";

export const addValidatorFormats = (ajv: Ajv) => {
    for (const { name, type, validate } of formats) {
        ajv.addFormat(name, { type, validate } as any);
    }
};
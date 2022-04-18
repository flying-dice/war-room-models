import { schema } from "./schema";
import Ajv, { ErrorObject } from "ajv";

const ajv = new Ajv({ allErrors: true });
ajv.addSchema({...schema, $id: undefined})

export const assertModel = <T>(
  object: T,
  id: keyof typeof schema.definitions
) => {
  const keyRef = `#/definitions/${id}`;
  const validator = ajv.getSchema(keyRef);
  if (!validator) {
    throw new Error(`Failed to find model schema with keyRef ${keyRef}`);
  }

  if (!validator(object)) {
    throw new Ajv.ValidationError(<ErrorObject[]>validator.errors);
  }
};

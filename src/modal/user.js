import validate from "./validator";

export const SCHEMA_ID = "http://ajv-demo/user.json";

export const validateForUser = data =>
  validate(data, `${SCHEMA_ID}#/definitions/ForUser`);

// Front-End
export function validateForUserItem(json, target) {
  return validate(json, `${SCHEMA_ID}#/definitions/${target}`);
}

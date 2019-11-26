import validate from "./validator";

export const SCHEMA_ID = "http://ajv-demo/user.json";

export const validateForEditProfile = data =>
  validate(data, `${SCHEMA_ID}#/definitions/ForEditProfile`);

// Front-End
export function validateForSignUpItem(json, target) {
  const validTarget = { [target]: json };
  return validate(validTarget, `${SCHEMA_ID}#/definitions`);
}

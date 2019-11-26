import validate from "./validator";

export const SCHEMA_ID = "http://ajv-demo/signUp.json";

export const validateForSignUp = data =>
  validate(data, `${SCHEMA_ID}#/definitions/ForSignUp`);

// Front-End
export function validateForSignUpItem(json, target) {
  const validTarget = { [target]: json };
  return validate(validTarget, `${SCHEMA_ID}#/definitions`);
}

import validate from "./validator";

const SCHEMA_ID = "http://ajv-demo/signUp.json";

export const validateForSignUp = data =>
  validate(data, `${SCHEMA_ID}#/definitions/ForSignUp`);

// Front-End
export const validateForSignUpItem = data =>
  validate(data, `${SCHEMA_ID}#/definitions`);

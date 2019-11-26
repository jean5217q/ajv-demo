import validate from "./validator";

const SCHEMA_ID = "http://ajv-demo/editProfile.json";

export const validateForEditProfile = data =>
  validate(data, `${SCHEMA_ID}#/definitions/ForEditProfile`);

export function validateForEditProfileItem(json, target) {
  const validTarget = { [target]: json };
  return validate(validTarget, `${SCHEMA_ID}#/definitions`);
}

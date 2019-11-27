import validate from "./validator";

const SCHEMA_ID = "http://ajv-demo/editProfile.json";

export const validateForEditProfile = data =>
  validate(data, `${SCHEMA_ID}#/definitions/ForEditProfile`);

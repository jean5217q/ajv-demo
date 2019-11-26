import Ajv from "ajv";
import addAjvErrors from "ajv-errors";
import pointer from "json-pointer";
import CommonSchema from "./schema/common.json";
import SignUpSchema from "./schema/SignUp.json";
import EditProfileSchema from "./schema/EditProfile.json";

export const ajv = new Ajv({
  $data: true,
  allErrors: true,
  jsonPointers: true,
  schemas: {
    Common: CommonSchema,
    SignUp: SignUpSchema,
    EditProfile: EditProfileSchema
  }
});

addAjvErrors(ajv);

export function normalizeSingleError(errors = []) {
  let errorMessage = null;
  errors.forEach(error => {
    errorMessage = error.message;
  });
  return errorMessage;
}

export function normalizeAllError(ajvErrors = []) {
  const result = {};
  ajvErrors.forEach(error => {
    const { keyword, dataPath, params, message } = error;
    if (dataPath) {
      pointer.set(result, dataPath, message);
    } else if (keyword === "required") {
      result[params.missingProperty] = message;
    }
    if (keyword === "errorMessage" && !dataPath) {
      params.errors.forEach(oriError => {
        result[oriError.params.missingProperty] = message;
      });
    }
  });
  return result;
}

export default function validate(data, schema) {
  const isValid = ajv.validate(schema, data);
  if (!isValid) {
    throw ajv.errors;
  }
  return isValid;
}

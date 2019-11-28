import Ajv from 'ajv';
import addAjvErrors from 'ajv-errors';
import validate, { normalizeAllErrors } from '../../../src/model/validator';
import CommonSchema from '../../../src/model/schema/common.json';
import cases from './cases';

const SCHEMA_ID = 'http://ajv-demo/signUp.json#/definitions/';

const ajv = new Ajv({
  $data: true,
  allErrors: true,
  jsonPointers: true,
  schemas: {
    Common: CommonSchema,
  },
});

addAjvErrors(ajv);

describe('AJV validation rule for common data', () => {
  cases.worngTypeData.dataPool.forEach((data) => {
    for (let i = 0; i < data.valuePool.length; i += 1) {
      describe(`Input wrong type(${data.valuePool[i].typeName}) data of ${data.key}`, () => {
        test('should return error', () => {
          try {
            validate(value.value, `${SCHEMA_ID}name`);
          } catch (error) {
            expect(normalizeAllErrors(error)).toEqual('incompleteData'.responseError);
          }
        });
      });
    }
  });

  // describe('Input incomplete data', () => {
  //   cases.incompleteDatas.forEach((incompleteData) => {
  //     test(`${incompleteData.name} should get required error message`, () => {
  //       try {
  //         validateForEditProfile(incompleteData.data);
  //       } catch (error) {
  //         expect(normalizeAllErrors(error)).toEqual(incompleteData.responseError);
  //       }
  //     });
  //   });
  // });
});

import Ajv from 'ajv';
import addAjvErrors from 'ajv-errors';
import validate from '../../../src/model/validator';
import CommonSchema from '../../../src/model/schema/common.json';
import cases from './cases';

const SCHEMA_ID = 'http://ajv-demo/common.json#/definitions/';

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
  const { dataPool } = cases.worngTypeData;
  dataPool.forEach((data) => {
    data.valuePool.forEach((value) => {
      describe(`Input wrong type(${value.typeName}) data of ${data.key}`, () => {
        if (data.key === 'gender') {
          test('get "should be string" and "one of LGBTQ" error message', () => {
            try {
              validate(value.value, `${SCHEMA_ID}${data.key}`);
            } catch (error) {
              expect(error.length).toEqual(2);
              expect(error[0].message).toEqual('should be string');
              expect(error[1].message).toEqual('Should be one of LGBTQ');
            }
          });
        } else {
          test('get "should be string" error message', () => {
            try {
              validate(value.value, `${SCHEMA_ID}${data.key}`);
            } catch (error) {
              expect(error.length).toEqual(1);
              expect(error[0].message).toEqual('should be string');
            }
          });
        }
      });
    });
  });
});

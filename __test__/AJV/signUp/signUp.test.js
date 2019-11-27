import { validateForSignUp } from '../../../src/model/signUp';
import { normalizeAllErrors } from '../../../src/model/validator';
import cases from './cases';

describe('AJV validation rule for Sign up data', () => {
  describe('Input complete and all data leagal', () => {
    test('should return true', () => {
      expect(validateForSignUp(cases.allLegal)).toBeTruthy();
    });
  });
  describe('Input incomplete data', () => {
    cases.incompleteDatas.forEach((incompleteData) => {
      test(`${incompleteData.name} should get required error message`, () => {
        try {
          validateForSignUp(incompleteData.data);
        } catch (error) {
          expect(normalizeAllErrors(error)).toEqual(incompleteData.responseError);
        }
      });
    });
  });
  describe('Input confirmPassword not match password', () => {
    test('Should get not match mseeage', () => {
      try {
        validateForSignUp(cases.confirmPasswordNotMatch.data);
      } catch (error) {
        expect(normalizeAllErrors(error)).toEqual(cases.confirmPasswordNotMatch.responseError);
      }
    });
  });
});

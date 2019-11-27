import { validateForSignUp } from '../../src/modal/signUp';
import { normalizeAllError } from '../../src/modal/validator';
import cases from './cases';

describe('AJV validation rule for Sign up data', () => {
  describe('Input complete and all data leagal', () => {
    test('should return true', () => {
      expect(validateForSignUp(cases.allLegal)).toBeTruthy();
    });
  });
  describe('Input incomplete data', () => {
    test('without name should get required name error message', () => {
      try {
        validateForSignUp(cases.withoutName);
      } catch (error) {
        expect(normalizeAllError(error)).toContain();
      }
    });
  });
});

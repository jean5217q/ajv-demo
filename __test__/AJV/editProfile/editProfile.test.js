import { validateForEditProfile } from '../../../src/model/editProfile';
import { normalizeAllErrors } from '../../../src/model/validator';
import cases from './cases';

describe('AJV validation rule for Edit profile data', () => {
  describe('Input complete and all data leagal', () => {
    test('should return true', () => {
      expect(validateForEditProfile(cases.allLegal)).toBeTruthy();
    });
  });
  describe('Input incomplete data', () => {
    cases.incompleteDatas.forEach((incompleteData) => {
      test(`${incompleteData.name} should get required error message`, () => {
        try {
          validateForEditProfile(incompleteData.data);
        } catch (error) {
          expect(normalizeAllErrors(error)).toEqual(incompleteData.responseError);
        }
      });
    });
  });
});

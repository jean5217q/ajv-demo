export const onlyMaximin = [
  {
    dataPath: '/user',
    keyword: 'maximum',
    message: 'should be <= 12',
    params: { comparison: '<=', limit: 12, exclusive: false },
    schemaPath: '#/properties/user/maximum',
  },
];

// 回傳預設與自定義
export const MaximunWithErrorMessage = [
  {
    dataPath: '/user',
    keyword: 'maximum',
    message: 'should be <= 12',
    params: { comparison: '<=', limit: 12, exclusive: false },
    schemaPath: '#/properties/user/maximum',
  },
  {
    dataPath: '/user',
    keyword: 'errorMessage',
    message: 'over the number',
    params: {
      errors: [
        {
          dataPath: '/user',
          keyword: 'maximum',
          message: 'should be <= 12',
          params: { comparison: '<=', limit: 12, exclusive: false },
          schemaPath: '#/properties/user/maximum',
        },
      ],
    },
    schemaPath: '#/properties/user/errorMessage',
  },
];

export const UserAndNameWithRequiredNoData = [
  {
    dataPath: '',
    keyword: 'required',
    message: "should have required property 'user'",
    params: { missingProperty: 'user' },
    schemaPath: '#/required',
  },
  {
    dataPath: '',
    keyword: 'required',
    message: "should have required property 'name'",
    params: { missingProperty: 'name' },
    schemaPath: '#/required',
  },
];
// input user(user wrong data) / no name
export const UserAndNameWithRequired = [
  {
    dataPath: '/user',
    keyword: 'maximum',
    message: 'should be <= 12',
    params: { comparison: '<=', limit: 12, exclusive: false },
    schemaPath: '#/properties/user/maximum',
  },
  {
    dataPath: '/user',
    keyword: 'errorMessage',
    message: 'over the number',
    params: {
      errors: [
        {
          dataPath: '/user',
          keyword: 'maximum',
          message: 'should be <= 12',
          params: { comparison: '<=', limit: 12, exclusive: false },
          schemaPath: '#/properties/user/maximum',
        },
      ],
    },
    schemaPath: '#/properties/user/errorMessage',
  },
  {
    dataPath: '',
    keyword: 'required',
    message: "should have required property 'name'",
    params: { missingProperty: 'name' },
    schemaPath: '#/required',
  },
];

export default undefined;

export const UserAndNameWithRequiredNoDataErrorMessage = [
  {
    dataPath: '',
    keyword: 'required',
    message: "should have required property 'user'",
    params: { missingProperty: 'user' },
    schemaPath: '#/required',
  },
  {
    dataPath: '',
    keyword: 'required',
    message: "should have required property 'name'",
    params: { missingProperty: 'name' },
    schemaPath: '#/required',
  },
  {
    dataPath: '',
    keyword: 'errorMessage',
    message: 'required filed',
    params: {
      errors: [
        {
          dataPath: '',
          keyword: 'required',
          message: "should have required property 'user'",
          params: { missingProperty: 'user' },
          schemaPath: '#/required',
        },
        {
          dataPath: '',
          keyword: 'required',
          message: "should have required property 'name'",
          params: { missingProperty: 'name' },
          schemaPath: '#/required',
        },
      ],
    },
    schemaPath: '#/errorMessage',
  },
];

export const UserAndNameWithRequiredErrorMessage = [
  {
    dataPath: '/user',
    emUsed: true,
    keyword: 'maximum',
    message: 'should be <= 12',
    params: { comparison: '<=', limit: 12, exclusive: false },
    schemaPath: '#/properties/user/maximum',
  },
  {
    dataPath: '/user',
    keyword: 'errorMessage',
    message: 'over the number',
    params: { errors: Array(1) },
    schemaPath: '#/properties/user/errorMessage',
  },
  {
    dataPath: '',
    emUsed: true,
    keyword: 'required',
    message: "should have required property 'name'",
    params: { missingProperty: 'name' },
    schemaPath: '#/required',
  },
  {
    dataPath: '',
    keyword: 'errorMessage',
    message: 'required filed',
    params: {
      errors: [
        {
          dataPath: '',
          keyword: 'required',
          message: "should have required property 'name'",
          params: { missingProperty: 'name' },
          schemaPath: '#/required',
        },
      ],
    },
    schemaPath: '#/errorMessage',
  },
];

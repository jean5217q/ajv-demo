const worngTypeData = [
  {
    typeName: 'undefined',
    value: undefined,
  },
  {
    typeName: 'integer',
    value: 123,
  },
  {
    typeName: 'null',
    value: null,
  },
  {
    typeName: 'array',
    value: [],
  },
  {
    typeName: 'object',
    value: {},
  },
];


export default {
  worngTypeData: {
    dataPool: [
      {
        key: 'name',
        valuePool: worngTypeData,
      },
      {
        key: 'email',
        valuePool: worngTypeData,
      },
      {
        key: 'password',
        valuePool: worngTypeData,
      },
      {
        key: 'mobile',
        valuePool: worngTypeData,
      },
      {
        key: 'gender',
        valuePool: worngTypeData,
      },
      {
        key: 'address',
        valuePool: worngTypeData,
      },
    ],
  },
};

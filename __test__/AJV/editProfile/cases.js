export default {
  allLegal: {
    name: '張捷中',
    mobile: '0912345678',
    address: '123',
    gender: 'Gay',
  },
  incompleteDatas: [
    {
      name: 'withoutName',
      data: {
        mobile: '0912345678',
        address: '123',
        gender: 'Gay',
      },
      responseError: {
        name: 'This field is required',
      },
    },
    {
      name: 'withoutMobile',
      data: {
        name: '張捷中',
        address: '123',
        gender: 'Gay',
      },
      responseError: {
        mobile: 'This field is required',
      },
    },
    {
      name: 'withoutAddress',
      data: {
        name: '張捷中',
        mobile: '0912345678',
        gender: 'Gay',
      },
      responseError: {
        address: 'This field is required',
      },
    },
    {
      name: 'withoutGender',
      data: {
        name: '張捷中',
        mobile: '0912345678',
        address: '123',
      },
      responseError: {
        gender: 'This field is required',
      },
    },
    {
      name: 'emptyObject',
      data: {},
      responseError: {
        name: 'This field is required',
        mobile: 'This field is required',
        gender: 'This field is required',
        address: 'This field is required',
      },
    },
  ],
};

export default {
  allLegal: {
    name: 'JCChang',
    email: 'jc.chang@ggr.com',
    password: 'Aa132131212',
    confirmPassword: 'Aa132131212',
  },
  confirmPasswordNotMatch: {
    data: {
      name: 'JCChang',
      email: 'jc.chang@ggr.com',
      password: 'Aa132131212',
      confirmPassword: 'Aa321323123',
    },
    responseError: {
      confirmPassword: 'Password should be the same',
    },
  },
  incompleteDatas: [
    {
      name: 'withoutName',
      data: {
        email: 'jc.chang@ggr.com',
        password: 'Aa132131212',
        confirmPassword: 'Aa132131212',
      },
      responseError: {
        name: 'This field is required',
      },
    },
    {
      name: 'withoutEmail',
      data: {
        name: 'JCChang',
        password: 'Aa132131212',
        confirmPassword: 'Aa132131212',
      },
      responseError: {
        email: 'This field is required',
      },
    },
    {
      name: 'withoutPassword',
      data: {
        name: 'JCChang',
        email: 'jc.chang@ggr.com',
        confirmPassword: 'Aa132131212',
      },
      responseError: {
        confirmPassword: 'Password should be the same',
        password: 'This field is required',
      },
    },
    {
      name: 'withoutConfirmPassword',
      data: {
        name: 'JCChang',
        email: 'jc.chang@ggr.com',
        password: 'Aa132131212',
      },
      responseError: {
        confirmPassword: 'This field is required',
      },
    },
    {
      name: 'withoutAllPassword',
      data: {
        name: 'JCChang',
        email: 'jc.chang@ggr.com',
      },
      responseError: {
        password: 'This field is required',
        confirmPassword: 'This field is required',
      },
    },
  ],
};

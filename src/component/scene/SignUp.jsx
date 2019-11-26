import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateForSignUp, validateForSignUpItem } from 'modal/signUp';
import { normalizeAllError, normalizeSingleError } from 'modal/validator';
import axios from 'axios';

import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp = ({ baseUrl }) => {
  const [inputs, setInputs] = useState({});
  const [invalids, setInvalids] = useState({});
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleOnChange = ({ currentTarget: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const validateItem = (obj, name) => {
    try {
      const isValid = validateForSignUpItem(obj);
      if (isValid) {
        delete invalids[name];
        setInvalids({ ...invalids });
      }
    } catch (error) {
      setInvalids({ ...invalids, [name]: normalizeSingleError(error) });
    }
  };

  const normal = (value, name) => validateItem({ [name]: value }, name);
  const pwd = (value, name) => {
    const target = { confirmPassword: inputs.confirmPassword };
    return validateItem({ ...target, [name]: value }, name);
  };
  const conformpwd = (value, name) => {
    const target = { password: inputs.password };
    return validateItem({ ...target, [name]: value }, name);
  };

  const validateAll = (validFunc, input) => {
    let isValid = false;
    try {
      isValid = validFunc(input);
    } catch (err) {
      setInvalids(normalizeAllError(err));
    }
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setHasSubmit(true);
    const valid = validateAll(validateForSignUp, inputs);
    if (!valid) return;
    const response = await axios.get(`${baseUrl}/signUp`);
    console.log('response', response);
  };
  return (
    <>
      <div style={{ width: '360px' }}>
        <Title text="Sign Up" />
        <Input
          label="User Name"
          name="name"
          onChange={handleOnChange}
          value={inputs.name || ''}
          invalid={!!invalids.name}
          message={invalids.name}
          validate={normal}
          hasSubmit={hasSubmit}
        />
        <Input
          label="Email"
          name="email"
          onChange={handleOnChange}
          value={inputs.email || ''}
          invalid={!!invalids.email}
          message={invalids.email}
          validate={normal}
          hasSubmit={hasSubmit}
        />
        <div style={{ margin: '2rem' }} />
        <Input
          label="Password"
          name="password"
          onChange={handleOnChange}
          value={inputs.password || ''}
          invalid={!!invalids.password}
          message={invalids.password}
          validate={pwd}
          hasSubmit={hasSubmit}
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          onChange={handleOnChange}
          value={inputs.confirmPassword || ''}
          invalid={!!invalids.confirmPassword}
          message={invalids.confirmPassword}
          validate={conformpwd}
          hasSubmit={hasSubmit}
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default SignUp;

SignUp.propTypes = { baseUrl: PropTypes.string };
SignUp.defaultProps = { baseUrl: undefined };

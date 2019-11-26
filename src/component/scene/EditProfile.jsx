import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  validateForEditProfile,
  validateForEditProfileItem,
} from 'modal/editProfile';
import { normalizeAllError, normalizeSingleError } from 'modal/validator';
import axios from 'axios';

import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';

const EditProfile = ({ baseUrl }) => {
  const [inputs, setInputs] = useState({});
  const [invalids, setInvalids] = useState({});
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleOnChange = ({ currentTarget: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const validateItem = (value, name) => {
    try {
      const isValid = validateForEditProfileItem(value, name);
      if (isValid) {
        delete invalids[name];
        setInvalids({ ...invalids });
      }
    } catch (error) {
      setInvalids({ ...invalids, [name]: normalizeSingleError(error) });
    }
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
    const valid = validateAll(validateForEditProfile, inputs);
    if (!valid) return;
    const response = await axios.get(`${baseUrl}/editProfile`);
    console.log('response', response);
  };
  return (
    <>
      <div style={{ width: '360px' }}>
        <Title text="Edit Profile" />
        <Input
          label="Name"
          name="name"
          onChange={handleOnChange}
          value={inputs.name || ''}
          invalid={!!invalids.name}
          message={invalids.name}
          validate={validateItem}
          hasSubmit={hasSubmit}
        />
        <Input
          label="Mobile"
          name="mobile"
          onChange={handleOnChange}
          value={inputs.mobile || ''}
          invalid={!!invalids.mobile}
          message={invalids.mobile}
          validate={validateItem}
          hasSubmit={hasSubmit}
        />
        <div style={{ margin: '2rem' }} />
        <Input
          label="Address"
          name="address"
          onChange={handleOnChange}
          value={inputs.address || ''}
          invalid={!!invalids.address}
          message={invalids.address}
          validate={validateItem}
          hasSubmit={hasSubmit}
        />
        <span>Male</span>
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={handleOnChange}
        />
        <span>Female</span>
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={handleOnChange}
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default EditProfile;

EditProfile.propTypes = { baseUrl: PropTypes.string };
EditProfile.defaultProps = { baseUrl: undefined };

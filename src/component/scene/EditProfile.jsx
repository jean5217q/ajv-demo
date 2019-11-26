import React, { useState } from 'react';
import { validateForUser, validateForUserItem } from 'modal/user';
import {
  normalizeAllError,
  normalizeSingleError,
  // normalizeErrors,
} from 'modal/validator';
// import axios from 'axios';

import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Title';

const EditProfile = () => {
  const [inputs, setInputs] = useState({});
  const [invalids, setInvalids] = useState({});
  const [validWay, setValidWay] = useState({
    name: false,
    mail: false,
  });

  const eventValidator = (value, name) => {
    try {
      const isValid = validateForUserItem(value, name);
      if (isValid) {
        delete invalids[name];
        setInvalids({ ...invalids });
      }
    } catch (error) {
      setInvalids({ ...invalids, [name]: normalizeSingleError(error) });
    }
  };
  const handleOnChange = ({ currentTarget: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleBlur = (e) => {
    const { value, name } = e.currentTarget;
    if (validWay[name]) return;
    eventValidator(value, name);
    setValidWay({ ...validWay, [name]: true });
  };

  const handleKeyUp = (e) => {
    const { value, name } = e.currentTarget;

    if (!validWay[name]) return;
    eventValidator(value, name);
  };

  const validInputs = (validFunc, input) => {
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
    // const eee = await axios.get('http://localhost:2222/app');
    const valid = validInputs(validateForUser, inputs);
    if (!valid) return;
    Object.keys(validWay).forEach((el) => {
      validWay[el] = true;
    });
    setValidWay(validWay);
  };
  return (
    <>
      <div style={{ width: '360px' }}>
        <Title text="Edit User" />
        <Input
          label="User Name"
          name="name"
          onChange={handleOnChange}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          value={inputs.name}
          invalid={!!invalids.name}
          message={invalids.name}
        />
        <Input
          label="Mobile"
          name="mobile"
          onChange={handleOnChange}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          value={inputs.mobile}
          invalid={!!invalids.mobile}
          message={invalids.mobile}
        />
        <Input
          label="Nation ID"
          name="nationId"
          onChange={handleOnChange}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          value={inputs.nationId}
          invalid={!!invalids.nationId}
          message={invalids.nationId}
        />
        <Input
          label="Address"
          name="address"
          onChange={handleOnChange}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          value={inputs.address}
          invalid={!!invalids.address}
          message={invalids.address}
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default EditProfile;

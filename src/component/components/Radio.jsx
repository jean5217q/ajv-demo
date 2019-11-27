import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;
const Label = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
`;

const Radio = ({ value, onChange, validate }) => {
  const handleOnChange = (e) => {
    onChange(e);
    validate(e.target.value, e.target.name);
  };
  return (
    <Container>
      <input
        name="gender"
        type="radio"
        value={value}
        onChange={handleOnChange}
      />
      <Label>{value}</Label>
    </Container>
  );
};

Radio.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  validate: PropTypes.func,
};
Radio.defaultProps = {
  value: undefined,
  onChange: () => {},
  validate: () => {},
};

export default Radio;

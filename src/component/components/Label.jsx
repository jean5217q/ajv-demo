import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  color: black;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Label = ({ id, children }) => (
  <StyledLabel htmlFor={id}>{children}</StyledLabel>
);

Label.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};
Label.defaultProps = {
  id: undefined,
  children: undefined,
};

export default Label;

import React from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 10px;
  border: 1px solid #e0e0e0;
  outline: none;
  background-color: #9654ff;
  color: white;
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
`;

const Button = ({ ...props }) => <StyledButton type="submit" {...props} />;

Button.propTypes = {};
Button.defaultProps = {};

export default Button;

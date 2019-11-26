import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 3px;
  color: black;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Message = styled.span`
  display: block;
  color: ${({ invalid }) => (invalid ? "red" : "rgba(0, 0, 0, 0.3)")};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 2;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  transition: border-color ease-in-out 0.15s;
  border: 1px solid #e0e0e0;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  appearance: none;

  ${({ invalid }) =>
    invalid
      ? css`
          border: 1px solid red;
          color: red;
        `
      : css`
          &:focus {
            border-color: #9654ff;
          }
        `}

  &:disabled {
    opacity: 1;
    background-color: gray;
  }
`;

const TextInput = ({
  type,
  id,
  label,
  focused,
  message,
  invalid,
  disabled,
  validate,
  hasSubmit,
  ...props
}) => {
  const [validateByKeyUp, setValidateByKeyUp] = useState(false);

  const handleBlur = e => {
    const { value, name } = e.currentTarget;
    if (validateByKeyUp) return;
    console.log("blur");
    validate(value, name);
    setValidateByKeyUp(true);
  };

  const handleKeyUp = e => {
    const { value, name } = e.currentTarget;
    if (!validateByKeyUp) return;
    validate(value, name);
  };

  useEffect(() => {
    if (hasSubmit) setValidateByKeyUp(true);
  }, [hasSubmit]);

  return (
    <div style={{ marginBottom: "0.875rem" }}>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        type={type}
        id={id}
        invalid={invalid}
        disabled={disabled}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
        {...props}
      />
      {message ? <Message invalid={invalid}>{message}</Message> : null}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  focused: PropTypes.bool,
  message: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  hasSubmit: PropTypes.bool
};
TextInput.defaultProps = {
  type: "text",
  id: undefined,
  label: undefined,
  focused: undefined,
  message: undefined,
  invalid: undefined,
  disabled: false,
  hasSubmit: false,
  validate: () => {}
};

export default TextInput;

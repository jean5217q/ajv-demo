import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMessage = styled.span`
  display: block;
  color: red;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 2;
`;

const Message = ({ message }) => (
  <>{message ? <StyledMessage>{message}</StyledMessage> : null}</>
);

Message.propTypes = {
  message: PropTypes.string,
};
Message.defaultProps = {
  message: undefined,
};

export default Message;

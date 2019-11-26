import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.div`
  margin: 1rem 0 2rem 0;
  padding-bottom: 0.375rem;
  border-bottom: solid 1px #9654ff;
  color: #9654ff;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Title = ({ text }) => <StyledTitle>{text || ''}</StyledTitle>;

Title.propTypes = { text: PropTypes.string };
Title.defaultProps = { text: undefined };

export default Title;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid red;
`;

export default function Input({ type, ...restProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledInput type={type} {...restProps} />;
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  name: PropTypes.string.isRequired,
};

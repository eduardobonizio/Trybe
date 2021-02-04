/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
`;

export default function List(props) {
  const { children, className } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledList className={className}>{children}</StyledList>;
}
// function FancyBorder(props) {
//   return (
//     <div className={`FancyBorder FancyBorder-${props.color}`}>
//       {props.children}
//     </div>
//   );
// }

List.defaultProps = {
  className: '',
};

// Input.propTypes = {
//   type: PropTypes.oneOf([
//     'button',
//     'checkbox',
//   ]),
//   name: PropTypes.string.isRequired,
// };

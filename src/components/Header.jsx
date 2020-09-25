import React from 'react';
import Styled from 'styled-components';

const H2 = Styled.h2`
  font-size: 28px;
  font-family: Open Sans, sans-serif;
  color: black;
  padding-left: 28px;
  background-color: #dedede;
  // border: 2px solid purple;
`;

function Header() {
  return (
    <H2>
      FedCounter
    </H2>
  );
};

export default Header;
import React from 'react';
import Styled from 'styled-components';

const H2 = Styled.h2`
  width: 600px;
  border: 2px solid purple;
  font-size: 28px;
  font-family: Open Sans, sans-serif;
  color: black;
`;

function Header() {
  return (
    <H2>
      FedCounter
    </H2>
  );
};

export default Header;
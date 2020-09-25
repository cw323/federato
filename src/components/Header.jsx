import React from 'react';
import Styled from 'styled-components';

let H2 = Styled.h2`
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
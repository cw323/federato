import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Header from './components/Header.jsx';

const Wrapper = Styled.div`
  width: 600px;
  border: 2px solid pink;
`;

const Tile = Styled.div`
  width: 600px;
  height: 495px;
  padding-bottom: 64px;
  border: 2px solid black;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Header />
      <Tile>
        {count > 0 && <button onClick={() => setCount(count - 1)}>Undo
        </button>}
        <button onClick={() => setCount(count + 1)}>{count > 0 ? count : 'Start'}</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </Tile>
    </Wrapper>
  );
}

export default App;

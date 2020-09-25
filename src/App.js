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
  const [plot, setPlot, getPlot] = useState([]); // find a way to make plot points better

  const undo = () => {
    setCount(count - 1);
    // find a way to filter plot
    setPlot(plot.filter(e => e !== [e, e]));
  };

  const addPlot = () => {
    setCount(count + 1);
    setPlot(plot => [...plot, [count + 1, count + 1]]);
  };

  const reset = () => {
    setCount(0);
    setPlot([]);
  };

  return (
    <Wrapper>
      <Header />
      <Tile>
        {count > 0 && <button onClick={undo}>Undo
        </button>}
        <button onClick={addPlot}>{count > 0 ? count : 'Start'}</button>
        <button disabled={!count > 0} onClick={reset}>Reset</button>
      </Tile>
      {console.log(count, plot, 'new countandplot')}
    </Wrapper>
  );
}

export default App;

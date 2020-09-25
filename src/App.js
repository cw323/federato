import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import Styled from 'styled-components';
import Header from './components/Header.jsx';
import { LineChart, Line } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const Chart = (
  <LineChart width={600} height={383} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

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

const ChartContainer = Styled.div`
  width: 600px;
  height: 319px;
  border: 2px solid blue;
  padding-bottom: 64px;
`;

const ButtonsContainer = Styled.div`
  display: flex;
  padding-left: 230px;
  padding-right: 230px;

  ${({ active }) => active && `
    padding-left: 170px;
  `}
`;

const UndoButtonContainer = Styled.div`
  padding-right: 12px;
`;

const UndoButton = Styled.button`
  width: 48px;
  height: 48px;
  transform: rotate(-90deg);
  border: none;
  background: none;
`;

const StartButtonContainer = Styled.div`
  // padding-left: 12px;
  padding-right: 6px;
`;

const StartButton = Styled.button`
  width: 64px;
  height: 48px;
  font-family: Open Sans, sans-serif;

  ${({ active }) => active && `
    width: 48px;
    color: white;
    background: #357b78;
  `}
`;

const ResetButtonContainer = Styled.div`
  padding-left: 6px;
`;

const ResetButton = Styled.button`
  width: 64px;
  height: 48px;
  font-family: Open Sans, sans-serif;
  border: none;
  background: none;

  ${({ active }) => active && `
    color: #2347a1;
  `}
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
      

        <ChartContainer>{Chart}</ChartContainer>

        <ButtonsContainer active={(count > 0)}>
          <UndoButtonContainer>
            {count > 0 && <UndoButton onClick={undo}><FontAwesomeIcon icon={faUndo} /></UndoButton>}
          </UndoButtonContainer>
          <StartButtonContainer>
            <StartButton active={(count > 0)} onClick={addPlot}>{count > 0 ? count : 'Start'}</StartButton>
          </StartButtonContainer>
          <ResetButtonContainer>
            <ResetButton active={(count > 0)} disabled={!(count > 0)} onClick={reset}>Reset</ResetButton>
          </ResetButtonContainer>
        </ButtonsContainer>
      </Tile>
    </Wrapper>
  );
}

export default App;

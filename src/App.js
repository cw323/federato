import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import Styled from 'styled-components';
import Header from './components/Header.jsx';
import Chart from './components/Chart.jsx';

const Wrapper = Styled.div`
  width: 600px;
  border: 2px solid #dedede;
`;

const H2Container = Styled.div`
  background-color: #dedede;
  padding-top: 1px;
  padding-bottom: 1px;
`;

const Tile = Styled.div`
  width: 600px;
  height: 495px;
  // border: 2px solid black;
`;

const ChartContainer = Styled.div`
  position: relative;
  // border: 2px solid blue;
`;

const ButtonsContainer = Styled.div`
  display: flex;
  padding-left: 230px;
  padding-right: 230px;
  padding-top: 64px;
  padding-bottom: 64px;

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
  padding-right: 6px;
`;

const StartButton = Styled.button`
  width: 64px;
  height: 48px;
  color: white;
  background: #357b78;
  border-radius: 5px;
  border: none;
  font-family: Open Sans, sans-serif;

  ${({ active }) => active && `
    width: 48px;
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
  const [plots, setPlots] = useState([]);

  const undo = () => {
    let prevCount = count;
    let newCount = count - 1;
    setCount(newCount);
    setPlots(plots.filter(item => item.key !== count));
  };

  const addPlot = () => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newDate = `${month}/${day}/${year}`;

    setCount(count + 1);
    setPlots(plots => [...plots, {x: count + 1, y: count + 1, key: count + 1, date: newDate}]);
  };

  const reset = () => {
    setCount(0);
    setPlots([]);
  };

  return (
    <Wrapper>
      <H2Container>
        <Header />
      </H2Container>
      <Tile>
        <ChartContainer>
          <Chart data={plots} />
        </ChartContainer>
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
      {console.log(count, plots, 'count plots')}
    </Wrapper>
  );
};

export default App;

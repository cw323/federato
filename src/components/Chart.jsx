import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const data = [
  { x: 100, y: 100 },
  { x: 200, y: 200 },
  { x: 300, y: 300 },
  { x: 400, y: 400 },
  { x: 500, y: 500 },
  { x: 600, y: 600 }
];

export default class Chart extends PureComponent {
  render() {
    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
        <Scatter data={data} border="1px solid #d5d5d5" stroke="#000000" fill="none" />
      </ScatterChart>
    );
  }
}

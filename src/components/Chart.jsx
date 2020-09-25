import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

function CustomTooltip({ active }) {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let newdate = `${month}/${day}/${year}`;

  if (active) {
    return (
      <div>
        {newdate}
      </div>
    );
  }

  return null;
};

class Chart extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ScatterChart
          width={530}
          height={319}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
          align="center"
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" stroke="none" />
          <YAxis type="number" dataKey="y" stroke="none" />
          <Tooltip content={<CustomTooltip />}/>
          <Scatter data={this.props.data} border="1px solid #d5d5d5" stroke="#000000" fill="none" />
        </ScatterChart>
    );
  }
};

export default Chart;
import React from 'react'
// ES2015 module syntax
import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';

function BarChart() {
  const data = [1, 2, 3, 5, 8, 13];
  return (
    <Chart>
    <ChartSeries>
      <ChartSeriesItem data={data} name="Fibonacci" />
    </ChartSeries>
    </Chart>
  )
}

export default BarChart
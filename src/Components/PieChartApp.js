import React from "react";
import Chart from "react-google-charts";

export default class PieChartApp extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div className="App">
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["대회의실", 11],
            ["소회의실", 2],
            ["임원실", 2]
          ]}
          options={{
            title: "회의실 별 예약현황",
            // Just add this option
            is3D: true
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}

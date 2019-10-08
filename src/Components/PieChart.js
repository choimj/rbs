import React from "react";
import Chart from "react-google-charts";

const PieChart = ({ title, data }) => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: title,
          is3D: true
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default PieChart;

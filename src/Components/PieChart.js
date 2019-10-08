import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";

const PieChart = ({ title, data }) => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          // title: title,
          is3D: true,
          chartArea: { width: "100%", height: "100%" }
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

PieChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};

export default PieChart;

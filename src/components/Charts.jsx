import React from "react";
import Chart from "react-apexcharts";
const options = {
  chart: {
    type: "area",
    height: 350,
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: ["07:57AM", "08:57AM", "09:57AM", "10:57AM", "11:57AM", "12:57AM"],
    tooltip: {
      enabled: true
    },
    show: true
  },
  yaxis: {
    tooltip: {
      enabled: false
    },
    show: true
  },
  tooltip: {
    enabled: true,
    marker: {
      show: true
    },
    enabledOnSeries: undefined,
    intersect: false
  },
  dataLabels: {
    enabled: false,
    style: {
      colors: ["#46a1df", "#00dbe5", "#e4cb92"]
    }
  },
  stroke: {
    curve: "smooth"
  },
  colors: ["#46df77", "#00dbe5", "#e4cb92"],
  grid: {
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  markers: {
    strokeColors: ["#46a1df", "#00dbe5"],
    colors: "#fff",
    strokeWidth: 7,
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: "#46a1df",
        size: 5
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#46a1df",
        size: 1
      }
    ],
    hover: {
      size: 8,
      sizeOffset: 8
    }
  },
  legend: {
    show: false
  }
};
const series = [
  {
    name: "My Score",
    data: [26, 24.5, 27, 29.5, 30.5, 31]
  },
  {
    name: "Class Average",
    data: [22, 23, 26, 31, 31.5, 29]
  }
];

export default function Charts() {
  return (
    <Chart options={options} series={series} type="area" height={350} />
  );
}

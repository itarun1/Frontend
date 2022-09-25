import React, { Fragment, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "../axios"


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
    show: true
  }
};




export default function Charts() {
  
  let data1=[]
  let data2=[]
  const [datas,setDatas]=useState([])
useEffect(()=>{
  a()
},[])
const a=()=>{
  axios.get("/dummy").then((res)=>{
    setDatas(res.data)
  })
}
datas.map((data)=>{
  data1.push(data.data1)
  data2.push(data.data2)
  return;
})
// console.log(data1,"11")
// console.log(data2,"22")

// let series = [
//   {
//     name: "My Score",
//     data: [2, 23, 31.5, 29,31,51]
//   },
//   {
//     name: "Class Average",
//     data: [22, 23, 26, 31, 31.5, 29]
//    }
// ]
let veries = [
  {
    name: "My Score",
    data: data1
  },
  {
    name: "Class Average",
    data: data2
   }
]


  return (
    <>
    <div className="chartheader">
      <div className="graphleft"><h2>Power Cost</h2></div>
      <div className="graphright"><ul>
        <li>item 1</li>
        <li><span><i className="fa-solid fa-gear"></i></span></li>
        </ul></div>
    </div>
    <Chart options={options} series={veries} type="area" height={350} />
    </>
  );
}

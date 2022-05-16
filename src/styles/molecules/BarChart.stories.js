import React, { useEffect, useState } from "react";
import "./_barchart.scss";
import BarChart from "././BarChart";
import StackedBarChart from "./StackedBarChart";
import colors from "./colors";
import data from "./data";
import keys from "./keys";

export default {
  title: "Molecules/Bar Chart",
};

export function BarChart1() {
  const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30],
  ];
  var i = 0;

  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if (i === datas.length) i = 0;
  };

  return (
    <div className="App">
      <h2>Graphs with React</h2>
      <button onClick={changeData}>Change Data</button>
      <BarChart width={600} height={400} data={data} />
    </div>
  );
}

export function StackedBarChart1() {
  return (
    <div className="stacked">
      <StackedBarChart colors={colors} data={data} keys={keys} />
    </div>
  );
}

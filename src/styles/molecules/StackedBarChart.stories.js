import "./_barchart.scss";
import StackedBarChart from "./StackedBarChart";
import colors from "./colors";
import data from "./data";
import keys from "./keys";

export function StackedBarChart1() {
  return (
    <div className="stacked">
      <StackedBarChart colors={colors} data={data} keys={keys} />
    </div>
  );
}

import "./_barchart.scss";
import StackedBarChart from "./StackedBarChart";
import colors from "./ReportsData/colors";
import data from "./ReportsData/data";
import keys from "./ReportsData/keys";

export default {
  title: "Molecules/Stacked Bar Chart",
};

export function StackedBarChart1() {
  return (
    <div className="stacked">
      <StackedBarChart colors={colors} data={data} keys={keys} />
    </div>
  );
}

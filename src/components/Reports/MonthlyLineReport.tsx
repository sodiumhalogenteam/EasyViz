import * as d3 from "d3";
import React, { useEffect, useState } from "react";
import { useMenu } from "../../context/Menu";
import { useUser } from "../../context/User";
// import { formatNumber } from "../../../libs/utils";
import { LineGraph } from "../../types";
// import { CircleLed } from "../StatusLed/StatusLed";
import { DrawChart } from "./DrawChart";
// import { HeaderStats } from "./HeaderStats";

interface Point {
  date: Date;
  pointTotal: number;
  ytd: number;
  cum: number;
}

export interface Line {
  name: string;
  points: Point[];
}

interface MonthlyLineReportProps {
  // totals: HeaderData;
  lineGraph: LineGraph;
}

export const MonthlyLineReport = ({
  // totals,
  lineGraph,
}: MonthlyLineReportProps) => {
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);

  useEffect(() => {
    const regionNames: string[] = lineGraph.lines.map((line) => line.name);

    setCheckedBoxes(regionNames);
  }, [lineGraph]);

  const { toggleShowMobileNav, showMobileNav } = useMenu();
  const { user } = useUser();

  const lines = lineGraph.lines?.map((line) => {
    const parseDate = d3.timeParse("%Y-%m");
    return {
      ...line,
      points: line.points.map((month) => {
        const newDate = parseDate(month.date) || new Date();
        return { ...month, date: newDate };
      }),
    };
  });

  const lineGraphParsed = { ...lineGraph, lines };

  const regionData = lineGraphParsed.lines || [];

  return (
    <>
      <div className="c-line-widget">
        <div className="c-box u-margin-bottom-large">
          <h2 className="c-stats-widget__title">{lineGraph.title}</h2>

          <div className="l-flex">
            <DrawChart
              data={regionData.filter((region) =>
                checkedBoxes?.includes(region.name)
              )}
            />

            <section className="c-stats-widget__menu u-padding-top-6">
              <div className="l-flex-between">
                <label className="c-stats-widget__label u-padding-left-6rem">
                  Region
                </label>
                <label className="c-stats-widget__label">Total 2022</label>
              </div>
              {regionData.map((region, index) => (
                <div key={index} className="l-inline-flex">
                  <div className="l-flex-align-center u-padding-right">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={checkedBoxes?.includes(region.name) || false}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setCheckedBoxes([...checkedBoxes, region.name]);
                        } else {
                          setCheckedBoxes((prev) =>
                            prev.filter((name) => name !== region.name)
                          );
                        }
                      }}
                    />
                  </div>
                  <div className="c-stats-widget__menu-item">
                    <div className="l-inline-flex">
                      <div className="l-flex-align-center u-padding-right">
                        {/* <CircleLed fill={region.color} /> */}
                      </div>
                      {region.name}
                    </div>
                    {/* <div>{formatNumber(region.totalRegion)}</div> */}
                    <div>{region.totalRegion}</div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

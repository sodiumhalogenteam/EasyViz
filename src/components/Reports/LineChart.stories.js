import { MonthlyLineReport } from "./MonthlyLineReport";

export default {
  title: "Molecules/Line Chart",
};

export const Line = () => (
  <MonthlyLineReport
    lineGraph={{
      title: "New Shops Added - By Month",
      csv: "...csv data or link to file",
      yearTotal: 66077,
      lines: [
        {
          name: "NAFTA",
          totalRegion: 51235,
          color: "#33BBFF",
          points: [
            { date: "2020-01", pointTotal: 0, ytd: 0, cum: 1000 },
            { date: "2020-02", pointTotal: 200, ytd: 100, cum: 1200 },
            { date: "2020-03", pointTotal: 400, ytd: 300, cum: 1600 },
            { date: "2020-04", pointTotal: 1500, ytd: 1100, cum: 3100 },
            { date: "2020-05", pointTotal: 1000, ytd: 2100, cum: 3100 },
            { date: "2020-06", pointTotal: 500, ytd: 3600, cum: 3100 },
            { date: "2020-07", pointTotal: -300, ytd: 3300, cum: 3100 },
            { date: "2020-08", pointTotal: 700, ytd: 4000, cum: 3100 },
            { date: "2020-09", pointTotal: 300, ytd: 4300, cum: 3100 },
            { date: "2020-10", pointTotal: -1300, ytd: 3000, cum: 3100 },
            { date: "2020-11", pointTotal: 200, ytd: 3200, cum: 3100 },
            { date: "2020-12", pointTotal: 300, ytd: 3500, cum: 3100 },
          ],
        },
        {
          name: "Europe",
          totalRegion: 14842,
          color: "#FFD54F",
          points: [
            { date: "2020-01", pointTotal: 0, ytd: 0, cum: 1000 },
            { date: "2020-02", pointTotal: 300, ytd: 300, cum: 1200 },
            { date: "2020-03", pointTotal: 600, ytd: 900, cum: 1600 },
            { date: "2020-04", pointTotal: 300, ytd: 1200, cum: 3100 },
            { date: "2020-05", pointTotal: 400, ytd: 1600, cum: 3100 },
            { date: "2020-06", pointTotal: 1000, ytd: 2600, cum: 3100 },
            { date: "2020-07", pointTotal: -500, ytd: 2100, cum: 3100 },
            { date: "2020-08", pointTotal: 300, ytd: 2400, cum: 3100 },
            { date: "2020-09", pointTotal: -400, ytd: 2000, cum: 3100 },
            { date: "2020-10", pointTotal: -200, ytd: 1800, cum: 3100 },
            { date: "2020-11", pointTotal: -100, ytd: 1700, cum: 3100 },
            { date: "2020-12", pointTotal: 200, ytd: 1900, cum: 3100 },
          ],
        },
      ],
    }}
  />
);

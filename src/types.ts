export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

export interface HeaderData {
  title: string;
  totalShops: number;
  stats: HeaderColumnData[];
}

export interface HeaderColumnData {
  title: string;
  details: Details[];
}
export interface Details {
  label: string;
  value: number;
}
export interface LineGraph {
  title: string;
  lines: Line[];
  yearTotal: number;
  csv: string;
}
export interface Line {
  name: string;
  totalRegion: number;
  color: string;
  points: MonthDataRaw[];
}
export interface MonthDataRaw {
  date: string;
  pointTotal: number;
  cum: number;
  ytd: number;
}
export interface MonthDataParsed {
  date: Date;
  pointTotal: number;
  cum: number;
  ytd: number;
}

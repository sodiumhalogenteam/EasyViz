import React from "react";

import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as ClockAltIcon } from "../../assets/icons/clock-alt.svg";

export default {
  title: "Atoms/Icons",
};

export const CustomIcons = () => (
  <>
    <ClockIcon />
    <ClockAltIcon />
  </>
);
export const FontAwesomeIcons = () => (
  <div>
    <ul
      style={{
        display: "grid",
        listStyle: "none",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "auto auto auto auto auto auto ",
        textAlign: "center",
        padding: 0,
      }}
    >
      {[
        "chart-pie",
        "heart-rate",
        "search",
        "user",
        "users",
        "walkie-talkie",
        "plus",
        "chevron-left",
        "chevron-right",
      ].map((icon) => (
        <li>
          <span class={`fal fa-${icon} fa-2x`} title={`fa-${icon}`}></span>
          <div>{`fa-${icon}`}</div>
        </li>
      ))}
    </ul>
  </div>
);

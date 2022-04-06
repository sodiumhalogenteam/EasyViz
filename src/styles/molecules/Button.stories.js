import React from "react";

export default {
  title: "Molecules/Button",
};

export const Primary = () => (
  <button className="c-btn">
    <div className="c-btn__inner">Button</div>
  </button>
);

export const Secondary = () => (
  <button className="c-btn-alt">
    <div className="c-btn__inner">Button</div>
  </button>
);

export const Outline = () => (
  <button className="c-btn-outline">
    <div className="c-btn__inner">Button</div>
  </button>
);

export const Text_Icon = () => (
  <button className="c-btn">
    <div className="c-btn__inner">
      <span className="c-btn__icon fa fa-plus"></span>
      Button
    </div>
  </button>
);

export const Text_Link = () => (
  <button className="c-btn-link">
    <div className="c-btn__inner">Button</div>
  </button>
);

export const Text_Link_Icon = () => (
  <button className="c-btn-link">
    <div className="c-btn__inner">
      <span className="c-btn__icon fa fa-plus"></span>
      Button
    </div>
  </button>
);

// export const Icon = () => <button className="c-btn-icon">Button</button>;

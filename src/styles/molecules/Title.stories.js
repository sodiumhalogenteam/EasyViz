import React from "react";

export default {
  title: "Molecules/Title",
};

export const Basic = () => (
  <h2 className="c-page-header">
    <span className="c-page-header__context">Manage Tools</span>
    <span className="c-page-header__divider">|</span>
    <span className="c-page-header__title">Current Tools</span>
  </h2>
);

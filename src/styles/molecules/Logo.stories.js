import React from "react";

import logo from "../../images/autoauthcert_1.png";

export default {
  title: "Molecules/Logo",
};

export const Pro = () => (
  <>
    <div className="c-logo">
      <img src={logo} className="c-logo__image" />
      <span className=" c-logo__plan c-logo__plan--pro">Enterprise Pro</span>
    </div>
  </>
);

export const Plus = () => (
  <>
    <div className="c-logo">
      <img src={logo} className="c-logo__image" />
      <span className="c-logo__plan c-logo__plan--plus">Plus</span>
    </div>
  </>
);

export const Standard = () => (
  <>
    <div className="c-logo">
      <img src={logo} className="c-logo__image" />
      <span className="c-logo__plan c-logo__plan--standard">Standard</span>
    </div>
  </>
);

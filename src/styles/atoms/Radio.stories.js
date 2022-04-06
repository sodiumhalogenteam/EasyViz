import React from "react";

export default {
  title: "Atoms/Radio",
};

const Template = ({ value, disabled }) => (
  <input type="radio" value={value} disabled={disabled} />
);

// export const Basic = Template.bind({});

// export const Disabled = Template.bind({});
// Disabled.args = {
//   disabled: true,
// };

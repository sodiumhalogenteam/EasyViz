import React from "react";

export default {
  title: "Atoms/Textarea",
};

const Template = ({ value, autoFocus, placeholder }) => (
  <textarea value={value} autoFocus={autoFocus} placeholder={placeholder} />
);

// export const Basic = Template.bind({});
// Basic.args = {
//   value: "Some text here",
// };

// export const Placeholder = Template.bind({});
// Placeholder.args = {
//   placeholder: "placeholder",
// };

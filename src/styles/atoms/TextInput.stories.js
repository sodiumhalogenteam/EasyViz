import React from "react";

export default {
  title: "Atoms/TextInput",
};

const Template = ({ type, value, placeholder, disabled }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  type: "text",
  placeholder: "Service Center Name",
  value: "Great shop name",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  placeholder: "Service Center Name",
  value: "Great shop name",
  disabled: true,
};

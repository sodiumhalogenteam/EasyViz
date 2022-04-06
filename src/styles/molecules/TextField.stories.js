import React from "react";

export default {
  title: "Molecules/TextField",
};

export const Basic = () => (
  <div className="c-field ">
    <label className="c-field__label">Label</label>
    <input type="text" className="c-input" placeholder="add some text" />
    <div className="c-field__note">This is a note about the field</div>
  </div>
);
export const InputError = () => (
  <div className="c-field ">
    <label className="c-field__label">Label</label>
    <input type="text" className="c-input" placeholder="add some text" />
    <div className="c-field__error">This is an error about the field</div>
  </div>
);

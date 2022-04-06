import React from "react";

export default {
  title: "Atoms/Checkbox",
};

const Template = ({ value, disabled, checked }) => (
  <input type="checkbox" value={value} disabled={disabled} checked={checked} />
);

// export const Basic = Template.bind({});
// Basic.args = {
//   checked: true,
// };
// export const Disabled = Template.bind({});
// Disabled.args = {
//   disabled: true,
// };

// export const Custom = () => (
//   <label class="c-checkbox">
//     <span class="c-checkbox__input">
//       <input type="checkbox" name="checkbox" />
//       <span class="c-checkbox__control">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//           focusable="false"
//         >
//           <path
//             fill="none"
//             stroke="currentColor"
//             stroke-width="3"
//             d="M1.73 12.91l6.37 6.37L22.79 4.59"
//           />
//         </svg>
//       </span>
//     </span>
//     <span class="radio__label">Checkbox</span>
//   </label>
// );
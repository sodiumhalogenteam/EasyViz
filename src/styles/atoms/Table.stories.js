import React from "react";

export default {
  title: "Atoms/Table",
};

export const Table = () => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Manufacturer</th>
        <th>Model</th>
        <th>Serial Number</th>
        <th>Added On</th>
        <th>Added By</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {[...new Array(10)].map(() => (
        <tr>
          <td>CHEVRON_ICON</td>
          <td>Some Long Manufacturer Name</td>
          <td>Some Model Name</td>
          <td>0000000000-0000-00</td>
          <td>6/14/21</td>
          <td>SomeUserName</td>
          <td>ICONS</td>
        </tr>
      ))}
    </tbody>
  </table>
);

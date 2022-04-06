import React from "react";
import { SidebarPro } from "../organisms/Sidebar.stories";
import { Table } from "../atoms/Table.stories";
import { Basic as Title } from "../molecules/Title.stories";

export default {
  title: "Layouts/Main",
};

export const Basic = () => (
  <div class="l-container">
    <div class="l-view-layout l-view-layout--sidebar">
      <aside class="l-view-layout__sidebar">
        <SidebarPro />
      </aside>
      <div class="l-view-layout__main l-view-layout--two-column">
        <Title />
        <Table />
      </div>
    </div>
  </div>
);

import React from "react";

export default {
  title: "Atoms/Colors",
};

const PaletteList = ({ children }) => (
  <ul
    style={{
      display: "grid",
      listStyle: "none",
      gridGap: "10px 15px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
      gridTemplateRows: "auto auto auto auto auto auto",
      textAlign: "center",
      padding: 0,
    }}
  >
    {children}
  </ul>
);

const ColorPalette = ({ scssVariable, hex }) => (
  <li>
    <div
      style={{
        width: "100%",
        height: "6rem",
        background: hex,
      }}
    />
    <div>
      {scssVariable}
      <br /> {hex}
      <br />
    </div>
  </li>
);

export const Brand = () => (
  <PaletteList>
    {[
      { scssVariable: "$brand-red", hex: "#c2000c" },
      { scssVariable: "$brand-red-alt", hex: "#e6222f" },
    ].map((c) => (
      <ColorPalette scssVariable={c.scssVariable} hex={c.hex} />
    ))}
  </PaletteList>
);

export const Action = () => (
  <PaletteList>
    {[
      { scssVariable: "$color-action-orange-500", hex: "#ff4f00" },
      { scssVariable: "$color-action-orange-300", hex: "#ff7433" },
      { scssVariable: "$color-action-orange-700", hex: "#e64900" },
    ].map((c) => (
      <ColorPalette scssVariable={c.scssVariable} hex={c.hex} />
    ))}
  </PaletteList>
);

export const Neutral = () => (
  <PaletteList>
    {[
      { scssVariable: "$color-black", hex: "#000" },
      { scssVariable: "$color-gray-900", hex: "#334347" },
      { scssVariable: "$color-gray-800", hex: "#5b6c70" },
      { scssVariable: "$color-gray-700", hex: "#7c8b8f" },
      { scssVariable: "$color-gray-600", hex: "#a3abad" },
      { scssVariable: "$color-gray-500", hex: "#c1c6c7" },
      { scssVariable: "$color-gray-400", hex: "#cfd3d4" },
      { scssVariable: "$color-gray-300", hex: "#e1e5e6" },
      { scssVariable: "$color-gray-200", hex: "#f2f4f5" },
      { scssVariable: "$color-gray-100", hex: "#334347" },
      { scssVariable: "$color-white", hex: "#fff" },
    ].map((c) => (
      <ColorPalette scssVariable={c.scssVariable} hex={c.hex} />
    ))}
  </PaletteList>
);

export const Utility = () => (
  <PaletteList>
    {[
      { scssVariable: "$color-utility-success", hex: "#30a629" },
      { scssVariable: "$color-utility-warning", hex: "#e6be17" },
      { scssVariable: "$color-utility-error", hex: "#e61717" },
    ].map((c) => (
      <ColorPalette scssVariable={c.scssVariable} hex={c.hex} />
    ))}
  </PaletteList>
);
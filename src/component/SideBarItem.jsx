import React from "react";

export const SideBarItem = ({ name, active, handleClick }) => {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

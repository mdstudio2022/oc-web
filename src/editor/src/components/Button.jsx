import React from "react";
export const Button = ({ className, title, onClick }) => (
  <button className={className} onClick={onClick}>
    {title}
  </button>
)

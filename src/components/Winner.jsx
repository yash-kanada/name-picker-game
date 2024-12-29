import React from "react";
import "./Winner.css"; // Ensure to create a CSS file for styles

const Winner = ({ name }) => {
  return (
    <div className="winner-animation">
      🎉 Winner is {name}! 🎉
    </div>
  );
};

export default Winner;

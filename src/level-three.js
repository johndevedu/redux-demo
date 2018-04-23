import React from "react";

export default function LevelThree({ name, handleClick }) {
  return (
    <div className="component-level-three">
      <p>{name} you are awesome.</p>
      <button onClick={handleClick}>say hello back</button>
    </div>
  );
}

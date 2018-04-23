import React from "react";
import LevelThree from "./level-three.js";

export default function SubComponent({ name, handleClick }) {
  return (
    <div className="component-sub">
      <h3>hello {name} from subcomponent!</h3>
      <LevelThree handleClick={handleClick} name={name} />
    </div>
  );
}

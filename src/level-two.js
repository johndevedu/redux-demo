import React from "react";
import LevelThree from "./level-three.js";
import { connect } from "react-redux";
import { addHello } from "./action";

function SubComponent({ name, handleClick, dispatch }) {
  return (
    <div className="component-sub">
      <h3>hello {name} from level two!</h3>{" "}
      <button
        onClick={e => {
          dispatch(addHello());
        }}
      >
        hello!
      </button>
      <LevelThree handleClick={handleClick} name={name} />
    </div>
  );
}

const mapDispatchToProps = state => {
  return {};
};

export default connect()(SubComponent);

import React from "react";
import LevelTwo from "./level-two";

export default class MainComponent extends React.Component {
  handleClick(text) {
    console.log("hello back!");
  }

  render() {
    return (
      <div className="component-main">
        <h1>Main Component!</h1>
        <LevelTwo name="c50" handleClick={this.handleClick} />
      </div>
    );
  }
}

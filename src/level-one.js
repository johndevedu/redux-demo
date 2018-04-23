import React from "react";
import { connect } from "react-redux";
import LevelTwo from "./level-two";

class MainComponent extends React.Component {
  handleClick(text) {
    console.log("hello back!");
  }

  render() {
    console.log(this.props);
    return (
      <div className="component-main">
        <h1>Hello from level one!! </h1>
        <LevelTwo name="c50" handleClick={this.handleClick} />
        <pre>
          {this.props.hellos.length > 0 &&
            JSON.stringify(this.props.hellos, null, 3)}
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hellos: state.hellos
});

export default connect(mapStateToProps)(MainComponent);

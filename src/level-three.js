import React from "react";
import { connect } from "react-redux";
import { addHello } from "./action";

class LevelThree extends React.Component {
  // ({ name, handleClick })

  render() {
    return (
      <div className="component-level-three">
        <p>Hello {this.props.name} you are awesome!!!</p>
        <button
          onClick={e => {
            this.props.onAddHelloClick();
          }}
        >
          hello!
        </button>
        <button onClick={this.props.handleClick}>say hello back</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddHelloClick: () => {
      dispatch(addHello());
    }
  };
}

export default connect(null, mapDispatchToProps)(LevelThree);

//mapDispatchToProps

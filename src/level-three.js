import React from "react";
import { connect } from 'react-redux'

 class LevelThree extends React.Component {
  // ({ name, handleClick })


  render() {
    return (
      <div className="component-level-three">
        <p>Hello {this.props.name} you are awesome!!!</p>
        <button onClick={this.props.handleClick}>say hello back</button>
      </div>
    );
  }
}

export default connect()(LevelThree)
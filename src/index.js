import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Provider } from "react-redux";
import { createStore } from "redux";
import LevelOne from "./level-one.js";
import demoApp from "./reducer";
import './style.css'

const store = createStore(demoApp);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <LevelOne />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));

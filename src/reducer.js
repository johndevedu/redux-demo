function hellos(state = [], action) {
  switch (action.type) {
    case "ADD_HELLO":
      console.log(action);

      return [
        ...state,
        {
          index: state.length + 1
        }
      ];
    default:
      return state;
  }
}

export default function demoApp(state = {}, action) {
  return {
    hellos: hellos(state.hellos, action)
  };
}

// you can also use combineReducers (see here: https://redux.js.org/basics/reducers)

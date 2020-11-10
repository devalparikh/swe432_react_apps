import * as React from 'react'

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

export function Home() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="main-section">
      <div className="subsection">
        Hello world. Using react-router-dom
      </div>
    </div>
  );
}
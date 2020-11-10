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

export function Assignment9() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="main-section">
      <div className="subsection">
        <h1>
          SWE432-001 Assignment 9
          </h1>
        <h3>
          Created By:
            <a href="https://mason.gmu.edu/~afuentel/">
            Alexandro Fuentelzas
            </a>
              ,&nbsp;
            <a href="https://mason.gmu.edu/~dparikh4/">
            Deval Parikh
            </a>
              ,&nbsp;
            <a href="https://mason.gmu.edu/~spolina/">
            Surya Polina
            </a>
        </h3>
      </div>
      <div className="subsection">
        Count: {state.count}
        <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
          -
      </button>
        <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
          +
      </button>
      </div>
    </div>
  );
}
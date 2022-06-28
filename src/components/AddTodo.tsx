import React, { useContext } from "react";

import { ACTION } from "../context/Actions";
import { GlobalContext } from "../context/GlobalState";

function AddTodo() {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <div>
      <div>ADD TODO</div>
      <input
        type="text"
        value={state.addTodo}
        onChange={(e) =>
          dispatch({ type: ACTION.REGISTER_TODO, payload: e.target.value })
        }
      />
      <input
        type="date"
        value={state.date}
        onChange={(e) =>
          dispatch({ type: ACTION.REGISTER_DATE, payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: ACTION.ADD_TODO })}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;

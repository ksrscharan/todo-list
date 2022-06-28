import React, { useContext } from "react";

import { ACTION } from "../context/Actions";
import { GlobalContext } from "../context/GlobalState";

function ReadTodo() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      {state.todo &&
        state.todo.map((each: any, index: any) => {
          return (
            <div key={index}>
              <div>{each.title}</div>
              <div>{each.date}</div>
              <button
                onClick={() =>
                  dispatch({ type: ACTION.DELETE_TODO, payload: each.id })
                }
              >
                Delete
              </button>
              <button
                onClick={() =>
                  dispatch({ type: ACTION.EDIT_TODO, payload: each })
                }
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ReadTodo;

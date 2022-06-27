import React, { useContext } from "react";
import { ACTION } from "../context/Actions";
import { GlobalContext } from "../context/GlobalState";

function EditTodo() {
  const { state, dispatch } = useContext(GlobalContext); // type here

  return (
    <div>
      {state.isEditing && (
        <div>
          <div>EDIT TITLE</div>
          <input
            type="text"
            onChange={(e) =>
              dispatch({
                type: ACTION.REGISTER_UPDATE,
                payload: e.target.value,
              })
            }
          />
          <button
            onClick={() =>
              dispatch({
                type: ACTION.UPDATE_TITLE,
                payload: state.updatedTitle,
              })
            }
          >
            UPDATE
          </button>
          <button onClick={() => dispatch({ type: ACTION.CANCEL_UPDATE })}>
            CANCEL
          </button>
        </div>
      )}
    </div>
  );
}

export default EditTodo;

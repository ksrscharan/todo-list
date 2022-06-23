import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const AddUser = (props: Props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <input type="text" />
      <input type="date" name="" id="" />
      <button>Add</button>
      <button>
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
};

export default AddUser;

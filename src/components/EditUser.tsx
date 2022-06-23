import { Link } from "react-router-dom";
import React from "react";

type Props = {};

const EditUser = (props: Props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <input type="text" />
      <button>Update</button>
      <button>
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
};

export default EditUser;

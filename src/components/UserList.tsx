import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const UserList = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <div>
            Name
            <br />
            Date
          </div>
          <div>
            <button>
              <Link to="/Edit/1">Edit</Link>
            </button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserList;

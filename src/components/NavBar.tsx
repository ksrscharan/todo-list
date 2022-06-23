import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      <Link to="/add">Add</Link>{' '}
      
    </div>
  );
};

export default NavBar;

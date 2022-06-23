import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import UserList from "./UserList";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <NavBar />
      <UserList />
    </div>
  );
};

export default Home;

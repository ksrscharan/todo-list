import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { GlobalProvider } from "./context/GlobalState";

import React from "react";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add" element={<AddUser />} />
          <Route path="/Edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

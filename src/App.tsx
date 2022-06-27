import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import ReadTodo from "./components/ReadTodo";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <AddTodo />
        <EditTodo />
        <ReadTodo />
      </GlobalProvider>
    </div>
  );
}

export default App;

import React from "react";
import BoxList from "./ColorBox/BoxList";
import TodoList from "./Todos/TodoList";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <BoxList />
        <TodoList />
      </div>
  );
}

export default App;

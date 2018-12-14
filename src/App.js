import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@material-ui/core";
import TodoForm from "./TodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography component="h1" variant="h2">
          Todos
        </Typography>

        <TodoForm saveTodo={console.warn} />
      </div>
    );
  }
}

export default App;

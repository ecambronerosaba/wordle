import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { La, Ta } from "./Dict/dict.jsx";
import GameRow from "./GameRow";

class App extends React.Component {
  render() {
    return (
      <div className="">
        {La[0]}
        <GameRow word={La[0]} row={"a"} />
        <GameRow word={La[0]} row={"b"} />
        <GameRow word={La[0]} row={"c"} />
        <GameRow word={La[0]} row={"d"} />
        <GameRow word={La[0]} row={"e"} />
        <GameRow word={La[0]} row={"f"} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import { La, Ta } from "./Dict/dict.jsx";
import GameRow from "./GameRow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0, passed: false };
    this.gameRowRefs = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ];
  }

  onClick = () => {
    this.setState({ idx: this.state.idx + 1, passed: false });
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].type === "text") {
        inputElements[i].value = "";
      }
    }

    for (var i = 0; i < this.gameRowRefs.length; i++) {
      this.gameRowRefs[i].current.reset();
    }
  };

  passed = () => {
    this.setState({ passed: true });
  };
  render() {
    var gameRows = [];
    for (let i = 0; i < this.gameRowRefs.length; i++) {
      gameRows.push(
        <GameRow
          key={i}
          word={La[this.state.idx]}
          ta={Ta}
          la={La}
          passed={this.passed}
          ref={this.gameRowRefs[i]}
        />,
      );
    }
    return (
      <div className="">
        <div className="title">{`WORDLE #${this.state.idx}`}</div>
        {gameRows}
        {this.state.passed ? (
          <button onClick={this.onClick}> Next</button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;

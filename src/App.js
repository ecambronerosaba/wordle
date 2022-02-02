import React from "react";
import "./App.css";
import { La, Ta } from "./Dict/dict.jsx";
import GameRow from "./GameRow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0, passed: false, pot_idx: 0 };
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
    for (var i = 1; i < inputElements.length; i++) {
      if (inputElements[i].type === "text") {
        inputElements[i].value = "";
      }
    }

    for (var i = 0; i < this.gameRowRefs.length; i++) {
      this.gameRowRefs[i].current.reset();
    }
  };

  onChange = (e) => {
    this.setState({ pot_idx: e.target.value });
  };

  check = () => {
    var p = 0;
    for (var i = 0; i < this.gameRowRefs.length; i++) {
      if (!this.gameRowRefs[i].current.state.passed) {
        p += 1;
      }
    }
    if (p === 6) {
      alert("The answer was:" + La[this.state.idx]);
    }
  };

  onSubmit = (e) => {
    if (e.keyCode === 13) {
      this.setState({ idx: parseInt(this.state.pot_idx) });
    }
    var inputElements = document.getElementsByTagName("input");
    for (var i = 1; i < inputElements.length; i++) {
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
          check={this.check}
        />,
      );
    }
    return (
      <div className="">
        <div className="title">
          <span>WORDLE #</span>
          <span>
            <input
              key={this.state.idx}
              onChange={this.onChange}
              onKeyUp={this.onSubmit}
              defaultValue={this.state.idx}
            ></input>
          </span>
        </div>
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

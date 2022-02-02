import React from "react";
import "./GameRow.css";
import Tile from "./Tile";

class GameRow extends React.Component {
	constructor(props) {
		super(props);
		this.tileRefs = [
			React.createRef(),
			React.createRef(),
			React.createRef(),
			React.createRef(),
			React.createRef(),
		];
		this.state = { word: "", passed: true };
	}

	reset = () => {
		for (let i = 0; i < 5; i++) {
			this.tileRefs[i].current.setState({
				normal: true,
				yellow: false,
				green: false,
				wrong: false,
			});
		}
		this.setState({ word: "" });
		this.setState({ passed: true });
	};

	updateColors = () => {
		for (let i = 0; i < 5; i++) {
			this.tileRefs[i].current.updateColors();
		}
	};

	submitWord = (e) => {
		var w = "";
		for (let i = 0; i < 5; i++) {
			w += this.tileRefs[i].current.state.letter;
		}

		if (w.length < 5) {
			return;
		}
		if (this.props.ta.includes(w) || this.props.la.includes(w)) {
			if (w === this.props.word) {
				this.props.passed();
			}
			this.setState({ passed: false });
			this.updateColors();
			this.props.check();
		} else {
			alert("Invalid guess");
		}
	};

	updateWord = (c) => {
		this.setState({ word: this.state.word + c });
	};

	next = (t) => {
		if (t >= this.tileRefs.length - 1) {
			return;
		}
		const nextTileRef = this.tileRefs[t + 1];
		if (nextTileRef.current) {
			nextTileRef.current.focus();
		}
	};

	prev = (t) => {
		this.setState({
			word: this.state.word.slice(0, this.state.word.length - 1),
		});
		if (t === 0) {
			return;
		}
		const prevTileRef = this.tileRefs[t - 1];
		if (prevTileRef.current) {
			prevTileRef.current.focus();
		}
	};

	render() {
		var tiles = [];

		for (var i = 0; i < this.tileRefs.length; i++) {
			tiles.push(
				<Tile
					key={i}
					word={this.props.word}
					tile={i}
					next={this.next}
					ref={this.tileRefs[i]}
					prev={this.prev}
					updateWord={this.updateWord}
					submitWord={this.submitWord}
				/>,
			);
		}
		return <form className="gamerow">{tiles}</form>;
	}
}

export default GameRow;

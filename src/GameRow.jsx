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
		this.state = { word: "" };
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
	};

	updateColors = () => {
		for (let i = 0; i < 5; i++) {
			this.tileRefs[i].current.updateColors();
		}
	};

	submitWord = (e) => {
		if (this.state.word.length < 5) {
			return;
		}
		if (
			this.props.ta.includes(this.state.word) ||
			this.props.la.includes(this.state.word)
		) {
			if (this.state.word === this.props.word) {
				this.props.passed();
			}
			this.updateColors();
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

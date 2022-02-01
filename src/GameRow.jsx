import React from "react";
import ReactDOM from "react-dom";
import "./GameRow.css";
import Tile from "./Tile";
import $ from "jquery";

class GameRow extends React.Component {
	constructor(props) {
		super(props);
	}

	next = (e, t) => {
		// while ((next = next.nextSibling)) {
		// 	if (next == null) break;
		// 	if (next.tagName.toLowerCase() == "input") {
		// 		next.focus();
		// 		break;
		// 	}
		// }
	};

	render() {
		return (
			<form className="gamerow">
				<Tile
					word={this.props.word}
					tile={0}
					id={this.props.row + "tile-0"}
					callback={this.next}
				/>
				<Tile
					word={this.props.word}
					tile={1}
					id={this.props.row + "tile-1"}
					callback={this.next}
					ref={(c) => (this.nextComponent = c)}
				/>
				<Tile
					word={this.props.word}
					tile={2}
					id={this.props.row + "tile-2"}
					callback={this.next}
				/>
				<Tile
					word={this.props.word}
					tile={3}
					id={this.props.row + "tile-3"}
					callback={this.next}
				/>
				<Tile
					word={this.props.word}
					tile={4}
					id={this.props.row + "tile-4"}
					callback={this.next}
				/>
			</form>
		);
	}
}

export default GameRow;

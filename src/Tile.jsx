import React from "react";
import classNames from "classnames";
import "./Tile.css";

class Tile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			normal: true,
			yellow: false,
			green: false,
			wrong: false,
			letter: "",
		};
		this.inputRef = React.createRef();
	}

	updateColors = (w) => {
		const idx = this.props.word.indexOf(this.state.letter);
		if (this.props.word.includes(this.state.letter)) {
			if (idx === this.props.tile) {
				this.setState({
					normal: false,
					yellow: false,
					green: true,
					wrong: false,
				});
			} else {
				this.setState({
					normal: false,
					yellow: true,
					green: false,
					wrong: false,
				});
			}
		} else {
			this.setState({
				normal: false,
				yellow: false,
				green: false,
				wrong: true,
			});
		}
	};

	focus = () => {
		if (this.inputRef.current) {
			this.inputRef.current.focus();
		}
	};

	onKeyDown = (e) => {
		if (e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 39) {
			this.props.prev(this.props.tile);
		}
		if (e.keyCode === 13) {
			this.props.submitWord();
		}
		if (e.keyCode === 37) {
			this.props.next();
		}
	};

	handleChange = (event) => {
		let { maxLength, value } = event.target;
		value = value.toLowerCase();
		if (value === "") {
			this.setState({
				normal: true,
				yellow: false,
				green: false,
				wrong: false,
			});
			return;
		}
		if (value.length === maxLength) {
			this.setState({ letter: value });
			// this.props.updateWord(value);
			this.props.next(this.props.tile);
		}
	};

	makeUpperCase = (e) => {
		e.target.value = ("" + e.target.value).toUpperCase();
	};

	render() {
		return (
			<span>
				<input
					className={classNames(
						{ normal: this.state.normal },
						{ yellow: this.state.yellow },
						{ green: this.state.green },
						{ wrong: this.state.wrong },
						"tile",
					)}
					type="text"
					maxLength="1"
					onChange={this.handleChange}
					autoFocus={true}
					ref={this.inputRef}
					onKeyUp={this.onKeyDown}
					onInput={this.makeUpperCase}
				/>
			</span>
		);
	}
}

export default Tile;

import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import "./Tile.css";
import $ from "jquery";

class Tile extends React.Component {
	constructor(props) {
		super(props);
		this.state = { normal: true, yellow: false, green: false };
	}

	handleChange = (event) => {
		// what
		const { maxLength, value, name } = event.target;
		const idx = this.props.word.indexOf(value);
		if (value === "") {
			this.setState({ normal: true, yellow: false, green: false });
			return;
		}
		if (this.props.word.includes(value)) {
			if (idx === this.props.tile) {
				this.setState({
					normal: false,
					yellow: false,
					green: true,
				});
			} else {
				this.setState({
					normal: false,
					yellow: true,
					green: false,
				});
			}
		} else {
			this.setState({ normal: true, yellow: false, green: false });
		}
		this.props.callback(event, this);
	};

	render() {
		return (
			<span>
				<input
					className={classNames(
						{ normal: this.state.normal },
						{ yellow: this.state.yellow },
						{ green: this.state.green },
					)}
					type="text"
					maxLength="1"
					onChange={this.handleChange}
					autoFocus={true}
				/>
			</span>
		);
	}
}

export default Tile;

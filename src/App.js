import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			success: false
		};
	}
	onSubmit = event => {
		event.preventDefault();
		this.setState({ success: true });
	};

	render() {
		const { success } = this.state;
		return (
			<div className="form-container">
				{success ? (
					<h3 className="success-msg">Success</h3>
				) : (
					<div>
						<h3>Sign up</h3>
						<form onSubmit={this.onSubmit} noValidate>
							<div className="form-seperator">
								<label htmlFor="name">Name:</label>
								<input id="name" type="text" placeholder="Name" />
							</div>
							<div className="form-seperator">
								<label htmlFor="email">Email Address:</label>
								<input id="email" type="text" placeholder="Email Address" />
							</div>
							<div className="form-seperator">
								<label htmlFor="password">Password:</label>
								<input id="password" type="password" placeholder="Password" />
							</div>
							<div className="form-seperator">
								<label htmlFor="number">Mobile Number:</label>
								<input id="number" type="number" placeholder="Mobile Number" />
							</div>

							<div className="form-seperator">
								<button type="submit">Sign up</button>
							</div>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export default App;

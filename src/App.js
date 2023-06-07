import logo from "./logo.svg";
//es6 syntax for require
import "./App.css";

// object oriented programming
import React, { Component } from "react";

function NavBar() {
	return (
		<>
			<nav>Home Login</nav>
		</>
	);
}

class App extends Component {
	//state is a built in feature in react to help manage and store data. It is mutable
	//class component state.
	state = {
		name: "Ginny",
		age: 34,
		occupation: "Instructor",
	};

	updateOccupation() {
		this.setState({ occupation: "Teacher" });
	}
	render() {
		return (
			<div className="App">
				<NavBar />

				<h1>Name: {this.state.name}</h1>
				<h2>Age: {this.state.age}</h2>
				<h2>Occupation: {this.state.occupation}</h2>
				<button onClick={() => this.updateOccupation()}>
					Change Occupation
				</button>
				<NavBar />
			</div>
		);
	}
}
//es6 syntax for module.exports = App
export default App;

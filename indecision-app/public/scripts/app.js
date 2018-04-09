"use strict";

console.log("App.js is running");

// JSX
var app = {
	title: "Indecision App",
	subtile: "whatever subtitle",
	options: ['One', 'Two']
};
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	app.subtile && React.createElement(
		"p",
		null,
		app.subtile
	),
	React.createElement(
		"p",
		null,
		app.options.length > 0 ? "Here are your options" : "No options"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item one"
		),
		React.createElement(
			"li",
			null,
			"Item two"
		)
	)
);

var user = {
	name: "Peter",
	age: 20,
	location: "us"
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			"p",
			null,
			"Location: ",
			location
		);
	}
}

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name ? user.name : "Anonymous"
	),
	user.age && user.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

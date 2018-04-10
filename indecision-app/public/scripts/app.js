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

var count = 0;
var addOne = function addOne() {
	console.log('addOne');
};
var minusOne = function minusOne() {
	console.log('minusOne');
};
var setupReset = function setupReset() {
	console.log('reset');
};
var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Count: ",
		count
	),
	React.createElement(
		"button",
		{ onClick: addOne },
		"+1"
	),
	React.createElement(
		"button",
		{ onClick: minusOne },
		"-1"
	),
	React.createElement(
		"button",
		{ onClick: setupReset },
		"reset"
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

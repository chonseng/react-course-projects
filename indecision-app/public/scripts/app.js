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
	count += 1;
	renderCounterApp();
};
var minusOne = function minusOne() {
	count -= 1;
	renderCounterApp();
};
var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
			{ onClick: reset },
			"reset"
		)
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

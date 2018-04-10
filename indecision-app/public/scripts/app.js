"use strict";

console.log("App.js is running");

// JSX
var app = {
	title: "Indecision App",
	subtile: "whatever subtitle",
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault(); // Prevent refresh

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}
	render();
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	render();
};

var appRoot = document.getElementById('app');

var render = function render() {
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
			"p",
			null,
			app.options.length
		),
		React.createElement(
			"button",
			{ onClick: onRemoveAll },
			"Remove All"
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
		),
		React.createElement(
			"form",
			{ onSubmit: onFormSubmit },
			React.createElement("input", { type: "text", name: "option" }),
			React.createElement(
				"button",
				null,
				"Add Option"
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

render();

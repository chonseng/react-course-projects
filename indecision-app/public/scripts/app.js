"use strict";

console.log("App.js is running");

// JSX
var app = {
	title: "Indecision App",
	subtile: "whatever"
};
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	React.createElement(
		"p",
		null,
		app.subtile
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
	location: 'USA'
};
var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name
	),
	React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	React.createElement(
		"p",
		null,
		"Location: ",
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

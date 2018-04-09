console.log("App.js is running");

// JSX
const app = {
	title: "Indecision App",
	subtile: "whatever subtitle",
	options: ['One', 'Two']
}
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtile && <p>{app.subtile}</p>}
		<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

const user = {
	name: "Peter",
	age: 20,
	location: "us"
}

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : "Anonymous"}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);


const appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);
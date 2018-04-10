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

let count = 0;
const addOne = () => {
	count += 1;
	renderCounterApp();
};
const minusOne = () => {
	count -= 1;
	renderCounterApp();
};
const reset = () => {
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
	);
	ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
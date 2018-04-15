console.log("App.js is running");

// JSX
const app = {
	title: "Indecision App",
	subtile: "whatever subtitle",
	options: []
}

const onFormSubmit = (e) => {
	e.preventDefault(); // Prevent refresh

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}
	render();
}

const onRemoveAll = () => {
	app.options = [];
	render();
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum]; 
	alert(option);
}


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtile && <p>{app.subtile}</p>}
			<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map((opt) => <li key={opt}>{opt}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
}

render();
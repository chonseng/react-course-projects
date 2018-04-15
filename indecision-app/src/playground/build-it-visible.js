let visibility = false;

const toggleVisibility = (e) => {
	visibility = !visibility;
	render();
}


const render = () => {
	const jsx = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>
				{visibility ? "Hide Details" : "Show Details"}
			</button>
			{visibility && (
				<div>
					<p>Here's the details</p>
				</div>
			)}
		</div>
	);
	ReactDOM.render(jsx, document.getElementById("app"));
}

render();
const task = ({ task }) => {
	return (
		<div id="task" className="my-5 mx-2">
			<h3>{task.id}</h3>
			<h3>{task.name}</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default task;

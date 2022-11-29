const task = ({ task, onDelete, toggleReminder }) => {
	return (
		<div
			id="task"
			className={`my-5 mx-3 ${task.reminder === true ? 'upperBorder' : ''}`}
			// onDoubleClick={() => toggleReminder(task.id)}
			//* Function with return statement is used to get a parameter for function that is taken from root to pass the value in it.
			onDoubleClick={() => {
				return toggleReminder(task.id);
			}}
		>
			<h3>{task.id}</h3>
			<h3>{task.name}</h3>
			<p>{task.day}</p>

			{/* //NOTE: to pass the value to a function for it's parameter we use a function call back. like mention {()=> onDelete(task.id)} */}
			<button className="btn-primary btn" onClick={() => onDelete(task.id)}>
				Delete
			</button>
		</div>
	);
};

export default task;

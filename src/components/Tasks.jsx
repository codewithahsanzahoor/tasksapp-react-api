import Task from './Task';

const tasks = ({ tasks, onDelete, toggleReminder }) => {
	return (
		<div style={{ height: '50vh' }}>
			<div className="container d-flex flex-wrap">
				{tasks.map((task) => {
					return (
						<Task
							key={task.id}
							task={task}
							onDelete={onDelete}
							toggleReminder={toggleReminder}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default tasks;

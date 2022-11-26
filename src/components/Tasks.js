import Task from './Task';

const tasks = ({ tasks }) => {
	return (
		<div style={{ height: '50vh' }}>
			<div className="container d-flex flex-wrap">
				{tasks.map((task) => {
					return <Task key={task.id} task={task} />;
				})}
			</div>
		</div>
	);
};

export default tasks;

import { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			return alert('Please add Text in the text field');
		}

		onAdd({ text, day, reminder });
		setText('');
		setDay('');
		setReminder(false);
	};

	return (
		<div className="container my-3 border border-1">
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label>Task:</label>
					<input
						type="text"
						placeholder="Add Task"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>

				<div className="form-control my-2">
					<label>Day and Time:</label>
					<input
						type="text"
						placeholder="Add Day and Time"
						value={day}
						onChange={(e) => setDay(e.target.value)}
					/>
				</div>

				<div className="form-control my-2">
					<label>Set Reminder</label>
					<input
						type="checkbox"
						value={reminder}
						checked={reminder}
						//NOTE: if we want to take information from the child component we can take it by passing the props having (arguments inside)and if we want to give information to child then we use props for it.
						//* here you can see we are using props with arguments to give information to the parents which is {App.js}
						onChange={(e) => setReminder(e.currentTarget.checked)}
					/>
				</div>

				<input
					type="submit"
					value="Save Task"
					style={{ display: 'block', margin: '0px auto' }}
					className="btn btn-primary"
				/>
			</form>
		</div>
	);
};

export default AddTask;

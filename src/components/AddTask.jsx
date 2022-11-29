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

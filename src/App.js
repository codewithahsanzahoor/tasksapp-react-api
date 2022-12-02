import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import task from './components/Task';
import Tasks from './components/Tasks';

function App() {
	//NOTE: one way to apply style to your html in jsx is using {styleObj}=>{it is only good for using dynamic styling means when some event happens on screen some content dynamically changes} and other one is using a css file
	// const cardStyle = {
	// 	backgroundColor: '#b1d8e7',
	// };

	//NOTE: it is the smarter way to write props means to take the value of components:
	// function Header({ title, heading }) {
	// 	return (
	// 		<header>
	// 			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	// 				<div className="container-fluid">
	// 					<a className="navbar-brand" href="/">
	// 						{title} - {heading}
	// 					</a>
	// 					<button
	// 						className="navbar-toggler"
	// 						type="button"
	// 						data-bs-toggle="collapse"
	// 						data-bs-target="#navbarSupportedContent"
	// 						aria-controls="navbarSupportedContent"
	// 						aria-expanded="false"
	// 						aria-label="Toggle navigation"
	// 					>
	// 						<span className="navbar-toggler-icon" />
	// 					</button>
	// 					<div
	// 						className="collapse navbar-collapse"
	// 						id="navbarSupportedContent"
	// 					>
	// 						{/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	// 							<li className="nav-item">
	// 							<a className="nav-link active" aria-current="page" href="/">
	// 								Home
	// 							</a>
	// 						</li>
	// 						</ul> */}
	// 						{/* <form className="d-flex" role="search">
	// 						<input
	// 							className="form-control me-2"
	// 							type="search"
	// 							placeholder="Search"
	// 							aria-label="Search"
	// 						/>
	// 						<button className="btn btn-outline-success" type="submit">
	// 							Search
	// 						</button>
	// 					</form> */}
	// 					</div>
	// 				</div>
	// 			</nav>
	// 		</header>
	// 	);
	// }

	// function SectionStarts() {
	// 	return (
	// 		<section>
	// 			<div className="container d-flex flex-wrap">
	// 				<Cards />
	// 				<Cards />
	// 			</div>
	// 		</section>
	// 	);
	// }

	// function Cards() {
	// 	return (
	// 		<div className="container my-3 mx-3">
	// 			<div className="card" style={{ width: '18rem' }}>
	// 				{/* <img src="..." className="card-img-top" alt="..." /> */}
	// 				<div className="card-body " id="cardBody">
	// 					{/* <div className="card-body " style={cardStyle}> */}
	// 					<h5 className="card-title">Card title</h5>
	// 					<p className="card-text">
	// 						Some quick example text to build on the card title and make up the
	// 						bulk of the card's content.
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// function Footer() {
	// 	return (
	// 		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-black">
	// 			<p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>
	// 			<a
	// 				href="/"
	// 				className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
	// 			>
	// 				<svg className="bi me-2" width={40} height={32}>
	// 					<use xlinkHref="#bootstrap" />
	// 				</svg>
	// 			</a>
	// 		</footer>
	// 	);
	// }

	// const [tasks, settasks] = useState([
	// 	{
	// 		id: '1',
	// 		text: 'ahsanZahoor',
	// 		day: 'Monday',
	// 		reminder: true,
	// 	},
	// 	{
	// 		id: '2',
	// 		text: 'aliRaza',
	// 		day: 'Tuesday',
	// 		reminder: true,
	// 	},
	// 	{
	// 		id: '3',
	// 		text: 'ahmad',
	// 		day: 'Wednesday',
	// 		reminder: true,
	// 	},
	// 	{
	// 		id: '4',
	// 		text: 'aliAhmad',
	// 		day: 'Thursday',
	// 		reminder: true,
	// 	},
	// 	{
	// 		id: '5',
	// 		text: 'NoorAli',
	// 		day: 'Friday',
	// 		reminder: true,
	// 	},
	// ]);
	const [tasks, settasks] = useState([]);

	//NOTE: fetching data from the server: json server
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			settasks(tasksFromServer);
		};

		getTasks();
	}, []);

	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();

		return data;
		// console.log(data);
	};

	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();

		return data;
		// console.log(data);
	};

	const [showAddTask, setShowAddTask] = useState(false);

	//NOTE: you can make a function in one file {component} and when you want to move this function or Anything other thing from one place to another you can use props
	const onDelete = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});

		settasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = async (id) => {
		//* data that we want to update:
		const taskToToggle = await fetchTask(id);
		const upTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(upTask),
		});
		const data = await res.json();

		// console.log(id);
		settasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		);
	};

	//* Parameter can be anything what you can pass into function:
	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(task),
		});
		const data = await res.json();
		settasks([...tasks, data]);

		// console.log(task);
		// //* to generate a random number:
		// //* id is necessary because to in tasks.jsx it needs a unique key
		// const id = Math.floor(Math.random() * 1000000) + 1;
		// //* {task} is a object so we use {} to add id to it.
		// const newTask = { id, ...task };
		// //* [tasks] is a array so we use [] to add id to it.
		// settasks([...tasks, newTask]);
		// console.log(tasks);
	};

	const [nameList, setNameList] = useState({ name: 'ahsanzahoor', class: '9' });

	//NOTE: this is how we can change a particular object key {particular one or two change key}
	const changeNameList = () => {
		setNameList({
			...changeNameList,
			name: 'AhsanZahoor',
		});
	};

	//NOTE: here main function in which all other functions are derived
	return (
		<>
			<Header title="BasicsPractice" heading="Ahsan" />
			{/* <MainSection /> */}
			{/* <Footer /> */}
			{/* <div className="container">
				{list.map((listItem) => {
					return <h3 key={listItem.id}>{listItem.name}</h3>;
				})}
			</div> */}
			{/* <div onDoubleClick={changeNameList}>{nameList.name}</div> */}

			<div
				className="btn"
				id="btnAdd"
				style={
					showAddTask
						? { backgroundColor: 'blue', color: 'white' }
						: { backgroundColor: 'red', color: 'white' }
				}
				onClick={() => {
					setShowAddTask(!showAddTask);
				}}
			>
				{showAddTask ? 'Close' : 'Add'}
			</div>
			{/* //* shorter way of doing a ternary operator without an else statement in it */}
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={onDelete}
					toggleReminder={toggleReminder}
				/>
			) : (
				<p style={{ textAlign: 'center', color: 'red' }}>No Tasks To Show</p>
			)}

			<Footer />
		</>
	);
}

export default App;

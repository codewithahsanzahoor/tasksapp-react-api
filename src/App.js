import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import task from './components/Task';
import Tasks from './components/Tasks';

function App() {
	const [tasks, settasks] = useState([
		{
			id: '1',
			name: 'ahsanZahoor',
			day: 'Monday',
			reminder: true,
		},
		{
			id: '2',
			name: 'aliRaza',
			day: 'Tuesday',
			reminder: true,
		},
		{
			id: '3',
			name: 'ahmad',
			day: 'Wednesday',
			reminder: true,
		},
		{
			id: '4',
			name: 'aliAhmad',
			day: 'Thursday',
			reminder: true,
		},
		{
			id: '5',
			name: 'NoorAli',
			day: 'Friday',
			reminder: true,
		},
	]);

	//NOTE: you can make a function in one file {component} and when you want to move this function or Anything other thing from one place to another you can use props
	const onDelete = (id) => {
		// console.log(`on delete function is clicked with id, ${id}`);
		settasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		// console.log(id);
		settasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	const addTask = (task) => {
		console.log(task);
	};

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

			<AddTask onAdd={addTask} />
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={onDelete}
					toggleReminder={toggleReminder}
				/>
			) : (
				<p style={{ textAlign: 'center', color: 'red' }}>No Tasks To Show</p>
			)}
		</>
	);
}

export default App;

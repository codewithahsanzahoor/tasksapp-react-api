import Button from './Button';

const MainSection = () => {
	const Cards = () => {
		return (
			<div className="container my-3 mx-3">
				<div className="card" style={{ width: '18rem' }}>
					{/* <img src="..." className="card-img-top" alt="..." /> */}
					<div className="card-body " id="cardBody">
						{/* <div className="card-body " style={cardStyle}> */}
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<Button color="primary" message="clickMe" />
					</div>
				</div>
			</div>
		);
	};

	return (
		<section>
			<div className="container d-flex flex-wrap">
				<Cards />
				<Cards />
			</div>
		</section>
	);
};

export default MainSection;

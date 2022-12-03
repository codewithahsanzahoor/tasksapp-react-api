const Footer = () => {
	return (
		<footer>
			<div
				className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-black"
				style={{
					position: 'absolute',
					width: '100%',
					top: '100vh',
					textAlign: 'center',
				}}
			>
				<p className="col-md-4 mb-0 text-muted" style={{ width: '100%' }}>
					© 2021 Company, Inc
				</p>
				<a
					href="/"
					className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
				>
					<svg className="bi me-2" width={40} height={32}>
						<use xlinkHref="#bootstrap" />
					</svg>
				</a>
			</div>
		</footer>
	);
};

export default Footer;

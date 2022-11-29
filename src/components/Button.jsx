const Button = ({ color, message }) => {
	return (
		<button type="button" className={`btn btn-${color}`}>
			{message}
		</button>
	);
};

export default Button;

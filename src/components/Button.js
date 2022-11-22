const Button = ({ color, message }) => {
	return (
		<button type="button" class={`btn btn-${color}`}>
			{message}
		</button>
	);
};

export default Button;

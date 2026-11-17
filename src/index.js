export const handler = (event, _context) => {
	const num1 = Number(event.num1);
	const num2 = Number(event.num2);

	console.log("Number 1: ", num1);
	console.log("Number 2: ", num2);

	const response = num1 + num2;

	console.log("n1 + n2 = ", response);

	return {
		statusCode: 200,
		body: {
			response,
		},
	};
};

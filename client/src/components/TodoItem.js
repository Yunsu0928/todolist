import React from "react";

const Container = styled.div`
	background-color: skyblue;
`;

function TodoItem({ todo }) {
	const { id, text, checked } = todo;

	return (
		<Container>
			<div></div>
		</Container>
	);
}

export default TodoItem;

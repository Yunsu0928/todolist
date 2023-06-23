import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background-color: skyblue;
`;

function TodoItem({ todo }) {
	const { id, text, checked } = todo;

	return (
		<Container>
			<InnerContainer></InnerContainer>
		</Container>
	);
}

export default TodoItem;

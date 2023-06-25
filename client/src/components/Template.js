import React from "react";
import styled from "styled-components";

const Container = styled.div`
	max-height: 100vh;
`;

function Template({ children }) {
	return (
		<Container>
			<div className="title">오늘의 할일 (todo길이)</div>
			<div>{children}</div>
		</Container>
	);
}

export default Template;

import React from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff6f6;
	border-radius: 30px;
	padding: 20px;
	margin: 30px 30px 30px 0px;
`;

const MainTitle = styled.div`
	display: flex;
	justify-content: center;
	font-size: 60px;
	width: 85%;
	background-color: #ffdada;
	margin: 20px;
	padding: 10px 20px;
	border-radius: 30px;
`;

const MainBody = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ffdada;
	border-radius: 30px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FirstSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const BodyButton = styled.button`
	padding: 10px 20px;
	margin: 0px 50px 20px 0px;
	background-color: #fff3f3;
	border-radius: 30px;
	font-size: 20px;
	display: flex;
	align-items: center;
	border: none;
	svg {
		font-size: 30px;
		margin-right: 10px;
	}
`;

const TodoList = styled.div`
	width: 96%;
	background-color: #fff3f3;
	border-radius: 30px;
	/* margin: 20px; */
	height: 70%;
`;

function Main() {
	return (
		<Container>
			<MainTitle>All-in-one schedule</MainTitle>
			<MainBody>
				<FirstSection>
					<BodyButton>
						<BiPencil />
						<p>Add todolist</p>
					</BodyButton>
				</FirstSection>
				<TodoList>todolist</TodoList>
			</MainBody>
		</Container>
	);
}

export default Main;

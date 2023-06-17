import React from "react";
import styled from "styled-components";
import {
	AiFillHome,
	AiFillCalendar,
	AiFillMessage,
	AiFillSetting,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: #ffdada;
	border-radius: 30px;
	margin: 30px;
	svg {
		margin-left: 10px;
		margin-right: 10px;
		font-size: 45px;
		color: white;
		&:hover {
			color: #ff9292;
		}
	}
`;

function Sidebar() {
	return (
		<Container>
			<AiFillHome />
			<AiFillCalendar />
			<AiFillMessage />
			<FaUser />
			<AiFillSetting />
		</Container>
	);
}

export default Sidebar;

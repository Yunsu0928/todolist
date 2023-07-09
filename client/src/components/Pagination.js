import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
	margin-top: 3%;
	display: flex;
	align-items: center;
`;

const StyledButton = styled.button`
	padding: 1.8%;
	/* border: 1px solid #bfc8e5; */
	border: none;
	background-color: white;
`;

const StyledUl = styled.ul`
	list-style: none;
	padding: 0px;
	width: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLi = styled.li`
	float: left;
	border: 1px solid #bfc8e5;
	padding: 2%;
`;

const StyledA = styled.a`
	text-decoration: none;
	color: black;
`;

function Pagination({
	limit,
	totalUsers,
	paginate,
	currentPage,
	setCurrentPage,
}) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalUsers / limit); i++) {
		pageNumbers.push(i);
	}

	return (
		<StyledNav>
			<StyledButton
				onClick={() => {
					if (currentPage === 1) return;
					setCurrentPage(Math.abs(currentPage - 1));
				}}
			>
				&lt;
			</StyledButton>
			{console.log(currentPage)}
			<StyledUl>
				{pageNumbers.map((number) => (
					<StyledLi key={number}>
						<StyledA
							onClick={() => {
								paginate(number);
							}}
							href="!#"
						>
							{number}
						</StyledA>
					</StyledLi>
				))}
			</StyledUl>
			<StyledButton
				onClick={() => {
					if (currentPage === pageNumbers.length) return;
					setCurrentPage(Math.abs(currentPage + 1));
				}}
			>
				&gt;
			</StyledButton>
			<div></div>
		</StyledNav>
	);
}

export default Pagination;

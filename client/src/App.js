import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const Container = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	width: 100vw;
	height: 100vh;
	background-color: #f3f0f0;
`;

const InnerContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	background-color: white;
	border-radius: 40px;
	margin: 20px;
`;

function App() {
	return (
		<Container>
			<InnerContainer>
				<Sidebar />
				<Main />
			</InnerContainer>
		</Container>
	);
}

export default App;

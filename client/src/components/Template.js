import React from "react";

function Template({ children }) {
	return (
		<div className="Template">
			<div className="title">오늘의 할일 (todo길이)</div>
			<div>{children}</div>
		</div>
	);
}

export default Template;

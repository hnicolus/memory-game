import React from "react";
const CellStatus = {
	NORMAL: "white",
	HIGHLIGHT: "lightblue",
	CORRECT: "lightgreen",
	WRONG: "pink",
};
const Cell = ({ width }) => {
	let cellStatus = CellStatus.NORMAL;

	return (
		<div
			className="cell"
			style={{ width: `${width}%`, backgroundColor: cellStatus }}
		/>
	);
};

export default Cell;

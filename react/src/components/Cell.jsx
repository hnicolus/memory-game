import React from "react";
import { GameStatus } from "./GameSession";
const CellStatus = {
	NORMAL: "white",
	HIGHLIGHT: "lightblue",
	CORRECT: "lightgreen",
	WRONG: "pink",
};
const Cell = ({ width, gameStatus, isChallenge, isPicked, onClick }) => {
	let cellStatus = CellStatus.NORMAL;
	if (gameStatus !== GameStatus.NEW) {
		if (isPicked) {
			cellStatus = isChallenge ? CellStatus.CORRECT : CellStatus.WRONG;
		} else if (
			isChallenge &&
			(gameStatus === GameStatus.CHALLENGE || gameStatus === GameStatus.LOST)
		) {
			cellStatus = CellStatus.HIGHLIGHT;
		}
	}
	return (
		<div
			className="cell"
			style={{ width: `${width}%`, backgroundColor: cellStatus }}
			onClick={onClick}
		/>
	);
};

export default Cell;

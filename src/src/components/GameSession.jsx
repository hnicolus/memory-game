import React, { useState } from "react";

import Cell from "./Cell";
import Footer from "./Footer";
import utils from "../utils";

const GameStatus = {
	NEW: "NEW",
	CHALLENGE: "CHALLENGE",
	PLAYING: "PLAYING",
	WON: "WON",
	LOST: "LOST",
};

function GameSession({
	cellIds,
	challengeCellIds,
	cellWidth,
	challengeSize,
	challengeSeconds,
	playSeconds,
	maxWrongAttempts,
}) {
	const [gameStatus, setGameStatus] = useState(GameStatus.NEW);
	console.log(challengeCellIds);
	return (
		<div className="game">
			<div className="grid">
				{cellIds.map((cellId) => (
					<Cell key={cellId} width={cellWidth} />
				))}
			</div>
			<Footer
				gameStatus={gameStatus}
				startGame={() => setGameStatus(GameStatus.CHALLENGE)}
			/>
		</div>
	);
}

export default GameSession;

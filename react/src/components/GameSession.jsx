import React, { useState, useEffect } from "react";
import utils from "../utils";
import Cell from "./Cell";
import Footer from "./Footer";

export const GameStatus = {
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
	autoStart,
	resetGame,
	nextChallenge,
	currentLevel
}) {
	const [gameStatus, setGameStatus] = useState(autoStart ? GameStatus.CHALLENGE : GameStatus.NEW);
	const [pickedCellIds, setPickedCellIds] = useState([]);
	const [countdown, setCountdown] = useState(playSeconds);

	const pickCell = (cellId) => {
		if (gameStatus === GameStatus.PLAYING) {
			setPickedCellIds((pickedCellIds) => {
				if (pickedCellIds.includes(cellId)) {
					return pickedCellIds;
				}
				const newPickedCellIds = [...pickedCellIds, cellId];
				const [correctPicks, wrongPicks] = utils.arrayCrossCounts(
					newPickedCellIds,
					challengeCellIds
				);
				if (correctPicks === challengeSize) {
					setGameStatus(GameStatus.WON);
				}
				if (wrongPicks === maxWrongAttempts) {
					setGameStatus(GameStatus.LOST);
				}
				return newPickedCellIds;
			});
		}
	};

	useEffect(() => {
		let timerId;
		if (gameStatus === GameStatus.CHALLENGE) {
			timerId = setTimeout(
				() => setGameStatus(GameStatus.PLAYING),
				1000 * challengeSeconds
			);
		}
		if (gameStatus === GameStatus.PLAYING) {
			timerId = setInterval(() => {
				setCountdown((countdown) => {
					if (countdown === 1) {
						clearTimeout(timerId);
						setGameStatus(GameStatus.LOST);
					}
					return countdown - 1;
				});
			}, 1000);
		}
		return () => clearTimeout(timerId);
	}, [gameStatus, challengeSeconds]);
	return (
		<div className="game">
			<div>
				<h5> Level : {currentLevel}</h5>
			</div>
			<div className="grid">
				{cellIds.map((cellId) => (
					<Cell
						key={cellId}
						width={cellWidth}
						gameStatus={gameStatus}
						isChallenge={challengeCellIds.includes(cellId)}
						isPicked={pickedCellIds.includes(cellId)}
						onClick={() => pickCell(cellId)}
					/>
				))}
			</div>
			<Footer
				gameStatus={gameStatus}
				startGame={() => setGameStatus(GameStatus.CHALLENGE)}
				countdown={countdown}
				resetGame={resetGame}
				nextChallenge={nextChallenge}

			/>
		</div>
	);
}

export default GameSession;

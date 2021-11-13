import React from "react";
import { GameStatus } from "./GameSession";
const Messages = {
	NEW: "You will have a few seconds to memorize the blue random cells",
	CHALLENGE: "Remember these blue cells now",
	PLAYING: "Which cells were blue?",
	WON: "Victory!",
	LOST: "Game Over",
};

function Footer({ gameStatus, startGame, countdown, resetGame, nextChallenge }) {
	const buttonAreaContent = () => {
		switch (gameStatus) {
			case GameStatus.NEW:
				return <button onClick={startGame}>Start Game</button>;
			case GameStatus.CHALLENGE:
				break;
			case GameStatus.PLAYING:
				return countdown;
			case GameStatus.WON:
				return (
					<button
						onClick={nextChallenge}
					>
						Play next challenge
					</button>
				);
			case GameStatus.LOST: {
				return (
					<button
						onClick={resetGame}
					>
						Play Again
					</button>
				);
			}
			default:
				break;
		}
	};

	return (
		<>
			<div className="message">{Messages[gameStatus]}</div>
			<div className="button">{buttonAreaContent()}</div>
		</>
	);
}

export default Footer;

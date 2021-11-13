import React from "react";
import { GameStatus } from "./GameSession";
const Messages = {
	NEW: "You will have a few seconds to memorize the blue random cells",
	CHALLENGE: "Remember these blue cells now",
	PLAYING: "Which cells were blue?",
	WON: "Victory!",
	LOST: "Game Over",
};

function Footer({ gameStatus, startGame, countdown }) {
	const buttonAreaContent = () => {
		switch (gameStatus) {
			case GameStatus.NEW:
				return <button onClick={startGame}>Start Game</button>;
			case GameStatus.CHALLENGE:
			// fall-through
				break;
			case GameStatus.PLAYING:
				return countdown;
			case GameStatus.WON:
			// fall-through
			break;
			case GameStatus.LOST: {
				return (
					<button
						onClick={() => {
							/* TODO */
						}}
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

import React from "react";
const Messages = {
	NEW: "You will have a few seconds to memorize the blue random cells",
	CHALLENGE: "Remember these blue cells now",
	PLAYING: "Which cells were blue?",
	WON: "Victory!",
	LOST: "Game Over",
};

function Footer({ gameStatus, startGame }) {
	return (
		<>
			<div className="message">{Messages[gameStatus]}</div>
			<div className="button">
				<button onClick={startGame} className="btn">
					Start Game
				</button>
			</div>
		</>
	);
}

export default Footer;

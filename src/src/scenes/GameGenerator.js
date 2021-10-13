import React from "react";
import GameSession from "../components/GameSession";
import utils from "../utils";

const GameGenerator = () => {
	const gridSize = 5;
	const challengeSize = 3;
	const cellIds = utils.createArray(gridSize * gridSize);
	const cellWidth = 100 / gridSize;
	const challengeCellIds = utils.sampleArray(cellIds, challengeSize);
	return (
		<GameSession
			cellIds={cellIds}
			challengeCellIds={challengeCellIds}
			cellWidth={cellWidth}
			challengeSize={challengeSize}
			challengeSeconds={3}
			playSeconds={10}
			maxWrongAttempts={3}
		/>
	);
};

export default GameGenerator;

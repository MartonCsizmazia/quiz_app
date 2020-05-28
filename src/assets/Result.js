import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score"> You scored {score} from 5 questions! </div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
        </button>
    </div>
);

export default Result;
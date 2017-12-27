import React from 'react';
import Cage from './Cage';

const Board = () => (
    <div className="board">
        <div className="board__row">
            <Cage cage={0} />
            <Cage cage={1} />
            <Cage cage={2} />
        </div>

        <div className="board__row">
            <Cage cage={3} />
            <Cage cage={4} />
            <Cage cage={5} />
        </div>

        <div className="board__row">
            <Cage cage={6} />
            <Cage cage={7} />
            <Cage cage={8} />
        </div>
    </div>
);

export default Board;

import React from 'react';
import Cage from './Cage';

const Board = () => (
    <div>
        <p>Board Component</p>
        <Cage cage={0} />
        <Cage cage={1} />
        <Cage cage={2} />
        <Cage cage={3} />
        <Cage cage={4} />
        <Cage cage={5} />
        <Cage cage={6} />
        <Cage cage={7} />
        <Cage cage={8} />
    </div>
);

export default Board;

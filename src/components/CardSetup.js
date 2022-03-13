import React, { useState } from "react";
import RICK from '../images/RICK.png'
import MORTY from '../images/MORTY.png'
import JERRY from '../images/JERRY.png'
import BETH from '../images/BETH.png'
import SUMMER from '../images/SUMMER.png'
import TERRY from '../images/TERRY.png'
import TAMMY from '../images/TAMMY.png'
import SQUANCHY from '../images/SQUANCHY.png'
import GOLDENFOLD from '../images/GOLDENFOLD.png'
import FART from '../images/FART.png'
import EVILMORTY from '../images/EVILMORTY.png'
import BIRDPERSON from '../images/BIRDPERSON.png'

import Card from "./Card";
import './CardSetup.css';

const CardSetup = (props) => {

    const cards = [
        { image: RICK,  name: 'Rick'},
        { image: MORTY,  name: 'MORTY'},
        { image: JERRY,  name: 'JERRY'},
        { image: BETH,  name: 'BETH'},
        { image: SUMMER,  name: 'SUMMER'},
        { image: TERRY,  name: 'TERRY'},
        { image: TAMMY,  name: 'TAMMY'},
        { image: SQUANCHY,  name: 'SQUANCHY'},
        { image: GOLDENFOLD,  name: 'GOLDENFOLD'},
        { image: FART,  name: 'FART'},
        { image: EVILMORTY,  name: 'EVILMORTY'},
        { image: BIRDPERSON,  name: 'BIRDPERSON'},
    ]

    const [positions, setPositions] = useState(
        cards.map((value, index) => index)
    );

    const shuffleArray = (array) => {
        let shuffledArray = array.slice(0);
        for(let i = 0; i < shuffledArray.length; i++) {
            const j = Math.floor(Math.random() * shuffledArray.length);
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    }

    const randomizeCards = () => {
        setPositions(shuffleArray(positions));
    }

    return (
        <div id="card-grid">
            {positions.map((position) => {
                return (
                    <Card
                        key={cards[position].name}
                        image={cards[position].image}
                        name={cards[position].name}
                        reset={props.reset}
                        endCurrentStage={props.endCurrentStage}
                        incrementScore={props.incrementScore}
                        randomizeCards={randomizeCards}
                    />
                )
            })}
        </div>
    );
}

export default CardSetup;
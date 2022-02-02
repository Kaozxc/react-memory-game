import React, {useState} from "react";
import Card from "./Card";
import BETH from '../images/BETH.png';
import JERRY from '../images/JERRY.png';
import TERRY from '../images/TERRY.png';
import MORTY from '../images/MORTY.png';
import RICK from '../images/RICK.png';
import SQUANCHY from '../images/SQUANCHY.png';
import SUMMER from '../images/SUMMER.png';
import FART from '../images/FART.png';
import EVILMORTY from '../images/EVILMORTY.png';
import BIRDPERSON from '../images/BIRDPERSON.png';
import TAMMY from '../images/TAMMY.png';
import GOLDENFOLD from '../images/GOLDENFOLD.png';


import './CardSetup.css';


const CardSetup = (props) => {
    const cards = [
        {image: BETH, name: 'Beth'},
        {image: JERRY, name: 'Jerry'},
        {image: TERRY, name: 'Terry'},
        {image: MORTY, name: 'Morty'},
        {image: RICK, name: 'Rick'},
        {image: SQUANCHY, name: 'Squanchy'},
        {image: SUMMER, name: 'Summer'},
        {image: FART, name: 'Fart'},
        {image: EVILMORTY, name: 'Evil Morty'},
        {image: BIRDPERSON, name: 'Bird Person'},
        {image: TAMMY, name: 'Tammy'},
        {image: GOLDENFOLD, name: 'Goldenfold'},
    ];

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
    };

    const randomizeCards = () => {
        setPositions(shuffleArray(positions));
    };

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
    )
}

export default CardSetup;
import React from "react";

const Header = (props) => {
    return (
        <div id="header">
            <div id="header-left-section">
                <div id="header-title">
                    <h1>Rick & Morty Memory Game</h1>
                </div>
                <div>
                    Your score is: {props.score}<br/>
                    Your BEST score is {props.bestScore}
                </div>
            </div>
        </div>
    )
}

export default Header;
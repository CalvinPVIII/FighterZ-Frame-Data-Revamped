import "../styles/CharacterList.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function CharacterList(props) {
    const [sortedCharacterList, setSortedCharacterList] = useState();
    return (
        <div className="CharacterList">
            <Header />
            <p className="advanced-search-button">Advanced Search</p>
            <div className="character-list-wrapper">
                {props.characterList.map((character) => (
                    <Link
                        to={`/${character.character.bio.name
                            .split(" ")
                            .join("")}`}
                    >
                        <img
                            src={character.character.bio.images.icon}
                            alt={`${character.character.bio.name} Icon`}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CharacterList;

import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

function App() {
    const [isApiCallLoaded, setIsApiCallLoaded] = useState(false);
    const [characterList, setCharacterList] = useState();

    useEffect(() => {
        fetch("http://localhost:3001/characters")
            .then((result) => result.json())
            .then((result) => {
                setCharacterList(result);
                setIsApiCallLoaded(true);
            });
    }, []);
    if (isApiCallLoaded) {
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <CharacterList characterList={characterList} />
                        )}
                    />
                    {characterList.map((character) => (
                        <Route
                            path={`/${character.character.bio.name
                                .split(" ")
                                .join("")}`}
                            render={(props) => (
                                <Character
                                    characterInfo={character.character}
                                />
                            )}
                            key={character.id}
                        />
                    ))}
                </Switch>
            </div>
        );
    } else if (!isApiCallLoaded) {
        return (
            <div className="App">
                <h2>Please wait </h2>
            </div>
        );
    }
}

export default App;

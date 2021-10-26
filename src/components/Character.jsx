import "../styles/Character.css";
import React, { useState, useEffect } from "react";

function Character(props) {
    console.log(props);
    return (
        <div className="Character">
            <h1>{props.characterInfo.bio.name}</h1>
        </div>
    );
}

export default Character;

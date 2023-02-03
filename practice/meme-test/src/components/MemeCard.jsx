import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MemeCard(props) {
    return (
        <div className="memeCard">
            <h1 id="card--top">{props.topText}</h1>
            <img src={props.url} />
            <h1 id="card--bottom">{props.bottomText}</h1>
        </div>
    )
}
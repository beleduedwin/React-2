import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div>
        <img src={photo} width="500" height="450" alt=""/>
        <figcaption>
            <blockquote>Travel to {destination} in {country} <br/>(distance: {distance} km)</blockquote>
        </figcaption>
    </div>
);

export default Travel;
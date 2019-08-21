import React from "react";

const Quote = ({ destination, country, photo, distance }) => (

        <div>
            <p>{destination}</p>
            <p>{country}</p>
            <img src={photo} alt=""/>
            <p>{distance}</p>
        </div>
);

export default Quote;
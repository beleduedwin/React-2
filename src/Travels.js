import React from "react";
import Travel from "./Travel";
/*
* pour créer l'application : npx create-react-app
* pour lancer : npm start
*/

//travels_tab : contient des tableaux d'objet contenant les données
const travels_tab = [
    {
        destination:"Yangon",
        country:"Myanmar",
        photo:"https://cdn.pixabay.com/photo/2019/08/06/12/15/panama-4388225_960_720.jpg",
        distance:"2000"
    },
    {
        destination:"Kinahsa",
        country:"Congo",
        photo:"https://image.shutterstock.com/image-photo/light-streaks-front-future-tower-600w-1374505073.jpg",
        distance:"8000"
    },
    {
        destination:"Bangkok",
        country:"Thailande",
        photo:"https://cdn.pixabay.com/photo/2016/11/08/05/11/children-1807511_960_720.jpg",
        distance:"533"
    },
    {
        destination:"Las-Vegas",
        country:"US",
        photo:"https://cdn.pixabay.com/photo/2017/04/18/03/59/sign-2237590_960_720.jpg",
        distance:"1000"
    },
    {
        destination:"Bruxelles",
        country:"Belgiques",
        photo:"https://image.shutterstock.com/image-photo/brussels-belgium-march-24-famous-600w-1337651405.jpg",
        distance:"3000"
    } ];


//mapping des travels
const Travels =() => (
    <div>
        {travels_tab.map( arg => (
            <Travel destination={arg.destination} country={arg.country} photo={arg.photo} distance={arg.distance}/>
        )) }

    </div>
);
export default Travels;
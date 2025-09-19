import React, { useState } from 'react';
import "./Country.css"
// const handleVisited = () => {
//     // console.log("button click")
//     setVisited(true)
// }

const Country = ({country,  handleVisitedCountries}) => {
    // console.log(country);
    const [Visited, setVisited] = useState(false)
    const handleVisited = () => {
    // console.log("button click")
    if(Visited){
        setVisited(false)
    }
    else{
        setVisited(true)
    }
     handleVisitedCountries(country)
}
    
    return (
        <div className={`country ${Visited && 'country-visited'}` }>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h1>Name: {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <h3>Area: {country.area.area} {country.area.area > 80000 ? "Big Country" : "Small Country"}</h3>
            <h3>Continents: {country.continents.continents}</h3>
            <button onClick={handleVisited}>{Visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;
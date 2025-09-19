import React, { use, useState } from 'react';
import Country from './Country/Country';
import "./Countries.css";


const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const handleVisitedFlag = (flag) =>{
    const newVisitedFlags =[...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags)
        
    }
    
    
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total Country Visited: {visitedCountries.length}</h2>
            <h3>Total Flag Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
           <div className='countries'>
             {
                countries.map(country => <Country key={country.cca3.cca3}
                     country={country} 
                     handleVisitedFlag={handleVisitedFlag}
                      handleVisitedCountries={ handleVisitedCountries}>

                     </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;
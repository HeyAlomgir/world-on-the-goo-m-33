import React, { useState } from 'react';
import './Country.css'

const Country = ({country , handelCountriesVisited,handleVisitedFlag}) => {

    // console.log(country.area.area);
    // console.log(handelCountriesVisited);

    const [visited , setVisited]=useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);
        handelCountriesVisited(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population} </p>
            <p>Area : {country.area.area } {
                country.area.area > 300000?"Big Country":"Small Country"} </p>

                <button className='btn' onClick={handleVisited}>
                    {visited ? "Visited":"Not Visited"}
                </button>
                <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}} className='btn'>Add To Flag</button>
        
        </div>
    );
};

export default Country;
import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country.area.area);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population} </p>
            <p>Area : {country.area.area } {
                country.area.area > 300000?"Big Country":"Small Country"} </p>
        
        </div>
    );
};

export default Country;
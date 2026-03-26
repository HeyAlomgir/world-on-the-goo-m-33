import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCounttries]=useState([]);
    const [visitedFlag,setVisitedFlag]=useState([]);


    const handelCountriesVisited=(country)=>{
        console.log("clik",country);
        const newVisitedCountries =[...visitedCountries, country];
        setVisitedCounttries(newVisitedCountries)
    }

    const handleVisitedFlag=(flag)=>{
        const newVisitedFlag=[...visitedFlag,flag];
        setVisitedFlag(newVisitedFlag,flag)
    }




    const countriesData =  use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries);
    return (
        <div>
            <h1>In the countries : {countries.length} </h1>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <ol>

                {
                    visitedCountries.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)
                }
            </ol>

            <h3>Total Flag Visited : {visitedFlag.length} </h3>

            <div className='ctn'>
                {
                    visitedFlag.map(flag=> <img src={flag}></img>)
                }
            </div>
        <div className='countries'>
              {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    handelCountriesVisited={handelCountriesVisited}
                    handleVisitedFlag={handleVisitedFlag}
                    country={country}></Country> )
            }
        </div>
          
        </div>
    );
};

export default Countries;
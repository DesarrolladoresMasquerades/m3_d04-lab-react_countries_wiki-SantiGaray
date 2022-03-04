//import { useState, useEffect } from 'react';
//import {useParams} from 'react-router';
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function CountryDetails(props) {
    const {countryId} = useParams()
    const country = props.countries.find((country)=>country._id === countryId)

  return (
    <div>
      
      <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt="" width="100px" height="auto" />
      <h3>{country.name.official}</h3>
      <h3>Capital:{country.capital[0]}</h3>
      <h3>Area:{country.area}</h3>
      <h3>Borders:</h3>
        <ul>{country.borders.map((border)=>{
            const borderCountry = props.countries.find((country)=>country.alpha3Code === border )
            return (<li key={borderCountry._id}><Link to={"/" + borderCountry._id }>{borderCountry.name.official}</Link></li>
        
        )}
        )}
        </ul>
    </div>
  );
}

import { Link } from 'react-router-dom';
//import { useState } from 'react';

export default function CountriesList(props) {

  return (
      <div className="country">
        {props.countries.map((country)=>{
            return(
                <Link key={country._id}  to={`/${country.alpha3Code}`}>
                    <img
                        src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
                        alt=""
                        width="100px"
                        height="auto"
                    />
                    <h3>{country.name.official}</h3>
                </Link>)
        })}
      </div>
  );
}

//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
//import countriesData from "./countries.json"
import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from 'axios'


function App() {
  const apiUrl = "https://ih-countries-api.herokuapp.com/countries"
  const [countryList,setCountries ] = useState([])

  useEffect(() => {
    axios.get(apiUrl)
    .then((response) => {
      setCountries(response.data)
    })
  }, []);

  

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countryList} />
        </div>
        <div>
          <Routes>
            <Route path ={"/:countryId"} element = {<CountryDetails countries={countryList}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

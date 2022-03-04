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
  }, []); // Lo que va dentro del [] me dice que cada vez que eso cambie, 
          // se actualizará el State. Por ejemplo si dijera countryID entonces 
          // cada vez que la countryID cambiase EN LA URL entonces volveria a recargar 
          // el State(countryList) con toda la API. En este caso no es necesario porque ya 
          // tengo cargada toda la API en dicho State. en el caso de algo mas pequeño si serviria porque traigo solo eso, 
          // ejemplo userID y cada vez que el userID cambie en la URL entonces me recargara el State con el User desde la DB.

  

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

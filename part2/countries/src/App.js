import axios from "axios";
import React, { useState } from "react";
import Country from "./components/Country";
import CountriesResult from "./components/CountriesResult";


function App() {

  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const fetchCountryByName = async (name) => {
    const result = await axios.get("https://studies.cs.helsinki.fi/restcountries/api/all");
    setCountries(result.data.filter(d => String(d.name.common.toLowerCase()).includes(name)));
    setLoading(false);
  }

  let delay
  const handleInputQuery = (event) => {
    setLoading(true);
    if (delay) clearTimeout(delay);
    delay = setTimeout(() => {
      const query = event.target.value;
      fetchCountryByName(query);
    }, 500);
  }

  return (
    <>
      <div>
        find countries <input onChange={handleInputQuery} />
        {!loading && (
          <CountriesResult countries={countries} />
        )}
        {loading && (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default App;

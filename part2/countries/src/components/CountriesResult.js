import React, { useState } from "react";
import Country from "./Country";


const CountriesResult = ({ countries }) => {

    const [country, setCountry] = useState(null);

    const ShowContryHandler = (country) => {
        setCountry(country);
    }

    if (country) {
        return (
            <Country country={country} />
        );
    } else {

        if (countries.length === 1) {
            setCountry(countries[0]);
        }

        

        if (countries.length === 0) {
            return (
                <div>
                    No matches found
                </div>
            );
        }

        if (countries.length > 10) {
            return (
                <div>Too many matches, specify another filter</div>
            );
        }

        if (countries.length <= 10) {
            return (
                <>
                    {countries.map((country, i) => (
                        <React.Fragment key={i}>
                            <div>{country.name.common} <button onClick={() => ShowContryHandler(country)}>Show</button></div>
                        </React.Fragment>
                    ))}
                </>
            );
        }
    }
}

export default CountriesResult;
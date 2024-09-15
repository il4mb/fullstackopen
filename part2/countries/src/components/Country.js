import Wheater from "./Wheater";

const Country = ({ country }) => {

    return (
        <>
            <h2>{country.name.common}</h2>
            <div>Capital {country.capital.join(", ")}</div>
            <div>Area {country.area}</div>
            <h3>Languanges :</h3>
            <ul>
                {Object.values(country.languages).map((lang, i) => <li key={i}>{lang}</li>)}
            </ul>
            <div>
                <img style={{ border: "1px solid" }} width={200} src={country.flags.svg} />
            </div>
            <h3>Wheater in {country.name.common}</h3>
            <Wheater lat={country.latlng[0]} lon={country.latlng[1]} />
        </>
    )
}

export default Country;
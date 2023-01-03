import { useState, useEffect } from "react";
import axios from "axios";

export const CountryDetails = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Area:</strong> {country.area}
      </p>
      <h3>Languages</h3>
      {Object.keys(country.languages).map((lang, index) => (
        <p key={index}>{lang}</p>
      ))}
      {console.log("country.flags.png", country.flags.png)}
      <img src={country.flags.png} alt={`The flag of ${country.name.common}`} />
    </>
  );
};

function App() {
  const [AllCountries, setAllCountries] = useState([]);

  console.log("first country in array: ", AllCountries[0]);

  const [searchField, setSearchField] = useState("");

  const CountriesToDisplay = AllCountries.filter((c) =>
    c.name.common.toLowerCase().includes(searchField.toLowerCase())
  );
  console.log("CountriesToDisplay", CountriesToDisplay);

  let searchResult = "";
  if (CountriesToDisplay.length > 10)
    searchResult = (
      <p>Too many countries, Please make your search more specific</p>
    );
  else if (CountriesToDisplay.length === 0)
    searchResult = <p>No matching country</p>;
  else if (CountriesToDisplay.length === 1) {
    searchResult = <CountryDetails country={CountriesToDisplay[0]} />;
  } else {
    searchResult = CountriesToDisplay.map((c) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p style={{ margin: "0" }}>{c.name.common}</p>

        <button onClick={() => setSearchField(c.name.common)}>show</button>
      </div>
    ));
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Countries</h1>
      <input
        value={searchField}
        onChange={(e) => {
          setSearchField(e.target.value);
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem 0",
        }}
      >
        {searchResult}
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Planet from "../Planet/Planet";
import { useSelector } from "react-redux";

function Search(props) {
  const [input, setInput] = useState("");
  const [planets, setPlanets] = useState([]);
  const [searches, setSearches] = useState(0);
  const [error, setError] = useState("");

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetcher = async function fetchData() {
        const request = await axios
          .get(`https://swapi.dev/api/planets/?search=${input}`)
          .then((res) => {
            setSearches(searches + 1);
            return setPlanets(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
        return request;
      };
      fetcher();
    }, 200);
    return () => clearTimeout(timer);
  }, [input]);

  const handleChange = (e) => {
    if (searches <= 15 || user === "Luke Skywalker") {
      setInput(e.target.value);
    } else {
      setError(
        "You have exceeded search limits in one minute, try again later, when the message dissapears"
      );
    }
    console.log(searches);
  };

  const cleanSearches = () => {
    setSearches(0);
    setError("");
  };
  setInterval(cleanSearches, 60000);

  return (
    <div className="container">
      <h4>Welcome, {user ? user : "stranger"}</h4>
      <form action="">
        <h4>{}</h4>
        <div className="input-field search">
          <i className="material-icons prefix">search</i>
          <label htmlFor="search">Search planet</label>
          <input type="text" id="search" onChange={handleChange} />
        </div>
      </form>
      <div className="row">
        {error && <h3 className="red-text">{error}</h3>}
        {planets ? (
          planets.map((planet) => (
            <Planet
              key={planet.name}
              name={planet.name}
              population={planet.population}
            />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default Search;
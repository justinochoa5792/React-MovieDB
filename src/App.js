import axios from "axios";
import { useState } from "react";
import "./App.css";
import Results from "./component/Results";
import SearchBar from "./component/SearchBar";
import Popup from "./component/Popup";

function App() {
  const [values, setValues] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiUrl = "http://www.omdbapi.com/?apiKey=32e9db94";

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(apiUrl + "&s=" + values.s).then(({ data }) => {
        let results = data.Search;

        setValues((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleChange = (e) => {
    let s = e.target.value;

    setValues((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopUp = (id) => {
    axios.get(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      setValues((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopUp = (id) => {
    setValues((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <SearchBar handleChange={handleChange} search={search} />
        <Results results={values.results} openPopUp={openPopUp} />

        {typeof values.selected.Title != "undefined" ? (
          <Popup selected={values.selected} closePopUp={closePopUp} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;

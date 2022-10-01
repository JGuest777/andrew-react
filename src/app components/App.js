import "../styles/app.css";
import { useState, useEffect } from "react";
import PersonCard from "./People/personCardOne.js";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios("https://www.fishwatch.gov/api/species");

      setData(res.data);
      setFilteredData(res.data);
    };

    fetchPost();
  }, []);

  const handleClick = (buttonType) => {
    let species;

    if (buttonType === "above") {
      species = data.filter((specie) => parseInt(specie.Calories) > userInput);
    }

    if (buttonType === "below") {
      species = data.filter((specie) => parseInt(specie.Calories) < userInput);
    }

    if (buttonType === "reset") {
      species = data;
    }

    setFilteredData(species);
  };

  return (
    <div className="container">
      <h1>Filter your fish by calories</h1>
      <TextField
        id="outlined-number"
        placeholder="Enter your calories"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        onClick={() => {
          handleClick("above");
        }}
        style={{ marginTop: "1rem" }}
        variant="outlined"
        color="secondary"
      >
        {`Filter above ${userInput} calories`}
      </Button>
      <Button
        onClick={() => {
          handleClick("below");
        }}
        style={{ marginTop: "1rem" }}
        variant="outlined"
        color="secondary"
      >
        {`Filter below ${userInput} calories`}
      </Button>
      <Button
        onClick={() => {
          handleClick("reset");
        }}
        style={{ marginTop: "1rem" }}
        variant="outlined"
        color="secondary"
      >
        reset
      </Button>
      <div className="card-container">
        {filteredData.map((species, i) => (
          <PersonCard
            key={i}
            name={species["Species Name"]}
            scientificName={species["Scientific Name"]}
            calories={species.Calories}
            location={species.Location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

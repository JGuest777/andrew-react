import "../styles/app.css";
import { useState, useEffect } from "react";
import PersonCard from "./People/personCardOne.js";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//  homework:
//  filter the cards from lowest to highest calories on click
//  if the calories for the specie is under is under 90 change background color. create 3 style color ranges
// position cards in 3x3 grid
// truncate species location text have '...' if the text runs over using parameters
// if number input causes no cards to appear have error message "no results found" ---> if filteredData = []

function App() {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios("https://www.fishwatch.gov/api/species");

      setData(
        res.data.sort((a, b) => {
          return a.Calories - b.Calories;
        })
      );
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

    setFilteredData(species.sort((a, b) => a - b));
    console.log(filteredData);
    if (filteredData === []) {
      return `Sorry! No results found for fish species sorted by ${userInput}`;
    }
  };

  const truncateString = (input) =>
    input?.length > 225 ? `${input.substring(0, 220)}...` : input;

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
      <div className="containerCard">
        {filteredData.map((species, i) => (
          <PersonCard
            key={i}
            name={species["Species Name"]}
            scientificName={species["Scientific Name"]}
            calories={species.Calories}
            location={truncateString(species.Location)}
            truncateString={truncateString}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

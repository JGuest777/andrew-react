import "../styles/app.css";
import { useState, useEffect } from "react";
import PersonCard from "./People/personCardOne.js";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios("https://www.fishwatch.gov/api/species");

      setData(res.data);
    };

    fetchPost();
  }, []);

  const under150Calories = (calories) => {
    if (calories < 150) {
      return calories;
    }
  };

  return (
    <div className="container">
      <div className="card-container">
        {data.map((species, i) => (
          <PersonCard
            key={i}
            name={species["Species Name"]}
            scientificName={species["Scientific Name"]}
            calories={species.Calories}
            location={species.Location}
            under150Calories={under150Calories}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

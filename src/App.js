import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  const style = { width: "300px", height: "100px", backgroundColor: color };

  const toRed = () => {
    if (color === "blue") {
      setColor("red");
    } else if (color === "red") {
      setColor("blue");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <button onClick={toRed} style={style}>
        press me
      </button>
      {color === "blue" && <h2>BOOOOOOO!</h2>}
      {color === "red" && <h2>hello</h2>}
    </div>
  );
}
export default App;

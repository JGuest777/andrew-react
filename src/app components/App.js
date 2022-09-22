import "../styles/app.css";
import { useState } from "react";
import Add from "./add";
import Display from "./display";
import Subtract from "./subtract";
import PersonCardOne from "./People/personCardOne.js";
import PersonCardTwo from "./People/personCardTwo.js";
import PersonCardThree from "./People/personCardThree.js";
import PersonCardFour from "./People/personCardFour.js";
import PersonCardFive from "./People/personCardFive.js";
// create an array of objects called data with 5 indexes of a person name age and hobbies(array of strings)
// render in a card (map to array) centered in middle of VP vertically and horizontally
// when you click on the card, display(onClick-->display state) above the card the object props
//each card is a seperate component ---> that displays the name of the person as the default state. Onclick --> change state to display person data using a switch

//-Array of objects called data
//-create 5 divs on the screen with default values from data array
//-style 5 divs
//create the card flip functionality using map and usestate
//

function App() {
  const data = [
    {
      name: "John",
      age: 24,
      hobbies: ["Basketball", "Chess", "Drawing"],
    },
    {
      name: "Mary",
      age: 25,
      hobbies: ["Soccer", "Wordle", "drinking"],
    },
    {
      name: "Jacob",
      age: 26,
      hobbies: ["Eating", "Sleeping", "Shitting"],
    },
    {
      name: "Madelyn",
      age: 27,
      hobbies: ["Cricket", "Pumpkin Spice", "Coding"],
    },
    {
      name: "Joshua",
      age: 28,
      hobbies: ["Spikeball", "Surfing", "Break Dancing"],
    },
  ];

  // const isDisplayed = false;

  const showData = () => {
    setName(
      <div>
        <h2>{data[0].name}</h2>
        <p>{data[0].age}</p>
        <p>{data[0].hobbies}</p>
      </div>
    );
  };

  const [name, setName] = useState("john");

  // can i define "display"? like const display = "data[0].name"

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <div>
      <div>
        <h1>Counter App</h1>
        <Add increment={increment} className="test" abc="123" />
        <Display count={count} />
        <Subtract decrement={decrement} />
      </div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button
              onClick={() => {
                removeNote(note.title);
              }}
            >
              x
            </button>
          </div>
        ))}
        <p>Add note</p>
        <form onSubmit={addNote}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <button>add note</button>
        </form>
      </div>
      <h2>People</h2>
      <PersonCardOne showData={showData} name={name} />
      <PersonCardTwo data={data} />
      <PersonCardThree data={data} />
      <PersonCardFour data={data} />
      <PersonCardFive data={data} />
    </div>
  );
}

export default App;

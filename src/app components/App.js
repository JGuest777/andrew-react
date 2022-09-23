import "../styles/app.css";
import { useState } from "react";
// import Add from "./add";
// import Display from "./display";
// import Subtract from "./subtract";
import PersonCard from "./People/personCardOne.js";
import data from "./People/data";
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
  //
  //
  //
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };
  //
  //
  //
  // const [notes, setNotes] = useState([]);
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  // const addNote = (e) => {
  //   e.preventDefault();
  //   setNotes([...notes, { title, body }]);
  //   setTitle("");
  //   setBody("");
  // };

  // const removeNote = (title) => {
  //   setNotes(notes.filter((note) => note.title !== title));
  // };
  //
  //
  //
  const [displayName, setDisplayName] = useState("");

  return (
    <div className="container">
      <h1>{displayName}</h1>
      <div className="card-container">
        {data.map((person, i) => (
          <PersonCard
            key={i}
            name={person.name}
            age={person.age}
            hobbies={person.hobbies}
            setDisplayName={setDisplayName}
          />
        ))}
        {/* <div>
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
        ))} */}
        {/* <p>Add note</p>
        <form onSubmit={addNote}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <button>add note</button>
        </form> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;

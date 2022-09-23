import "../styles/app.css";
import { useState } from "react";
// import Add from "./add";
// import Display from "./display";
// import Subtract from "./subtract";
import PersonCard from "./People/personCardOne.js";
import data from "./People/data";

// add more data --> add new property to each person that is a sex: male/female
// display sex property ---> if the person is male display backround color as blue, pink for female

function App() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //

  // const decrement = () => {
  //   setCount(count - 1);
  // };
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

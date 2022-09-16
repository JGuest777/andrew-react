import { useState } from "react";
import Add from "./add";
import Display from "./display";
import Subtract from "./subtract";
// homework: create 2 button components called 'add' and 'subtract'
// third component called 'display', add/subtract -> 'display' displays total
// useState, props
// push changes

function App() {
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
        <Add increment={increment} />
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
    </div>
  );
}

export default App;

import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from "nanoid";

const App = () => {

    const [notes, setNotes] = useState([]);
    
    const addNote = (text) => {
      const newNote = {
          id: nanoid(),
          text: text
      }

      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className="App">
            <NotesList
                notes={notes}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
            />
        </div>
    )
}
export default App;

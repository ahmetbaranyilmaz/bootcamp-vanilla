import NotesList from "./components/Notes/NotesList";
import {useState} from "react";
import {nanoid} from "nanoid";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoteDetail from "./components/Note/NoteDetail";


const App = () => {

    const [notes, setNotes] = useState([]);
    
    const addNote = (text) => {
      const newNote = {
          id: nanoid(),
          text: text
      }

      console.log(newNote);

      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <NotesList
                        notes={notes}
                        handleAddNote={addNote}
                        handleDeleteNote={deleteNote}
                    />
                </Route>
                <Route exact path='/posts/:id'>
                        <NoteDetail notes={ notes }/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

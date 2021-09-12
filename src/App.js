import NotesList from "./components/Notes/NotesList";
import {useState} from "react";
import {nanoid} from "nanoid";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoteDetail from "./components/Note/NoteDetail";
import {NoteContext} from "./components/Notes/NoteContext";

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
        <NoteContext.Provider value={{notes, addNote, deleteNote}}>
            <Router>
                <Switch>
                    <Route exact path="/">
                            <NotesList />
                    </Route>
                    <Route exact path='/posts/:id'>
                            <NoteDetail />
                    </Route>
                </Switch>
            </Router>
        </NoteContext.Provider>
    )
}

export default App;

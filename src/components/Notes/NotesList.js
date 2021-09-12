import Note from "./Note";
import AddNote from "./AddNote";
import {useContext} from "react";
import {NoteContext} from "./NoteContext";

const NotesList = () => {
    const {notes, addNote} = useContext(NoteContext);

    return <div className="notes-list">
        {notes.map((note) =>(
            <Note
                key={note.id}
                id={note.id}
                text={note.text}
            />
        ))}

        <AddNote handleAddNote={ addNote }/>
    </div>
}

export default NotesList;
import {Link} from "react-router-dom";
import {useContext} from "react";
import {NoteContext} from "./NoteContext";

const Note = ({id, text}) => {
    const {deleteNote} = useContext(NoteContext)

    return <div className="note">
        <span>{text}</span>
        <div className="delete">
            <button className="delete-button" onClick={() => deleteNote(id)}>Delete</button>
            <Link to={`/posts/${id}`}>Show</Link>
        </div>
    </div>;
};

export default Note;
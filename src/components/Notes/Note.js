import {Link} from "react-router-dom";

const Note = ({id, text, handleDeleteNote}) => {
    return <div className="note">
        <span>{text}</span>
        <div className="delete">
            <button className="delete-button" onClick={() => handleDeleteNote(id)}>Delete</button>
            <Link to={`/posts/${id}`}>Show</Link>
        </div>
    </div>;
};

export default Note;
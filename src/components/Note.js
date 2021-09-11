const Note = ({id, text, handleDeleteNote}) => {
    return <div className="note">
        <span>{text}</span>
        <div className="delete">
            <button className="delete-button" onClick={() => handleDeleteNote(id)}>Delete</button>
        </div>
    </div>;
};

export default Note;
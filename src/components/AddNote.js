import {useState} from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("");

    const handleChange = (event) => {
      setNoteText(event.target.value);
    };
    
    const handleSaveClick = () => {
      handleAddNote(noteText);
      setNoteText("");
    };

    return(
        <div className="test-area">
            <textarea
                rows="8"
                cols="10"
                placeholder="enter note"
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="save">
                <button className="save-button" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;
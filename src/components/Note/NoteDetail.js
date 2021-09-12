import {Link, useParams} from "react-router-dom";
import {useContext} from "react";
import {NoteContext} from "../Notes/NoteContext";

const NoteDetail = () => {
    const props = useContext(NoteContext);

    let {id} = useParams();
    const text = props.notes.filter((note) => note.id === id)[0].text
    return (
        <>
            <span>{text}</span>
            <Link to={`/`}><button>Back</button></Link>
        </>
    )
}


export default NoteDetail;
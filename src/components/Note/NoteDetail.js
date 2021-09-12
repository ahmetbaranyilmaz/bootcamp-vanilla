import {Link, useParams} from "react-router-dom";

const NoteDetail = ({ notes }) => {
    let {id} = useParams();
    const text = notes.filter((note) => note.id === id)
    console.log(text);
    console.log(text[0].text);
    return (
        <>
            <span>{text[0].text}</span>
            <Link to={`/`}>Back</Link>
        </>
    )
}


export default NoteDetail;
import {Link, useParams} from "react-router-dom";

const NoteDetail = ({ notes }) => {
    let {id} = useParams();
    const text = notes.filter((note) => note.id === id)[0].text
    return (
        <>
            <span>{text}</span>
            <Link to={`/`}><button>Back</button></Link>
        </>
    )
}


export default NoteDetail;